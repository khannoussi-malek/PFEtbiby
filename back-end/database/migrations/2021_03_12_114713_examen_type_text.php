<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExamenTypeText extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examen_type_text', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('examen_id')->unsigned()->nullable();
            $table->foreign('examen_id')->references('id')->on('examen')->onDelete('cascade')->onUpdate('cascade');
            $table->string('valeur')->nullable();
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
        Schema::table('examen_type_text', function (Blueprint $table) {
            //
            $table->dropIfExists('examen_type_text');
        });
    }
}
