<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'content',
        'departmentId',
        'schedule',
        'expiredTime',
        'template',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId');
    }

    public function template()
    {
        return $this->belongsTo(NoticeTemplate::class, 'template');
    }
}