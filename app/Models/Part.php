<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    use HasFactory;
    protected $fillable = ['productId', 'quantity', 'name', "type"];
    public function product()
    {
        return $this->belongsTo(Product::class, 'productId', 'id');
    }

}