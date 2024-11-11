<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ["name", "price", "image", "shortDesc", "departmentId", "remain", "type", "listname"];
    public function department()
    {
        return $this->belongsTo(Department::class, "departmentId");
    }
    public function sales()
    {
        return $this->hasMany(Sale::class, "productId");
    }
    public function descriptions()
    {
        return $this->hasMany(Description::class, "productId");
    }
    public function order()
    {
        return $this->hasOne(Order::class, "productId");
    }
    public function productCategories()
    {
        return $this->hasMany(ProductCategory::class, "productId");
    }
    public function categories()
    {
        return $this->hasManyThrough(Category::class, ProductCategory::class, "productId", "id", "id", "cateId");
    }
    public function parts()
    {
        return $this->hasMany(Part::class, "productId");
    }
    public function attachments()
    {
        return $this->hasMany(Attachment::class, "table_id", "id")->where("table_name", "products");
    }
    public function list()
    {
        return $this->belongsTo(ProductList::class, "listname");
    }
}
