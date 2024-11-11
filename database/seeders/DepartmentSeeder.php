<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Faker::create();
        $unknowDepartment = [
            "ownerId"=>1,
            'name' => 'Không xác định',
            "address"=>"Không xác định",
            "openTime"=>$faker->dateTime(),
            "closeTime"=>$faker->dateTime(),
            "parentDepartmentId"=>1
        ];
        Department::insert($unknowDepartment);
    }
}