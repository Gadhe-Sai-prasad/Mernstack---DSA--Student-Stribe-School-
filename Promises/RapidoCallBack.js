function findBikesNearby(locatin,callback) {
    console.log("Looking for bikes near" + "...."
    );
    setTimeout(function() {
        let bikes = ["Bike A","Bike c ", "Bikes D"];
        callback(bikes);
    },2000);
}
findBikesNearby ("Koramangala", function(bikes) {
    console.log("found bikes:",bikes);
    console.log("Show" + bikes.length + "bikes to user"
    )
}
);
console.log("app is searching");