<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Account extends Authenticatable
{
    use Notifiable;

    protected $connection = 'auth';

    protected $table = 'account';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'password', 'email',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'sha_pass_hash',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public static function boot()
    {
        parent::boot();

        static::creating( function ($model) {
            $model->attributes['joindate'] = $model->freshTimestamp();
        });
    }

    // Accounts table doesn't have remember_token column
    // according to the trinity documentation.

    public function getRememberTokenName()
    {
      return null;
    }

    protected function setPasswordAttribute($value)
    {
        $this->attributes['sha_pass_hash'] = sha1($this->attributes['username'].':'.$value);
    }

}
