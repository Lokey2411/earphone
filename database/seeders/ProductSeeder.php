<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for($i=0;$i<10;$i++){
            $faker = Faker::create();
            Product::create([
                "name"=>"Product $i",
                "shortDesc"=>$faker->text,
                "departmentId"=>0,
                "remain"=>$faker->numberBetween(0, 100),
                "price"=>$faker->numberBetween(0, 100),
            ]);
        }
    }
}