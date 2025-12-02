<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    //
    protected $fillable = ['id','title','description','job_type','salary','created_at'];
}
