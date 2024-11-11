<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    protected $fillable = ["name","address","openTime","closeTime","ownerId","parentDepartmentId",'image','type'];
    public function owner(){
        return $this->belongsTo(User::class,"ownerId");
    }
    public function parentDepartment(){
        return $this->belongsTo(Department::class,"parentDepartmentId");
    }
    public function childrenDepartments(){
        return $this->hasMany(Department::class,"parentDepartmentId");
    }
    public function jobs(){
        return $this->hasMany(Job::class,"departmentId");
    }
    public function sales(){
        return $this->hasMany(Sale::class,"departmentId");
    }
    public function employees(){
        return $this->hasMany(Employee::class,"departmentId");
    }
    public function loginCode(){
        return $this->hasMany(LoginCode::class,"departmentId");
    }
    public function notes()
    {
        return $this->hasMany(DepartmentNote::class,"departmentId");
    }
    public function paymentMethods(){
        return $this->hasMany(PaymentMethod::class,"departmentId");
    }
    public function notices(){
        return $this->hasMany(Notice::class,"departmentId");
    }
    public function socials(){
        return $this->hasMany(Social::class,"departmentId");
    }
    public function news(){
        return $this->hasMany(News::class,"departmentId");
    }
    public function services(){
        return $this->hasMany(Service::class,"departmentId");
    }
    public function popups(){
        return $this->hasMany(Popup::class,"departmentId");
    }
}