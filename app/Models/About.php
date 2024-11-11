<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;
    protected $fillable = [
        'parent',
        'title',
        'subtitle',
        'image',
        "details",
        "type"
    ];
    public function popups(){
        return $this->hasOne(PopUp::class,"aboutId");
    }
}