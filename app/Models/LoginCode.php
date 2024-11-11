<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginCode extends Model
{
    use HasFactory;
    protected $fillable = [
        'departmentId',
        'userId',
        'login_time',
        'maintain_time',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}