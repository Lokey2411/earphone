<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'productId',
        'cartId',
        'quantity',
        'price',
    ];
    public function product(){
        return $this->belongsTo(Product::class, 'productId');
    }
    public function cart(){
        return $this->belongsTo(Cart::class, 'cartId');
    }
    public function categories(){
        return $this->hasMany(OrderCategory::class, 'orderId');
    }
}