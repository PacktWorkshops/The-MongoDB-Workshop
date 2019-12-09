/*
* Amit Phaltankar
* 06/12/2019
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.03 Finding Movies by Genre and Paginate Results

/**
  * Your task for this exercise 
  * 1. Find Movies by Romance Genre
  * 2. where Leonardo DiCaprio is not acting
  * 3. and, consensus should have the word ‘beautiful’.
  * 4. Provide top 3 results by thier IMDb ratings. 
  * 
  */

db.movies.find(
		{
			"genres" : "Romance",
			"cast" : {"$ne" : "Leonardo DiCaprio"},
			"tomatoes.consensus" : {"$regex" : "beautiful", "$options": "i"}
		},
		{
			"title" : 1,
			"_id" : 0
		}
).sort({"imdb.rating" : -1}).limit(3)


/* 
 * Sample Output :
 *
 *  { "title" : "Roman Holiday" }
 *  { "title" : "Three Colors: Red" }
 *  { "title" : "Before Sunrise" }
 *
 */
