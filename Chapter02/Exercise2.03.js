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
 * mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Exercise2.03.js
 */


/*
 * Below is the Movie record with `comments`
 * Let's assign the document to a variable called `movie_comments`
 *
 */
var movie_with_comments = {
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
    },
    "comments": [{
            "name": "Talisa Maegyr",
            "email": "oona_chaplin@gameofthron.es",
            "text": "Rem itaque ad sit rem voluptatibus. Ad fugiat...",
            "date": "1998-08-22T11:45:03.000+00:00"
        },
        {
            "name": "Melisandre",
            "email": "carice_van_houten@gameofthron.es",
            "text": "Perspiciatis non debitis magnam. Voluptate...",
            "date": "1974-06-22T07:31:47.000+00:00"
        }
    ]
};

/*
 * Let's print all the key and value pairs from the comments
 */
var comments = movie_with_comments.comments;
print("Total Coments: " + comments.length);

for (var idx = 0; idx < comments.length; idx++) {
    print("Comment #" + (idx + 1));
    print("name -> " + comments[idx].name);
    print("email -> " + comments[idx].email);
    print("text -> " + comments[idx].text);
    print("date -> " + comments[idx].date);
    print();
}


/* 
(Sample output:)

Total Coments: 2
Comment #1
name -> Talisa Maegyr
email -> oona_chaplin@gameofthron.es
text -> Rem itaque ad sit rem voluptatibus. Ad fugiat...
date -> 1998-08-22T11:45:03.000+00:00

Comment #2
name -> Melisandre
email -> carice_van_houten@gameofthron.es
text -> Perspiciatis non debitis magnam. Voluptate...
date -> 1974-06-22T07:31:47.000+00:00
*/
