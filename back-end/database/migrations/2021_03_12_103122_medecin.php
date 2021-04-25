<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Medecin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medecin', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('cms_users_id')->unsigned()->nullable();
            $table->foreign('cms_users_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('adresse_physique')->nullable();
            $table->string('temps_de_seance')->nullable();
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
        Schema::table('medecin', function (Blueprint $table) {
            //
            $table->dropIfExists('medecin');
        });
    }
}
