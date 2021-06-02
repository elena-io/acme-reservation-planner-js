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

eval("console.log('hello world');\n\n\nconst userList = document.querySelector('#users-list');\nconst restaurantsList = document.querySelector('#restaurants-list');\nconst reservationsList = document.querySelector('#reservations-list');\n\n\n\nconst renderUsers = (users) => {\n    const html = users.map( user => `\n        <li>\n            <a href=\"#${user.id}\"> \n                ${ user.name }\n            </a>\n\n        </li>\n    `\n    ).join(\"\")\n    userList.innerHTML = html;\n}\n\nconst renderRestaurants = (restaurants) => {\n    const html = restaurants.map( restaurant => `\n        <li>\n                ${ restaurant.name }\n\n        </li>\n    `\n    ).join(\"\")\n    restaurantsList.innerHTML = html;\n}\n\nconst init = async() => {\n    try {\n        const responseUsers = await fetch('/api/users');\n        const users = await responseUsers.json();\n        //console.log(users)\n       \n        const responseRest = await fetch('/api/restaurants');\n        const restaurants = await responseRest.json();\n\n        renderUsers(users);\n        renderRestaurants(restaurants);\n    }\n    catch(ex) {\n        console.log(ex)\n    }\n}\ninit();\n\n//# sourceURL=webpack://acme-reservation-planner-js/./src/index.js?");

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