<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $connection = 'mysql';

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
