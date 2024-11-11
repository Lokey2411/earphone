<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ["title", "type"];
    public function products(){
        return $this->hasMany(ProductCategory::class,"cateId");
    }
    public function orders(){
        return $this->hasMany(OrderCategory::class,"categoryId");
    }
}