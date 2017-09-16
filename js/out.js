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
      name: '9mm Pistol',
      description: 'DMG:16 | Weight:1.5 | Value: 100',
      source:'https://vignette.wikia.nocookie.net/fallout/images/3/36/9mm_pistol_icon.png/revision/latest?cb=20110430005155'
    }, {
      name: 'Cowboy repeater',
      description: 'DMG:32 | Weight:5 | Value: 800',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/1c/Cowboy_repeater_icon.png/revision/latest?cb=20110501175400'
    }, {
      name: 'Sniper rifle',
      description: 'DMG:76 | Weight:8 | Value: 4100',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/19/Sniper_rifle_icon.png/revision/latest?cb=20110502173635'
    }, {
      name: 'Hunting shotgun',
      description: 'DMG:81 | Weight:7.5 | Value: 800',
      source:'https://vignette.wikia.nocookie.net/fallout/images/3/3a/Hunting_shotgun_icon.png/revision/latest?cb=20110501184019'
    }, {
      name: 'YCS/186',
      description: 'DMG:140 | Weight:8 | Value: 3000',
      source:'https://vignette.wikia.nocookie.net/fallout/images/6/6f/Gauss_rifle_icon.png/revision/latest?cb=20110501181913'
    }, {
      name: 'Frag grenade',
      description: 'DMG:120 | Weight:0.5 | Value: 150',
      source:'https://vignette.wikia.nocookie.net/fallout/images/b/bd/Frag_grenade_icon.png/revision/latest?cb=20110501181506'
    }, {
      name: 'Sledgehammer',
      description: 'DMG:33 | Weight:12 | Value: 130',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/5e/Sledgehammer_icon.png/revision/latest?cb=20110501222537'
    }
  ];

  let armors = [
    {
      name: 'Legion prime armor',
      description: 'DT:8 | Weight:15 | Value: 220',
      source:'https://vignette.wikia.nocookie.net/fallout/images/f/f5/Icon_Legion_prime_armor.png/revision/latest?cb=20110430181644'
    }, {
      name: 'Space suit',
      description: 'DT:10 | Weight:7 | Value: 800 | Effects: +40 Radiation Resistance',
      source:'https://vignette.wikia.nocookie.net/fallout/images/3/34/Icon_space_suit.png/revision/latest?cb=20110601222003'
    }, {
      name: 'T-51b power armor',
      description: 'DT:25 | Weight:40 | Value: 5200 | Effects: +1 STR | +25 Radiation Resistance',
      source:'https://vignette.wikia.nocookie.net/fallout/images/e/ec/Icon_power_armor.png/revision/latest?cb=20110607203356'
    }, {
      name: '1st Recon beret',
      description: 'DT:0 | Weight:1 | Value: 40 | Effects: +1 PER',
      source:'https://vignette.wikia.nocookie.net/fallout/images/a/a4/Icon_beret.png/revision/latest?cb=20110607171719'
    }, {
      name: 'Radii-accentuator',
      description: 'DT:3 | Weight:1 | Value: 3500 | Effects: +1 END',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/50/Icon_valence_radii_accentuator.png/revision/latest?cb=20111228194846'
    }, {
      name: 'Repairman jumpsuit',
      description: 'DT:0 | Weight:1 | Value: 6 | Effects: +5 Repair',
      source:'https://vignette.wikia.nocookie.net/fallout/images/d/d0/Icon_red_jumpsuit.png/revision/latest?cb=20110508222612'
    }, {
      name: 'Dr. Kleins scrubs',
      description: 'DT:4 | Weight:4 | Value: 6000 | Effects: +2 INT | +10 Science',
      source:'https://vignette.wikia.nocookie.net/fallout/images/7/73/Icon_scientist_scrubs.png/revision/latest?cb=20110826001053'
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
      rank:'[8/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/a/a1/Strength2_icon.png/revision/latest?cb=20130129153428'
    }, {
      name: 'Perception',
      description: 'Perception is your environmental awareness and sixth sense. Affects in weapon accuracy in V.A.T.S.',
      rank:'[8/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/6/66/Perception_icon.png/revision/latest?cb=20130131151206'
    }, {
      name: 'Endurance',
      description: 'Stamina and physical toughness. Character with a high endurance will survive where others may not',
      rank:'[7/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/0/0a/Endurance.png/revision/latest?cb=20101112153138'
    }, {
      name: 'Charisma',
      description: 'Charisma is ypur ability to charm and convince others. It affects yor success to persuade in dialogue and price when you barter.',
      rank:'[4/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/9/91/Charisma_icon.png/revision/latest?cb=20130524220649'
    }, {
      name: 'Intelligence',
      description: 'Intelligence is a measure of your overall mental acuity. It affects the number of Experience Points earned.',
      rank:'[7/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/5b/Intelligence.png/revision/latest?cb=20151012185242'
    }, {
      name: 'Agility',
      description: 'Agility is you measure of your overall finesse and reflexess. It affects the number of Action Points in V.A.T.S. and your ability to sneak.',
      rank:'[9/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/14/Agility.png/revision/latest?cb=20101127221637'
    },
    {
      name: 'Luck',
      description: 'Luck is a measure of you overall good fortune. It affects the recharge rate of Critical hits and your chance to find better items.',
      rank:'[5/10]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/c/c9/Luck_icon.png/revision/latest?cb=20130524150642'
    }
  ];

  let skills = [
    {
      name: 'barter',
      description: 'Affects the price you get for buying and selling items. In general the higher your barter skill, the lower your prices on purchased items',
      rank: '[75/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/7/74/Barter.png/revision/latest?cb=20101127223210'
    }, {
      name: 'energy weapons',
      description: 'The energy weapons skill determines your effectivenss with any weapon that uses Small Energy Cells, Micro Fusions Cells etc. as ammunition',
      rank:'[67/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/8/83/EnergyWeaponsFO3.png/revision/latest?cb=20101127222911'
    }, {
      name: 'sneak',
      description: 'The higher you sneak skill, the easier it is to remain undetected, steal an item or pick someones pocket. Successfully attacking while undetected grants an automatic critical hit',
      rank:'[23/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/12/Icon_Fo3_Sneak_skill.png/revision/latest?cb=20140321224346'
    }, {
      name: 'survival',
      description: 'The survival skills increases the Hit Points you receive from food and drink. It also helps you create consumable items at campfires',
      rank:'[81/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/6/60/Survival.png/revision/latest?cb=20101127225429'
    }, {
      name: 'explosives',
      description: 'The explosives skill determines the ease of disarming any hostile mines and the effectivenss of any explosive weapon',
      rank:'[55/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/10/Explosives.png/revision/latest?cb=20101127223443'
    }, {
      name: 'melee weapons',
      description: 'The melee weapons skill determines your effectivenss with any melle weapon, from simple lead pipe all the way up to the high-tech Super Sledge',
      rank:'[38/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/c/c2/MeleeWeapons.png/revision/latest?cb=20101127224504'
    }, {
      name: 'repair',
      description: 'the reapir skill allows you to maintain any weapons and appearel. In addition repair allows you to create items and guns ammunition at reloading benches',
      rank:'[89/100]',
      source:'https://vignette.wikia.nocookie.net/fallout/images/4/46/Repair_icon.png/revision/latest?cb=20170829205129'
    }
  ];

  let perks = [
    {
      name: 'educated',
      description: 'Each level of Educated will add +2 skill points when you gain a new experience level. This Perk works best when purchased early in your adventure.',
      source:'https://vignette.wikia.nocookie.net/fallout/images/9/9c/EducatedFO3.png/revision/latest?cb=20101125051917'
    }, {
      name: 'sniper',
      description: 'With the Sniper perk, your chance to hit an opponents head in V.A.T.S. is significantly increased.',
      source:'https://vignette.wikia.nocookie.net/fallout/images/4/44/Sniper_FO3.png/revision/latest?cb=20120905173932'
    }, {
      name: 'Commando',
      description: 'While using a rifle (or similar two-handed weapon), your accuracy in V.A.T.S. is significantly increased',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/50/Commando.png/revision/latest?cb=20170128163808'
    }, {
      name: 'Nerves of Steel',
      description: 'With the Nerves of Steel perk, you regenerate Action Points much more quickly than you normally would.',
      source:'https://vignette.wikia.nocookie.net/fallout/images/1/10/Nerves_of_Steel.png/revision/latest?cb=20130416005813'
    }, {
      name: 'Lifegiver',
      description: 'With the Life Giver perk, you gain an additional 30 Hit Points',
      source:'https://vignette.wikia.nocookie.net/fallout/images/f/f6/LifegiverF3.png/revision/latest?cb=20101126182118'
    }, {
      name: 'Robotics Expert',
      description: 'You do an additional 25% damage to any robot. Also, sneaking up on a hostile robot undetected and activating it will put that robot into shutdown state.',
      source:'https://vignette.wikia.nocookie.net/fallout/images/6/64/Robotics_Expert.png/revision/latest?cb=20101126182946'
    }, {
      name: 'Fast Metabolism',
      description: 'With the Fast Metabolism perk, you gain a 20% Health bonus when using Stimpaks.',
      source:'https://vignette.wikia.nocookie.net/fallout/images/c/cc/Fast_Metabolism_FO3.png/revision/latest?cb=20170224185640'
    }
  ];

  let general = [
    {
      name: 'Brotherhood of the steel',
      description: 'Liked',
      source:'https://vignette.wikia.nocookie.net/fallout/images/2/29/BrotherhoodOfSteelReputation.png/revision/latest?cb=20110122230400'
    }, {
      name: 'NCR',
      description: 'Hated',
      source:'https://vignette.wikia.nocookie.net/fallout/images/d/dd/NCRReputation.png/revision/latest?cb=20110122221328'
    }, {
      name: 'Legion',
      description: 'Accepted',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/5b/CaesarLegionReputation.png/revision/latest?cb=20110122230239'
    }, {
      name: 'Powder Gangers',
      description: 'Vilified',
      source:'https://vignette.wikia.nocookie.net/fallout/images/f/fb/PowderNewVegas.png/revision/latest?cb=20110122220938'
    }, {
      name: 'White Glove Society',
      description: 'Idolized',
      source:'https://vignette.wikia.nocookie.net/fallout/images/5/5a/WhiteGloveSociety.png/revision/latest?cb=20110122220403'
    }, {
      name: 'Boomers',
      description: 'Idolized',
      source:'https://vignette.wikia.nocookie.net/fallout/images/4/4e/BoomersReputation.png/revision/latest?cb=20110122230759'
    }, {
      name: 'Great Khans',
      description: 'Neutral',
      source: 'https://vignette.wikia.nocookie.net/fallout/images/d/db/GreatKhansNewVegas.png/revision/latest?cb=20110122221607'
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
      buttonFive.text(' -Reputation- ');

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
        let source = $('<img>');


        weaponsList.append(para);
        para.text(value.name);
        desc.text(value.description);
        rank.text(value.rank);
        source.attr('src',value.source);

        para.on('mouseenter', function() {
          weaponsDesc.append(source);
          weaponsDesc.append(desc);
          weaponsDesc.append(rank);
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
        let source = $('<img>');

        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        rank.text(value.rank);
        source.attr('src',value.source);

        para.on('mouseenter', function() {
          weaponsDesc.append(source);
          weaponsDesc.append(desc);
          weaponsDesc.append(rank);
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
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
          weaponsDesc.append(desc);
        })
        para.on('mouseout', function() {
          weaponsDesc.empty();
        })
      });
    });
    buttonTwo.on('click', function() {
      vaultBoy.remove();
      weaponsList.empty();
      weaponsDesc.empty();
      $.each(armors, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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
      $.each(aid, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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
      $.each(misc, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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
      $.each(ammo, function(key, value) {

        let para = $('<p>');
        let desc = $('<p>');
        let source = $('<img>');
        weaponsList.append(para);

        para.text(value.name);
        desc.text(value.description);
        source.attr('src',value.source);
        para.on('mouseenter', function() {
          weaponsDesc.append(source);
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