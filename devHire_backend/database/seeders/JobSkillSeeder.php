<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Add skill with job
        DB::table('job_skills')->insert([
            ['skill_id' => 1,
             'job_id' => 1
            ],
            ['skill_id' => 3,
             'job_id' => 1
            ],
            ['skill_id' => 5,
             'job_id' => 1
            ],
            ['skill_id' => 7,
             'job_id' => 1
            ],
            ['skill_id' => 2,
             'job_id' => 2
            ],
            ['skill_id' => 4,
             'job_id' => 2
            ],
            ['skill_id' => 6,
             'job_id' => 2
            ],
            ['skill_id' => 1,
             'job_id' => 3
            ],
            ['skill_id' => 4,
             'job_id' => 3
            ],
            ['skill_id' => 5,
             'job_id' => 3
            ],
        ]);   
    }
}
