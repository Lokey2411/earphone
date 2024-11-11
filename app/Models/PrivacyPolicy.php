<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrivacyPolicy extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'parentPrivacy'
    ];

    public function parentPolicy(){
        return $this->belongsTo(PrivacyPolicy::class,"parentPrivacy");
    }
    public function childPolicy(){
        return $this->hasMany(PrivacyPolicy::class,"parentPrivacy");
    }
}