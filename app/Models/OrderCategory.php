<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'orderId',
        'categoryId',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderId');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'categoryId');
    }
}