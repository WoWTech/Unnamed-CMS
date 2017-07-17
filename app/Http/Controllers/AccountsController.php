<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Account;

class AccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $accounts = Account::query();

        if(request()->keywords)
          $accounts->where('username', 'LIKE', '%'.request()->keywords.'%');

        $accounts = $accounts->select('id', 'username', 'email', 'joindate', 'last_ip', 'expansion')->paginate(10);

        request()->flashOnly(['keywords']);

        return view('admin.accounts.index', compact('accounts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Account $account)
    {
        return view('admin.accounts.create', compact($account));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $this->validate(request(), [
            'username' => 'required|string|max:16|unique:auth.account',
            'email' => 'required|string|email|max:32|unique:auth.account',
            'password' => 'required|string|min:6|confirmed',
        ]);

        Account::create(request()->all());

        return redirect()->route('admin.accounts.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        return view('admin.accounts.edit', compact('account'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Account $account)
    {
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

        return redirect()->route('admin.accounts.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        $account->delete();

        return redirect()->route('admin.accounts.index');
    }
}
