/*
 * Amit Phaltankar.
 * 19/11/2019
 *
 * Packt MongoDB For Begginers.
 * Chapter 2 - Documents and Datatypes
 */

/*
 * Excercise code for Packt MongoDB For Begginers.
 */


/*
 * Below is the Movie record created into the JSON document format
 * Let's assign it to a variable called as `movie`
 *
 */
var movie = {
  "id" : 14253,
  "title" : "Beauty and the Beast",
  "year" : 2016,
  "language" : "English",
  "imdb_rating" : 6.4,
  "genre" : "Romance",
  "director" : "Christophe Gans",
  "runtime" : 112
}
;

/*
 * We will iterate through all the fields in the movie and print the key and value pairs
 */

print("Let's print all the key and value pairs in \"key -> value\" format");
for (var key in movie) {
    print(key + " -> " + movie[key]);
}

/* 
(Sample output:)

Let's print all the key and value pairs in "key -> value" format
id -> 14253
title -> Beauty and the Beast
year -> 2016
language -> English
imdb_rating -> 6.4
genre -> Romance
director -> Christophe Gans
runtime -> 112
*/
