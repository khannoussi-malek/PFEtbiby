<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Patient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cms_users_id')->unsigned()->nullable();
            $table->foreign('cms_users_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('Adresse')->nullable();
            $table->integer('parent')->nullable();
            $table->string('Code_APCI')->nullable();
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
        Schema::table('patient', function (Blueprint $table) {
            //
            $table->dropIfExists('patient');
        });
    
    }
}
