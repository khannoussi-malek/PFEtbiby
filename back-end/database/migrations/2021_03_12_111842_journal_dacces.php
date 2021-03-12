<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class JournalDacces extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journal_dacces', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('journal_dacces', function (Blueprint $table) {
            //
            $table->dropIfExists('journal_dacces');
        });     }
}
