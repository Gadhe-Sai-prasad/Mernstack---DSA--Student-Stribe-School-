function showBikes() {
    console.log("Starting to show bikes...");

    //Step 1: Browser finds the bike list
    let bikeList = document.getElementById('bike-list');

    //step 2: Browser deletes everything inside
    bikeList.innerHTML = '';

    //step 3: Browser creates new bike1 
    let bike1 = document.createElement('p');
    bike1.textContent ='Bike 1:Storm-Battery 85%';
    bikeList.appendChild(bike1);

    //Step 4: Browser redraws the page
    //Step 5: Browser creates new bike2 
    let bike2 = document.createElement('p')


    //step 6 :browser redraws the page again
    // This happens for every bike
}

