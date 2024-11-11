<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for($i=0;$i<3;$i++){
            $faker = Faker::create();
            ProductCategory::create([
                "productId"=>1,
                "cateId"=>$faker->numberBetween(1, 3),
                "price"=>$faker->numberBetween(0, 100),
                "quantity"=>$faker->randomFloat(0, 1)."g",
            ]);
        }
    }
}