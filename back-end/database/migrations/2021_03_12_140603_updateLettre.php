<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateLettre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lettre', function (Blueprint $table) {
            $table->integer('consultation_id')->unsigned()->nullable();
            $table->foreign('consultation_id')->references('id')->on('consultation')->onDelete('cascade')->onUpdate('cascade');
        });
      
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lettre', function (Blueprint $table) {
            //
            $table->dropColumn('consultation_id');
        }); 
    }
}
