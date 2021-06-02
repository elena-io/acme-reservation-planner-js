console.log('hello world');


const userList = document.querySelector('#users-list');
const restaurantsList = document.querySelector('#restaurants-list');
const reservationsList = document.querySelector('#reservations-list');



const renderUsers = (users) => {
    const html = users.map( user => `
        <li>
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

const init = async() => {
    try {
        const responseUsers = await fetch('/api/users');
        const users = await responseUsers.json();
        //console.log(users)
       
        const responseRest = await fetch('/api/restaurants');
        const restaurants = await responseRest.json();

        renderUsers(users);
        renderRestaurants(restaurants);
    }
    catch(ex) {
        console.log(ex)
    }
}
init();