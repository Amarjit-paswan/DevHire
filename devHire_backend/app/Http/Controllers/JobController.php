<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\PHP\Job;

class JobController extends Controller
{
    //fetch jobs
    public function fetchJobs(){

        Job::join()->
    }
}
