<?php

namespace Database\Seeders;

use App\Models\Exercise;
use App\Models\Question;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Generate default exercise
	    $exercice = Exercise::create([
	    	'article_id'=>3,
		    'body'=>'Exercices exemples'
	    ]);

	    Question::create([
	    	'exercise_id' => $exercice->id,
		    'body'=> 'Valeur numérique exacte (3)',
		    'answer'=> 3,
		    'checker'=>'number',
		    'checker_options'=>0
	    ])->exercise()->associate($exercice);

	    Question::create([
		    'exercise_id' => $exercice->id,
		    'body'=> 'Valeur numérique approx (3.14)',
		    'answer'=> 3.14,
		    'checker'=>'number',
		    'checker_options'=>0.02
	    ])->exercise()->associate($exercice);

	    Question::create([
		    'exercise_id' => $exercice->id,
		    'body'=> 'Valeur optionnelle',
		    'answer'=> '1',
		    'checker'=>'choices',
		    'checker_options'=>'$-\infty$;$0_-$;$0_+$;$+\infty$'
	    ])->exercise()->associate($exercice);

	    Question::create([
		    'exercise_id' => $exercice->id,
		    'body'=> 'Valeur polynome (x+3)(x-2)',
		    'answer'=> '(x+3)(x-2)',
		    'checker'=>'polynom',
		    'checker_options'=>'factor'
	    ])->exercise()->associate($exercice);

	    Question::create([
		    'exercise_id' => $exercice->id,
		    'body'=> 'Valeur optionnelle x^2+x-6',
		    'answer'=> 'x^2+x-6',
		    'checker'=>'polynom',
		    'checker_options'=>''
	    ])->exercise()->associate($exercice);


    }
}
