<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Domaine extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domaine', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nom')->nullable();
            $table->timestamps();
        });  
      }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('domaine', function (Blueprint $table) {
            //
            $table->dropIfExists('domaine');
        });   
     }
}
