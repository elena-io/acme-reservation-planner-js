const userList = document.querySelector('#users-list');
const restaurantsList = document.querySelector('#restaurants-list');
const reservationsList = document.querySelector('#reservations-list');

let users;
//Two things on click 
//1. Highlight the user
//2. Make a call for a specific user 
const renderUsers = (users) => {
    const userId = window.location.hash.slice(1);
    console.log(userId);
    
    const html = users.map( user => `
        <li class = '${user.id === userId ? 'selected' : ''}' >
            <a href="#${user.id}"> 
                ${ user.name }
            </a>
        </li>
    `
    ).join("")
    userList.innerHTML = html;
}

const renderRestaurants = (restaurants) => {
    const html = restaurants.map( restaurant => `
        <li>
            ${ restaurant.name }
        </li>
    `
    ).join("")
    restaurantsList.innerHTML = html;
}


const renderReservations = (reservations) => {
    const html = reservations.map( reservation => `
        <li>
            ${ reservation.restaurant.name }<br>
            ${ reservation.createdAt }
        </li>
    `
    ).join("")
    reservationsList.innerHTML = html;
}

const init = async() => {
    try {
        const responseUsers = await fetch('/api/users');
        //.json() - method
        users = await responseUsers.json();
        //console.log(users)
       
        const responseRest = await fetch('/api/restaurants');
        const restaurants = await responseRest.json();
        renderUsers(users);
        renderRestaurants(restaurants);
        const userId = window.location.hash.slice(1);
        const url = `/api/users/${userId}/reservations`;
        const response = await fetch(url);
        const reservations = await response.json();
        renderReservations(reservations);
    }
    catch(ex) {
        console.log(ex)
    }
}

//hashchange event is fired when the frangment identifier of the url has changed 
//the part of the url begining with #
window.addEventListener('hashchange', async()=> {
    // storing id 
    const userId = window.location.hash.slice(1);
    const url = `/api/users/${userId}/reservations`;
    const response = await fetch(url);
    const reservations = await response.json();
    
    renderReservations(reservations);
    renderUsers(users);

    //with axios
    //const 

    
})

init();