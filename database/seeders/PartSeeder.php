<?php

namespace Database\Seeders;

use App\Models\Part;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Faker::create();
        Part::create([
            "productId" => 1,
            "quantity" => $faker->randomFloat(1, 10),
            "name" => $faker->name
        ]);
    }
}