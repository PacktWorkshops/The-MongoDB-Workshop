use local  
var opl = db.oplog.rs.stats().maxSize/1024/1024
print("Oplog size: " + ~~opl + " MB")
