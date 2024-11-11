<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    use HasFactory;
    protected $fillable = ["userId","roleId"];
    public function users(){
        return $this->belongsTo(User::class,"userId");
    }
    public function roles(){
        return $this->belongsTo(Role::class,"roleId");
    }
}