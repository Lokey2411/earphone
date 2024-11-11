<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apply extends Model
{
    use HasFactory;
    protected $fillable = [
        'jobId',
        'userId',
        'applyDate',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class, 'jobId');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }
}