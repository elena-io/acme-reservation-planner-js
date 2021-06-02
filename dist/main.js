/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const userList = document.querySelector('#users-list');\nconst restaurantsList = document.querySelector('#restaurants-list');\nconst reservationsList = document.querySelector('#reservations-list');\n\nlet users;\n//Two things on click \n//1. Highlight the user\n//2. Make a call for a specific user \nconst renderUsers = (users) => {\n    const userId = window.location.hash.slice(1);\n    console.log(userId);\n    \n    const html = users.map( user => `\n        <li class = '${user.id === userId ? 'selected' : ''}' >\n            <a href=\"#${user.id}\"> \n                ${ user.name }\n            </a>\n        </li>\n    `\n    ).join(\"\")\n    userList.innerHTML = html;\n}\n\nconst renderRestaurants = (restaurants) => {\n    const html = restaurants.map( restaurant => `\n        <li>\n            ${ restaurant.name }\n        </li>\n    `\n    ).join(\"\")\n    restaurantsList.innerHTML = html;\n}\n\n\nconst renderReservations = (reservations) => {\n    const html = reservations.map( reservation => `\n        <li>\n            ${ reservation.restaurant.name }<br>\n            ${ reservation.createdAt }\n        </li>\n    `\n    ).join(\"\")\n    reservationsList.innerHTML = html;\n}\n\nconst init = async() => {\n    try {\n        const responseUsers = await fetch('/api/users');\n        //.json() - method\n        users = await responseUsers.json();\n        //console.log(users)\n       \n        const responseRest = await fetch('/api/restaurants');\n        const restaurants = await responseRest.json();\n        renderUsers(users);\n        renderRestaurants(restaurants);\n        const userId = window.location.hash.slice(1);\n        const url = `/api/users/${userId}/reservations`;\n        const response = await fetch(url);\n        const reservations = await response.json();\n        renderReservations(reservations);\n    }\n    catch(ex) {\n        console.log(ex)\n    }\n}\n\n//hashchange event is fired when the frangment identifier of the url has changed \n//the part of the url begining with #\nwindow.addEventListener('hashchange', async()=> {\n    // storing id \n    const userId = window.location.hash.slice(1);\n    const url = `/api/users/${userId}/reservations`;\n    const response = await fetch(url);\n    const reservations = await response.json();\n    \n    renderReservations(reservations);\n    renderUsers(users);\n\n    //with axios\n    //const \n\n    \n})\n\ninit();\n\n//# sourceURL=webpack://acme-reservation-planner-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;