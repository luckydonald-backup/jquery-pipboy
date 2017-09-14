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

  pipBoy.attr('id', 'pipBoy');
  leftside.attr('id', 'leftside');
  pipScreen.attr('id', 'screen');

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

  buttonStats.attr('id', 'stats');
  buttonItems.attr('id', 'items');
  buttonData.attr('id', 'data');

  let scrHead = $('<div>');
  let scrContain = $('<div>');
  let scrFoot = $('<div>');
  scrFoot.addClass('screenBar');
  scrHead.addClass('screenHead');
  scrContain.addClass('screenCont');

  let weapon = [
    {
      name: 'shootgun',
      description: 'aaa'
    }, {
      name: 'pistol',
      description: 'bbb'
    }, {
      name: 'granate',
      description: 'ccc'
    }, {
      name: 'knife',
      description: 'ddd'
    }, {
      name: 'dynamite',
      description: 'eee'
    }, {
      name: 'bomb',
      description: 'fff'
    }, {
      name: 'rilfe',
      description: 'fff'
    }
  ];

  let armors = [
    {
      name: 'RNK armor',
      description: 'ggg'
    }, {
      name: 'Brotherhood of steel armor',
      description: 'hhh'
    }, {
      name: 'Legion heavy armor',
      description: 'iii'
    }, {
      name: 'cowboy hat',
      description: 'jjj'
    }, {
      name: 'helmet',
      description: 'kkk'
    }, {
      name: 'mask',
      description: 'lll'
    }, {
      name: 'suit',
      description: 'fff'
    }
  ];

  let aid = [
    {
      name: 'stimpack',
      description: 'mmm'
    }, {
      name: 'fresh water',
      description: 'nnn'
    }, {
      name: 'Anti-rad',
      description: 'ooo'
    }, {
      name: 'Med-X',
      description: 'ppp'
    }, {
      name: 'medical bag',
      description: 'rrr'
    }, {
      name: 'Nuka-Cola',
      description: 'sss'
    }, {
      name: 'corn',
      description: 'fff'
    }
  ];

  let misc = [
    {
      name: 'electronic scrap',
      description: 'ttt'
    }, {
      name: 'pre-war book',
      description: 'uuu'
    }, {
      name: 'canteen',
      description: 'www'
    }, {
      name: 'superglue',
      description: 'yyy'
    }, {
      name: 'screwdriver',
      description: 'zzz'
    }, {
      name: 'hammer',
      description: '123'
    }, {
      name: 'can',
      description: 'fff'
    }
  ];

  let ammo = [
    {
      name: '10mm',
      description: '10mm'
    }, {
      name: 'Magnum .44',
      description: '.44'
    }, {
      name: 'fusion cell',
      description: 'cell'
    }, {
      name: '5mm',
      description: '5mm'
    }, {
      name: '20 gauge',
      description: '20ga'
    }, {
      name: 'rocket',
      description: 'rocket'
    }, {
      name: '5,56mm',
      description: 'fff'
    }
  ];

  let special = [
    {
      name: 'strength',
      description: 'Strength is a measure of your raw physical power. It affects how much you can carry and the damage of all melee attacks',
      rank:'[8/10]'
    }, {
      name: 'Perception',
      description: 'Perception is your environmental awareness and sixth sense. Affects in weapon accuracy in V.A.T.S.',
      rank:'[8/10]'
    }, {
      name: 'Endurance',
      description: 'Stamina and physical toughness. Character with a high endurance will survive where others may not',
      rank:'[7/10]'
    }, {
      name: 'Charisma',
      description: 'Charisma is ypur ability to charm and convince others. It affects yor success to persuade in dialogue and price when you barter.',
      rank:'[4/10]'
    }, {
      name: 'Intelligence',
      description: 'Intelligence is a measure of your overall mental acuity. It affects the number of Experience Points earned.',
      rank:'[7/10]'
    }, {
      name: 'Agility',
      description: 'Agility is you measure of your overall finesse and reflexess. It affects the number of Action Points in V.A.T.S. and your ability to sneak.',
      rank:'[9/10]'
    },
    {
      name: 'Luck',
      description: 'Luck is a measure of you overall good fortune. It affects the recharge rate of Critical hits and your chance to find better items.',
      rank:'[5/10]'
    }
  ];

  let skills = [
    {
      name: 'barter',
      description: 'The barter skill affects the price you get for buying and selling items. In general the higher your barter skill, the lower your prices on purchased items',
      rank: '[75/100]'
    }, {
      name: 'energy weapons',
      description: 'The energy weapons skill determines your effectivenss with any weapon that uses Small Energy Cells, Micro Fusions Cells, EC Packs or Flamer Fuel as ammunition',
      rank:'[67/100]'
    }, {
      name: 'sneak',
      description: 'The higher you sneak skill, the easier it is to remain undetected, steal an item or pick someones pocket. Successfully attacking while undetected grants an automatic critical hit',
      rank:'[23/100]'
    }, {
      name: 'survival',
      description: 'The survival skills increases the Hit Points you receive from food and drink. It also helps you create consumable items at campfires',
      rank:'[81/100]'
    }, {
      name: 'explosives',
      description: 'The explosives skill determines the ease of disarming any hostile mines and the effectivenss of any explosive weapon(all mines, granades, missile launcher, Fat Man, etc.)',
      rank:'[55/100]'
    }, {
      name: 'melee weapons',
      description: 'The melee weapons skill determines your effectivenss with any melle weapon, from simple lead pipe all the way up to the high-tech Super Sledge',
      rank:'[38/100]'
    }, {
      name: 'repair',
      description: 'the reapir skill allows you to maintain any weapons and appearel. In addition repair allows you to create items and guns ammunition at reloading benches',
      rank:'[89/100]'
    }
  ];

  let perks = [
    {
      name: 'in shining armor',
      description: '10mm'
    }, {
      name: 'hunter',
      description: '.44'
    }, {
      name: 'retention',
      description: 'cell'
    }, {
      name: 'rapid reload',
      description: '5mm'
    }, {
      name: 'slayer',
      description: '20ga'
    }, {
      name: 'meltdown',
      description: 'rocket'
    }, {
      name: 'laser commander',
      description: 'fff'
    }
  ];

  let general = [
    {
      name: 'Brotherhood of the steel',
      description: '10mm'
    }, {
      name: 'NCR',
      description: '.44'
    }, {
      name: 'Legion',
      description: 'cell'
    }, {
      name: 'Freeside',
      description: '5mm'
    }, {
      name: 'Novac',
      description: '20ga'
    }, {
      name: 'Boomers',
      description: 'rocket'
    }, {
      name: 'Followers of the Apocalypse',
      description: 'fff'
    }
  ];
  pipScreen.append(scrHead);
  pipScreen.append(scrContain);
  pipScreen.append(scrFoot);

  let name = $('<span>');
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
  dataMap.addClass('img map');

  let weaponsList = $('<div>');
  weaponsList.addClass('weaponsList');

  let weaponsDesc = $('<div>');
  weaponsDesc.addClass('description');

  let meter = $('<div>');
  meter.addClass('meter');
  leftside.append(meter);
  let scale = $('<div>', {class: 'scale'});
  let scale1 = $('<div>', {class: 'scale1'});
  let scale2 = $('<div>', {class: 'scale2'});
  let scale3 = $('<div>', {class: 'scale3'});
  let mask = $('<div>', {class: 'scale-mask'});
  let needle = $('<div>', {class: 'needle'});
  let pointer = $('<div>', {class: 'pointer'});
  let pivot = $('<div>', {class: 'pivot'});
  let leftdiv = $('<div>', {class: 'leftdiv'});
  let pip = $('<div>');
  let version = $('<div>');
  let model = $('<div>');

  meter.append(scale);
  meter.append(mask);
  meter.append(needle);
  scale.append(scale1);
  scale.append(scale2);
  scale.append(scale3);
  needle.append(pointer);
  needle.append(pivot);

  leftside.append(leftdiv);
  leftdiv.append(pip);
  leftdiv.append(version);
  leftdiv.append(model);

  pip.text('Pipboy');
  version.text('Vault 3');
  model.text('Model 3000');

