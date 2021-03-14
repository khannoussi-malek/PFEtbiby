<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExamenTypeImage extends Migration
{
    public function up()
    {
        Schema::create('examen_type_image', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('examen_id')->unsigned()->nullable();
            $table->foreign('examen_id')->references('id')->on('examen')->onDelete('cascade')->onUpdate('cascade');
            $table->string('image')->nullable();
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
        Schema::table('examen_type_image', function (Blueprint $table) {
            //
            $table->dropIfExists('examen_type_image');
        });
    }
}
