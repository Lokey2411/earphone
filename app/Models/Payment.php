<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = ["paymentMethod", "price"];
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, "paymentMethod", "title");
    }
    public function cart(){
        return $this->belongsTo(Cart::class,"cartId","id");
    }
}