<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    public $connection = 'mysql';

    public $fillable = ['path'];
}
