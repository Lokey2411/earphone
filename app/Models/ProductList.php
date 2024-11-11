<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductList extends Model
{
    use HasFactory;
    protected $primaryKey = 'name';
    public $incrementing = false;
    protected $fillable = [
        'name',
        'description',
        'subdescription',
        'image',
        'parent'
    ];
    public function parent()
    {
        return $this->belongsTo(ProductList::class, 'name', 'parent');
    }
    public function childrens()
    {
        return $this->hasMany(ProductList::class, 'parent', "name");
    }
    public function products()
    {
        return $this->hasMany(Product::class, 'listname');
    }
}
