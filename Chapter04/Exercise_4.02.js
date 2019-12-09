/*
* Amit Phaltankar
* 06/12/2019
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.02 Finding Movies by Genre and Paginate Results

/**
  * Your task for this exercise 
  * 1. Find movies acted by Leonardo DiCaprio
  * 2. where director is Martin Scorsese
  * 3. and, genre is either Drama or Crimes 
  * 4. Provide title and release year
  * 
  */

db.movies.find(
    {
		"cast": "Leonardo DiCaprio", 
		"directors" : "Martin Scorsese",
		"$or" : [{"genres" : "Drama"}, {"genres": "Crime"}]
	},
	{
		"title" : 1, "year" : 1, "_id" : 0
	}
)



/* 
 * Sample Output :
 *
 * { "title" : "Gangs of New York", "year" : 2002 }
 * { "title" : "The Aviator", "year" : 2004 }
 * { "year" : 2006, "title" : "The Departed" }
 * { "year" : 2013, "title" : "The Wolf of Wall Street" }
 *
 */
