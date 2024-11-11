<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'productId',
        'departmentId',
        'userId',
        'discount',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product', 'productId');
    }

    public function department()
    {
        return $this->belongsTo('App\Models\Department', 'departmentId');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'userId');
    }
}