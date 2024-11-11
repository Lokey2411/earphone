<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_date',
        'canceled_date',
        'customerId',
        'paymentId',
    ];
    
    public function customer()
    {
        return $this->belongsTo(User::class, 'customerId');
    }
    
    public function payment()
    {
        return $this->hasOne(Payment::class, 'paymentId');
    }
    public function orders(){
        return $this->hasMany(Order::class, 'cartId');
    }
    public function shipment(){
        return $this->hasOne(Shipment::class, 'cartId');
    }
}