<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'content', 'account_id', 'post_id'];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function account()
    {
        $this->belongsTo(Account::class);
    }

    function setContentAttribute($value)
    {
        $this->attributes['content'] = trim($value);
    }

}
