<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;
    protected $fillable = [
        "parentTopicId",
        "title",
        "link",
        "type"
    ];
    
    public function parentTopic()
    {
        return $this->belongsTo(Topic::class,"parentTopicId");
    }

    public function subTopics(){
        return $this->hasMany(Topic::class,"parentTopicId");
    }
}