<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(CityTableSeeder::class);
        $this->call(BrancheTableSeeder::class);
        $this->call(User_Type_TableDataSeeder::class);
         $this->call(CreateAdminUserSeeder::class);
            

    }
}
