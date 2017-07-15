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
        return $this->belongsTo(Account::class);
    }

    public function setContentAttribute($value)
    {
        $this->attributes['content'] = trim($value);
    }

    public function shortDescription($length = 100)
    {
        $html_string = trim($this->content);
        $append = (strlen(strip_tags($html_string)) > $length) ? '&hellip;' : '';
        $i = 0;
        $tags = [];

        preg_match_all('/<[^>]+>([^<]*)/', $html_string, $tag_matches, PREG_OFFSET_CAPTURE | PREG_SET_ORDER);

        foreach($tag_matches as $tag_match) {
          if ($tag_match[0][1] - $i >= $length) {
            break;
          }

          $tag = substr(strtok($tag_match[0][0], " \t\n\r\0\x0B>"), 1);
          if ($tag[0] != '/') {
            $tags[] = $tag;
          } elseif (end($tags) == substr($tag, 1)) {
            array_pop($tags);
          }

          $i += $tag_match[1][1] - $tag_match[0][1];
        }

        return substr($html_string, 0, $length = min(strlen($html_string), $length + $i)) . (count($tags = array_reverse($tags)) ? '</' . implode('></', $tags) . '>' : '') . $append;
    }

}
