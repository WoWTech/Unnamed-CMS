<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\{Account, Role};
use Laratrust;
use Image;

class AccountsController extends Controller
{

    public function index()
    {
        $accounts = Account::query();

        if(request()->keywords)
          $accounts->where('username', 'LIKE', '%'.request()->keywords.'%');

        $accounts = $accounts->select('id', 'username', 'email', 'joindate', 'last_ip', 'expansion')->paginate(10);

        request()->flashOnly(['keywords']);

        return view('admin.accounts.index', compact('accounts'));
    }

    public function create(Account $account)
    {
        if (!Laratrust::can('create-user'))
            return abort(403);

        return view('admin.accounts.create', compact($account));
    }

    public function store()
    {
        if (!Laratrust::can('create-user'))
            return abort(403);

        $this->validate(request(), [
            'username' => 'required|string|max:16|unique:auth.account',
            'email' => 'required|string|email|max:32|unique:auth.account',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $account = Account::create(request()->all());

        $account->attachRole('user');

        return redirect()->route('admin.accounts.index');
    }

    public function edit(Account $account)
    {
        if ($this->isAdminRequest())
            return $this->adminEdit($account);

        if (!Laratrust::can('update-own-account') && $account->id != auth()->id())
            return abort(403);

        return view('accounts.edit', compact('account'));
    }

    public function adminEdit(Account $account)
    {
        if (!Laratrust::can('update-user'))
            return abort(403);

        $roles = Role::get(['id', 'name', 'display_name']);

        return view('admin.accounts.edit', compact('account', 'roles'));
    }

    public function update(Account $account)
    {
        if ($this->isAdminRequest())
            return updateAdmin($account);

        if (!Laratrust::can('update-own-account') && $account->id != auth()->id())
            return abort(403);

        $this->validate(request(), [
              'email'         => 'sometimes|nullable|email',
              'avatar'        => 'sometimes|nullable|image|max:2048|dimensions:ratio=1/1',
              'password'      => 'sometimes|nullable|between:6,16',
              'old_password'  => 'required|max:32',
        ]);

        if (!$account->validatePassword(request('old_password')))
        {
            request()->session()->flash('error', 'Old password is incorrect!');
            return view('accounts.edit', compact('account'));
        }

        if (request('avatar'))
            $this->saveAvatar(request('avatar'), $account);

        $account->update(array_filter(request(['email', 'password'])));

        return redirect()->route('account.edit', $account->id);
    }

    public function updateAdmin(Account $account)
    {
        if (!Laratrust::can('update-user'))
            return abort(403);

        $this->validate(request(), [
            'username'  => 'alpha_num|between:3,16',
            'email'     => 'email',
            'password'  => 'sometimes|nullable|between:6,16',
            'expansion' => 'between:0,6',
        ]);

        $account->fill(request(['username', 'email', 'expansion']));

        if (request()->password)
            $account->password = request()->password;

        $account->save();

        if (request()->roles)
            $account->syncRoles(request()->roles);

        return redirect()->route('admin.accounts.index');
    }

    public function destroy(Account $account)
    {
        if (!Laratrust::can('delete-user'))
            return abort(403);

        $account->delete();

        return redirect()->route('admin.accounts.index');
    }

    public function saveAvatar($img, $account)
    {
        if (getimagesize($img)[0] > 75)
        {
            $filename = time() . '.' . $img->getClientOriginalExtension();
            $folder = public_path("uploads\\user\\$account->id\\avatar\\");
            $path = "user/$account->id/avatar/" . $filename;
            $fullPath = $folder . $filename;

            if (! \File::isDirectory($folder))
            {
                \File::makeDirectory($folder, 493, true);
            }

            Image::make($img->getRealPath())->resize(75,75)->save($fullPath);
        }
        else
        {
            $path = $img->store("user/$account->id/avatar", 'uploads');
        }

        if ($account->avatar)
        {
            Storage::disk('uploads')->delete($account->avatar->path);
            $account->avatar->delete();
        }

        $account->avatar()->create(['path' => $path]);
    }

}
