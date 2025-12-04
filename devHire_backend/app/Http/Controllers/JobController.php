<?php

namespace App\Http\Controllers;

use App\Models\job as ModelsJob;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\PHP\Job;

class JobController extends Controller
{   
    //Fetch jobs
    public function fetchJobs(){
       $jobs =  ModelsJob::join('job_skills', 'job_skills.job_id', '=', 'jobs.id')->join('skills', 'skills.id', '=','job_skills.skill_id')->select('jobs.*','skills.name')->get();


    //    Proccessed everything is fine
       return response()->json([
        'status' => true,
        'skills' => Skill::all(),
        'jobs' => $jobs
       ],200);
    }
}
