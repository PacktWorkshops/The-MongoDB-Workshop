/*
 * Amit Phaltankar.
 * 19/11/2019
 *
 * Packt MongoDB For Begginers.
 * Chapter 2 - Documents and Datatypes
 */

/*
 * Excercise code for Packt MongoDB For Begginers.
 * This code can be run directly against the MongoDB Shell in interactive mode, or
 * Can be run as a file like below:
 * mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Exercise2.02.js
 */


/*
 * Below is the Movie record with `imdb` and `tomatoes` ratings added.
 * Let's assign the document to a variable called `movie_with_ratings`
 *
 */
var movie_with_ratings = {
    "id": 14253,
    "title": "Beauty and the Beast",
    "year": 2016,
    "language": "English",
    "genre": "Romance",
    "director": "Christophe Gans",
    "runtime": 112,
    "imdb": {
        "rating": 6.4,
        "votes": 17762
    },
    "tomatoes": {
        "viewer": {
            "rating": 3.9,
            "votes": 238
        },
        "critic": {
            "rating": 4.2,
            "votes": 8
        },
        "fresh": 96,
        "rotten": 7
    }
};

/*
 * Let's print all the key and value pairs from both `imdb` and `tomatoes` ratings
 */

print("IMDB Ratings: ");
print("rating -> " + movie_with_ratings.imdb.rating);
print("votes -> " + movie_with_ratings.imdb.votes);
print()

print("Tomatoes Ratings: ");
print("viewer.rating -> " + movie_with_ratings.tomatoes.viewer.rating);
print("viewer.votes -> " + movie_with_ratings.tomatoes.viewer.votes);
print("critic.rating -> " + movie_with_ratings.tomatoes.critic.rating);
print("critic.votes -> " + movie_with_ratings.tomatoes.critic.votes);
print("fresh -> " + movie_with_ratings.tomatoes.fresh);
print("rotten -> " + movie_with_ratings.tomatoes.rotten);


/* 
(Sample output:)

IMDB Ratings:
rating -> 6.4
votes -> 17762

Tomatoes Ratings:
viewer.rating -> 3.9
viewer.votes -> 238
critic.rating -> 4.2
critic.votes -> 8
fresh -> 96
rotten -> 7
*/
