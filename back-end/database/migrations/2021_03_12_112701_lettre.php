<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Lettre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lettre', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('medecin_destiantaire_id')->unsigned()->nullable();
            $table->foreign('medecin_destiantaire_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_distinateur_id')->unsigned()->nullable();
            $table->foreign('medecin_distinateur_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('description')->nullable();
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
        Schema::table('lettre', function (Blueprint $table) {
            //
            $table->dropIfExists('lettre');
        });   
     }
}
