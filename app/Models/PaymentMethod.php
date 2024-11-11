<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;
    protected $fillable = ["title", "departmentId", "introduction", "detail"];
    public function department(){
        return $this->belongsTo(Department::class,"departmentId");
    }
    public function payments(){
        return $this->hasMany(Payment::class,"paymentMethod");
    }
}