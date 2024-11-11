<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;
use Faker\Factory as Faker;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Faker::create();
        Service::create(["title" => $faker->sentence(10), 
    "details"=>$faker->text,
    "departmentId"=>0,
    "type"=>"service",
    ]);
    }
}