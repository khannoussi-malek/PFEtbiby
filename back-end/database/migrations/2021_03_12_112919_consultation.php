<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Consultation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('prix')->nullable();
            $table->string('prix_totale')->nullable();
            $table->string('Diagnostic')->nullable();
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
        Schema::table('consultation', function (Blueprint $table) {
            //
            $table->dropIfExists('consultation');
        });
    }
}
