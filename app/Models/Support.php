<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    use HasFactory;
    protected $fillable = ['departmentId',"userId","title","description","attachment","type","phone_number"];
    public function department(){
        return $this->belongsTo(Department::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}