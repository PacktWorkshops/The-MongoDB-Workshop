/*
 * Amit Phaltankar.
 * 19/11/2019
 *
 * Packt MongoDB For Begginers.
 * Chapter 2 - Documents and Datatypes
 */

/*
 * Activity code for Packt MongoDB For Begginers.
 * This code can be run directly against the MongoDB Shell in interactive mode, or
 * Can be run as a file like below:
 * mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Activity2.01.js
 */


/*
 *  Grab List of Collection names
 */
var collections = db.getCollectionNames()
print("List of Collections in sample_mflix database")


/*
 * Iterate through each name
 * Call all thre print methods
 *
 */
for(var i = 0 ; i<collections.length; i++){
	print("********")
	print ("Collection : " + collections[i])
	stats(collections[i])
	dataSize(collections[i])
	dataTypes(collections[i])
}

/*
 *  Prints Collection Stats
 */
function stats (collectionName){
	var stats = db.getCollection(collectionName).stats()
	print("Stats : ")
	for(var stasKey in stats){
		print("\t" + stasKey + " : " + stats[stasKey])
	}
}

/*
 *  Prints collection's data size
 */
function dataSize(collectionName){
	print("Data Size : " + db.getCollection(collectionName).dataSize())
}


/*
 *  Prints names of all the fields in the collection along with data types
 */
function dataTypes(collectionName){
	print("Fields : ")
	var document = db.getCollection(collectionName).findOne()
	for(var key in document){
		print ("\t" + key + " [" + typeof document[key] + "]")
	}
}


/*
	Sample Outout

	********
  	Collection : users
  	Stats :
  		ns : sample_mflix.users
		size : 29568
		count : 185
		avgObjSize : 159
		storageSize : 32768
		capped : false
		nindexes : 2
		totalIndexSize : 36864
		indexSizes : [object BSON]
		ok : 1
		operationTime : Timestamp(1574539175, 1)
		$clusterTime : [object BSON]
 	Data Size : 29568
	Fields :
		_id [object]
		name [string]
		email [string]
		password [string]
*/
