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
            $table->increments('id');
            $table->string('adresse_physique')->nullable();
            $table->string('spécialité')->nullable();
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
