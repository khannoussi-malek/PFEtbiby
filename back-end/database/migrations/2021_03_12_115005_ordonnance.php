<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ordonnance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordonnance', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('consultation_id')->unsigned()->nullable();
            $table->foreign('consultation_id')->references('id')->on('consultation')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::table('ordonnance', function (Blueprint $table) {
            //
            $table->dropIfExists('ordonnance');
        });
    }
}
