// Swap stages to improve efficiency:
var pipeline = [
    { $match: {
        genres: {$in: ["Romance"]}, // Romance movies only.
        released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
    { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
    { $limit: 3},                 // Limit to 3 results.
    { $project: { genres: 1, released: 1, "imdb.rating": 1}}
];

// Final pipeline will look like this.
var findTopRomanceMovies = function() {
    print("Finding top Classic Romance Movies...");
    var pipeline = [
        { $match: {
            genres: {$in: ["Romance"]}, // Romance movies only.
            released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
        { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
        { $limit: 3 },                 // Limit to 3 results.
        { $project: { title: 1, genres: 1, released: 1, "imdb.rating": 1}}
    ];
    db.movies.aggregate(pipeline).forEach(printjson);
}
findTopRomanceMovies();
