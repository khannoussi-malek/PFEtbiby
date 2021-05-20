<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class Medein extends Controller
{
    //
    public function activer(){
        $id = $_GET["medecin"];
        DB::table('cms_users')
        ->where('id', $id)
        ->update(['status' => 'Active']);
        return back();
    }
    
    public function desactiver(){
        $id = $_GET["medecin"];
         DB::table('cms_users')
        ->where('id', $id)
        ->update(['status' => 'non Active']);
        return back();
    }
}