//STATS ////////////////////////////////////////////////////////////


  buttonStats.on('click', function(event) {

    if (name.text() !== 'Stats') {
      name.text('Stats ');
      spanOne.text(' Lvl 10 ');
      spanTwo.text(' HP 250/250 ');
      spanThree.text(' AP 65/65 ');
      spanFour.text(' XP 3000/4500 ');

      scrContain.append(weaponsList);
      scrContain.append(weaponsDesc);

      buttonOne.text(' -Status- ');
      buttonTwo.text(' -S.P.E.C.I.A.L- ');
      buttonThree.text(' -Skills- ');
      buttonFour.text(' -Perks- ');
      buttonFive.text(' -General- ');

      weaponsList.empty();
      weaponsDesc.empty();
      dataMap.remove();
    } else {
      event.preventDefaut;
    }
    buttonOne.on('click',function(){

      weaponsList.empty();
      weaponsDesc.empty();
      scrContain.append(vaultBoy);
    })
    buttonTwo.on('click', function() {

      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(special, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let rank = $('<p>');

        rank.addClass('rank');

        weaponsList.append(para);
        para.text(value.name);
        desc.text(value.description);
        rank.text(value.rank);

        para.on('mouseenter', function() {
          weaponsDesc.append(rank);
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonThree.on('click', function() {
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(skills, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let rank = $('<p>');
        rank.addClass('rank');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        rank.text(value.rank);

        para.on('mouseenter', function() {
          weaponsDesc.append(rank);
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonFour.on('click', function() {
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(perks, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonFive.on('click', function() {
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(general, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
  })

//ITEMS /////////////////////////////////////////////////////////////////

  buttonItems.on('click', function(event) {
    weaponsList.empty();
    weaponsDesc.empty();
    if (name.text() !== 'Items') {
      name.text('Items ');
      spanOne.text(' Lvl 10 ');
      spanTwo.text(' HP 250/250 ');
      spanThree.text(' AP 65/65 ');
      spanFour.text(' Caps 2045 ');

      scrContain.append(weaponsList);
      scrContain.append(weaponsDesc);

      buttonOne.text(' -Weapons- ');
      buttonTwo.text(' -Appearel- ');
      buttonThree.text(' -Aid- ');
      buttonFour.text(' -Misc- ');
      buttonFive.text(' -Ammo- ');
      vaultBoy.remove();
      dataMap.remove();
    } else {
      event.preventDefaut;
    }
    buttonOne.on('click', function() {
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(weapon, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonTwo.on('click', function() {
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(armors, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonThree.on('click', function() {
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(aid, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonFour.on('click', function() {
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(misc, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonFive.on('click', function() {
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(ammo, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        para.on('mouseenter', function() {
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
  })

//DATA


  buttonData.on('click', function(event) {
    if (name.text() !== 'Data') {
      name.text(' Data ');
      spanOne.text('');
      spanTwo.text(' Mojave ');
      spanThree.text('');
      spanFour.text(' 10.06.81 ');

      scrContain.append(dataMap);

      buttonOne.text(' -World Map- ');
      buttonTwo.text(' -Local Map- ');
      buttonThree.text(' -Quests- ');
      buttonFour.text(' -Misc- ');
      buttonFive.text(' -Radio- ');
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.remove();
    } else {
      event.preventDefaut;
    }
  })

});


/***/ })
/******/ ]);