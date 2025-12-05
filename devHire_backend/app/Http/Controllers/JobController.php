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
       $jobs = ModelsJob::with('jobWithSkill')->get();


    //    Proccessed everything is fine
       return response()->json([
        'status' => true,
        'skills' => Skill::all(),
        'jobs' => $jobs
       ],200);
    }

    //Fetch selected job
    public function fetchSelectedJob(Request $request){

      $id = $request->id;

      //Return if job id is not exists
      if(!ModelsJob::where('id',$id)->exists()){
         return response()->json([
            'status' => false,
            'message' => 'Job id is invalid'
         ],404);
      }

      //fetch only selected job
      $job = ModelsJob::with('jobWithSkill')->find($id);

      // return if everything correct 
      return response()->json([
         'status' => true,
         'job' => $job
      ],200);
      
    }
}
