<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Copyright extends Model
{
    use HasFactory;
    protected $fillable = ["title", "description", "detailLink", "detailFile","parent","detailText"];
    public function parent(){
        return $this->belongsTo(Copyright::class,'parent',"title");
    }
    public function subCopyrights(){
        return $this->hasMany(Copyright::class,'parent',"title");
    }
}