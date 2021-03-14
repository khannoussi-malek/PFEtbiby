<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateMedicament extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('medicament', function (Blueprint $table) {
            $table->integer('list_medicament_id')->unsigned()->nullable();
            $table->foreign('list_medicament_id')->references('id')->on('liste_medicament')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('medicament', function (Blueprint $table) {
            //
            $table->dropColumn('list_medicament_id');
        });
    }
}
