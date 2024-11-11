<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'answer',
        'type',
        'parentQuestionId'
    ];

    public function parentQuestion() {
        return $this->belongsTo(Question::class, 'parentQuestionId');
    }
    public function childrens() {
        return $this->hasMany(Question::class, 'parentQuestionId');
    }
}