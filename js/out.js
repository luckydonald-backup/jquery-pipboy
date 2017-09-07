/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function() {

let body = $('body');
let leftside = $('<div>');
let pipBoy = $('<div>');
let pipScreen = $('<div>');
let pipButton = $('<div>');

body.append(leftside);
body.append(pipBoy);

pipBoy.attr('id','pipBoy');
leftside.attr('id','leftside');
pipScreen.attr('id','screen');

pipButton.addClass('flexdiv')

pipBoy.append(pipScreen);
pipBoy.append(pipButton);

let buttonStats = $('<button>Stats</button>');
let buttonItems = $('<button>Items</button>');
let buttonData = $('<button>Data</button>');
pipButton.append(buttonStats);
pipButton.append(buttonItems);
pipButton.append(buttonData);

buttonStats.addClass('threebuttons');
buttonItems.addClass('threebuttons');
buttonData.addClass('threebuttons');

buttonStats.attr('id','stats');
buttonItems.attr('id','items');
buttonData.attr('id','data');

let scrHead = $('<div>');
let scrContain = $('<div>');
let scrFoot = $('<div>');
scrFoot.addClass('screenBar');
scrHead.addClass('screenBar');
scrContain.addClass('screenCont');


pipScreen.append(scrHead);
pipScreen.append(scrContain);
pipScreen.append(scrFoot);

let name = $('<span>');
name.addClass('bold');
let spanOne = $('<span>');
let spanTwo = $('<span>');
let spanThree = $('<span>');
let spanFour = $('<span>');

scrHead.append(name);
scrHead.append(spanOne);
scrHead.append(spanTwo);
scrHead.append(spanThree);
scrHead.append(spanFour);

let buttonOne = $('<button>');
let buttonTwo = $('<button>');
let buttonThree = $('<button>');
let buttonFour = $('<button>');
let buttonFive = $('<button>');

scrFoot.append(buttonOne);
scrFoot.append(buttonTwo);
scrFoot.append(buttonThree);
scrFoot.append(buttonFour);
scrFoot.append(buttonFive);

let vaultBoy = $('<div>');
vaultBoy.addClass('img boy');

let dataMap = $('<div>');
dataMap.addClass('img map')

buttonStats.on('click',function(event){

  if(name.text()!=='Stats'){
    name.text('Stats ');
    spanOne.text(' Lvl 10 ');
    spanTwo.text(' HP 250/250 ');
    spanThree.text(' AP 65/65 ');
    spanFour.text(' XP 3000/4500 ');

    scrContain.append(vaultBoy);

    buttonOne.text(' -Status- ');
    buttonTwo.text(' -S.P.E.C.I.A.L- ');
    buttonThree.text(' -Skills- ');
    buttonFour.text(' -Perks- ');
    buttonFive.text(' -General- ');

    dataMap.remove();
  }
  else{
    event.preventDefaut;

  }

})

buttonItems.on('click',function(event){

  if(name.text()!=='Items'){
    name.text('Items ');
    spanOne.text(' Lvl 10 ');
    spanTwo.text(' HP 250/250 ');
    spanThree.text(' AP 65/65 ');
    spanFour.text(' Caps 2045 ');

    buttonOne.text(' -Weapons- ');
    buttonTwo.text(' -Appearel- ');
    buttonThree.text(' -Aid- ');
    buttonFour.text(' -Misc- ');
    buttonFive.text(' -Ammo- ');
    vaultBoy.remove();
    dataMap.remove();
  }
  else{
    event.preventDefaut;
  }
})

buttonData.on('click',function(event){
  if(name.text()!=='Data'){
    name.text(' Data ');
    spanOne.text('');
    spanTwo.text(' Mojave ');
    spanThree.text('');
    spanFour.text(' 10.06.1981 ');

    scrContain.append(dataMap);

    buttonOne.text(' -Local Map- ');
    buttonTwo.text(' -World Map- ');
    buttonThree.text(' -Quests- ');
    buttonFour.text(' -Misc- ');
    buttonFive.text(' -Radio- ');
    vaultBoy.remove();
  }
  else{
    event.preventDefaut;
  }
})




});


/***/ })
/******/ ]);