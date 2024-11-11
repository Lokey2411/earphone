<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PopUp extends Model
{
    use HasFactory;
    protected $fillable = ['title', "details", "departmentId", "image", "video", "parentPopUpId","page","aboutId"];
    public function department(){
        return $this->belongsTo(Department::class, "departmentId");
    }
    public function parentPopUp(){
        return $this->belongsTo(PopUp::class, "parentPopUpId");
    }
    public function childrenPopUps(){
        return $this->hasMany(PopUp::class, "parentPopUpId");
    }
    public function about(){
        return $this->belongsTo(About::class, "aboutId");
    }
}