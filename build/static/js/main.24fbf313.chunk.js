(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    33: function (e, t, a) {
      e.exports = a(53);
    },
    53: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(0),
        n = a.n(l),
        s = a(15),
        r = a.n(s),
        o = a(32),
        i = a(3),
        m = a(14),
        c = a(12),
        u = a(9),
        h = {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          darkGray: '#282c34',
          black: '#20232a',
          lightBlue: '#61dafb',
        };
      function p() {
        var e = Object(u.a)(['\n  color: #fff;\n  background-color: ', ';\n']);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var d = Object(i.b)(p(), h.black);
      var g = function () {
        return Object(i.c)(
          'header',
          { css: d },
          Object(i.c)(
            m.a,
            {
              collapseOnSelect: !0,
              expand: 'md',
              bg: 'dark',
              variant: 'dark',
              fixed: 'top',
            },
            Object(i.c)(m.a.Brand, { href: '#home' }, "Jame's Leveling Guide"),
            Object(i.c)(m.a.Toggle, {
              'aria-controls': 'responsive-navbar-nav',
            }),
            Object(i.c)(
              m.a.Collapse,
              { id: 'responsive-navbar-nav' },
              Object(i.c)(
                c.a,
                { className: 'mr-auto' },
                Object(i.c)(c.a.Link, { eventKey: 1, href: '/1' }, 'Ch 1'),
                Object(i.c)(c.a.Link, { eventKey: 2, href: '/2' }, 'Ch 2'),
                Object(i.c)(c.a.Link, { eventKey: 3, href: '/3' }, 'Ch 3')
              ),
              Object(i.c)(
                c.a,
                null,
                Object(i.c)(
                  c.a.Link,
                  {
                    eventKey: 1,
                    href: '//github.com/atsolberg/wow-leveling-guide',
                  },
                  'code'
                ),
                Object(i.c)(
                  c.a.Link,
                  {
                    eventKey: 2,
                    href:
                      'https://web.archive.org/web/20100414012649/http://www.wow-pro.com/node/600',
                  },
                  'source'
                )
              )
            )
          )
        );
      };
      function E() {
        var e = Object(u.a)([
          '\n  padding: 60px 15px 0; // Top padding should be the height of the header\n  background-color: ',
          ';\n',
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      var f = Object(i.b)(E(), h.darkGray);
      var w = function (e) {
          return Object(i.c)(
            'main',
            Object.assign({ css: f, className: 'container' }, e)
          );
        },
        y = a(31);
      var N = function (e) {
        var t = e.width,
          a = void 0 === t ? 15 : t,
          l = e.height,
          s = void 0 === l ? 15 : l,
          r = e.color,
          o = void 0 === r ? 'currentColor' : r,
          i = Object(y.a)(e, ['width', 'height', 'color']);
        return n.a.createElement(
          'svg',
          Object.assign(
            { x: '0px', y: '0px', viewBox: '0 0 100 100', width: a, height: s },
            i
          ),
          n.a.createElement('path', {
            fill: o,
            d:
              ' M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z ',
          }),
          n.a.createElement('polygon', {
            fill: o,
            points:
              ' 45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9 ',
          })
        );
      };
      function b() {
        var e = Object(u.a)([
          '\n  color: #fff;\n  background-color: ',
          ';\n\n  text-align: center;\n  padding: 30px 15px;\n\n  a {\n    color: #fff;\n    text-decoration: none;\n    &:hover,\n    &:focus {\n      color: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      var k = Object(i.b)(b(), h.black, h.lightBlue);
      var q = function () {
        return Object(i.c)(
          'footer',
          { css: k },
          'Built by',
          ' ',
          Object(i.c)(
            'a',
            {
              href: 'https://github.com/atsolberg/wow-leveling-guide',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            'atsolberg ',
            Object(i.c)(N, null)
          ),
          ' ',
          'with \u269b'
        );
      };
      var v = function () {
        return n.a.createElement(
          'div',
          null,
          n.a.createElement('h2', null, 'Chapter 1 (30-41) [old version]'),
          n.a.createElement('h3', null, 'Introduction:'),
          n.a.createElement(
            'p',
            null,
            'This guide starts at',
            ' ',
            n.a.createElement(
              'em',
              null,
              n.a.createElement('strong', null, 'level 30')
            ),
            ". It is your task to reach that level on your own and it shouldn't be a problem, you can check the other leveling guides in our leveling guide forum for the earlier levels. The main reason why I don't want to start a guide at level 1 is because:"
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement('li', null, " It's not so needed"),
            n.a.createElement(
              'li',
              null,
              ' ',
              'Depending on your race/class choice you will start from different areas so covering them all would be a mess.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'This guide is optimized for ',
            n.a.createElement('strong', null, 'FAST'),
            " leveling with a minimum of grinding sessions. Quests are important, they give rewards and faction and are less boring than pure grinding, BUT sometimes some quests are really a time waste and we will be skipping those and replacing them by good grinding spots when it is necessary. Some people say that Grinding is always faster than questing, this is true in theory when you don't know which quests to take and which to avoid, and what is the best order to do them. With this guide, questing will be very efficient and much better than pure grinding. Follow each instruction carefully and you will see for yourself. The quests choices and order to do them are optimal so that you run as few as possible while doing the most possible and then turning several quests at the same time. This guide will be very useful for both veteran and novice players, and this is why sometimes I describe things in two fashion",
            ' ',
            n.a.createElement('strong', null, '"In short"'),
            ' (for the veterans) and',
            ' ',
            n.a.createElement('strong', null, '"in details"'),
            ' (for the novices). That way the veteran players can skip those "in details" paragraph if the "in short" one was enough information for them. So even the guide itself is optimized for the minimum reading possible, to save time! Let\'s get started immediately then!'
          ),
          n.a.createElement(
            'p',
            null,
            "Everything described in this guide can be done solo (besides when I say otherwise). You can of course follow this guide while duoing, grouping, it's not a problem, it works too."
          ),
          n.a.createElement('h5', null, 'Basic rules:'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'While traveling, ',
              n.a.createElement(
                'strong',
                null,
                'kill everything that is on your way'
              ),
              ' ',
              'and gives experience (Yellow mobs preferably).'
            ),
            n.a.createElement(
              'li',
              null,
              ' ',
              'Spend your ',
              n.a.createElement('strong', null, 'talent points'),
              ' so you do the most damage possible. (e.g: Priest should specialize in Shadow Talents, Warriors in Arms/Fury, Rogues Combat/Assassination, etc).'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'strong',
                null,
                "Don't waste your time trying to find groups for questing"
              ),
              ", you can solo everything that is described in this guide. Only group with someone when it's not gonna be a waste of time (e.g: meeting the person at the other end of the map to show him the way to where your quest is)"
            ),
            n.a.createElement(
              'li',
              null,
              'Try to always log out in an Inn when you take a break.'
            ),
            n.a.createElement(
              'li',
              null,
              "If I don't mention a quest, it means I consider it a waste of time, so don't take it thinking I forgot a quest here and there, I didn't.",
              ' ',
              n.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'smile' },
                '\ud83d\ude42'
              ),
              "Also don't abandon a quest unless I say you should."
            ),
            n.a.createElement(
              'li',
              null,
              "Sometimes I will be making lists of quest you should have before starting with an area, that doesn't mean I will list the whole quest log, JUST the quests that interest us for the moment."
            )
          ),
          n.a.createElement('hr', null),
          n.a.createElement('h5', null, 'Shopping List:'),
          n.a.createElement(
            'p',
            null,
            'Every time you pass by an auction house, try to buy the following items:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              '1X ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Patterned Bronze Bracers'
              ),
              ' ~50 Silver'
            ),
            n.a.createElement(
              'li',
              null,
              '1X ',
              n.a.createElement('span', { className: 'item' }, 'Frost Oil'),
              ' ~ 2 Gold'
            ),
            n.a.createElement(
              'li',
              null,
              '1X ',
              n.a.createElement('span', { className: 'item' }, 'Gyrochronatom'),
              ' ~1 Gold'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'These might not always be up for sale, so start checking early.'
          ),
          n.a.createElement(
            'h5',
            null,
            'Chapter 1 - [Level 30 - 41] Journey from Thousand Needles to Badlands'
          ),
          n.a.createElement('h6', null, 'Level 30'),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              ' ',
              n.a.createElement('strong', null, 'In Short'),
              ': Go to ',
              n.a.createElement('strong', null, 'Theramore'),
              ' by boat, in ',
              n.a.createElement('strong', null, 'Theramore'),
              ' learn the new flight path, go to the Inn, make it your home location, then go to Thousand Needles.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'In Details'),
              ': From ',
              n.a.createElement('strong', null, 'Ironforge'),
              ', take a flight path to ',
              n.a.createElement('strong', null, 'Menethil Harbor'),
              ", if you don't have that flight path, you'll have to go to wetlands and then run to",
              ' ',
              n.a.createElement('strong', null, 'Menethil Harbor'),
              '. In ',
              n.a.createElement('strong', null, 'Menethil Harbor'),
              ' ',
              'take the boat to ',
              n.a.createElement('strong', null, 'Theramore'),
              ' (It is the boat that stops at the southern peer). When in ',
              n.a.createElement('strong', null, 'Theramore'),
              ', find the Gryphon Master and get the flight path. Then go to the Inn, talk to the innkeeper and make theramore your home location. After that, go through Dustwallow Marsh by following the road northwest and then south to the Barrens. When in the Barrens, go south to',
              ' ',
              n.a.createElement('strong', null, 'Thousand Needles'),
              ", go down the great lift (don't attack the guard just run past him, take the elevator and keep going until he forgets you)."
            )
          ),
          'In ',
          n.a.createElement('strong', null, 'Thousand Needles'),
          ', go west until you reach the border of ',
          n.a.createElement('strong', null, 'Feralas'),
          ', and find the alliance outpost:',
          ' ',
          n.a.createElement('strong', null, 'Thalanaar'),
          ' (5,17). Get the new flight path from there.',
          n.a.createElement(
            'p',
            null,
            "Go southeast along the mountain, keep going until you hit Roguefeather Den (27,51). It's grinding time! Don't worry, there will be a lot of questing after that, but you are gonna kill these harpies until those two goals are achieved:"
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement('li', null, 'you hit level 31+'),
            n.a.createElement(
              'li',
              null,
              'you obtain 25 ',
              n.a.createElement('span', { className: 'item' }, 'Vibrant Plumes')
            )
          ),
          n.a.createElement(
            'p',
            null,
            'The harpies are lvl 28-30, drop cash and silk cloth. There are a lot of them and they respawn fast. (Make sure to kill the harpies that are down on the ground and those that are in the cave up on the hill) With the 25',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Vibrant Plumes'),
            ' you can get 60 Tickets at the Darkmoon Faire, you can then trade 50 Tickets for a 14 Slot Bag, which is a big plus at this level (unless you are a twink). Sadly the Darkmoon Faire is not always available, check this',
            ' ',
            n.a.createElement(
              'a',
              {
                href:
                  'https://web.archive.org/web/20100509001851/http://www.wow-pro.com/node/569',
              },
              'Darkmoon Faire Necklace Guide'
            ),
            ' ',
            'to know when the Darkmoon Faire will be available, and put your',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Vibrant Plumes'),
            " in bank until then. If you don't want the bag, you can either auction those plumes (they sell nicely) or save them up for your future epic necklace."
          ),
          n.a.createElement('h6', null, 'Level 31'),
          n.a.createElement(
            'p',
            null,
            'Go east until you reach the Mirage Raceway in the Shimmering Flats(80,77). Get the following quests there:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[30] Hardened Shells'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[30] Salt Flat Venom'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[30] Load Lightening'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Rocket Car Parts'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Hemet Nesingwary Jr.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] A Bump in the Road'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Wharfmaster Dizzywig'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'You can find everything needed to complete those quests all around the raceway, do long circles all around it and kill everything on the way.',
            n.a.createElement('br', null),
            ' If you have troubles finding buzzards, there is a nice spot with 10 of them at (87,66).',
            n.a.createElement('br', null),
            ' Keep doing this until you complete all the quests, get 10',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Turtle Meat'),
            " and hit level 32. Grind on turtles in particular, they drop scales which sell nicely. Don't sell the ",
            n.a.createElement('span', { className: 'item' }, 'Turtle Meat'),
            ', put them in bank or somewhere in your inventory.'
          ),
          n.a.createElement(
            'p',
            null,
            'Turn in all the quests and get the follow up quests : '
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Goblin Sponsorship'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Martek the Exiled'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Before we leave, go south and zone into Tanaris. Go to Gadgetzan and talk to the Gryphon master on the other side of the town to get the new flight path. Hearthstone to ',
            n.a.createElement('strong', null, 'Theramore'),
            ', sell junk and repair.'
          ),
          n.a.createElement(
            'p',
            null,
            'Get out of ',
            n.a.createElement('strong', null, 'Theramore'),
            ' and follow the road northwest and then south to the Barrens. In the Barrens go north then east to Ratchet. Talk to Gazlowe in Ratchet, get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[37] Goblin Sponsorship'
            ),
            '. Also talk to Wharfmaster Dizzywig on the docks and get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[36] Parts for Kravel'
            ),
            n.a.createElement('br', null),
            ' Take the boat to ',
            n.a.createElement('strong', null, 'Booty Bay'),
            '.',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            'In ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ' on the docks, talk to Wharfmaster Lozgil and get the follow up. Get all the quests you can in',
            n.a.createElement('strong', null, 'Booty Bay'),
            '. Then go to the Inn in',
            ' ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ' and make it your home location.',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            "Then go train new skills in Stormwind by gryphon ride (for rogues, there's a trainer on the 1st floor of booty bay inn). Visit the Auction house, repair, sell, buy 4 stacks of food/drink (of course don't buy drinks if you aren't a class with mana)."
          ),
          n.a.createElement('h6', null, 'Level 32'),
          n.a.createElement(
            'p',
            null,
            'At level 32 the zone we will be aiming for is Stranglethorn Vale. '
          ),
          'Quest Gathering:',
          n.a.createElement('br', null),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              'Fly to ',
              n.a.createElement('strong', null, 'Darkshire'),
              ' and run west/south to',
              ' ',
              n.a.createElement('strong', null, 'Stranglethorn Vale'),
              '. Get the quests in the Rebel Camp in Strangelthorn Vale (37,3).'
            ),
            n.a.createElement(
              'li',
              null,
              "Then go to the Nesingwary's Camp (35,10). Turn in",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Hemet Nesingwary Jr'
              ),
              '. Get the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[30] Welcome to the Jungle'
              ),
              ' from Barnil Stonepot and turn in it at Hemet Nesingwary Jr. This should unlock several other quests, get them all.'
            )
          ),
          n.a.createElement('br', null),
          'You should have these quests: ',
          n.a.createElement('br', null),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Supply and Demand from Drizzlik'
              ),
              ' in',
              ' ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Panther Mastery'
              ),
              ' From Nesingwary camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Tiger Mastery'
              ),
              ' From Nesingwary camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[32] Investigate the Camp'
              ),
              ' From Krazek in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] The Second Rebellion'
              ),
              ' From Sergeant Yohwa at the Rebel Camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[34] Bad Medicine'
              ),
              ' Sergeant Yohwa at the Rebel Camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[34] Raptor Mastery'
              ),
              ' From Nesingwary camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Bloodscalp Ears'
              ),
              ' From Kebok in',
              ' ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Singing Blue Shards'
              ),
              ' From Crank',
              ' ',
              'Fizzlebub in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Hostile Takeover'
              ),
              ' From Kebok in',
              ' ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Parts for Kravel'
              ),
              ' From Wharfmaster Dizzywig.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                "[37] Krazek's Cookery"
              ),
              ' From Corporal Kaleb at the Rebel Camp.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Goblin Sponsorship'
              ),
              ' From the Baron Revilgaz on top of the ',
              n.a.createElement('strong', null, 'Booty Bay'),
              ' Inn.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] The Stone of the Tides'
              ),
              ' From Baron Revilgaz in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              ', prereq for this quest is given by Krazek in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[41] Scaring Shaky'
              ),
              ' From "Sea Wolf" McKinley in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'No need to take the Green Hills of Stranglethorn quests (the one with the chapters), it will just encumber your quest log for now. You will complete each chapter when you get the right pages. So while you hunt always look out for these:'
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.goblinworkshop.com/pics/icons/INV_Misc_Note_06.jpg',
              alt: '',
            })
          ),
          n.a.createElement('p', null, 'Hunting'),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/stvroute1.jpg',
              alt: '',
            })
          ),
          n.a.createElement(
            'p',
            null,
            'Step 1: Kill River Crocolisks which can be found all along the river in northern Stranglethorn Vale until you find 2',
            ' ',
            n.a.createElement(
              'span',
              { className: 'item' },
              'Large Crocolisk Skins'
            ),
            '. While you search for crocs you can also kill Young Tigers close to the river for Tiger Mastery.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 2: Then kill 10 Young Tigers (or as much as you still got left)',
            n.a.createElement('br', null),
            ' Tigers can be found mostly south and around the Nesingwary camp.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 3: Kill Young Panthers, they are mostly found on the other side of the river to the east. (41,10).',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            'Step 4: Go further northeast to the Kurzen Camp (44,11) and kill 15 Kurzen Jungle Fighters as well as Kurzen Medecine Men until you get 7',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Jungle Remedies'),
            " (might take a while). Also you'll need a ",
            n.a.createElement('span', { className: 'item' }, 'Fern Extract'),
            ' from one of the piles of crates scattered around the Kurzen Compound.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 5: Once all 4 quests are done go turn them in (besides Supply and Demand, which you will turn in later) at the Rebel Camp where you get the follow up:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[38] Special Forces'
              ),
              '.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Step 6: And at the Nesingwary camp where you get the follow ups:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Tiger Mastery'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Panther Mastery'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Step 7: Go west until you reach a plateau (30,9). Up there you can find Panthers and Tigers. Kill 10 of each.',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            'Step 8: Further southwest on the plateau you should find Stranglethorn Raptors, kill 10.',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            "Step 9: Go south and down the plateau until you find the troll camp at Bal'lal Ruins (29,20)",
            n.a.createElement('br', null),
            ' It should take a while to get 15',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Bloodscalp Ears'),
            " but it is a nice grinding spot anyway. So grind at this spot until you hit level 33. If you don't have enough trolls there is another camp northeast at the Tkashi Ruins (33,15)."
          ),
          n.a.createElement('h6', null, 'Level 33:'),
          n.a.createElement(
            'p',
            null,
            "Step 10: From the troll camps, go west until you hit the shore, and move along the shore towards the north until you find Crystal Spine Basilisks. If you run short on Basilisks, there is more on the lower plateau to the east along the shore. If there aren't any basilisks just go kill some trolls until they respawn. Kill basilisks until you get 10",
            ' ',
            n.a.createElement(
              'span',
              { className: 'item' },
              'Singing Crystal Shards'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 11: After that, take a swim westwards until you hit the island at loc (21,22), you will have to go towards the middle of the island so the quest ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[37] The Stone of the Tides'
            ),
            ' is completed, but be careful with the lvl 37ish elementals on the isle.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 12: When you completed all 6 quests, go turn in the 3 mastery quests at camp nesingwary and get the follow ups:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Tiger Mastery'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Raptor Mastery'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[38] Panther Mastery'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Check if you completed any of the chapters of the Stranglethorn pages quests as well and turn them in if you did.'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'Chapter I'),
              ': page 1,4,6,8'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'Chapter II'),
              ': page 10,11,14,16'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'Chapter III'),
              ': page 18,20,21,24'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'Chapter IV'),
              ': page 25,26,27'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Make sure you repair and sell junk at the vendor before you go again. You will probably need a lot of space in your bags with the extra pages you will find.'
          ),
          n.a.createElement(
            'p',
            null,
            "Step 13: Now you probably must be about halfway to level 34. It's time to go grind at Kurzen camp or on the Trolls, up to you. When you are 1 bubble away from lvl 34, warp to ",
            n.a.createElement('strong', null, 'Booty Bay'),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'When in ',
            n.a.createElement('strong', null, 'Booty Bay'),
            '. Turn in the following quests:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Supply and Demand'
              ),
              ' at Drizzlik in the "Tan-your-hide-Leatherwork" shop. It is situated on the top floor and not too far from the inn in ',
              n.a.createElement('strong', null, 'Booty Bay'),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Singing Blue Shards'
              ),
              ' on the ground floor in bootay bay inn.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Bloodscalp Ears'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                "[37] Krazek's Cookery"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[32] Investigate the Camp'
              ),
              ' on the 2nd floor of the booty bay inn.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] The Stone of the Tides'
              ),
              ' on the top floor of ',
              n.a.createElement('strong', null, 'Booty Bay'),
              ' inn to Baron Revilgaz.'
            )
          ),
          'This should make you level up.',
          n.a.createElement('p', null, 'Step 5: Get follow up quests:'),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Hostile Takeover'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Some Assembly Required'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Water Elementals'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[41] Venture Company Mining'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            "Note: If some follow up quests aren't mentioned it is because they aren't worth the trouble. Just take the ones listed above."
          ),
          n.a.createElement('h6', null, 'Level 34:'),
          n.a.createElement(
            'p',
            null,
            "Since you are lvl 34 now, go train if you wish to do so. Closest place to train is Stormwind by gryffon. (Unless you are a rogue, there's a rogue trainer on the 1st floor of ",
            n.a.createElement('strong', null, 'Booty Bay'),
            ' inn).'
          ),
          n.a.createElement(
            'p',
            null,
            'While you are on gryffon (or in ',
            n.a.createElement('strong', null, 'Booty Bay'),
            '), ask in general channel if anyone has any page you need, and trade your spare pages in exchange or just buy them, they go for 10-15 silver on average. You can also check the ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ' auction house for missing pages. I suggest you even buy them overpriced (Offer 20-30 Silver for a page and you should get it quickly). The sooner you complete the page collection, the better for your bag space.',
            ' ',
            n.a.createElement(
              'span',
              { role: 'img', 'aria-label': 'tongue' },
              '\ud83d\ude1b'
            ),
            ' ',
            'Anyway, time to hunt again!'
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/stvroute2.jpg',
              alt: '',
            })
          ),
          n.a.createElement(
            'p',
            null,
            "Step 1: When you are done, go back to the jungle, follow the road north until you hit loc (39,22). And go westwards (towards the area north of Grom'Gol Camp). You should find plenty of Lashtail Raptors there. Kill them as much as needed for the quests."
          ),
          n.a.createElement(
            'p',
            null,
            'Step 2 & 3: When done with raptors, you should hit the river to the east and search along the banks for Snapjaw Crocolisks. At the same time you can start heading to the Venture co. Camp next to Lake Nazferiti and kill Geologists there (44,20), they drop the "tumbled crystals" you need for ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[36] Hostile Takeover'
            ),
            '. You can find crocolisks on both sides of the river, all around Lake Nazferiti and all the way down to Mizjal Ruins. Keep killing Goblins and Crocolisks until you get both quests complete.'
          ),
          n.a.createElement(
            'p',
            null,
            "Step 4: When done with that, head northwest until you hit the area in between Bal'al Ruins and Tkashi Ruins (33,15). There you wil find Elder Stranglethorn Tigers and kill 10 of them."
          ),
          n.a.createElement(
            'p',
            null,
            'Step 5: Once done, go to Nesingwary Camp and turn in '
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Tiger Mastery'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Raptor Mastery'
              )
            )
          ),
          'Get the two follow ups and complete any chapter to get rid of pages taking up bag space.',
          n.a.createElement(
            'p',
            null,
            'Step 6: Go northeast until you hit the Kurzen Camp, this time go straight for the cave there and kill Commandos and Headshrinkers. Careful the Commandos are stealthers.'
          ),
          n.a.createElement(
            'p',
            null,
            "Step 7: When done with that go southwest to find Sin'dall. Sin'dall is on top of a hill at (31,17) right in the middle of Bal'al and Tkashi ruins. It is definitely soloable at lvl 34, just make sure all your long cooldown abilities are up."
          ),
          n.a.createElement(
            'p',
            null,
            "Step 8: Once Sin'dall is dead, head west until you hit the island you discovered before (21,22), and kill Water Elementals there until you get 6 ",
            n.a.createElement(
              'span',
              { className: 'item' },
              'Water Elemental Bracers'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 9: At this point you should be getting close to level 35. If you are not, grind on trolls until you are about 3 bubbles of XP away from it.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 10: When that is done, go turn in your quests at the Nesingwary and Rebel camps, at the Rebel Camp get the folllow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              "[38] Kurzen's Mystery"
            ),
            ". By now you should have completed your page collections or be close, if you aren't it's ok, we will be back in Stranglethorn Vale in about 3 levels and then you ll for sure complete it."
          ),
          n.a.createElement(
            'p',
            null,
            'Step 11: Warp to ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ', turn in the quests'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Hostile Takeover'
              ),
              ' at Kebok (inn).'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Water Elementals'
              ),
              ' at Baron Revilgaz on to of the Inn. Get follow up',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Magical Analysis'
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Some Assembly Required'
              ),
              ' at Drizzlik (Leather-and-hide shop),'
            )
          ),
          "Don't get the follow up. Go to the bank and get the 10",
          ' ',
          n.a.createElement('span', { className: 'item' }, 'Turtle Meat'),
          ' you saved since Thousand Needles, and make space in your bags in case you still have Stranglethorn pages.',
          n.a.createElement('p', null, 'Time to travel!'),
          n.a.createElement(
            'p',
            null,
            'If you already know how to get there, go to Southshore in Hillsbrad Foothills (or take a Gryffon Ride)'
          ),
          n.a.createElement(
            'p',
            null,
            "If you don't know how to get there:",
            n.a.createElement('br', null),
            ' Take a gryffon ride to Stormwind, then use the tram or gryffon to',
            n.a.createElement('strong', null, 'Ironforge'),
            ", then gryffon ride to Southshore or Arathi. If you don't have those flight paths, fly to Wetlands. From Menethil in Wetlands follow the road east and then north until you zone into Arathi Highlands; keep going north until you reach Refuge Pointe (46,46). Get the flight path there. From Refuge Pointe take the road west until you reach Hillsbrad Foothills. In Hillsbrad Foothils follow the road west and then south at the 3rd fork. Southshore is at loc (50,55). Talk to the Gryphon Master in Southshore. and bind at the Inn. You should be level 35 or close by now."
          ),
          n.a.createElement(
            'p',
            null,
            'Gather all the quests in Southshore, you should have:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[30] Down the Coast'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Hints of a New Plague?'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Syndicate Assassins'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[34] Costly Menace'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[36] Crushridge Bounty'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'And ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[31] Soothing Turtle Bisque'
            ),
            ' which you can complete immediately because you already got 10',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Turtle Meat'),
            '. You can buy the soothing spices from the trade goods merchant in the first house to the right when entering Southshore from the north.'
          ),
          n.a.createElement(
            'p',
            null,
            "Don't bother with",
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              "[34] Bartolo's Yeti Fur Cloak"
            ),
            ' unless you are a Leatherworker or got a Leatherworker friend who can make a',
            n.a.createElement('span', { className: 'item' }, "Hillman's Cloak"),
            '. You can buy a',
            ' ',
            n.a.createElement(
              'span',
              { className: 'item' },
              'Bolt of Woolen Cloth'
            ),
            ' at the auction house or ask a tailor.'
          ),
          n.a.createElement('h6', null, 'Level 35'),
          n.a.createElement(
            'p',
            null,
            "Let's start with some Murloc slaughtering!"
          ),
          n.a.createElement(
            'p',
            null,
            'Step 1: The murlocs are right next to the town on the western shore. Kill 10 Tidehunters and 10 Oracles.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 2: Go turn it in and get the follow up. Go back and kill more murlocs until you get 10 ',
            n.a.createElement('span', { className: 'item' }, 'Murloc Heads'),
            '.',
            ' '
          ),
          n.a.createElement(
            'p',
            null,
            'Step 3: Go turn in the quest, get the follow up. Speak with Marshal Redpath in Southshore, get follow up and talk to Lieutenant Fahren again. Get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[32] Stormwind Ho!'
            )
          ),
          n.a.createElement(
            'p',
            null,
            "Sell and repair (there's an armorsmith behind a small house next to the inn)"
          ),
          n.a.createElement(
            'p',
            null,
            'Step 4: Time to hunt Nagas now. The ones you need are on the eastern shore, right next to the town. Kill 10 Daggerspine Shorehunters and 10 Daggerspine Sirens, go back to Southshore and talk to Lieutenant Farren again and get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[32] Reassignment'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 5: Now take a flight path to Refuge Pointe (Arathi Highlands). In Refuge Pointe get the quest',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[36] Worth its Weigh in Gold'
            ),
            ' from Apprentice Kryten.'
          ),
          n.a.createElement(
            'p',
            null,
            "Step 6: Go southeast until you reach the Go'Shek Farm (60,53) and find the NPC named Quae, she is looking over the Go'Shek Farm from the northwest edge. Talk to her and take the follow up quest",
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[36] Hints of a new Plague?'
            ),
            '. You need to find and kill a Forsaken Courier and loot',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'A Sealed Folder'),
            ' from him.'
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('strong', null, 'In Short'),
            ": The Forsaken Courier roams from the Go'Shek Farm all along the road up until the wall to Hillsbrad Foothils. He is lvl 35 and doesn't have that much hit points, but he has 4 level 35 bodyguards. Find a way to kill and loot the Courrier. You can do it solo at level 35, I've done it with 5 different classes and I've heard about other players doing the same. For instructions on how to kill the courier with a certain class, see below."
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('strong', null, 'In Details'),
            " Now you need to find and kill the Forsaken Courier, he roams from the Go'Shek Farm all along the road up until the wall to Hillsbrad Foothils. He has 4 bodyguards, all level 35. ",
            n.a.createElement('br', null),
            'There are many ways to kill it though, even solo at level 35.'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              'Warrior: for exemple, charge the courrier, hit Retaliate, use Intimidating Shout, kill the courier fast, loot it and then run away.'
            ),
            n.a.createElement(
              'li',
              null,
              'Mage, burn him down as fast as possible, start from max range with Pyroblast if you got it, use ice root on the bodyguards, finish the courrier fast. Use a Health Potion if needed.'
            ),
            n.a.createElement(
              'li',
              null,
              'Rogue, you can single the courier out. Use Distract so that only one guard stops while the rest keeps walking, then kill the guard solo, rinse and repeat until you get the courier solo. You can also just rush in the pack, hit Evasion and kill the courier quickly before evasion runs out.'
            ),
            n.a.createElement(
              'li',
              null,
              'Warlock and Hunter: Send in the pet and burn the Courrier as fast as possible while your pet dies.'
            ),
            n.a.createElement(
              'li',
              null,
              'Priest: Powerword:Shield and Renew yourself, be at max range, start with Smite, then a Mind Blast while the mobs run to you, then a Shadow Word:Pain. The bodyguards should be on you at this moment, use Psychic Scream, and keep on burning the Courrier with Mind Flay / Mind Blast.'
            ),
            n.a.createElement(
              'li',
              null,
              'Paladin Just go for the courier and use your invulnerabilities.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            "There must be a way for each class to solo this at level 35, use creativity, potions, and long cooldown abilities. If you don't manage it, try to get a partner to duo it."
          ),
          n.a.createElement(
            'p',
            null,
            'Step 7: Once you got the ',
            n.a.createElement('span', { className: 'item' }, 'Sealed Folder'),
            ' ',
            'from the Forsaken Courier, go back to Quae (60,53). Turn in and get the follow up ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[37] Hints of a new Plague?'
            ),
            ', where you have to escort Kinelory.'
          ),
          n.a.createElement(
            'p',
            null,
            "For the escort, one word of advice: Let Kinelory be in the front, always walk behind her, when mobs aggro her, help her take them out one by one. And make sure they don't run far. Kinelory is quite a tank and can also heal a bit. If you let her be in front and don't let runners create trains, you will complete the quest easily."
          ),
          n.a.createElement(
            'p',
            null,
            "Step 8: When completed, talk to Quae and get the follow up. Then go southeast of Go'Shek Farm to the troll village (63,65)."
          ),
          n.a.createElement(
            'p',
            null,
            'Kill trolls until you get 10 ',
            n.a.createElement('span', { className: 'item' }, 'Tusks'),
            '. Kill Witch Doctors until you get 4',
            ' ',
            n.a.createElement(
              'span',
              { className: 'item' },
              'Medicine Pouches'
            ),
            '. Further inside the village and to the south (68,75) you will find a cave. Inside the cave you will find Witherbark Shadow Hunters and get the',
            ' ',
            n.a.createElement('span', { className: 'item' }, 'Hunter Knife'),
            ' you miss to complete the quest.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 9: Once completed, run back to Refuge Pointe in Arathi and turn in the troll quest.'
          ),
          n.a.createElement(
            'p',
            null,
            'Hearthstone to Southshore, and talk to Phin Odelic and complete the quest "Hints of a New plague".'
          ),
          n.a.createElement('p', null, 'Sell and repair.'),
          n.a.createElement(
            'p',
            null,
            'Step 10: Go north and follow the road north until you zone to Alterac Mountain (96,47). A bit further up and to the right you will find Soferan\'s Naze (58,67). Clear the Syndicate camp there, and in the middle of the camp on a table you should find parchments named "Syndicate Documents". Right click one of them and get the two quests',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[34] Encrypted Letter'
            ),
            ' and',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[34] Foreboding Plans'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'Then go northwest towards the snowy mountains where you will find Crushridge Ogres, they drop the',
            ' ',
            n.a.createElement(
              'span',
              { className: 'item' },
              'Dirty Knucklebones'
            ),
            ' you need. ',
            n.a.createElement('br', null),
            ' When you run short on ogres, you can go to the southwest where you will find the area called "Corrahn\'s Dagger" (47,76). There you can kill Syndicate Footpads and Syndicate Thieves as well as Mountain Lions and Hulking Mountain Lions.'
          ),
          n.a.createElement(
            'p',
            null,
            'I suggest you go back and forth from this spot to the ogres whenever you run short on mobs. Do this until the Ogre and Syndicate quests are completed. Then there\'s more Lions further to the west at "The Headland" (38,55).'
          ),
          n.a.createElement(
            'p',
            null,
            'You should keep going westwards while killing lions until you complete your quest. At this point you should be close to level 36, if not, grind on ogres / syndicates until you are about 2 bubbles away from level up.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 11: Go northwest towards Dalaran until you reach Archmage Ansirem (18,78). Turn in the quest',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[37] Magical Analysis'
            ),
            ' and get the follow up ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              "[37] Ansirem's Key"
            ),
            ". Then warp to Southshore or run there if Hearthstone isn't ready."
          ),
          n.a.createElement(
            'p',
            null,
            'Turn in the 5 quests in Southshore. Get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[34] Letter to Stormpike'
            ),
            " from Loremaster Dibbs. Don't get the other follow ups.",
            n.a.createElement('br', null),
            ' Congratulations on level 36.'
          ),
          n.a.createElement('h6', null, 'Level 36'),
          n.a.createElement(
            'p',
            null,
            'Step 1: Take a gryphon ride to ',
            n.a.createElement('strong', null, 'Ironforge'),
            ', go to the hall of explorers northeast of the Gryphon master and get the quest from Roetten Stonehammer',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              "[33] Reclaimers' Business in Desolace"
            ),
            '. Also turn in the quest',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[34] Letter to Stormpike'
            ),
            " at Prospector Stormpike in the Hall of Explorers, don't get the follow up. Then go to the inn of ",
            n.a.createElement('strong', null, 'Ironforge'),
            ' and bind yourself there.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 2: Fly to ',
            n.a.createElement('strong', null, 'Stormwind'),
            '. Repair, sell stuff and train new skills. Also, go turn in',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[32] Reassignment'
            ),
            ', at Major Samuelson in Stormwind Keep. (72,16)'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 3: Fly to ',
            n.a.createElement('strong', null, 'Booty Bay'),
            '. In ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ', turn in the quest ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              "[37] Ansirem's Key"
            ),
            ' at Catelyn, she is on the 1st floor inside the ',
            n.a.createElement('strong', null, 'Booty Bay'),
            ' ',
            'in. Get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[39] "Pretty Boy" Duncan'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'Step 4: Take the boat to Ratchet. And then:'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement('li', null, 'In short: Go to Desolace'),
            n.a.createElement(
              'li',
              null,
              'In detail: From Ratchet, follow the road to the west until you reach Stonetalon Mountains. In Stonetalon Mountains follow the road west/northwest until you are past Sunrock Retreat and reach Mirkfallon Lake, keep following the road until you can go west in between two cliffs. Follow this path, go south through the charred vale and you will arrive in Desolace.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            "When in Desolace, go to Nijel's Point . To access it you have to go further southwest until loc (67,16)."
          ),
          n.a.createElement('p', null, 'Talk to the Hyppogryph master.'),
          n.a.createElement('p', null, 'Then get quests:'),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[31] Centaur Bounty'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                "[33] Vahlarriel's Search"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Reagents for Reclaimers Inc.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Strange Alliance'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Down the Scarlet Path'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] The Karnitol Shipwreck.'
              )
            )
          ),
          n.a.createElement(
            'p',
            null,
            'We are not taking the quest',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[35] Brutal Politics'
            ),
            " because we decide to be friendly with the Gelkis Centaur Tribe which involves lowering faction with the Magram Centaurs. It doesn't really matter anyway if the Magram centaurs hate you."
          ),
          n.a.createElement('p', null, 'Circuit 1:'),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/desoroute1.jpg',
              alt: '',
            })
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              "Let's start with",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Reagents for Reclaimers'
              ),
              ", kill Hatefury Satyrs in Sargeron, southeast of Nigel's Point (75,20)."
            ),
            n.a.createElement(
              'li',
              null,
              'When you got 10 ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Hatefury Claws'
              ),
              ' and 10',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Hatefury Horns'
              ),
              ' go west to the area just north of Thunder Axe Fortress (56,17) you will find a ruined caravan there. Look for ',
              n.a.createElement('span', { className: 'item' }, 'Malem Chest'),
              ". It's not actually a chest, rather a crate. Open it, get the follow up."
            ),
            n.a.createElement(
              'li',
              null,
              "Go back to Nijel's Point and get the follow up. Turn in the Satyr quest as well but don't get the follow up (huge time waste). Sell and Repair."
            ),
            n.a.createElement(
              'li',
              null,
              'Go southwest and past Thunder Axe Fortress. Then go west towards the sea until you see a big tower. Azore Aldamort is next to the tower just north of it down the cliff (38,27). Get the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] The Sceptre of Light'
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              'From there, go southwest to the shore towards (36,30), you should see the mast of a sunken ship. The Ravnitol Chest is on the shore at (36,30). Open it, and get the follow up quest. Right next to the chest is a black book named "Rackmore\'s Log". Click it and get the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                "[36] Claim Rackmore's Treasure"
              ),
              '.',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                "Rackmore's Silver Key"
              ),
              ' drops from Drysnap Pincer or Crawler. ',
              n.a.createElement(
                'span',
                { className: 'item' },
                "Rackmore's Gold Key"
              ),
              ' ',
              'drops from any Slitherblade Naga. Take a swim and kill Drysnaps around the ship until you get a Silver Key. It takes about 10 kills on average. Then further north go kill Siltherblade Nagas until you get a gold key. 10 kills on average as well to get a Golden Key.'
            ),
            n.a.createElement(
              'li',
              null,
              'Once you have both keys, go east to the Thunder Axe Fortress. Enter the fortress through the main gate (56,30), go kill the Seer (he has one guard) on top of the 1st watch tower to the left past the gates. Loot the Sceptre of Light.',
              n.a.createElement('br', null),
              'Then go in the big building and talk to Dalinda, get the follow up quest ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] Search for Tyranis'
              ),
              '. Tyranis is in the other building (the smaller of the two), southwest of the main one. Kill Tyranis and loot the pendant.',
              n.a.createElement('br', null),
              " Go back to Dalinda. Before you talk to her, clear the whole building. After you talk to her she will start to walk out of the fortress, escort her and make sure she doesn't die. ",
              n.a.createElement('br', null),
              'Warning: Dalinda is one of those stupid escort NPCs who don\'t stop when YOU are attacked. So let her in the front and make sure she gets hits first. Once out of the fortress she will run away and you will get a "Quest Complete" message.'
            ),
            n.a.createElement(
              'li',
              null,
              "Go northeast and back to Nijel's Point, turn in quests, get follow up",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] The Karnitol Shipwreck'
              ),
              '. Sell and Repair, next circuit is gonna be long!'
            )
          ),
          n.a.createElement('p', null, 'Circuit 2:'),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/desolaceroute2.jpg',
              alt: '',
            })
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              "Go south to Kormek'Hut (62,38). Get the quest",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Bone Collector'
              ),
              " (62,39) from Bibbly F'utzbuckle."
            ),
            n.a.createElement(
              'li',
              null,
              'Then go west to the big tower and turn in your quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[33] The Sceptre of Light'
              ),
              ' to Azore Aldamort. Get the follow up',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[38]Book of the Ancients'
              )
            ),
            n.a.createElement(
              'li',
              null,
              'Go northwest and take a swim towards the Ranazjar Isle. Clear the eastern shore of the isle. You should find a chest in between a tree and the white building. Click it to complete',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                "[36] Claim Rackmore's Treasure"
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              'Then clear yourself a path through the Nagas so that you can reach the statue on the northwestern part of the isle (28,6). Clear the way around the statue, get full health/mana and go click the statue twice. Lord Kragaru will spawn, a lvl 38 Naga. Kill it (soloable at 36) and loot the ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Book of the Ancients'
              ),
              '. Before you go, kill Slitherblade Tidehunters and Slitherblade Sea Witches until one of them drops',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                "Karnitol's Satchel"
              ),
              '. Takes 15 kills on average (Took me only 4 once, and another time it took 29 kills).'
            ),
            n.a.createElement(
              'li',
              null,
              'Swim back to Azore Aldamort get your rewards.'
            ),
            n.a.createElement(
              'li',
              null,
              'Now go southeast towards the Kodo Graveyard (48,55). Gather 10',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Kodo Bone'),
              "s there, kill the Carrion Vultures if they are in the way. When you loot a bone there's a 50% chance a lvl 37-38 Kodo Apparition will pop up and attack you. You can run away or deal with it, up to you, they disappear after about 10 minutes."
            ),
            n.a.createElement(
              'li',
              null,
              'Once you got 10 Kodo bones, run east to Scrabblescrew Camp (60, 61) and get the quest ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[34] Kodo Roundup'
              ),
              '. Go back to the Kodo Graveyard and use the Kombobulator Rod on any Ancient, Aged or Dying Kodo. Once you have one tamed, run back with it to the goblin, then right-click on the tamed kodo. Rinse and repeat 5 times to complete the quest.'
            ),
            n.a.createElement(
              'li',
              null,
              'When done with that, go southeast to the Magram Village (70,70) and kill centaurs until you are friendly with the Gelkis (exactly 50 Kills, 46 if you are human). You can check your reputation with the Gelkis Centaur Clan by opening your character panel ("C" key) and clicking on the reputation tab or just directly press "U" key. After those 50 Kills you should also have 15',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Centaur Ear'),
              "s by now, if you don't, just kill some more centaurs."
            )
          ),
          n.a.createElement(
            'p',
            null,
            'At this point you should be level 37 already. If not, you should keep on grinding on Centaurs until you hit level 37.'
          ),
          n.a.createElement('h6', null, 'Level 37'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'Go southwest toward the big arch (63,79). Kill 30 Undead Ravagers there. Beware of the Outcast Necromancers, interrupt them when they cast their summon spell. If not, they summon an Undead Ravager.',
              ' ',
              n.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'tongue' },
                '\ud83d\ude1b'
              )
            ),
            n.a.createElement(
              'li',
              null,
              'When done with the 30 Ravagers, from the big Arch, go west, stay close to the mountain on your left until you reach Gelkis Village. Then go northwest until you find Uthek The Wise (36,79). Turn in the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] Strange Alliance'
              ),
              ", don't get the follow up."
            ),
            n.a.createElement(
              'li',
              null,
              "Take the road east / northeast and then north. Follow the road until you reach Kormek's Hut (62,38) and turn in",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Bone Collector'
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              "Then go north to Nigel's Point and turn in all the quests. Get the follow ups:"
            )
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] The Karnitol Shipwreck'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[40] Down the Scarlet Path'
              )
            )
          ),
          n.a.createElement('p', null, 'Titan Panel XP rate results:'),
          n.a.createElement('img', {
            src:
              'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/xpratedesolace.jpg',
            alt: '',
          }),
          n.a.createElement(
            'p',
            null,
            "This session started with the Satyr quest and finished right now after turning in all the quests in Nijel's Point. That was done with a level 36 character with average gear, solo, on a new server (no twink). I've tried it with 3 different classes and it works just as well. And there is still two quests to turn in, that's just to show how efficient the quest path of desolace can be when done the right way.",
            ' ',
            n.a.createElement(
              'span',
              { role: 'img', 'aria-label': 'smile' },
              '\ud83d\ude42'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'Warp to ',
            n.a.createElement('strong', null, 'Ironforge'),
            ', go to the Hall of Explorers and turn in the quest ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[39] The Karnitol Shipwreck'
            ),
            '.',
            n.a.createElement('br', null),
            n.a.createElement('br', null),
            'At this point, you got 2 options:'
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'Go to Scarlet Monastery. I highly recommend this, an instance run will slow down your exp rate (unless you get a good group going fast). But every 10 level or so you need some gear upgrades and instances are the best for that, Scarlet Monastery is a great instance, not too time consuming. And you already got the main quest. Go further in the Hall of Explorers and get',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[38] Mythology of the Titans'
              ),
              ' from Librarian Mae Paledust. Repair, sell, check auction house etc. Then fly to Southshore, turn in the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Down the Scarlet Path'
              ),
              ' and get the follow up ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[40] In the Name of the Light'
              ),
              '. Get a group together and go to Scarlet Monastery in Tirisfal Glade, follow our',
              ' ',
              n.a.createElement(
                'a',
                {
                  href:
                    'https://web.archive.org/web/20100509001851/http://www.wow-pro.com/node/585',
                },
                'Scarlet Monastery Guide'
              ),
              ' ',
              'and you should be fine.'
            ),
            n.a.createElement(
              'li',
              null,
              "You don't like instances at all. In that case, go to the next step of the guide, Badlands."
            )
          ),
          n.a.createElement(
            'p',
            null,
            "Note: Doing Scarlet monastery got me about 75000 XP. That's almost a full level, so I was level 38 and halfway to level 39 before going to Badlands."
          ),
          n.a.createElement('h6', null, 'Level 38:'),
          n.a.createElement('p', null, 'Badlands:'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'You should be in ',
              n.a.createElement('strong', null, 'Ironforge'),
              ', if not, use Hearthstone, as you should still be bound there. Get the',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Patterned Bronze Bracers'
              ),
              ', the',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Frost Oil'),
              ' and the',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Gyrocronatom'),
              " from your bank (or buy them now if you didn't yet). I suggest you buy 4 stacks of food/drink at least before leaving."
            ),
            n.a.createElement(
              'li',
              null,
              'Go to the Hall of Explorers and get the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Ironband wants you!'
              ),
              ' from Prospector Stormpike.'
            ),
            n.a.createElement(
              'li',
              null,
              'From ',
              n.a.createElement('strong', null, 'Ironforge'),
              ", fly to Thelsamar, if you don't have the flight path, run out of ",
              n.a.createElement('strong', null, 'Ironforge'),
              ', follow the road east and take the tunnel at the South Gate Outpost (86,51) You will be in Loch Modan then, follow the road northeast to Thelsamar.'
            ),
            n.a.createElement(
              'li',
              null,
              'In Thelsamar get the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Badlands Reagent Run'
              ),
              " from Ghak Healtouch in the alchemy supplies house. Then go southeast to Ironband's Excavation Site (65,65). Get the follow up quest from Prospector Ironband ",
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[38] Find Agmond'
              ),
              '. Then go southwest to Badlands.'
            )
          ),
          n.a.createElement('img', {
            src:
              'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/badlandsroute.jpg',
            alt: '',
          }),
          n.a.createElement(
            'p',
            null,
            'In Badlands kill any Buzzard or Coyote you find on your way.'
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              "Go south, past Hammertoe's Dig Site, until you find Prospector Ryedol and Sigrun Ironhew (53,43). Get quests:",
              n.a.createElement('br', null),
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] A Dwarf and His Tools'
              ),
              n.a.createElement('br', null),
              n.a.createElement('span', { className: 'quest' }, '[38] Mirages')
            ),
            n.a.createElement(
              'li',
              null,
              'Go southwest and find Martek the Exiled (42,52) Turn in the quest and get follow up:',
              n.a.createElement('br', null),
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Indurium'
              ),
              n.a.createElement('br', null),
              ' also get quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[40] Barbecued Buzzard Wings'
              ),
              ' from Rigglefuzz.',
              n.a.createElement('br', null),
              "Note: Whenever you need to sell or repair, go to this spot. There is a goblin smithing supplier and it's the only vendor and repairer in Badlands."
            ),
            n.a.createElement(
              'li',
              null,
              "Then go west and a bit to the north until you find Lotwil Veriatus's Camp (25,44). Get quest",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Study of the Elements: Rock'
              ),
              n.a.createElement(
                'p',
                null,
                'Get ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[37] Coolant Heads Prevail'
                ),
                ', turn it in, get the Follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[37]Gyro...What?'
                ),
                ' and turn in.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              'Just west of Lotwil Veriatus you will find a lot of Lesser Elementals. This is a very nice grinding spot, they are easy to kill and drop stones which you can stack up and sell to merchants for nice cash. (However, you should try to AH Solid stones, deeprock salt and Elemental Earth, they sell fairly nice at the Auction house). Stay at this spot until you get 10',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Small Stone Shard'
              ),
              " and hit level 39. If you don't like elementals, or if the spot is already overcrowded, go east to Angor Fortress, and kill Dwarves. For those who didn't go to Scarlet Monastery this will mean a long grinding session, but this will also mean good XP rate and cash (and you need to get your mount soon!). Go turn in",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[37] Study of the Elements: Rock'
              ),
              ' at Lotwil Veriatus and get the follow up.'
            )
          ),
          n.a.createElement('h6', null, 'Level 39'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              "Go east and a bit to the north to Hammertoe's Digsite.",
              n.a.createElement('br', null),
              'At (53,34) under a tent next to a big keg you will find a',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Crumpled Map'),
              ' on the floor. Click it and get the quest ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[35] A Sign of Hope'
              ),
              ". Then keep on killing Dark Dwarves until you get Ryedol's Lucky Pick."
            ),
            n.a.createElement(
              'li',
              null,
              'Then go northeast to Camp Kosh where you can find the',
              ' ',
              n.a.createElement('span', { className: 'item' }, 'Supply Crate'),
              '. (67,22)',
              n.a.createElement(
                'p',
                null,
                "When you got the crate, go back to Prospector Ryedol south of Hammertoe's Digsite and turn in the quests.",
                n.a.createElement('br', null),
                ' Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[39] Scrounging'
                ),
                ' from Sigrun Ironhew.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              "Go south to Agmond's End and find a Battered Dwarven Skeleton (50,62), click it and complete the quest and get the follow up",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[42] Murdaloc'
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              'Kill 12 Stonevault Bonesnapper and Murdaloc, you can find him inside the camp next to the Dwarven Corpse. Keep killing those Troggs until you get 10 ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Indurium Flakes'
              ),
              ' as well.'
            ),
            n.a.createElement(
              'li',
              null,
              'Once both quests complete go south into the mountains and kill Rock Elementals at (40,73) until you get 3',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Large Stone Slab'
              ),
              's.'
            ),
            n.a.createElement(
              'li',
              null,
              'Go west to the ogre area named Camp Cagg (10,72), kill ogres there until you get 7 ',
              n.a.createElement('span', { className: 'item' }, 'Scrap Metal'),
              '. This may take a while.'
            ),
            n.a.createElement(
              'li',
              null,
              "Go north to Apocryphan's Rest (16,60) and kill Buzzards / Coyotes until complete",
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[40] Barbecued Buzzard Wings'
              ),
              ' and',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Badlands Reagent Run'
              ),
              '.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            'When that is done, go east to Martek the Exiled (42,52) and turn in the quests ',
            n.a.createElement('span', { className: 'quest' }, '[39] Indurium'),
            ' and get the follow up ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[38] News for Fizzle'
            ),
            '. Turn in',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[40] Barbecued Buzzard Wings'
            ),
            ' to Rigglefuzz as well. Repair and sell while you are here.'
          ),
          n.a.createElement(
            'p',
            null,
            'Then go northeast and turn in',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[40] Scrounging'
            ),
            ' at Sirun Ironhew.',
            n.a.createElement('br', null),
            ' After that go west to Lotwil Veriatus and turn in the quest, get the follow up',
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[42] Study of the Elements: Rock'
            ),
            '.'
          ),
          n.a.createElement(
            'p',
            null,
            'You should be getting close to level 40 at this point, about 35000 xp to go normally, if you still follow the "kill everything on your way" rule. Go grind on Rock Elementals or Lesser Rock Elementals, Dark Dwarves or Troggs. There are a lot of Dwarves at the Angor Fortress. It\'s up to you. Should take about 1h30 of grinding.'
          ),
          n.a.createElement(
            'p',
            null,
            'It went quite well for me, I was doing 41000 XP/Hour before I got to the grinding part. This is my XP rate starting from the moment I talked to Propector Ryedoll until level 40.'
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('img', {
              src:
                'https://web.archive.org/web/20100509001851im_/http://www.wow-pro.com/guidepics/badlandsxp.jpg',
              alt: '',
            })
          ),
          n.a.createElement(
            'p',
            null,
            "So that's approximately 1 level and a half in 4 Hours. If you can do better, I would love to know!",
            ' ',
            n.a.createElement(
              'span',
              { role: 'img', 'aria-label': 'smile' },
              '\ud83d\ude42'
            )
          ),
          n.a.createElement('h6', null, 'Level 40'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'At level 40 warp to ',
              n.a.createElement('strong', null, 'Ironforge'),
              ', train skills, repair, auction house, etc. Go get your mount if you can afford it (if not, you should soon, cause there is more elemental killing and grinding to do',
              ' ',
              n.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'tongue' },
                '\ud83d\ude1b'
              ),
              ')'
            ),
            n.a.createElement(
              'li',
              null,
              'When ready to go, fly to Thelsamar, turn in',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[39] Badlands Reagent Run'
              ),
              '. Go to Prospector Ironband and turn in',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[42] Murdaloc'
              ),
              '. Then go back to the Badlands.'
            ),
            n.a.createElement(
              'li',
              null,
              'Go to the southwestern part of the map (17, 83) and kill Greater Rock Elementals until you get 5',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Bracers of Rock Binding'
              ),
              ". There's another camp of Greater Rock Elementals further to the west past the Ogres (6,83). This will be hard because some of the elementals are level 44. Try to find level 42 or 43 ones if the level 44 are too hard for you."
            ),
            n.a.createElement(
              'li',
              null,
              'When you are done, grind until you are about 5000 xp or less from level 41. Grind on Elementals, or Dwarves, up to you. Warning: This is a long grinding session, if grinding is too boring for you, then by all means do something else, go to Scarlet Monastery a few times for exemple. Also one of the reasons for grinding here even though we got a few quests we could do in Stranglethorn Vale is that I want to save these quests for later so we can do the whole rest of Booty Bay quests in one run. So right now we are already setting up a very juicy XP session for the future.',
              ' ',
              n.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'smile' },
                '\ud83d\ude42'
              )
            ),
            n.a.createElement(
              'li',
              null,
              'Once you are 5000 xp away from level 41, go to Lotwil Veriatus, turn in ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[42] Study of the Elements: Rock'
              ),
              ' and get the follow up',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[42] This is Going to Be Hard'
              ),
              '. Then go talk to his assistant Lucien Tosselwrench. Get quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                '[42] Stone is Better than Cloth'
              ),
              ' and complete it, as you should still have the patterned bracers. This will make you ding level 41.'
            )
          ),
          n.a.createElement(
            'p',
            null,
            "This grinding sessions was tested by 3 different characters, the XP/Hour rate was in between 22000 XP/HOUR and 26000 XP/HOUR depending of the class. And there is still a nice little XP boost to come when completing the following steps. So grinding isn't bad at all, of course it's not as good as an optimized quest circuit, but it's still decent and you will see for yourself, it will bring a nice sum of cash. The stones from the elementals stack and sell nicely at the merchant, plus, they drop Elemental Earth which goes for at least 50 silver each at the AH. Same thing with the Dwarves, they drop Silk and sometimes Mageweave. Sell Silk / Mageweave at the AH and you'll get 'rich' quickly."
          ),
          n.a.createElement('h6', null, 'Level 41'),
          n.a.createElement(
            'p',
            null,
            'Complete ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              '[42] This is Going to be Hard'
            ),
            ' ',
            'and get the follow up. Talk to Lotwil and complete the quest but BEFORE you accept the next step from Lotwil, be warned: A level 45 Elemental will spawn and you will have to defeat it. At level 41 this is hard but possible for every class. Just use every long cooldown ability you have as well as potions. Loot "Lotwil\'s Shackles of Elemental Binding" from the Fam\'retor Elemental and go turn in the quest to Lotwil. Congratulations, you are done with Badlands and with the first Chapter of this leveling guide! Warp to ',
            n.a.createElement('strong', null, 'Ironforge'),
            ' and sell / repair / auction etc.'
          ),
          n.a.createElement('p', null, '-Jame')
        );
      };
      var T = function () {
        return n.a.createElement(
          'div',
          null,
          n.a.createElement('h2', null, 'Chapter 2 (41-50) [old version]'),
          n.a.createElement('h3', null, 'Introduction:'),
          n.a.createElement(
            'p',
            null,
            "This guide will take you from level 41 to level 50 in a breeze, but you can actually start with it at level 44 for example and catch up with the guide really quick, it's not an issue. I suggest you read the",
            ' ',
            n.a.createElement(
              'span',
              { className: 'text-success' },
              n.a.createElement('strong', null, 'basic rules')
            ),
            ' ',
            'and',
            ' ',
            n.a.createElement(
              'span',
              { className: 'text-success' },
              n.a.createElement('strong', null, 'recommendations')
            ),
            ' ',
            'I listed in the',
            ' ',
            n.a.createElement(
              'strong',
              null,
              n.a.createElement('a', { href: '/1' }, 'Chapter I')
            ),
            ' ',
            "of my leveling guide if you haven't already. No matter if you are a beginner or a veteran world of warcraft player, if you follow this guide carefully you'll find yourself XP'ing at an hilarious rate. So please give it a try and then say how it went for you!"
          ),
          n.a.createElement('h5', null, 'Shopping List:'),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              '2 ',
              n.a.createElement(
                'span',
                { className: 'item' },
                'Elixir of Fortitude'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 41'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go to Stormwind.'),
                ' Go to the Dwarven District and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] In Search of the Temple (Elite)'
                ),
                ' ',
                'from Brohann Caskbelly inside a house in the Dwarven District',
                n.a.createElement('em', null, '(63,24)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Next go to just south of the entrance of The Stockades and talk to',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'person' },
                  "Mazen Mac'Nadir"
                ),
                ' and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[41] Mazen's Behest"
                ),
                n.a.createElement('em', null, '(40,63)'),
                '. Walk upstairs and get the follow-up quest from',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'person' },
                  'Acolyte Dellis'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Stranglethorn Vale:'),
                ' Fly to Booty Bay, make the Inn your home point and get the quests:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[43] Zanzil's Secret"
                    ),
                    ' from Crank Fizzlebub inside the Booty Bay Inn.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[42] Skullsplitter Tusks'
                    ),
                    ' from Kebok in the Booty Bay inn (2nd Floor).'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[45] Tran'Rek"
                    ),
                    ' from Krazek in Booty Bay Inn (2nd Floor).'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[37] Goblin Sponsorship'
                    ),
                    ' from Baron Revilgaz in Booty Bay Inn (Top Floor)'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[43] Akiris by the Bundle'
                    ),
                    ' from Privateer Bloads next to the Bank.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[41] The Bloodsail Buccaneers'
                    ),
                    ' ',
                    'from First Mate Crazz just past the "Old Port Authority" building (First big building when getting off the Boat).'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'In the Stranglethorn Vale category you should also already have:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[38] Kurzen's Mystery"
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[38] Panther Mastery'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[39] "Pretty Boy" Duncan'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[41] Raptor Mastery'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[41] Scaring Shaky'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[41] Venture Company Mining'
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'p',
              null,
              "So here we are - 13 quests to deal with. Let's get busy! Make space in your bags, repair and buy 2 stacks of food/drink (if you don't have that already, of course)."
            ),
            n.a.createElement(
              'p',
              null,
              "For those who didn't finish the ",
              n.a.createElement('em', null, 'Stranglethorn Pages'),
              ' yet: this is your last chance, check the Booty Bay AH and ask in general channel for missing pages. If you got them all, take them with you.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Circuit 1:'),
                n.a.createElement(
                  'div',
                  null,
                  n.a.createElement('img', {
                    src:
                      'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c1.jpg',
                    alt: '',
                  })
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Run out of Booty Bay and take the first way left until the Bloodsail Encampment by the shore. ',
                n.a.createElement('strong', null, 'Pretty Boy Duncan'),
                ' should be there ',
                n.a.createElement('em', null, '(28,69)'),
                '. if not, keep clearing the camp until he appears. Kill Pretty Boy Duncan and loot',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Catelyn's Blade"
                ),
                ' from him.'
              ),
              n.a.createElement(
                'p',
                null,
                'While you have the camp cleared, look for a map named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Bloodsail Correspondence"'
                ),
                ' on one of the barrels, click it and get the follow up quest.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Go northwest across the bridge and keep going along the shore until you find some Nagas. Kill ',
                n.a.createElement('strong', null, 'Naga Explorers'),
                ' at',
                ' ',
                n.a.createElement('em', null, '(24,65)'),
                ' until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '10 Akiris Reed.'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Then go back to the exit of Booty Bay but this time follow the trail to the north. A bit further on the right hand side of the road you will find ',
                n.a.createElement('strong', null, 'Elder Mistvale Gorillas'),
                ' ',
                n.a.createElement('em', null, '(31,67)'),
                '. Kill Gorillas there until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '5 Mistvale Giblets'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Run back to Booty Bay'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[41] Scaring Shaky'
                ),
                ' at "Shaky" Philippe on the peer and get the follow up.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[41] The Bloodsail Buccaneers'
                ),
                ' ',
                'at First Mate Crazz a bit further towards the Inn. Get the follow up.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] Akiris by the Bundle'
                ),
                ' at Privateer Bloads next to the bank. Get the follow up.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[39]"Pretty Boy"'
                ),
                " Duncan at Catelyn the Blade inside the Inn. Don't get the follow up."
              ),
              n.a.createElement(
                'p',
                null,
                'Get the quest ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[41] Up to Snuff'
                ),
                ' from Deeg on the 2nd floor of the Inn. Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] The Bloodsail Buccaneers'
                ),
                ' from Fleet Master Seahorn on the 2nd Floor of the Inn.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Then turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[41] Return to MacKinley')
                ),
                ' ',
                'to "Sea Wolf" MacKinley in the house right next to the Inn. Get the Follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[44] Voodoo Dues')
                ),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Finally get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[42] Keep an Eye out')
                ),
                ' ',
                'from Dizzy One-Eye who stands to the right of the Booty Bay blacksmith house. (Left when entering Booty Bay from the tunnel).'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit 1:')
                )
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c1xp.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('em', null, 'Note:'),
                " Of course, I had XP rest bonus this time. I unfortunately logged my characters out in Ironforge after I finished the first Chapter of the guide. But still, if you divide it by two you still get a nifty 31000 xp / hour (actually more because the XP gained through turning in the quests isn't affected by XP bonus). Repair, sell and restock food/drink up to 3 stacks."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('strong', null, 'Circuit 2:'),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c2a.jpg',
                  alt: '',
                }),
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c2b.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'Get out of Booty Bay and go east towards the shore named',
                ' ',
                n.a.createElement('em', null, 'Wild Shore'),
                '. From there, go southwards while killing any',
                ' ',
                n.a.createElement('strong', null, 'Bloodsails'),
                ' on the way until you reach the 1st camp',
                ' ',
                n.a.createElement('em', null, '(29,80)'),
                '.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Clear the camp and look for a map thingy named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Bloodsail Charts"'
                ),
                ' or',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Bloodsail Orders"'
                ),
                ", If you don't find either, move on further south until you find a small boat ashore, check it for maps as well.",
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Careful, the Bloodsail Warlocks really hurt, make sure you interrupt their shadowbolts if you can, and kill them fast then deal with their pets. If you are Rogue or Mage though, I suggest sap / polymorph on the warlock first, kill the pet and then the warlock.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Now go further south until you find a bigger camp ',
                n.a.createElement('em', null, '(27,82)'),
                ". This camp will be harder to clear, but it's possible if you do it carefully."
              ),
              n.a.createElement(
                'p',
                null,
                'Check the camp for Bloodsail Orders or Charts. Basically, the Bloodsail Charts and Orders can spawn at any of the two camps or at the boat. So check all three until you got both. Then wander up and down the shore where you came from and kill',
                ' ',
                n.a.createElement('strong', null, 'Bloodsails'),
                ' until you get:'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      '10 Bloodsail Swashbuckler Kills'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      '15 Snuff'
                    ),
                    ' (can drop from any Bloodsail)'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      "1 Dizzy's Eye"
                    ),
                    ' (can drop from any Bloodsail)'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'When that is done, get back on the main road and go north until you reach ',
                n.a.createElement('em', null, '(39,41)'),
                ', slightly long ride.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  '** From this point on, if you find any',
                  ' ',
                  n.a.createElement('strong', null, 'Shadowmaw Panther'),
                  ' (they are stealthed) make sure you kill them **'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'At ',
                n.a.createElement('em', null, '(39,41)'),
                ' go east and you will find',
                ' ',
                n.a.createElement('strong', null, 'Venture Co. Goblins'),
                ' uphill. Kill them until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '10 Singing Blue Crystals'
                ),
                '.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Then go west to the other side of the road, you should find',
                ' ',
                n.a.createElement('strong', null, 'Jungle Stalkers'),
                ' ',
                n.a.createElement('em', null, '(34,37)'),
                '. Kill 10.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Then go northeast to ',
                n.a.createElement('em', null, '(36,35)'),
                ' and kill',
                ' ',
                n.a.createElement('strong', null, 'Shadowmaw Panthers'),
                ' until you got 10 kills. You can find them in the area all around that big hill next to the tribal leatherworking troll NPC. They can be a bit hard to find sometimes because they are stealthers so I suggest you hit "Tab" key while running around and open your eyes well',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  '(humans use your racial ability perception)'
                ),
                '.',
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Keep doing circles around that big hill and you will find 10 panthers quickly. Kill anything on the way too while searching those panthers.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Go east to ',
                n.a.createElement('strong', null, "Ziata'Jai Ruins"),
                ' ',
                n.a.createElement('em', null, '(42,36)'),
                ' and clear the camp of trolls. Be careful to avoid the patrols.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                "When it's cleared, follow the little path northeast until you reach",
                ' ',
                n.a.createElement('strong', null, "Balia'mah Ruins"),
                ' ',
                n.a.createElement('em', null, '(45,33)'),
                '. Kill all the trolls there as well. When this camp is clear, follow the path southeast and then south until you reach the ruins of',
                ' ',
                n.a.createElement('strong', null, "Zul'Mamwe"),
                ' ',
                n.a.createElement('em', null, '(47,38 )'),
                ' and kill all the trolls you find in the ruins (Though avoid the southernmost one up the plateau, the trolls there are higher level)'
              ),
              n.a.createElement(
                'p',
                null,
                'If you run out of trolls go back to the first ruins of',
                ' ',
                n.a.createElement('strong', null, "Ziata'Jai"),
                ' and repeat this cycle until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '18 Skullsplitter Tusk'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'level 42')
                ),
                ', this is a good grinding spot.'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 42'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Once you hit',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'level 42')
                ),
                ' ',
                'and got all your tusks, get back on the main road and go north until you get to the ',
                n.a.createElement('strong', null, 'Venture Co. Base'),
                ' at Lake Nezferiti, go to the Operations Center which looks like an oil rig platform',
                ' ',
                n.a.createElement('em', null, '(42,18 )'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go on top of it and kill ',
                n.a.createElement('strong', null, 'Foreman Cozzle'),
                ', loot his',
                ' ',
                n.a.createElement('span', { className: 'item' }, 'Key'),
                '. Jump down and go to the small house next to the lumber mill, open the chest and get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Fuel Regulator Blueprints'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Now go west across the lake and keep going west until the',
                ' ',
                n.a.createElement('strong', null, "Bal'lal Ruins"),
                ' ',
                n.a.createElement('em', null, '(29,20)'),
                ', clear the camp and click the big tablet named ',
                n.a.createElement('em', null, '"Moon Over the Vale"'),
                ' and loot the ',
                n.a.createElement('span', { className: 'item' }, 'scroll'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Then go directly west from the Bal'lal Ruins and into the sea, until",
                ' ',
                n.a.createElement('em', null, '(24,22)'),
                '. Dive underwater at this spot and you should find the tablet named ',
                n.a.createElement('strong', null, '"Gri"lek the Wanderer"'),
                ' lying against the outer wall of the underwater ruins. ',
                n.a.createElement('br', null),
                "You don't need to kill any of the murlocs there, the tablet can be accessed safely. Loot the 2nd scroll."
              ),
              n.a.createElement(
                'p',
                null,
                'Then go north to the Zuuldaia Ruins and take the western entrance',
                ' ',
                n.a.createElement('em', null, '( 21,10)'),
                ' to the ',
                n.a.createElement('strong', null, "Ruins of Zul'Kunda"),
                '. Clear the way through the first corridor until you reach a fork, go left up the ramp.'
              ),
              n.a.createElement(
                'p',
                null,
                'From there, face north and you should see the 3rd tablet',
                ' ',
                n.a.createElement('strong', null, '"The Emperor\'s Tomb"'),
                '. Clear the way to it and loot the 3rd Scroll.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Then go back to the fork and this time take the ramp up to the right, then take a u-turn to the right and go west until the last ruin ',
                n.a.createElement('em', null, '(23,11)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'The last tablet named ',
                n.a.createElement('strong', null, '"Fall of Gurubashi"'),
                " is inside there. Loot the 4th Scroll and then go back on the main path to the east and clear the way eastwards and out of Zul'Kunda ruins."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  'Keep going east to Camp Nesingwary.'
                ),
                ' ',
                n.a.createElement('em', null, '(35,10)'),
                ' Turn in:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[38] Panther Mastery.')
                    ),
                    ' ',
                    "Don't get the follow up."
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[41] Raptor Mastery')
                    ),
                    ". Don't get the follow up."
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    "and the pages quest if you didn't do that already before."
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Then ride north to the ',
                n.a.createElement('strong', null, 'Rebel Camp'),
                ', turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[38] Kurzen's Mystery")
                ),
                ", don't get the follow up. Warp to Booty Bay, turn in:",
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[41] Venture Company Mining'
                      )
                    ),
                    ' ',
                    'at Crank Fizzlebub in the Booty Bay Inn.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[42] Up to Snuff')
                    ),
                    ' ',
                    'at Deeg on the 2nd Floor of the Inn.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[43] Skullsplitter Tusks'
                      )
                    ),
                    ' ',
                    'at Kebok, 2nd floor of the Inn.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[37] Goblin Sponsorship'
                      )
                    ),
                    ' ',
                    'at Baron Revilgaz, 2nd Floor of the Inn. Get the Follow up.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[43] The Bloodsail Buccaneers'
                      )
                    ),
                    ' ',
                    "at Fleet Master Seahorn, 2nd Floor of the Inn. Don't get the Follow up."
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[42] Keep an Eye out')
                    ),
                    ' ',
                    'at Dizzy One-Eye to the right of the Blacksmith house.'
                  )
                )
              )
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('em', null, 'End of Circuit 2:')
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('img', {
                src:
                  'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c2xp.jpg',
                alt: '',
              })
            ),
            n.a.createElement(
              'p',
              null,
              n.a.createElement('em', null, 'Note:'),
              ' I still had the darn XP rest bonus for the first 40000 xp, so chalk off 20000 XP of the total score. This results in an XP Rate of 35000 XP/ Hour.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Fly to Stormwind City'),
                ', go train, repair, sell, auction and restock food/drink up to 3 stacks.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Circuit 3: '),
                n.a.createElement(
                  'em',
                  null,
                  "(No map needed, it's pretty simple)"
                ),
                ' Fly back to Booty Bay, go out and ride north until you reach the',
                ' ',
                n.a.createElement('strong', null, 'Ruins of Jubuwal'),
                ' ',
                n.a.createElement('em', null, '(33,51)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Clear the camp until you can pull ',
                n.a.createElement('strong', null, 'JonJon The Crow'),
                ", he should come with an add, could be a hard fight but it's doable. Loot Jon-Jon's ",
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Golden Spyglass'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then clear yourself some space around the little ruins just behind where Jon-Jon was, there stands',
                ' ',
                n.a.createElement('strong', null, 'Maury \'Club-Foot" Wilkins'),
                ' with two Zanzil Something.'
              ),
              n.a.createElement(
                'p',
                null,
                "Now you probably can't take all 3 at the same time, so try to kill one of the minions fast then run away, rinse and repeat until you are left with just Maury Wilkins. Kill him and loot",
                ' ',
                n.a.createElement('strong', null, '"Maury\'s Clubbed Foot"'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go back on the road and just a bit south until ',
                n.a.createElement('em', null, '(33,53)'),
                ', go east through a breached wall and keep going until you hit the',
                ' ',
                n.a.createElement('strong', null, 'Ruins of Aboraz'),
                ' ',
                n.a.createElement('em', null, '(40,57)'),
                ' and kill',
                ' ',
                n.a.createElement('strong', null, 'Zanzil Minions'),
                ' there until you find',
                ' ',
                n.a.createElement('strong', null, 'Chucky "Ten Thumbs"'),
                ' inside the ruins and loot',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Chucky\'s Huge Ring"'
                ),
                ' from him.'
              ),
              n.a.createElement(
                'p',
                null,
                'Keep killing Zanzil dudes until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "12 Zanzil's Mixtures"
                ),
                ', avoid Zanzil the Outcast himself though. If you run out of mobs to kill, go back and forth from this camp to the other. Any Zanzil Something can drop the Mixture.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "When you are done, go back (warp if it's up)",
                n.a.createElement('strong', null, ' to Booty Bay'),
                ' and turn in:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, "[44] Zanzil's Secret")
                    ),
                    ' ',
                    'at Crank Fizzlebub in the inn.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[44] Voodoo Dues')
                    ),
                    ' ',
                    'at "Sea Wolf" MacKinley (First house next to the Inn). Don\'t get the follow up but take the other quest he has:',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, "[45] Stoley's Debt")
                    ),
                    '.',
                    n.a.createElement('br', null)
                  )
                )
              )
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('em', null, 'End of circuit 3:')
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('img', {
                src:
                  'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/stv2c3xp.jpg',
                alt: '',
              })
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('em', null, 'Note:'),
              ' This one without any XP bonus, and it could have been better, I died twice stupidly at Jon-Jon the crow. Repair, sell and refill up to 3 stacks of food/drink.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Fly to Darkshire'),
                ' (Duskwood) From Darkshire go east, enter Deadwind Pass, go east through Deadwind Pass until you enter the Swamps of Sorrows.'
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/soscircuit.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'When in Swamps of Sorrows go east to ',
                n.a.createElement('strong', null, 'Watcher Biggs'),
                ' ',
                n.a.createElement('em', null, '(26,59)'),
                ', get quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[37] Encroaching Wildlife')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'You can find ',
                n.a.createElement('strong', null, 'Spiders'),
                ', ',
                n.a.createElement('strong', null, 'Jaguars'),
                ' and',
                ' ',
                n.a.createElement('strong', null, 'Young Crocolisks'),
                ' in the whole area of swamps north of Watcher Biggs. Complete the quest and then go back to him, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[35] The Lost Caravan')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go north to the Misty Valley ',
                n.a.createElement('em', null, '(13,35)'),
                '. Kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Swampwalker Elders'
                ),
                ' until you complete',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[41] Mazen's Behest")
                ),
                ". This may take a while, the note is kind of a rare drop. So if you're unlucky and are tired of killing stuff here, just abandon the quest."
              ),
              n.a.createElement(
                'p',
                null,
                'Go east to the Harborage ',
                n.a.createElement('em', null, '(26,31)'),
                '. Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[35] Draenethyst Crystals')
                ),
                ' ',
                'from Magtoor.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go east along the mountain until you find',
                ' ',
                n.a.createElement('strong', null, '"Fallow Sanctuary"'),
                ' at ',
                n.a.createElement('em', null, '(54,28)'),
                '. Gather',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '6 Draenethyst Crystals'
                ),
                ' (Big blue crystals scattered around the camp).'
              ),
              n.a.createElement(
                'p',
                null,
                'Try to find a ',
                n.a.createElement('strong', null, '"Scattered Crate"'),
                ' in one of the camps, and loot the ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Lost Supplies"'
                ),
                ' ',
                'from it. Right Click it to start the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[40] The Lost Supplies')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'When you got 6 crystals, go further east to ',
                n.a.createElement('em', null, '(63,18)'),
                ' where you will find a destroyed caravan. Click the',
                ' ',
                n.a.createElement('strong', null, 'Caravan Chest'),
                ' on it and get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Wizards' Reagents"
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Right next to the caravan you will find Galen Goodward inside a cage, before you get his quest, clear the 'lost ones' camps to the southwest of the cage."
              ),
              n.a.createElement(
                'p',
                null,
                'Then get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[38] Galen's Escape")
                ),
                ' ',
                'and escort him out.'
              ),
              n.a.createElement(
                'p',
                null,
                'You should let Galen go in front and get the first hits, you can also eat/drink when he is attacked by only one NPC. He regens back to full health after each fight.'
              ),
              n.a.createElement(
                'p',
                null,
                'After you have escorted Galen successfully, go south to',
                ' ',
                n.a.createElement('em', null, '(47,39)'),
                '. There you will find a small tent and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Galen's Strongbox"
                ),
                ' next to it. Open it, complete the quest.'
              ),
              n.a.createElement(
                'p',
                null,
                'Stay on this island and kill everything around until you find',
                ' ',
                n.a.createElement('strong', null, 'Noboru'),
                ". He will roam to this island at some point. He's level 39 and has 2 guards, but you can definitely manage it at this level. Kill him, loot his ",
                n.a.createElement('span', { className: 'item' }, 'Cudgel'),
                ', right click it to start the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[39] Noboru the Cudgel')
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Then go northwest to Magtoor at ',
                n.a.createElement('em', null, '(26,31)'),
                '. Turn in the two quests.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go south to Watcher Biggs. Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[42] Driftwood')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Go east to the Temple of Atal'Hakkar ",
                n.a.createElement('em', null, '(65,48)'),
                '.',
                ' ',
                n.a.createElement('em', null, '(Carefully avoid Stoneard)'),
                '. Swim through the pool until you get the quest update for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[43] In Search of the Temple'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then keep going east until you reach the shore. Search southwards along the shore for ',
                n.a.createElement('strong', null, 'Sundried Driftwood'),
                ' (they look like wooden planks, lying on the sand), kill murlocs when they are in the way until you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '8 Sundried Driftwood'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go west back to Watcher Biggs and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[42] Deliver the Shipment')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go to the Blasted Lands (follow the road east and then south). In Blasted Lands go immediately east to Nethergarde Keep. In Nethergarde keep, find Quartermaster Lungertz and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[40] The Lost Supplies')
                ),
                ' ',
                'and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[42] Deliver the Shipment')
                ),
                ' ',
                'if you got it.'
              ),
              n.a.createElement(
                'p',
                null,
                'Find Watcher Mahar Ba and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[41] Mazen's Behest")
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Find the Gryphon Master and fly back to Stormwind. Repair, sell, check the auction house'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to Brohann Caskbelly in the Dwarven District and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[43] To the Hinterlands')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "XP Rate: Sadly I couldn't get a screenshot of the real XP rate because I went LD a couple of times. But I'm pretty sure it was well above 25000 XP / Hour even with all the travelling. You should be level 43 by now, if not you should grind up to level 43, on the elites outside of Uldaman for example so you get the",
                ' ',
                n.a.createElement('em', null, 'Shattered Necklace'),
                ' for the pre-quest work of Uldaman.'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 43'),
          n.a.createElement(
            'p',
            null,
            n.a.createElement('em', null, 'Now you have two options:')
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'Do the Uldaman instance, I suggest you follow my',
              ' ',
              n.a.createElement(
                'a',
                {
                  href:
                    'https://web.archive.org/web/20101208214225/http://www.wow-pro.com/node/587',
                },
                'Uldaman Instance Guide'
              ),
              ' ',
              'for maximum XP rate. Try to finish the whole instance, and especially completing the quest',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                n.a.createElement('strong', null, '[47] The Platinum Discs')
              )
            ),
            n.a.createElement(
              'li',
              null,
              "You really don't like Uldaman, then go to the next part of my guide, but that will mean more grinding for you. I strongly advice you to go to Uldaman though, you already have most of the pre-questing done, just need to gather a few missing quests quickly. And trust me, there will be big exp bonuses later on thanks to going to Uldaman."
            )
          ),
          n.a.createElement('p', null, 'After Uldaman:'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go to Ironforge'),
                ', sell, repair, check the auction house.'
              ),
              n.a.createElement(
                'p',
                null,
                'From Ironforge, fly to Menethil Harbor (Wetlands). Take the boat to Auberdine, this boat is at the northern peer.'
              ),
              n.a.createElement(
                'p',
                null,
                'Once in Auberdine, get the flight path from the Hippogryph Master, then take the boat back to Menethil Harbor.'
              ),
              n.a.createElement(
                'p',
                null,
                "Then take the boat to Theramore, it's the boat that stops at the southern peer. In Theramore on the docks turn in the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[43] Akiris by the Bundle')
                ),
                ' ',
                'at Privateer Groy.'
              ),
              n.a.createElement(
                'p',
                null,
                'Talk to the Gryphon Master. If you have First Aid, you can do the quest to become master in First Aid there. You need to have a skill 225 and be level 40. Go talk to Doctor Gustaf VanHowzen in the Foothold Citadel and do the little quest where you have to bandage patients and get 3900 easy XP.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Then fly to Gadgetzan')
              ),
              n.a.createElement(
                'p',
                null,
                'In Gadgetzan: Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[45] Tran'Rek"
                ),
                ", don't get the follow up.",
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                'Get quests:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[47] Handle with Care'
                    ),
                    ' from Curgle Cranklehop'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[44] Water Pouch Bounty'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[43] Wastewander Justice'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  'General info about Tanaris, Feralas and Hinterlands:'
                ),
                n.a.createElement('br', null),
                n.a.createElement(
                  'em',
                  null,
                  'While killing stuff in Tanaris if you find an tt-link named',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '[OOX-17/TN Distress Beacon]'
                  ),
                  ". Right click it and keep the quest. You'll find beacons in Feralas and Hinterlands as well, proceed equally with those. Each of those beacons start a quest where you will have to find a Homing Robot and escort it. The beacons won't always drop for you, they are kinda rare. The escort quests are hard to do solo especially for certain classes. But if you are lucky to find all 3 beacons you should really put the effort and finish all 3 rescue quests, it will be described when to do them in the guide later on. Anyway, if you don't get a distress beacon, or if you don't manage to complete the rescue quests, it's not a big deal, this is",
                  ' ',
                  n.a.createElement('strong', null, 'optional'),
                  ", it's a nifty exp bonus but it's not that important"
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Sell, Repair, re-supply food/drink (3 stacks).'
              ),
              n.a.createElement(
                'p',
                null,
                'Get out of Gadgetzan, ride east until',
                ' ',
                n.a.createElement('strong', null, 'Noonshade Ruins'),
                ' ',
                n.a.createElement('em', null, '(61,24)'),
                ', kill all the',
                ' ',
                n.a.createElement('strong', null, 'Bandits'),
                " you can find there (If it's crowded just skip this part and keep riding east)."
              ),
              n.a.createElement(
                'p',
                null,
                "Then go further east to Steamwheedle Port even if you still haven't completed Wastewander Justice yet. In Steamwheedle port get:",
                n.a.createElement('br', null),
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Pirate Hats Ahoy!'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] WANTED: Andre Firebeard'
                    ),
                    ' and',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[46] WANTED: Caliph Scorpidsting'
                    ),
                    ' ',
                    'from the wanted poster.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[44] Screecher Spirits'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Southsea Shakedown'
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'p',
              null,
              'Turn in',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                n.a.createElement('strong', null, "[45] Stoley's Debt")
              ),
              ' ',
              'and get the follow up',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                n.a.createElement('strong', null, "[46] Stoley's Shipment")
              ),
              '.'
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  'Ride back towards Gadgetzan'
                ),
                ', make a stop at Noonshade Ruins and kill ',
                n.a.createElement('strong', null, 'bandits / thieves'),
                ' there until you finish Wastewander Justice and Water Pouch Bounty. If the place is crowded, there are more wastewander camps southeast of here',
                ' ',
                n.a.createElement('em', null, '(63,30)'),
                '.',
                n.a.createElement('br', null),
                "(Note: If you are not level 43 yet, that's where you should grind)."
              ),
              n.a.createElement(
                'p',
                null,
                'Go back to Gadgetzan and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[44] Water Pouch Bounty'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] Wastewander Justice'
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[44] More Wastewander Justice'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  'Ride north to Thousand Needles'
                ),
                ' and to the Shimmering Flats at the Mirage Raceway ',
                n.a.createElement('em', null, '(80,75)'),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[38] News for Fizzle'
                ),
                ' at Fizzle Brassbolts.'
              ),
              n.a.createElement(
                'p',
                null,
                'Get quest ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[50] Gahz'Rilla (Dungeon)"
                ),
                ' ',
                'from Wizzle Brassbolts.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[36] Parts for Kravel'
                ),
                " at Kravel Koalbeard, don't get the follow up."
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[37] Goblin Sponsorship'
                ),
                " at Pozzik don't get the follow up but on the other hand get the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[41] Keeping Pace from Pozzik'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go talk to Zamek who is just south of Pozzik, he should have a blue question mark over the head. Start his quest, follow him, he will set up an explosive and distract Rizzle Brassbolt out of his house.'
              ),
              n.a.createElement(
                'p',
                null,
                'While Rizzle is away go quickly loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Unguarded Plans'
                ),
                '. Complete the quest, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[41] Rizzle's Schematics")
                ),
                ' ',
                'and turn it in at Pozzik.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Ride back to Gadgetzan'),
                ' and fly to Thalanaar (Feralas).'
              ),
              n.a.createElement(
                'p',
                null,
                'In Feralas, ride west, follow the road, but carefully avoid Camp Mojache (by the north) or the guards will make a quick deal of you.'
              ),
              n.a.createElement(
                'p',
                null,
                'Find the Grimtotem Camp at ',
                n.a.createElement('em', null, '(65,47)'),
                ', then locate',
                ' ',
                n.a.createElement('strong', null, 'Kindal Moonweaver'),
                ' at ',
                n.a.createElement('em', null, '(65,45)'),
                ', she is on the mountain overlooking the Grimtotem camp. There is a path going to her just a little west of the grimtotem camp.'
              ),
              n.a.createElement(
                'p',
                null,
                "Once you know where Kindal is, don't take the quest yet, go back to the Grimtotem Camp and clear the area around the bamboo cage with the ",
                n.a.createElement('strong', null, 'Sprite Darters'),
                " in it, and don't be shy, clear a wide radius around it."
              ),
              n.a.createElement(
                'p',
                null,
                "When you feel that you've cleared enough, go quickly to Kindal and start the quest, jump down and run straight to the bamboo cage, open the cage and escort the sprites out,",
                ' ',
                n.a.createElement(
                  'strong',
                  null,
                  'at least 6 of them must survive'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Once you get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '"6 Sprites escaped (Complete)"'
                ),
                ' ',
                'message, help Kindal finish off whatever she is attacking. When Kindal is not being attacked by anything, she will vanish, go find her at her initial spot, turn in the quest.'
              ),
              n.a.createElement(
                'p',
                null,
                'If you and/or Kindal die after getting the "quest complete" message, just run back fast to where you initially found Kindal and turn in the quest before the end of the 5 min countdown.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "Now Jer'Kai Moonweaver (that elf right next to Kindal) will have a quest for you,",
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[47] Doling Justice')
                ),
                '. Take the quest, go back down to the Grimtotem Camp and kill as much as the quest requires you to.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'When done, go back to her and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[47] Doling Justice')
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get back on the road, keep going west following the road and go to the shore at ',
                n.a.createElement('em', null, '(44,42)'),
                '. Take the boat to',
                ' ',
                n.a.createElement('strong', null, 'Feathermoon Stronghold'),
                ", or just swim there if the boat isn't in sight, it's faster."
              ),
              n.a.createElement(
                'p',
                null,
                'In Feathermoon Stronghold get:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[46] The Mark of Quality'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[43] The Ruins of Solarsal'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[43] The Missing Courier'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[44] The High Wilderness'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[47] In Search of Knowledge'
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Then go talk to Ginro Hearthkindle, he is on the 2nd floor of a house at ',
                n.a.createElement('em', null, '(31,45)'),
                ' get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[43] The Missing Courier')
                ),
                ' ',
                'from him.'
              ),
              n.a.createElement(
                'p',
                null,
                'Talk to the Hippogryph master, make Feathermoon Stronghold your home location. Sell and Repair, re-supply food and drink (3 stacks)'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go southwest to the ',
                n.a.createElement('strong', null, 'Ruins of Solarsal'),
                ', at',
                ' ',
                n.a.createElement('em', null, '(26,52)'),
                ' you\'ll find a Gazebo (a pavilion structure opened on all sides) named "Solar Gazebo" , it\'s easy to discern it as it is the only "dark" building. Click it and get the follow up quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[43] Return to Feathermoon Stronghold'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go back to Feathermoon Stronghold and get the follow up from Shandris Feathermoon',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[43] Against the Hatecrest'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Talk to Latronicus right next to her, get the follow up and go back to the Solarsal ruins, kill ',
                n.a.createElement('strong', null, 'Nagas'),
                ' until you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '10 Hatecrest Naga Scales'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go back to Latronicus, turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[45] Against Lord Shalzaru'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Sell, repair and re-supply food/drink (3stacks).'
              ),
              n.a.createElement(
                'p',
                null,
                'Go south past the Ruins of Solarsol and across the water to the Isle of Dread. On the Isle of Dread, clear a path to the Cave at',
                ' ',
                n.a.createElement('em', null, '(26,67)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Inside the cave, go straight ahead and under a small white arch.',
                ' ',
                n.a.createElement('strong', null, 'Lord Shalzaru'),
                " is up there on the other side of the pond. He is level 47 and he's not solo, which means probably a bit hard for you to kill if you are not level 44 yet, which will probably be the case for those who skipped Uldaman. Luckily, this cavern is a very nice grind spot, kill ",
                n.a.createElement('strong', null, 'Nagas'),
                ' there until you reach',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'level 44')
                ),
                '.'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 44'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Kill ',
                n.a.createElement('strong', null, 'Lord Shazaru'),
                ', there are 2 other nagas close to him but you can pull them one by one or just 2 at a time. Use your long cooldown abilities and potions if needed. Loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Mysterious Relic'
                ),
                ' from him.'
              ),
              n.a.createElement(
                'p',
                null,
                'Clear the way out and go back to Feathermoon Stronghold. Turn in the quest at Latronicus and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[45] Delivering the Relic')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to Vestia Moonspear in the same building and turn in the quest.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit 1:')
                )
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/xpratefera1.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                "Note: Unfortunately I had XP bonus for the most part of this session, but if you do the math, it's still at least 32000 XP/ Hour."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Then take the boat, back to Feralas, from there go south following the shore while avoiding the Water Elementals / Giants. Kill any',
                ' ',
                n.a.createElement('strong', null, 'Rogue Vale Screechers'),
                ' you find on the way and use',
                ' ',
                n.a.createElement('strong', null, "Yeh'Kinya's Bramble"),
                ' on their corpses, then talk to their spirit to free them. Finish',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[44] Screecher Spirits')
                ),
                ' ',
                'while going southwards.'
              ),
              n.a.createElement(
                'p',
                null,
                'Cross a small river, then keep going south until you find a',
                ' ',
                n.a.createElement('strong', null, 'Boat Wreckage'),
                ' at ',
                n.a.createElement('em', null, '(45,64)'),
                ", it's underwater but very close to the shore, you can actually see the tip of it, it's a very small wreckage, don't expect some big boat. There will probably be an elemental or two around it that will aggro if you get close, you can try killing them (but some of them are 49) or you can run in, click the quest, get the follow up and run away. (What I did",
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                ),
                ')'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Once you have the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[44] Boat Wreckage')
                ),
                ', go back to ',
                n.a.createElement('strong', null, 'Feathermoon Fortress'),
                " (use Hearthstone if it's up)."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'In Feathermoon Fortress talk to Ginro Hearthkindle and get the follow up ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[44] The Knife Revealed'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to Quintis at the top of the tower north of this building. Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[44] Psychometric Reading'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Go back to Ginro, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[44] The Woodpaw Gnolls'
                ),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Sell, Repair, buy up to 4 stacks of food/drink.'
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('strong', null, 'Circuit 2:')
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/feralascircuit1.jpg',
                  alt: '',
                })
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go east across the sea, back to Feralas[/b], follow the road east until you reach Ruins of Isildien ',
                n.a.createElement('em', null, '(61,53)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Kill ',
                n.a.createElement('strong', null, 'ogres'),
                ' there until you have killed',
                ' ',
                n.a.createElement('strong', null, '8 Brutes and 8 Warlocks'),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                ' ',
                'Then for the ',
                n.a.createElement('strong', null, 'Ogre Shamans'),
                ' you will have to go much further south to the big temple at ',
                n.a.createElement('em', null, '(59,73)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Keep doing circles around the temple until you got 8 Shamans dead (there's also shamans inside the building, sometimes you gotta kill the placeholders for them to respawn)."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'When you are done with Shamans, go further to the south and as far up the hills as you can, you will find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Hippogryph Eggs'
                ),
                ' on the floor at',
                ' ',
                n.a.createElement('em', null, '(56,76)'),
                '. Get a Hippogryph Egg.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go northwest to the Yeti Cave ',
                n.a.createElement('em', null, '(55,56)'),
                '. Kill Yetis, ignore the Homing Robot OOX-22/FE for now. Keep killing yetis until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '10 Thick Yeti Hides'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'When you got 10 Yeti Hides, go to the Homing Robot. ',
                n.a.createElement('em', null, '(53,55)'),
                'Now, at this point you should normally have gotten a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Distress Beacon'
                ),
                " with all the stuff you've killed in Feralas already."
              ),
              n.a.createElement(
                'p',
                null,
                "If you don't, it's not a big deal, just go to the next step. For those you did get a Distress Beacon, right click it to get the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[45] Find OOX-22/FE!')
                ),
                ' ',
                "if you haven't already. Turn in the quest."
              ),
              n.a.createElement(
                'p',
                null,
                "Don't take the escort quest if you are solo, it's too hard for almost every class. If you are a duo or more, read the following warnings before taking the escort quest:"
              ),
              n.a.createElement(
                'ul',
                null,
                n.a.createElement(
                  'li',
                  null,
                  n.a.createElement(
                    'p',
                    null,
                    n.a.createElement('strong', null, '1st Warning:'),
                    " The Chicken robot is stupid and doesn't assist you all the time if you get attacked. Let him in the front so he gets the first hit. He has a decent amount of HPs and heals back to full after each fight is over. You can even eat/drink a bit after a fight and let the chicken walk in the front (not too far away though). Don't even think about looting, you don't have time. Don't let the chicken tank more than one at a time, and don't let him tank too long either."
                  )
                ),
                n.a.createElement(
                  'li',
                  null,
                  n.a.createElement(
                    'p',
                    null,
                    n.a.createElement('strong', null, '2nd Warning'),
                    ": When out of the Yeti cave, the chicken will take a left turn and go towards the road, at some point 3 yetis will ambush him. Don't panic, you can let one of the yetis be tanked by the chicken at the beginning and deal with the other 2. Just check the chicken's health regularly. There will be a 2nd and a 3rd ambush, be prepared for them. Especially the last one is composed of 4 Gnolls."
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go back to Feralas'),
                ', follow the main road east until',
                ' ',
                n.a.createElement('em', null, '(71,48)'),
                ' you should be directly north of the small lake.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go to the southeastern tip of that lake and a bit more to the south try to locate a small gnoll camp next to a huge tree.',
                ' ',
                n.a.createElement('em', null, '(73,56)'),
                '. Clear the camp and look for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Large Leather Backpack'
                ),
                ' hanging at the trunk of that huge tree. Click it and get the follow up quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[46] The Writhing Deep'
                ),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Also check your inventory for a bag named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Undelivered Parcel"'
                ),
                ', click it and start the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[44] Thalanaar Delivery')
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go further south'),
                ' to the Writhing Deep and find the hole at ',
                n.a.createElement('em', null, '(74,63)'),
                ', go down the spiralling ramp until you reach the bottom.'
              ),
              n.a.createElement(
                'p',
                null,
                'There enter the tunnel towards the west, inside the tunnel at the first fork go to the right.'
              ),
              n.a.createElement(
                'p',
                null,
                "At the end of this corridor you'll find a circular room with the",
                ' ',
                n.a.createElement('strong', null, "Zukk'Ash Pod"),
                ' inside.'
              ),
              n.a.createElement(
                'p',
                null,
                'Clear the insects in the room. (if you are lucky,',
                ' ',
                n.a.createElement('strong', null, '"Qirot"'),
                ', a rare spawn insect will be there. Kill it for and extra green tt-link).'
              ),
              n.a.createElement(
                'p',
                null,
                "When the room is clear, click the Zukk'Ash Pod, complete the quest, and after ",
                n.a.createElement('strong', null, 'Raschal the Courier'),
                ' is done with his speech, warp back to Feathermoon Stronghold.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Turn in all quests'),
                ' and get the follow ups:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[46] A Hero's Welcome"
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Improved Quality'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Go to Shandris Feathermoon, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[46] A Hero's Welcome")
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[46] Rise of the Slithid')
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, "Fly to Rut'theran Village"),
                ' (Darnassus)'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Handle with Care'
                ),
                ' at Erelas Ambersky.'
              ),
              n.a.createElement(
                'p',
                null,
                'Get the quest ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Favored of Elune?'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to Daryn Lightwind on the upper floor, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] In Search of Knowledge'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go look for a green book on the floor, next to the little bookshelf to the north ',
                n.a.createElement('em', null, '(55,91)'),
                '. Get the quest and talk again to Daryn and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] The Borrower'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go inside Darnassus'),
                ' (for those who never went there, you have to step in the pink haze at ',
                n.a.createElement('em', null, '(56,90)'),
                ')'
              ),
              n.a.createElement(
                'p',
                null,
                'Inside Darnassus, go to the Temple of the Moon. Turn in the 2 quests there.'
              ),
              n.a.createElement(
                'p',
                null,
                'While you are in Darnassus, go to your class trainer (if you are Warlock or Paladin, you will have to go to Auberdine and take the boat to Menethil Harbor then fly to Ironforge. Mages can just go learn the Portal to Darnassus and warp to a big city to train).'
              ),
              n.a.createElement(
                'p',
                null,
                'Visit the Auction House, sell and repair.'
              ),
              n.a.createElement(
                'p',
                null,
                "Then go back to Feathermoon Stronghold (Use Hearthstone if it is up -- If it's not up, there is a Hippogryph Master in Rut'theran Village, fly to Auberdine, then fly to Feathermoon.)"
              ),
              n.a.createElement(
                'p',
                null,
                'Now if you went to Uldaman, you should be',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'level 45')
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "For those who aren't level 45 yet, go grind ",
                n.a.createElement('strong', null, 'Nagas'),
                ' ',
                'on the Isle of Dread (South of Feathermoon) or on',
                ' ',
                n.a.createElement('strong', null, 'yetis'),
                ' at the Yeti Cave ',
                n.a.createElement('em', null, '(53,56)'),
                ' until you hit level 45.'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 45'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'From Feathermoon, ',
                n.a.createElement('strong', null, 'fly to Thalanaar'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[44] Thalanaar Delivery')
                ),
                ' ',
                'at Falfindel Waywarder.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then Fly to Gadgetzan. In Gadgetzan, turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[48] The Borrower')
                ),
                ' ',
                'at Curgle Cranklehop, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[48] The Super Snapper FX (Elite)'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Right next to Curgle, click on the ',
                n.a.createElement('strong', null, 'Egg-O-Matic'),
                '. Complete the quest and you will get an',
                ' ',
                n.a.createElement('span', { className: 'item' }, 'Egg Crate'),
                ', open it then talk to Curgle again and complete the quest corresponding to the egg you got.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Sell, Repair, get up to 3 Stacks of Food/Drink.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'In Tanaris ride to the southeast until you reach',
                ' ',
                n.a.createElement('strong', null, 'Waterspring Field'),
                ' ',
                n.a.createElement('em', null, '(63,37)'),
                '. You will find numerous ',
                n.a.createElement('strong', null, 'Wastewander'),
                ' camps there.'
              ),
              n.a.createElement(
                'p',
                null,
                'Kill ',
                n.a.createElement('strong', null, 'Wastewander Rogues'),
                ' ',
                n.a.createElement('em', null, '(stealthers)'),
                ',',
                ' ',
                n.a.createElement('strong', null, 'Assassins'),
                ' and ',
                n.a.createElement('strong', null, 'Shadow Mages'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'You can also find ',
                n.a.createElement('strong', null, 'Caliph Scorpidsting'),
                ", he wanders between the tower structures, so you should go kill from a tower structure to another until you find him. He has 2 stealthed bodyguards, it will be a hard fight, burn him down quick and run away is my advice, use long cooldown abilities and potions if needed. Then go back and loot his head. If you don't find Caliph it's not a problem though, it's just some bonus XP quest, nothing important."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Once you got',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[44] More Wastewander Justice'
                  )
                ),
                ' ',
                "completed, go east towards Lost Rigger Cove. You'll find a cave entrance at ",
                n.a.createElement('em', null, '(68,41)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go through this tunnel. Now you have a lot of work to do, check the kill list of',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[45] Southsea Shakedown')
                ),
                ' ',
                'and start killing ',
                n.a.createElement('strong', null, 'Pirates'),
                '!',
                n.a.createElement('br', null),
                'Clear your way south toward the main camp with the 3 houses , 2 ships ashore and the boat under construction.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Andre Firebeard'),
                ' spawns at the campfire right in the center of the camp. He has 3 Dock Workers close to him but you can pull those 3 without him if you pull the back one, then you have Andre solo. Or you can burn him down fast and run away (or take them all).'
              ),
              n.a.createElement(
                'p',
                null,
                "Anyway, this place is usually crowded because it is a good grinding spot, so you shouldn't have trouble getting help to kill Andre Firebeard if needed."
              ),
              n.a.createElement(
                'p',
                null,
                'Then go inside the first house to the right when entering the camp. You might get pulls of 3 at a time inside the house, you will maybe have to use the "Kill one and run away" tactic to get to the top floor of the house if you can\'t take 3 at a time.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'On the top floor are crates, click them to get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Stoley's Shipment"
                ),
                '. Then keep on killing ',
                n.a.createElement('strong', null, 'pirates'),
                ' until you complete Southsea Shakedown and Pirate Hats Ahoy!'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  'Bonus: There is a rare spawn named ',
                  n.a.createElement('strong', null, 'Kregg Keelhaul'),
                  ' ',
                  'on the boats ashore. Check for it.',
                  ' '
                )
              ),
              n.a.createElement(
                'p',
                null,
                "If you find a Captain's Key off one of the pirates, the chest is at the bottom level of the ship which is the most to the east."
              ),
              n.a.createElement(
                'p',
                null,
                'Another thing, while killing pirates by the dozen you might find a pirate footlocker on one of them (1% chance to drop approximately). In the footlocker you might find a note named "Ship Schedule", right click it to start the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[45] Ship Schedules')
                ),
                ", which you turn in in Steamwheedle Port for an extra 4850 XP. However, you might be unlucky and never get a footlocker, so don't worry if you miss it, it's optional."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'When done, get out of Rigger Cove and go north to Steamwheedle Port. Turn in:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Andre Firebeard'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Southsea Shakedown'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[45] Stoley's Shipment"
                    ),
                    ' and get the follow up',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Deliver to MacKinley'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Pirate Hats Ahoy!'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[44] Screecher Spirits'
                    ),
                    ' and get the follow up',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[47] The Prophecy of Mosh'Aru (Dungeon)"
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Ride west to Gadgetzan and turn in:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[44] More Wastewander Justice'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[46] WANTED: Caliph Scorpidsting'
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'p',
              null,
              'Also turn in any stacks of',
              ' ',
              n.a.createElement(
                'span',
                { className: 'item' },
                '5 Wastewander Water Pouch'
              ),
              ' at Spigot Operator Luglunket (he has a blue question mark overhead)'
            ),
            n.a.createElement(
              'p',
              null,
              'If you are not level 46 at this point, go grind on',
              ' ',
              n.a.createElement('strong', null, 'pirates'),
              ' until you hit 46.'
            ),
            n.a.createElement('div', null, 'XP rate:'),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('img', {
                src:
                  'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/tanarisxp.jpg',
                alt: '',
              })
            ),
            n.a.createElement(
              'p',
              null,
              'Note: The XP counter started when I arrived in Gadgetzan and turned in "the borrower" quest. No XP bonus, I think the numbers speak for themselves.'
            )
          ),
          n.a.createElement('h6', null, 'Level 46'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Go to Ironforge'),
                ' (Fly to Theramore, take the boat to Menethil Harbor and then fly to Ironforge) In Ironforge: Visit your class trainer, sell, repair, check auction house.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'Optional:')
                ),
                ' ',
                'If you did Uldaman and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] The Platinum Discs'
                ),
                ' quest, then go to the ',
                n.a.createElement('strong', null, 'Hall of Explorers'),
                ', talk to High Explorer Magellas, get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] Portents of Uldum'
                ),
                ', then talk to Historian Karnik further inside the Hall of Explorers and get the follow up ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] Seeing what Happens'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Fly to ',
                n.a.createElement('strong', null, 'Southshore'),
                ', then go northeast to',
                ' ',
                n.a.createElement('strong', null, 'the Hinterlands'),
                ' ',
                n.a.createElement('em', null, '(84,32)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'In Hinterlands go northeast to ',
                n.a.createElement('strong', null, 'Aerie Peak'),
                ' ',
                n.a.createElement('em', null, '(14,47)'),
                '. Get the quests:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Troll Necklace Bounty'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Skulk Rock Clean-up'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] To the Hinterlands'
                ),
                ' at',
                ' ',
                n.a.createElement('strong', null, 'Falstad Wildhammer'),
                ' and get the follow up:',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[43] Gryphon Master Talonaxe'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'On your way up to the top get the flight path for Aerie Peak. Talk to ',
                n.a.createElement('strong', null, 'Gryphon Master Talonaxe'),
                ' and get the follow up:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[43] Rhapsody Shindigger'
                    ),
                    '. Also get',
                    ' '
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Witherbark Cages'
                    ),
                    ' from him.'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Then make Aerie Peak your home location. The innkeeper wanders about on the top floor inside the inn.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  '** Reminder: If you find a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'distress beacon'
                  ),
                  ' on mobs in Hinterlands, right click it and get the quest**'
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit:')
                )
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/hintercircuit1.jpg',
                  alt: '',
                })
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Head out directly ',
                n.a.createElement('strong', null, 'east of Aerie Peak'),
                ", follow a small path while staying close to the mountain to your left. You will find Shindigger's camp ",
                n.a.createElement('em', null, '(26,48)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Talk to ',
                n.a.createElement('strong', null, 'Rhapsody'),
                ' and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[43] Rhapsody's Kalimdor Kocktail"
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  '**While in the Hinterlands look for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Wilkdkin Feathers'
                  ),
                  ", they are big white/brown feathers you can find on the ground throughout Hinterlands. They don't drop off the Owlbeasts. I found most of them in between Aerie Peak and Quel'Danil Lodge. Start gathering them from now on while doing the quest circuit**"
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go south to the troll ruins of ',
                n.a.createElement('strong', null, "Zun'watha"),
                ' ',
                n.a.createElement('em', null, '(23,58)'),
                ', clear the camp and check the first and second Witherbark cages.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go east to the troll ruins of ',
                n.a.createElement('strong', null, "Hiri'watha"),
                ' ',
                n.a.createElement('em', null, '(32,57)'),
                '. Clear some space inside and check the "Third Witherbark Cage" Kill trolls until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '5 Troll Tribal Necklaces'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go northeast to ',
                n.a.createElement('strong', null, "Agol'Watha"),
                ' ',
                n.a.createElement('em', null, '(46,40)'),
                ' and kill ',
                n.a.createElement('strong', null, '10 Green Sludges'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go east to ',
                n.a.createElement('em', null, 'Skulk Rock'),
                ' ',
                n.a.createElement('em', null, '(56,44)'),
                ' and kill',
                ' ',
                n.a.createElement('strong', null, '10 Jade Ooze'),
                '. Beware of the wolf stalkers there though, they are stealthed, so be prepared for unexpected adds.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('em', null, 'Optional:'),
                ' If you got the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Distress Beacon OOX-22/HL'
                ),
                ', go to the lake northwest of Skulk Rock and find the Homing robot there',
                ' ',
                n.a.createElement('em', null, '(49,37)'),
                '. Turn in the quest. Before you accept the rescue quest, here is what you must know:'
              ),
              n.a.createElement(
                'ul',
                null,
                n.a.createElement(
                  'li',
                  null,
                  "This quest, unlike the Feralas one, is more likely to be done solo. It's still not a walk in the part of course. So if you got a partner to duo it, all the better for you."
                ),
                n.a.createElement(
                  'li',
                  null,
                  "Let the chicken run in front of you, let it get the first hit. If it's not getting hit, it won't fight back. Sometimes mobs are actually chasing the chicken and failing to get a hit on it, so they give up."
                ),
                n.a.createElement(
                  'li',
                  null,
                  "You'll have to face 2 ambushes of 3 mobs each, make sure you are full health/mana and with long cooldown abilities up when you start the escort. When the 3 ambushers attack, stand back until the chicken gets hit. Then let the chicken tank one of the 3 adds, deal with the 2 others as quick as you can, then help the chicken finish off the 3rd add."
                )
              ),
              n.a.createElement(
                'p',
                null,
                "If you don't have the beacon, you can come back later when you get one. But of course now is the most efficient time to do it, cause it's on your quest path",
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go southeast, to the ',
                n.a.createElement('strong', null, 'Overlook Cliffs'),
                n.a.createElement('em', null, '(70,63)'),
                ' and follow the path down to the shore.'
              ),
              n.a.createElement(
                'p',
                null,
                'Search your bags for the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Super Snapper FX'
                ),
                ' and make a hotkey out of it. Then ride along the shore and search for a named turtle named',
                ' ',
                n.a.createElement('strong', null, 'Gammerita'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "She is easy to discern from the rest because she's the only aggressive turtle (red name -- turn NPC names on in your interface options, advanced options tab). She roams a lot, so you'll find her anywhere between the waterfall ",
                n.a.createElement('em', null, '(82,47)'),
                ' and Revantusk Village ',
                n.a.createElement('em', null, '(77,77)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                ' ',
                "You don't need to kill her, just get close enough and use the Super Snapper FX on her, she will not like it and will attack you, just run away. You should now normally have a",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Snapshot of Gammerita'
                ),
                ' in your inventory.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Hearthstone ',
                n.a.createElement('strong', null, 'back to Aerie Peak'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in the quests:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[45] Troll Necklace Bounty'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Skulk Rock Clean-up'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('em', null, 'Optional:'),
                ' You can turn in more Troll Necklaces at the same NPC if you have extra stacks of 5. You gain 390 XP and extra faction with these dwarves each time.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go to the top floor of Aerie Peak to Gryphon Master Talonaxe and get the follow up: ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] The Altar of Zul'
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit:')
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/hintercircuit1xp.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'Sell, repair, buy up to 3 stacks food/drink.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go to the ',
                n.a.createElement('strong', null, 'Altar of Zul'),
                ' ',
                n.a.createElement('em', null, '(49,64)'),
                ' and kill trolls / wolves there. Now the best would be that you shout in the "Looking for group" channel the following:',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  '"Looking for more to do',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    '[48] The Altar of Zul'
                  ),
                  ' and get the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Sacred Mallet'
                  ),
                  '"'
                ),
                "During peak times there's almost always people interested in doing that."
              ),
              n.a.createElement(
                'p',
                null,
                "Anyway, if you don't find people willing to do this immediately, just keep on killing trolls / wolves in this area (or the lower level ones to the west) until you get a group going."
              ),
              n.a.createElement(
                'p',
                null,
                'Also use the oportunity to finish the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Wildkin Feather'
                ),
                ' gathering. (You need 15 feathers)'
              ),
              n.a.createElement(
                'p',
                null,
                'You and two level 50s should be just enough to kill the 2 NPCs on top of the Altar of Zul. More will make it easier of course. I even managed to do it with just me (lvl 47 rogue) and a level 48 priest. But it was really close.'
              ),
              n.a.createElement(
                'p',
                null,
                "On top of the temple of Zul you'll find 2 level 50 elites.",
                ' ',
                n.a.createElement('strong', null, "Qiaga and Morta'gya."),
                'With me playing my mage I managed to kill them with a level 51 Hunter and a 50 Priest, I sheeped Morta and we killed Qiaga first. It went quite smooth.'
              ),
              n.a.createElement(
                'p',
                null,
                'Loot the ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Sacred Mallet"'
                ),
                " from Qiaga. Then walk on top of the altar in the middle of it and you'll get a quest update for",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] The Altar of Zul.'
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  "**Note: If you don't find a group to kill the 2 elites, nevermind. You can still run up to the top of the altar, complete",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    '[48] The Altar of Zul'
                  ),
                  ' and run away. The Mallet is really optional**'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Say goodbye to your group and grind on trolls (you choose which camp) until you are one bubble away from ',
                n.a.createElement('em', null, 'level 47'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  n.a.createElement('em', null, 'Optional:')
                ),
                ' ',
                'While grinding you can also go to ',
                n.a.createElement('strong', null, "Shadra'Alor"),
                ' and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[53] Jammalan the Prophet'
                ),
                " from the Atalai' Exile ",
                n.a.createElement('em', null, '(32,74)'),
                ". That's if you plan to do the Sunken Temple instance later on (I recommend it)"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Then go back to the top of ',
                n.a.createElement('strong', null, 'Aerie Peak'),
                ' and speak with Gryphon Master Talonaxe. Turn in the quest and get the follow up:',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Thadius Grimshade'
                )
              ),
              n.a.createElement(
                'p',
                null,
                "Don't forget to turn in the Troll Necklaces for extra exp at Fraggar Thundermantle (in the inn). ",
                n.a.createElement('em', null, 'Important:'),
                ' Keep Aerie Peak as your home location until further notice.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Fly to ',
                n.a.createElement('strong', null, 'Ironforge'),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Sell, repair, check AH. you really have to buy the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '2 Elixirs of Fortitude'
                ),
                " if you didn't already (See shopping list)."
              ),
              n.a.createElement(
                'p',
                null,
                'Fly to Menethil Harbor, take the boat to Auberdine, fly to',
                ' ',
                n.a.createElement('strong', null, "Rut'Theran village"),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "In Rut'theran Village turn in the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Favored of Elune?'
                ),
                ' at Erelas Ambersky ',
                n.a.createElement('em', null, '(55,92)'),
                '. In the same house on the 1st floor turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] The Super Snapper FX (Elite)'
                ),
                '. Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] Return to Troyas'
                ),
                '. You should also be ',
                n.a.createElement('strong', null, 'level 47'),
                ' now. Congratulations.'
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 47'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Fly back to Auberdine then fly to',
                ' ',
                n.a.createElement('strong', null, 'Feathermoon Stronghold'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Buy up to 4 stacks of food/drink then talk to Troyas Moonbreeze and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] The Stave of Equinex'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Get ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[51] The Sunken Temple'
                ),
                ' from Angelas Moonbreeze, standing next to Troyas.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'Circuit:')
                )
              ),
              n.a.createElement(
                'div',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/feralascircuit2.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'Cross the sea east to the peer in Feralas and get the two quests from the goblin named Zorbin Fandazzle (44,43)',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Zapped Giants'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Fuel for the Zapping'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Look inside your bags for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Zorbin's Ultra-Shrinker"
                ),
                ' and put it on a hotkey.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Then go ',
                n.a.createElement('strong', null, 'south'),
                ' along the shore and start killing',
                ' ',
                n.a.createElement('strong', null, 'water elementals'),
                '. Look for giants as well, they are elite but if you use the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Zorbin's Zapper"
                ),
                ' on them they become totally managable.'
              ),
              n.a.createElement(
                'p',
                null,
                'Keep killing elementals and giants until you got 15',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Miniaturization Residue'
                ),
                ' and 10',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Water Elemental Core'
                ),
                '. Once finished, go turn in your quest at',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'person' },
                  'Zorbin Fandazzle'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  n.a.createElement('em', null, 'Optional:')
                ),
                ' ',
                "You can take the 2 follow ups (which appear lvl 55 but are still about the same mobs) if you feel like it and redo the quests several times, it's not so bad for grinding as you get an extra 550XP, 21 Silver and faction increase with all Steamwheedle Cartel factions per quest turn in, but on the other hand those elementals are kinda hard to kill with certain classes, so I'll let you be the judge here. (I redid both quests only once, then it was getting too boring",
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                ),
                ')'
              ),
              n.a.createElement(
                'p',
                null,
                "Note: For engineers it's worth it, because after completing the quests, Zorbin opens his store and you can buy Schematic: Snake Burst Firework."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get ',
                n.a.createElement('strong', null, 'back on the main road'),
                ' and ride north/northeast towards the yeti cave ',
                n.a.createElement('em', null, '(51,32)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'On the way there also kill every ',
                n.a.createElement('strong', null, 'Ironfur Bear'),
                ' and',
                ' ',
                n.a.createElement('strong', null, 'Groddoc Thunderer'),
                ' you find. You need',
                ' ',
                n.a.createElement('span', { className: 'item' }, '3 livers'),
                ' of each for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    "[43] Rhapsody's Kalimdor Kocktail"
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Kill ',
                n.a.createElement('strong', null, 'Rage Scar Yetis'),
                ' until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '10 Rage Scar Yeti Hide'
                ),
                ' and a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Pristine Yeti Hide'
                ),
                ' ',
                n.a.createElement('em', null, '(rare drop)'),
                '. When you get the Pristine hide, right click it and get the quest.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('em', null, 'Note:'),
                ' Miners / Skinners you might want to grind here a little, this is a good spot.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get out of the yeti cave and ',
                n.a.createElement('strong', null, 'go north'),
                ' until you can get back on the main road, then northwest until you find a stone giant named Rockbiter. Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[49] The Giant Guardian'
                ),
                ' from him.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go directly north to the ',
                n.a.createElement('strong', null, 'Ruins of Ravenwind'),
                ". We're now gonna do the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] The Stave of Equinex'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'There are level 48-50 ',
                n.a.createElement('strong', null, 'Harpies'),
                ' everywhere in those ruins, the lvl 50s will be a bit harder but manageable. Plus, they drop ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Vibrant Plumes'
                ),
                " for Darkmoon Faire tickets. Be careful with runners, overall, be very careful in that area, take your time to pull one by one, don't be reckless or you will die",
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  '(I did!',
                  ' ',
                  n.a.createElement(
                    'span',
                    { role: 'img', 'aria-label': 'smile' },
                    '\ud83d\ude42'
                  ),
                  ')'
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'First ',
                n.a.createElement('strong', null, 'go west'),
                ' to ',
                n.a.createElement('em', null, '(38,15)'),
                ", next to a thick square tower you'll find a dark gazebo, inside of it is the first flame, right click it. Loot the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Byltan Essence'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go ',
                n.a.createElement('strong', null, 'northeast'),
                ' to ',
                n.a.createElement('em', null, '(40,12)'),
                ' to some big ruined arch, the 2nd flame is on the top of it in the middle. To get there you have to get behind the building and jump from stones to stones until you can reach the flame of Samha. Right click it and loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Samha Essence'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go back and jump down the building, directly northeast of it and on slightly higher ground among ruins you will find the flame of Imbel. ',
                n.a.createElement('em', null, '(39,9)'),
                ' Loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Imbel Essence'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then go southwest (ignore Shay Leafrunner for now if you see her) until ',
                n.a.createElement('span', { className: 'item' }, '(37,11)'),
                '. The Flame of Lahassa is under a dark brown gazebo. Loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Lahassa Essence'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Now that you have all 4 essences, go ',
                n.a.createElement('strong', null, 'southeast'),
                ' to the Equinex Monolith ',
                n.a.createElement('em', null, '(38,13)'),
                '. Clear some space around it, then go to it, search your bags for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Troyas's Stave"
                ),
                '. Right click it to charge the stave, then right click the monolith, complete the quest, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[50] The Morrow Stone')
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get out of the Monolith area and then clear yourself a path',
                ' ',
                n.a.createElement('strong', null, 'northwest'),
                ' to Shay Leafrunner. Before you take the quest, ',
                n.a.createElement('em', null, 'here is the trick :')
              ),
              n.a.createElement(
                'p',
                null,
                'After taking the quest you must loot the bell from the chest next to Shay. Make a hotkey of that bell. Now here is the problem with Shay, she wanders off every now and then, she always says something like "oh what a beautiful flower" and goes away. When she does that you are supposed to ring the bell and she will run back to you. The problem is that the bell has a rather long cooldown so she ends up wandering off too often.'
              ),
              n.a.createElement(
                'p',
                null,
                'The trick is that',
                ' ',
                n.a.createElement(
                  'strong',
                  null,
                  'as soon as you ring the bell, she will run to you, so you should start running southeast / south towards Rockbiter'
                ),
                ' ',
                n.a.createElement('em', null, '(42,21)'),
                ' and she will keep running after you until she catches up.'
              ),
              n.a.createElement(
                'p',
                null,
                'When she catches up she will say something like \'I wandered off again, sorry". But the cooldown on the bell will be reset already.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  n.a.createElement('em', null, 'In short:')
                ),
                ' ',
                "When she wanders off, ring the bell and run away, don't let her catch up to you. Even if you get aggroed by mobs keep running. Only stop if Shay herself gets attacked, then you will have to defend her. You can run and look behind you by holding your mouse's left click and moving the mouse, to make sure she's still running after you."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Once at the giant, turn in the quest. Then go southeast and back on the road, follow the road south and then east until ',
                n.a.createElement('em', null, '(54,41)'),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "Now you can go south back into the Yeti Cave and try to escort the Homing Robot again if you didn't before. It's still really hard solo, but at level 47 I managed to do it (was extremely close with the mage though)."
              ),
              n.a.createElement(
                'p',
                null,
                'I recommend finding someone willing to duo it with you. Anyway, one advice, just ',
                n.a.createElement('strong', null, 'ALWAYS'),
                ' let the chicken get hit first before you do anything.'
              ),
              n.a.createElement(
                'p',
                null,
                "If you don't manage to solo this quest or can't find a person to duo it just abandon it. It's really optional, but do try hard though.",
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Then get ',
                n.a.createElement('strong', null, 'back on the road'),
                ', keep going east and past the bridge until ',
                n.a.createElement('em', null, '(65,49)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'When there, go down and northeast towards the grimtotem camp. Go talk to Kindal Moonweaver (those two elven chicks we already helped back then with the sprite darters). Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[47] An Orphan Looking for a Home'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then ride back to Feathermoon Stronghold. Turn in :',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Improved Quality and'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[48] Pristine Yeti Hide at Pratt McGrubben'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[50] The Morrow Stone at Troyas Moonbreeze'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit:')
                )
              ),
              n.a.createElement(
                'p',
                null,
                'I went linkdead right in the middle of the Ruins of Ravenwind, so no XP rate screenshot. But from what I checked before going linkdead and after. This session lasted about 2H45min. The exp rate was around 30000 XP/ Hour for a total of ~80000 XP gained. Sell/repair/refill up to 3 stacks food/drink.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Fly to ',
                n.a.createElement('strong', null, 'Thalanaar'),
                ' and then to',
                ' ',
                n.a.createElement('strong', null, 'Gadgetzan'),
                '. In Gadgetzan get:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[46] Gadgetzan Water Survey'
                    ),
                    " from Senior Surveyor Fizzledowser (he's on a mound of earth behind the houses on the west side of Gadgetzan)"
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[49] The Thirsty Goblin'
                    ),
                    ' from Maren Noggenfogger'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[49] The Dunemaul Compound'
                    ),
                    ' from Andi Lynn (behind the Inn)'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[50] Thistleshrub Valley'
                    ),
                    " from Tran'Rek"
                  )
                )
              )
            ),
            n.a.createElement('strong', null, 'Circuit:'),
            n.a.createElement(
              'div',
              null,
              n.a.createElement('img', {
                src:
                  'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/tanariscircuit1.jpg',
                alt: '',
              }),
              n.a.createElement('img', {
                src:
                  'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/tanariscircuit1info.jpg',
                alt: '',
              })
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get out of Gadgetzan and ',
                n.a.createElement('strong', null, 'go south'),
                ' until you find the skeletal remains of some huge animal ',
                n.a.createElement('em', null, '(50,35)'),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'Kill all the Fire Rocs you find there. You got another of those huge skeletal remains to the southwest. Cycle between those 2 spots until you get the ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '3 Roc Gizzards'
                ),
                ' you need for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    "[43] Rhapsody's Kalimdor Kocktail"
                  )
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go ',
                n.a.createElement('strong', null, 'northwest'),
                ' to the pool of water by the Sandsorrow watch ',
                n.a.createElement('em', null, '(38,29)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Stand by the western tip of the pool and get full health/mana. Search your bag for a black vial named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Untapped Dowsing Widget"'
                ),
                " and right click it. Two level 48 insects will pop and attack you, kill them or run away from them. It doesn't matter."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go east back to ',
                n.a.createElement('strong', null, 'Gadgetzan'),
                '. Talk to Senior Survery Fizzledowser and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Noxious Lair Investigation'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go south to the area named "Broken Pillar" ',
                n.a.createElement('em', null, '(52,45)'),
                ' and talk to Marvon Rivetseeker. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[51] The Sunken Temple'
                ),
                ' and get the follow up ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[51] The Stone Circle'
                ),
                '. Also get ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[48] Gahz'ridian"
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go west / southwest to the ',
                n.a.createElement('strong', null, 'Dunemaul Compound'),
                ' and clear a path to the cave there ',
                n.a.createElement('em', null, '(40,56)'),
                ". In that cave you'll find ",
                n.a.createElement('strong', null, "Gor'marok the Ravager"),
                ', kill him. (lvl 49 - soloable at lvl 47 without a problem)'
              ),
              n.a.createElement(
                'p',
                null,
                'Go southeast to the ',
                n.a.createElement('strong', null, 'Eastmoon Ruins'),
                n.a.createElement('em', null, '(48,64)'),
                " (yes, even if you didn't finish",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[49] The Dunemaul Compound'
                  )
                ),
                ' ',
                'yet.) Start killing ',
                n.a.createElement('strong', null, 'ogres'),
                ' there and look on the floor for ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Gahz'Ridian pieces"
                ),
                '. They look like white upside down plates. Kill ogres in that camp until you got ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "30 Gahz'Ridian Ornament"
                ),
                ' and hit level 48.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'If it\'s too crowded, there is another camp similar to this one further to the southwest named "Southmoon Ruin" ',
                n.a.createElement('em', null, '(41,72)'),
                ". When you hit 48 and got 30 Gahz'Ridian ornament you should also be done with",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[49] The Dunemaul Compound'
                  )
                ),
                '. If not, kill some more ogres',
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 48'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  n.a.createElement('em', null, 'Optional:')
                ),
                ' ',
                'If you went to Uldaman and did the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] The Platinum Discs'
                ),
                ', go southwest to Uldum ',
                n.a.createElement('strong', null, '(38,79)'),
                '. The Dune Smashers have a small aggro range, you can hug the left wall and reach the Stone Watcher of Norgannon, just be careful of the one roamer.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  'The Stone Watcher of Norgannon'
                ),
                ' is at',
                ' ',
                n.a.createElement('em', null, '(37,81)'),
                '. Click the ',
                n.a.createElement('strong', null, 'Uldum Pedestal'),
                ' under him and get the follow up, then talk to the Stone Watcher of Norgannon who just appeared on the pedestal. Go through his dialogue and you will complete the follow up. Then click the Uldum pedestal again, complete the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[50] Return to Ironforge')
                ),
                ". Now wasn't that the easiest 9400xp ever?"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go west (northwest if you went to Uldum) to',
                ' ',
                n.a.createElement('strong', null, 'Thistleshrub Valley'),
                ' ',
                n.a.createElement('em', null, '(28,67)'),
                '. Kill',
                ' ',
                n.a.createElement('strong', null, 'Gnarled Thistleshrubs'),
                ' and',
                ' ',
                n.a.createElement('strong', null, 'Thistleshrub Rootshapers'),
                ' until you get 8 kills of each. Also kill ',
                n.a.createElement(
                  'strong',
                  null,
                  'Thistleshrub Dew Collectors'
                ),
                ' until a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Laden Dew Gland'
                ),
                ' drops',
                ' ',
                n.a.createElement('em', null, '(rare drop)'),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go north to the ',
                n.a.createElement('strong', null, 'Noxious Lair'),
                ' ',
                n.a.createElement('em', null, '(31,51)'),
                '. Kill',
                ' ',
                n.a.createElement('strong', null, 'Centipaars'),
                ' there, ',
                n.a.createElement('strong', null, 'Stingers'),
                ',',
                ' ',
                n.a.createElement('strong', null, 'Wasps'),
                ', ',
                n.a.createElement('strong', null, 'Tunnelers'),
                '.. until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '5 Centipaar Insect Parts'
                ),
                '. Then go back to Gadgetzan.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'In Gadgetzan turn in:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[49] The Thirsty Goblin'
                      )
                    ),
                    ' ',
                    'at Marin Noggenfogger. Get the follow up',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement('strong', null, '[49] In Good Taste')
                    ),
                    '.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[49] The Dunemaul Compound'
                      )
                    ),
                    ' ',
                    'at Andi Lynn'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[50] Thistleshrub Valley'
                      )
                    ),
                    ' ',
                    "at Trank'Rek"
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[49] In Good Taste at Sprinkle'
                      )
                    ),
                    ', get the follow up',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        "[49] Sprinkle's Secret Ingredient"
                      )
                    ),
                    '.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[47] Noxious Lair Investigation'
                      )
                    ),
                    ' ',
                    'at Alchemist Pestlezugg'
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Get the quest:',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] The Scrimshank Redemption'
                ),
                ' from Senior Surveyor Fizzledowser.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit:')
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/tanariscircuit1xp.jpg',
                  alt: '',
                })
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Sell/repair/restock food-drink (3 stacks).'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go south to the ',
                n.a.createElement('strong', null, 'Broken Pillar'),
                ' and talk to Marvon Rivetseeker, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[48] Gahz'ridian")
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go further south to the ',
                n.a.createElement('strong', null, 'Gaping Chasm'),
                n.a.createElement('em', null, '(56,61)'),
                ', clear yourself a path through the insects southwards until you find the entrance spiralling down at',
                ' ',
                n.a.createElement('em', null, '(55,70)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Take the 2nd tunnel you see when going down the spiral, the one going north ',
                n.a.createElement('em', null, '(55,69)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Inside the tunnel at the first fork go right. Then go through the circular room.'
              ),
              n.a.createElement(
                'p',
                null,
                'After the circular room at the first fork go right. You will enter a big square room. ',
                n.a.createElement(
                  'strong',
                  null,
                  "The Scrimshank's Surveying Gear"
                ),
                ' ',
                n.a.createElement('em', null, '(55,71)'),
                ' is at the western corner of the square room.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/scrimshankgear.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'Loot it and then go back the way you came from, and then go north until you are out of the Gaping Chasm.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "If you don't have the Distress Beacon, go back to",
                ' ',
                n.a.createElement('strong', null, 'Gadgetzan'),
                '.'
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'If you do have the Distress Beacon for Tanaris: Go east and inside the mountain at ',
                n.a.createElement('em', null, '(60,64)'),
                '. You will find the',
                ' ',
                n.a.createElement('strong', null, 'Homing Robot OOX-17/TN'),
                " there. Turn in the quest. Get full health/mana, refresh buffs. Check if your long cooldown abilities are up. For some classes this will be hard to solo, so if you don't manage it better find someone to duo it with. If you don't manage that, just abandon the escort quest, it's optional anyway."
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  'Things to know about this escort quest:'
                ),
                n.a.createElement(
                  'ol',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    'Let the chicken in front, let him get hit first. Sometimes mobs will aggro him but not manage to hit him while he walks and they will just give up.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    'The first part of the escort is the hardest as you will run into lvl 46-47 mobs. And at some point you will get an ambush of 3 level 46 scorpions. Use your long cooldown abilities there. After this, it gets easier.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    'Later on you will get a 2nd ambush, 3 humanoids lvl 42 (green). One will be a shadow mage though, kill it first.'
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Ride back to Gadgetzan, talk to Senior Surveyor Fizzledowser and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[48] Insect Part Analysis'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to Alchemist Pestlezugg, get the follow up and get back to Surveyor Fizzledowser. Turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[49] Rise of the Slithid'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Get your 2 ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Elixir of Fortitude'
                ),
                ' from the bank in Gadgetzan. Then ride north to the thousand needles.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go to the ',
                n.a.createElement('strong', null, 'Mirage Raceway'),
                ' and talk to Quentin',
                ' ',
                n.a.createElement('em', null, '(78,74)'),
                '. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[47] An Orphan Looking for a Home'
                  )
                ),
                '. Get the follow up, turn it in instantly (as you already have the 2',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Elixir of Fortitude'
                ),
                ').'
              ),
              n.a.createElement(
                'p',
                null,
                'Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] The Newest Member of the Family'
                ),
                ' ',
                'and hearthstone to ',
                n.a.createElement('strong', null, 'Aerie Peak'),
                '. Go talk to Agnar Beastamer, he is inside the inn on the lower level. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] The Newest Member of the Family'
                ),
                '. Get the follow up ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Food for Baby'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'End of Circuit')
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "Now don't worry we are gonna hit Ironforge soon to visit the class trainer, but first, repair/sell, refill food/drink (3 Stacks)."
              ),
              n.a.createElement(
                'p',
                null,
                'Get out of Aerie Peak by the small path to the east and go to Rhapsody Shindigger. ',
                n.a.createElement('em', null, '(26,48)'),
                'Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    "[43] Rhapsody's Kalimdor Kocktail"
                  )
                ),
                '. Watch him get drunk and then get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, "[43] Rhapsody's Tale")
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Ride east towards the area in between Shaol'Watha and Jintha'Alor",
                ' ',
                n.a.createElement('em', null, '(65,50)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'At this spot and widely around it you should find',
                ' ',
                n.a.createElement('strong', null, 'Silvermane Stalkers'),
                '. They are level 47-48 wolves and they are stealthed. Run circles in the area I described among the trees, hit tab while looking around.'
              ),
              n.a.createElement(
                'p',
                null,
                'You should find them quickly, they drop the stuff you need 40% of the time. (Humans: use perception / Warlocks: Buff yourself with detect invisibility) Kill everything on your way while you are at it, like those goofy looking Owlbeasts.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Once you got 5 x',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Silvermane Stalker Flank'
                ),
                ', ride west to',
                ' ',
                n.a.createElement('strong', null, 'Valorwind Lake'),
                ' at ',
                n.a.createElement('em', null, '(40,60)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Dive in and look for some white/red mushroom named Violet Tragan. Loot one. (Don't right click it when its in your inventory!)"
              ),
              n.a.createElement(
                'p',
                null,
                'Then go back to Aerie Peak, into the inn, back to Agnar Beastamer. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[47] Food for Baby')
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[48] Becoming a Parent')
                ),
                ". Turn it in, congratulations on your new pet. It's useless but it's cute",
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                ),
                ' ',
                "(and wasn't a waste of time XP wise)"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Fly to Ironforge, visit your class trainer, sell, repair, auction.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  'If you went to Uldaman before and if you did the platinum discs quest:'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Go to the Halls of Explorer, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] Return to Ironforge'
                ),
                ' at Historian Karnik and',
                n.a.createElement('br', null),
                ' get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] A Future Task'
                ),
                '.',
                n.a.createElement('br', null),
                'Also get ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[52] Passing the Burden'
                ),
                ' from him.',
                n.a.createElement('br', null),
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] A Future Task'
                ),
                ' at High Explorer Magellas. (yet another 4700 XP and 2 Gold 20 Silver.)'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('em', null, 'Note:'),
                ' This is why I really advise doing certain instances. They are not a waste of time at all if you do them the right way. Here we got 3 times 4700XP only because we did a quest in Uldaman back then.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Fly to Stormwind, go to the Dwarven District to Brohann Caskbelly',
                ' ',
                n.a.createElement('em', null, '(64,20)'),
                ' and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[50] Into The Temple of Atal'Hakkar (Dungeon)"
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Fly to Nethergarde Keep (Blasted Lands) talk to Thadius Grimshade and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[47] Nekrum's Medallion (Dungeon)"
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Fly to Darkshire and then to Booty Bay.'
              ),
              n.a.createElement(
                'p',
                null,
                'In Booty Bay turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[45] Deliver to MacKinley'
                ),
                ' at "Sea Wolf" MacKinley (close to the inn) and all the Rescue OOX-22 quests you completed at Oglethorpe Obnoticus (2nd house to the right of the forge), if you completed any, that is.'
              ),
              n.a.createElement(
                'p',
                null,
                'If you completed all 3 rescues you get and extra quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[50] An OOX of your own'
                ),
                ". You'll get another of those useless pets and ",
                n.a.createElement('strong', null, '7100 XP as well'),
                "! Which is why going through the pain of doing those 3 escort quests is in the end worth it. (Sadly the Tanaris beacon never dropped for the character I used to record the XP Rates, so I didn't get this bonus)"
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Go back to ',
                n.a.createElement('strong', null, 'Ironforge'),
                '. Now here is what I advise: Get a group together and go to ',
                n.a.createElement('strong', null, "Zul'Farrak"),
                '. Follow this',
                ' ',
                n.a.createElement(
                  'a',
                  {
                    href:
                      'https://web.archive.org/web/20101208214225/http://www.wow-pro.com/node/588',
                  },
                  "Zul'Farrak Instance Guide"
                ),
                '. It would be a waste not to go, you already have all the pre-quest work done, you just have to gather a few more quests in Tanaris (and one in Dustwallow Marsh).'
              ),
              n.a.createElement(
                'p',
                null,
                "Even if you don't like instances, I really suggest you do an effort on this one, it will be a great XP boost and you also get follow up quests which will be another source of extra XP later."
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'em',
                  null,
                  "You don't even have to do everything in Zul'Farrak. You can skip Antu'Sul and Witch Doctor Zum'Rah, which are arguably the hardest battles in there."
                )
              ),
              n.a.createElement(
                'p',
                null,
                'You can also skip Gahz Ridian actually, but if you get someone in your group with the Mallet, you might as well go for it. Just make sure you do at least:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    ' Kill Theka the Martyr (Get 1st Tablet)'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    " The Temple script (Loot Nekrum's Medaillon)"
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    ' Kill Hydromanther Velratha (Loot 2nd Tablet)'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'It took me just 2 Hours with a crapy pick-up group for a huge XP boost.',
                n.a.createElement(
                  'em',
                  null,
                  "If you really don't want to go to Zul'Farrak:"
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "You can abandon the quests related to it and go grind up to level 49. (Because those who go to Zul'Farrak will ding 49 from turning in the quests even if they don't do all the quests, Gazh'Rilla and Troll Temper namely)"
              ),
              n.a.createElement(
                'p',
                null,
                'You can grind either in Feralas on ',
                n.a.createElement('strong', null, 'Yetis'),
                ' or on',
                ' ',
                n.a.createElement('strong', null, 'Harpies'),
                ' (good for Darkmoon Faire Tickets). You can also grind on ',
                n.a.createElement('strong', null, 'ogres'),
                ' in Tanaris if you prefer.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'strong',
                  null,
                  n.a.createElement(
                    'em',
                    null,
                    "For those who go to Zul'Farrak"
                  )
                ),
                ', the optimal setup would be that one person of your group has',
                ' ',
                n.a.createElement('strong', null, 'the Mallet'),
                ' to summon ',
                n.a.createElement('strong', null, "Gahz'Rilla"),
                ". If you can't manage that it's np, this is optional and you can always come back later when you have your own mallet, if you wish to."
              ),
              n.a.createElement(
                'p',
                null,
                'In both cases, when you stop by Tanaris, talk to Sprinkle and get the follow up ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[49] Delivery for Marin'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go talk to ',
                n.a.createElement('strong', null, 'Marin Noggenfogger'),
                ' and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[49] Noggenfogger Elixir'
                ),
                ' and turn it in. The elixirs are more fun than useful but sometimes they give nifty effects like levitation or water breathing, which can be helpful situationaly. Plus now you can buy Elixirs from Marin at will',
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              ),
              n.a.createElement(
                'p',
                null,
                "You can also bind in Gadgetzan or anywhere you please if it's more convenient to you, for now."
              )
            )
          ),
          n.a.createElement('h6', null, 'Level 49'),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "So you just turned in all the quests you finished in Zul'Farrak (besides the one in Blasted Lands, cause we are going there now) or grinded your way up to level 49."
              ),
              n.a.createElement(
                'p',
                null,
                "Those who did Zul'Farrak should have already 4 bubbles in level 49 or close to that."
              ),
              n.a.createElement(
                'p',
                null,
                'Go to ',
                n.a.createElement('strong', null, 'Ironforge'),
                ' and bind there (unless you are still bound in Hinterlands),'
              ),
              n.a.createElement(
                'p',
                null,
                'Sell/repair/get 4 stacks food/drink.'
              ),
              n.a.createElement(
                'p',
                null,
                "Fly to Stormwind, go to the Mage District, then go on top of the Wizard's Tower ",
                n.a.createElement('em', null, '(37,81)'),
                '. Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[45] Vital Supplies from High Sorcerer Andromath'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('p', null, 'Fly to Darkshire (Duskwood).'),
              n.a.createElement(
                'p',
                null,
                "In Darkshire go talk to Watchmaster Sorigal (he's just down the path from the gryphon master), get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[45] Supplies for Nethergarde'
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Fly to Nethergarde Keep (Blasted Lands).'
              ),
              n.a.createElement(
                'p',
                null,
                'In Nethergarde: Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[45] Supplies for Nethergarde'
                  )
                ),
                ' ',
                'at Quartermaster Lungertz.'
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  "[47] Nekrum's Medaillon"
                ),
                " at Thadius Grimshade, he'sinside the big tower, on the highest floor. Get the follow up ",
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] The Divination'
                ),
                '. Turn it in, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[47] Return to the Hinterlands (Elite)'
                ),
                '.'
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Ride out of Nethergarde Keep, go ',
                n.a.createElement('strong', null, 'west / northwest'),
                ' ',
                'until you find the two Blood Elves at ',
                n.a.createElement('em', null, '(50,14)'),
                '. Get all their quests:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[50] A Boar's Vitality"
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[50] Snickefang Jowls'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[50] The Basilisk's Bite"
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      '[50] The Decisive Striker'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      "[50] Vulture's Vigor"
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Start killing directly from here, you can find all the animals you need to kill for theses quests in the upper part of Blasted Lands.'
              ),
              n.a.createElement(
                'p',
                null,
                'Avoid the area around the Dark Portal and the Tainted Scar. Avoid anything that is level 52 or above. Kill pretty much everything on your way until you have all the quests completed.',
                ' '
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Beware'),
                ' of the big drake flying around named',
                ' ',
                n.a.createElement('strong', null, 'Teremus the Devourer'),
                '. Besides this, just kill everything',
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              ),
              n.a.createElement(
                'p',
                null,
                "What you'll need to kill the most though are",
                ' ',
                n.a.createElement('strong', null, 'vultures and basilisks'),
                ", so here is a path you should follow, listing every possible Vulture spawn (there's also a few vulture roamers but you'll run into those too from time to time) so try to get all of them every cycle."
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/blastedlandscircuit1.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                'Completing all the quests will take a while, but here are a few tips:',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement('strong', null, 'Melees:'),
                    ' As soon as possible try to finish the quest',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[50] The Decisive Striker'
                      )
                    ),
                    ' ',
                    "and go turn it in, you'll get a +25 AGI buff for 1 Hour. When that buff wears out, go turn in either",
                    ' ',
                    n.a.createElement('strong', null, 'Snickerfang Jowls'),
                    ' (+25 STR buff) or',
                    ' ',
                    n.a.createElement('strong', null, "A Boar's Vitality"),
                    ' (+25 STA buff) depending on your preferences.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement('strong', null, 'Casters:'),
                    ' As soon as possible try to finish the quest',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        "[50] A Boar's Vitality"
                      )
                    ),
                    ' ',
                    'and turn it in for a +25 STA buff. Later on after your sta buff wears off, try to finish',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        "[50] The Basilisk's Bite"
                      )
                    ),
                    ' ',
                    'for a +25 INT buff.'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'These buffs will help you killing faster, they do not stack, so wait for them to fade before you get the next one. Make good use of them',
                ' ',
                n.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'smile' },
                  '\ud83d\ude42'
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'While killing mobs in Blasted Lands you might loot an',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Imperfect Draenethyst Fragment'
                ),
                " on one of them. Go to Kum'Isha the Collector ",
                n.a.createElement('em', null, '(51,35)'),
                '. Get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  '[55] Everything Counts in Large Amounts'
                ),
                ' ',
                "and turn it in. No need to get the follow up quest unless you get another Imperfect Draenethyst Fragment. If you are extremely lucky you'll find a",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Flawless Draenetyst Sphere'
                ),
                " In that case get the other quest from Kum'Isha and turn it in."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                "Turn in all the other blasted lands quest when they are done, don't get the follow ups (they are repeatable if you want to get more of those nifty clickable buffs later on). Now you should be approximately 4 bubbles away from level 50 if you did this right."
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Hearthstone to ',
                n.a.createElement('strong', null, 'Ironforge'),
                ' (or to Hinterlands if you are still bound there).'
              ),
              n.a.createElement(
                'p',
                null,
                "Go to Aerie Peak in Hinterlands, talk to Gryphon Master Talonaxe. (he's at the very top of Aerie Peak) Get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[53] Saving Sharpbeak (Elite)'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                'Now you got ',
                n.a.createElement('strong', null, '3 reasons'),
                ' to go to the top of',
                ' ',
                n.a.createElement('strong', null, "Jintha'Alor"),
                ". The Mallet of Zul'Farrak being one of them, but most importantly:",
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[50] The Ancient Egg (Elite)'
                      )
                    ),
                    ' ',
                    'and'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'strong',
                        null,
                        '[53] Saving Sharpbeak (Elite)'
                      )
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                n.a.createElement('strong', null, 'Build a group'),
                ' of level 50+ and go to',
                ' ',
                n.a.createElement('strong', null, "Jintha'Alor"),
                ' ',
                n.a.createElement('em', null, '(66,66)'),
                ". It's doable with 3 level 50s but it will be long and very tedious at the end, I suggest you try to fill up the group."
              ),
              n.a.createElement(
                'p',
                null,
                "Fight your way to the top of Jintha'Alor, then go to",
                ' ',
                n.a.createElement('strong', null, 'Vile Priestess Hexx'),
                ' ',
                n.a.createElement('em', null, '(59,78)'),
                '. She has one guard, you can wait till the Priestess wanders in the cave and get her guard solo.'
              ),
              n.a.createElement(
                'p',
                null,
                'Then get the Priestess solo, kill her and loot the',
                ' ',
                n.a.createElement('span', { className: 'item' }, "Hexx's key"),
                ' from her.'
              ),
              n.a.createElement(
                'p',
                null,
                "Also don't forget to forge the ",
                n.a.createElement('strong', null, "Mallet of Zul'Farrak"),
                ', just click your Sacred Mallet while being next to the Altar.'
              ),
              n.a.createElement(
                'p',
                null,
                'Go inside the cave behind where you fought the Vile Priestess. Follow this path to find the Ancient Egg:'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src:
                    'https://web.archive.org/web/20101208214225im_/http://www.wow-pro.com/guidepics/jintha1.jpg',
                  alt: '',
                })
              ),
              n.a.createElement(
                'p',
                null,
                "You'll find Hitah'ya the Keeper and 2 guards patrolling around the",
                ' ',
                n.a.createElement('span', { className: 'item' }, 'Ancient Egg'),
                ". Kill Hitah'ya the Keeper first, should be a pushover for a group of 4 or 5."
              ),
              n.a.createElement(
                'p',
                null,
                'Get the Ancient Egg. Once you have the Ancient Egg, clear the way out of the cave back to the Altar, from there go north towards the other cave at ',
                n.a.createElement('em', null, '(56,68)'),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Kill the two trolls guarding it's entrance. Then go through the cave and on the other side of it you'll find ",
                n.a.createElement('strong', null, 'Sharpbeak'),
                ' ',
                "in it's cage. Free Sharpbeak and watch him fly away with his parents."
              ),
              ' ',
              n.a.createElement(
                'p',
                null,
                'You are done, hearthstone back to Aerie Peak and turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[53] Saving Sharpbeak (Elite)'
                  )
                ),
                '.'
              ),
              n.a.createElement(
                'p',
                null,
                "Also turn in any stacks of 5 Troll Tribal Necklaces you might have gotten during your Jintha' Alor trip."
              ),
              n.a.createElement(
                'p',
                null,
                'Go turn',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement('strong', null, '[50] The Ancient Egg')
                ),
                ' ',
                'in Tanaris at Steamwheedle port, and get the follow up quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'strong',
                    null,
                    '[53] The God Hakkar (Dungeon)'
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(
                'p',
                null,
                'Turning in the quests will make you ding',
                ' ',
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'level 50')
                ),
                ' ',
                "or be very close, and you can go kill some trolls next to the Altar of Zul to finish your level, or some ogres in Tanaris. For those who didn't do Zul'Farrak: ",
                n.a.createElement('em', null, 'Time to grind!'),
                n.a.createElement(
                  'em',
                  null,
                  n.a.createElement('strong', null, 'Ding level 50')
                ),
                ', and end of Chapter II.'
              )
            )
          ),
          n.a.createElement('em', null, '-Jame')
        );
      };
      var S = function () {
        return n.a.createElement(
          'div',
          null,
          n.a.createElement('h2', null, 'Chapter 3 (50-60) [old version]'),
          n.a.createElement('h3', null, 'Introduction:'),
          n.a.createElement(
            'div',
            { className: 'content clearfix node-content' },
            n.a.createElement(
              'p',
              null,
              'This guide starts at ',
              n.a.createElement('span', { className: 'em' }, 'level 50'),
              ', it is the 3rd chapter of my guide. Before starting I suggest you read the introduction and recommendations of my',
              ' ',
              n.a.createElement(
                'a',
                {
                  href: 'http://www.wow-pro.com/node/600',
                  className: 'bb-url',
                },
                '1st Chapter'
              ),
              '. If you are already level 50+ and just found this guide, I suggest you start at some point in the',
              ' ',
              n.a.createElement(
                'a',
                {
                  href: 'http://www.wow-pro.com/node/601',
                  className: 'bb-url',
                },
                'Chapter II'
              ),
              ' ',
              'so you get the following quests, which we will be doing in this chapter: ',
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ul',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[49] Rise of the Silithid'
                  )
                )
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[50] Into the Temple of Atal'Hakkar (Dungeon)"
                  )
                )
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] The Stone Circle'
                  )
                )
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[53] The God Hakkar (Dungeon)'
                  )
                )
              )
            ),
            "However, if at any moment in the guide you lack quest log space (because of a class quest you don't want to abandon for exemple), then abandon",
            ' ',
            n.a.createElement(
              'span',
              { className: 'quest' },
              n.a.createElement(
                'span',
                { className: 'strong' },
                "[50] Into the Temple of Atal'Hakkar"
              )
            ),
            ', you can easily get it back later on in Stormwind right before you go to the ',
            n.a.createElement('span', { className: 'strong' }, 'Sunken Temple'),
            '.',
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              "Also, this guide doesn't take into account tradeskills, class specific quests or PvP.",
              ' ',
              n.a.createElement(
                'span',
                { className: 'em' },
                "It's 100% focused on getting the most experience possible in the shortest possible time"
              ),
              ' ',
              "while doing a lot of quests and enjoying as much content as possible, any race/class combination can do this guide. The most part of the guide is doable solo, when it's not it will be mentioned. The guide has been tested with four different characters, non twinked, played by the wow-pro team: a warrior, a mage, a rogue and a hunter to ensure that the guide is accessible for any class.",
              ' ',
              n.a.createElement('span', { className: 'em' }, 'Enjoy!')
            ),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Shopping List'
                )
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ul',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Before level 54'
                ),
                '1X ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Mithril Casing'
                ),
                ' (about 70-90silver at the AH)',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Before level 58'
                ),
                ' (but can equip it at level 52): 1X',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Your class',
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href:
                        'http://www.worldofwarcraft.com/info/items/armorsets/',
                      className: 'bb-url',
                    },
                    '"Dungeon Set 1"'
                  ),
                  ' ',
                  'bracers'
                ),
                '.',
                n.a.createElement('br', null),
                'Example:',
                n.a.createElement('br', null),
                "Mages should buy Magister's Bindings.",
                n.a.createElement('br', null),
                'Druids should buy Wildheart Bracers.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'The sooner the better'
                ),
                '3X ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Traveller backpacks'
                ),
                ' (those 16 Slot backpacks). They go for 5g-8g at the auction house. Hunters and warlock should just buy two, since one of their bag slots is reserved for quiver or soul bag. ',
                n.a.createElement('br', null),
                'Having a lot of bag space is really important. The higher you get in levels, the more we will go for long xp circuits far from any vendor. At level 60 when you will go farm money or anything, it will also be very handy to have a lot of bag space. Why only 3 traveller backpacks and not 4? Because at level 60 you will do a long quest line named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    "[60] You Are Rakh'likh, Demon (Elite)"
                  )
                ),
                ', and one of the rewards is a 16-slot bag, so no need to waste money on a 4th traveller pack.',
                n.a.createElement('br', null)
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 50')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Go To ',
                n.a.createElement('span', { className: 'strong' }, 'Maraudon'),
                ',',
                ' ',
                n.a.createElement(
                  'a',
                  {
                    href: 'http://www.wow-pro.com/node/594',
                    className: 'bb-url',
                  },
                  'follow this guide I wrote about Maraudon'
                ),
                ". Doing all the quests (or at least the main ones) shoud get you about 75% done in level 50. Don't turn in the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] Seed of Life'
                  )
                ),
                ' ',
                "though, it's in Moonglade and we'll make a stop there later on in the chapter.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Time to explore new areas! Repair, resupply food and drink (3 stacks), check the AH.',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Make Ironforge your homepoint'
                ),
                ". Buy 15 silk cloth if you don't have that on you already. You'll need them for a searing gorge quest.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'em' }, 'In short:'),
                  ' Go to',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Searing Gorge'
                  ),
                  '.',
                  n.a.createElement('br', null),
                  n.a.createElement('span', { className: 'em' }, 'In details:'),
                  ' From Ironforge, fly to Thelsamar, then go south to Badlands. In Badlands you can find the entrance to the Searing Gorge on the western end of the Badlands, south of Kargath (the horde outpost) at',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(3,61)')
                ),
                n.a.createElement('p', null, 'Inside Searing Gorge:'),
                n.a.createElement(
                  'p',
                  null,
                  'Follow the trail north and then west around the area named "The Cauldron" and find Kalaran Windblade',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(38,39)'),
                  '. Get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] Divine Retribution'
                    )
                  ),
                  ' ',
                  'then talk to Kalaran again and go through his dialogue. Turn in the quest and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] The Flawless Flame'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go a bit further west and you should find a path going up the mountain to ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Thorium Point'
                  ),
                  n.a.createElement('span', { className: 'em' }, '(32,33)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Thorium point, find an panel at',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(37,26)'),
                  '. Right click it and get the quests:',
                  n.a.createElement('br', null)
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[48] JOB OPPORTUNITY: Culling the Competition'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        "[48] STOLEN: Smithing Tuyere and Lookout's Spyglass"
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[50] WANTED: Overseer Maltorius (Elite)'
                      )
                    )
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get the 3 quests from Hansel Heavyhands:',
                  n.a.createElement('br', null)
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[49] Incendosaurs? Whateverosaur is More like It.'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[49] Curse These Fat Fingers'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[49] Fiery Menace!'
                      )
                    )
                  )
                )
              ),
              'and',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '[50] What the Flux?'
                )
              ),
              ' ',
              'from Master Smith Burninate.',
              n.a.createElement('p', null),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('span', { className: 'em' }, 'Note:'),
                ' If you ever need to sell and repair, you should go to this NPC.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Get the flight path.'
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Your quest log should look like this:'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src: 'http://www.wow-pro.com/files/guidepics/questlogsg.jpg',
                  alt: '',
                  className: 'bb-image',
                }),
                n.a.createElement('br', null),
                'note: You should have [49] Rise of the Silithid instead of March of the Silithid, which is the follow up. We will get it later in the guide.'
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Start of Searing Gorge circuit #1'
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src: 'http://www.wow-pro.com/files/guidepics/sgcircuit1.jpg',
                  alt: '',
                  className: 'bb-image',
                })
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                "First, go south where you'll find a big wheel (its part of a dark iron dwarven forge) and kill all the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dark Iron Steamsmith'
                ),
                ' you find there',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(39,50)'),
                ', there should be 5 or 6 around here. Hopefully one of them will drop the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'smithing tuyere'
                ),
                " you need. If not, lets just go on, we'll come back here later.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Start heading east and kill any',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'elemental'),
                ' or',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Heavy War Golem'
                ),
                ' you find on the way. Also kill ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dark Iron Taskmasters'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dark Iron Slavers'
                ),
                " on your way. Don't wait for respawns, just kill them while going east. At",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(59,35)'),
                ' mount up and ride southeast to Grimesilt Dig site and find a little wooden house at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(65,62)'),
                ' behind the dig site, which actually looks like some public toilet. Right click it and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[45] Caught!'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Start killing the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Dark Iron dwarves'
                  ),
                  ' in the camp as well as the ',
                  n.a.createElement('span', { className: 'strong' }, 'golems'),
                  ' around here. After you have killed',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '8 Dark Iron Gelologists'
                  ),
                  ' and got',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '15 silk cloth'
                  ),
                  " (if you don't have them, kill more of those dwarves, they drop silk cloth), go back to the Wooden Outhouse and turn in the quest, don't get the follow up though."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Now go back to the digsite, and clear it entirely, especially the northern part. Get full HP/Mana and get the quest from Dorius Stonetender',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[48] Suntara Stones'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'At ',
                  n.a.createElement('span', { className: 'em' }, '(66,44)'),
                  ' he will stop to catch his breath and will get ambushed by',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '4 lvl 43 Dark Iron Steelshifter'
                  ),
                  ". Easy fight for you but make sure you get at least all but one off Dorius quickly so that he doesn't die."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'At ',
                  n.a.createElement('span', { className: 'em' }, '(74,19)'),
                  " he will get assassinated (you can't help it) and a parchment will appear on the floor next to him."
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/dariusscroll.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  ' ',
                  'Click it and turn in the quest, get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] Suntar Stones'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride southwest to the entrance of The Cauldron',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(63,38)'),
                '. Inside the Cauldron, kill all the ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dark Iron dwarves'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Elementals'
                ),
                ' you find.',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'The Blazing Elementals'
                ),
                ' and the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Magma Elementals'
                ),
                ' drop the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Heart of Flame'
                ),
                ' you need. Also kill any',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Heavy War Golem'
                ),
                ' you find.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'em' }, 'Note:'),
                  ' If while killing dwarves you find a ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Grimsite Outhouse Key"'
                  ),
                  ', right click it to start the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[47] The Key to Freedom'
                    )
                  ),
                  ', we will turn it in later on.',
                  ' '
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Progress westwards inside the Cauldron until you find an iron slope going up at ',
                n.a.createElement('span', { className: 'em' }, '(46,53)'),
                '. Follow this slope until you find an entrance to the Slag Pit at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(41,54)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/theslagpit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Inside the slag pit go across the bridge, on your left will be the Quarry Gate, go through it.',
                  n.a.createElement('br', null),
                  "Work your way northwards until a bigger room where you'll find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Enslaved Archeologists'
                  ),
                  ' and a big',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '52 Elite elite golem'
                  ),
                  " lying down (ignore it). Go up the iron slope, midway on the slope you have 2 options, straight or left. Go straight. You'll soon enter a room with several pairs of ",
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'taskmasters'
                  ),
                  ' ',
                  'and ',
                  n.a.createElement('span', { className: 'strong' }, 'slavers'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "In this room further in and to the right you'll find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Overseer Maltorius'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '2 Dark Iron Sentries'
                  ),
                  ". These are 3 elites so you can't solo them. You can either try to find more people (I managed to duo it with mage + paladin) or just abandon this quest. However, behind these 3 elites you can find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Secret Plans: Fiery Flux'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "You need to click the plan and not be interupted for 6 seconds. So how do you do this? Well several classes can't do it, Paladins for example. Some can, like mage:"
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Sheep the overseer, let the 2 sentries come to you, Iceroot them, run for the scroll and loot it fast, then jump down the ledge behind the scroll.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Or warlock, hunter: Send in the pet, quickly loot the scroll and jump down.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Or warrior: charge the Taskmaster, and use intimidating shout. Loot the scroll quickly and jump down.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Engineers can probably make it too if they got a high level target dummy.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Anyway, that's if you can't find people to kill those 3 elites with you, so try to find people for it and in the meantime you can go on with the other quests inside the Slag Pit. Better try it with 2 other people, its a tough fight because Overseer is a mage and casts polymorph. If you got paladin or priest they can dispell it. Best is to sap/sheep Overseer and kill the 2 sentries first, then deal with the overseer alone."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'From the same big room, go over the iron bridge which is on the opposite side of the 3 elites. On the other side of the bridge, jump down to the lower floor at the drop off spot indicated on the map. From this spot go east and you should find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Incendosaurs'
                ),
                ', kill 20 of them.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When done with that, go back up the ramp and then get out of the Slag pit, jump down back into the Cauldron and work your way westwards looking for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Blaze Elementals'
                ),
                ' until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '4 Heart of Flame'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Then go to the iron slope you took previously at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(46,53)'),
                ' Follow this slope but this time skip the first entrance to the slag pit, and get on the elevator',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(40,54)'),
                ". The elevator will stop at the 1st floor and 2nd floor but don't get off. Wait until it's on the 3rd floor from there you can get out of the Cauldron.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Kill every ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Steamsmith'
                  ),
                  ' you find around the buildings infront and to the left of you after getting off the elevator ',
                  n.a.createElement('span', { className: 'em' }, '(39,50)'),
                  ". There is 5 Steamsmiths at this spot, pray that one of them drops a smithing Tuyere. If not don't worry, we'll kill more of these later."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Kill every ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Heavy War Golem'
                ),
                ' around and go north to Karalan Windblade',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(39,38)'),
                '. Turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[48] Forging the Shaft'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to thorium point and turn in the quests you have completed. When turning in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] What the Flux?'
                  )
                ),
                ", Master Smith Burninate will open 3 new quests to you, but they are just to work on thorium brotherhood faction, so don't bother unless you care about this faction.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'You should be',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'level 51'
                    )
                  ),
                  ' ',
                  'by now, if not you should grind on',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'dark iron dwarves'
                  ),
                  ' in the slag pit for exemple to catch up.',
                  n.a.createElement('br', null)
                )
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 51')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Sell and repair, then go south to the big dwarven forge/wheel',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(39,50)'),
                ' and kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dark Iron Steamsmiths'
                ),
                ' again. ',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Then go west and then south, basically staying close to the cauldron but never going down in it. Kill every',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'dwarf'),
                ' and',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'golem'),
                ' on your way. Basically make circles around the cauldron. Also make sure you kill any',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Greater Lava Spider'
                ),
                ' on sight.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'There is alot of them in an area west of the cauldron',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(28,47)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'While doing circles around the cauldron, make sure you kill the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Dark Iron Lookouts'
                  ),
                  ' you can find at the feet of each of the 4 watch towers. They drop the spyglass you need for one of the quests.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Anyway, as soon as you got',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '8 Thorium Plated Daggers'
                ),
                ", go back to Kalaran Windblade, even if you didn't finish the other quests yet.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'em' }, 'Note:'),
                  ' The',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Thorium Plated Daggers'
                  ),
                  ' can drop on any dark iron dwarf, it generally takes me a full turn around the cauldron to get 8 of them.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in the quest at Kalaran Windblade and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[50] The Flame's Casing (Elite)"
                    )
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go kill the ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '5 Dark Iron Steamsmiths'
                ),
                ' ',
                "again before you go, if you haven't got the Smithing Tuyere yet.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Now you should ask in Looking for Group channel if anyone is interested in doing',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[50] The Flame's Casing (Elite)"
                  )
                ),
                ' ',
                'and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Prayer to Elune (Elite)'
                  )
                ),
                ' ',
                '(we are gonna get this quest on the way soon).',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "You can duo these two quests but it might be a bit tough depending on the class mix you get. So if you find more it's even better."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you don't find people to help you immediatly, just keep on doing circles around the cauldron killing dwarves, giants and greater lava spiders while waiting on people to join your group."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Once you got yourself a group (or at least one level 48+ partner). Go west to the Twilight camp at ',
                n.a.createElement('span', { className: 'em' }, '(24,34)'),
                '. There is a cavern with ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Twilight mobs'
                ),
                ' ',
                "further to the west but don't go there, first you should go up a narrow path up the mountain. When you are up the path, you should face your first twilight mobs, they are all elite and lvl 48-50. Clear through them eastwards until you reach a small pool of lava.",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(27,26)'),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'The pool of lava might look too crowded, but actually you can get solo pulls if you know the trick. Out of the 6 mobs at this lava pool, 3 of them are',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Twilight Idolaters'
                  ),
                  ", and they don't assist if you pull a mob that is next to them, they are busy performing a ritual. They will only attack if you attack them directly."
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'So first you must pull the mobs one by one and then the idolaters'
                  ),
                  '. Once you go the lava pool cleared, you can go get the quest from that captured elf,',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Zameal Lunthistle'
                  ),
                  '. After taking his quest, talk to him again and go through his dialogue, then turn in the quest and get the follow up:',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[50] Prayer to Elune'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Now all that is left for you to do is kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Twilight mobs'
                ),
                ' (any of them) until you get :',
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      'Symbol of Ragnaros'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      'Prayer to Elune'
                    )
                  )
                )
              ),
              'When you got both these items, you can say goodbye to your group and go back to Kalaran Windblade. You can also go to thorium point for a quick sell/repair if necessary.',
              n.a.createElement('p', null),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Turn in your quest at Kalaran Windblade and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] The Torh of Retribution'
                  )
                ),
                '. Turn it in, watch him craft the torch, then get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] The Torch of Retribution'
                  )
                ),
                '. Right click the stick surrounded by a green aura, complete the quest. Talk to Kalaran again, get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Squire Maltrake.'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in the quest at Squire Maltrake and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Set Them Ablaze! (Elite)'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Luckily, this is one of the elite quests you can solo!'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go southwest to the first watch tower',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(33,52)'),
                ". Don't forget to kill any mob you might still need on the way (golem, spider, dark iron steamsmith or lookout)",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'When you are at the 1st watch tower, clear any mobs guarding it (minus the elite inside of it), then search the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Torch of Retribution'
                  ),
                  ' in your inventory, equip it, and put it on a hotkey.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "There is one elite Dark Iron Sentry on the tower, you don't need to kill it, just run past it (or stealth past it if you are rogue/druid). If you can iceroot / sheep / fear it, do so, but you don't have to. Just ignore it, quickly search for a small bowl on the floor named ",
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Sentry Brazier"'
                  ),
                  ' and right click it.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/sentrybrazier.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'It will be instantly lit. Then jump down and run away to lose aggro on the elite.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Do exactly the same thing on the 2nd tower',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(35,59)'),
                  ', the 3rd tower',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(43,63)'),
                  ' and the 4th tower accessible only through a bridge at ',
                  n.a.createElement('span', { className: 'em' }, '(52,57)'),
                  '.',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement('br', null),
                    'Note:'
                  ),
                  ' ',
                  "The 4th tower is the one with the most Dark Iron Lookouts, in case you didn't get a ",
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "Lookout's Spyglass"
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'After you are done setting the 4th tower ablaze, go east to the Grimsite dig Camp and go turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[47] The Key to Freedom'
                  )
                ),
                ' ',
                'at the wooden outhouse.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Optional:'
                    )
                  ),
                  ' ',
                  'If you feel like you are capable of soloing a level 48 Elite (green for you at lvl 51), or if you are not solo, from the grimsite camp go south and find a narrow path going up the mountain at ',
                  n.a.createElement('span', { className: 'em' }, '(65,80)'),
                  ', you will find a named rhino named ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Margol the Rager'
                  ),
                  ". I soloed him with ease at lvl 51 as mage, warrior and rogue, I just used long cooldown abilities and didn't even need to use potions. He wanders from this path in the mountain to his cave is at ",
                  n.a.createElement('span', { className: 'em' }, '(72,77)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Loot Margol's Horn from him and click it to start the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] The Horn of the Beast'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Squire Maltrake ',
                n.a.createElement('span', { className: 'em' }, '(38,39)'),
                ", turn in the quest and watch Kalaran transform into a dragon, make his speech and then he'll fly away. Righ tclick the treasure chest named",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Hoard of the Black Dragonflight"'
                ),
                ' ',
                'next to where he was, accept the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Trinkets...'
                  )
                ),
                'Then click the chest againt and complete the quest. Look in your inventory for the red box named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Hoard of the Black Dragonflight'
                ),
                ', open it and loot whats inside of it (especially the Molt, which you will need later on for a quest)',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    "You don't need the Torch of Retribution anymore, you can destroy it or bank it."
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Now there's only one thing left for you to do: finish all the quests that you haven't finished yet, and you already should know where all the mobs you need are. Once you have completed all these quests, go back to thorium point and turn them in. ",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('span', { className: 'strong' }, 'Fly'),
                " (don't hearthstone) to Ironforge and then fly to Thelsamar, ride southwest along the road until you find Mountaineer Pebblebitty ",
                n.a.createElement('span', { className: 'em' }, '(18,84)'),
                '. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[48] The Horn of the Beast (Elite)'
                  )
                ),
                '. Hearthstone to Ironforge, talk to the Innkeeper and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Assisting Arch Druid Staghelm'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'In Ironforge go to the Hall of Explorers and talk to Curator Thorius, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] Proof of Deed'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] Suntara Stones'
                    )
                  ),
                  '. Take the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] At last!'
                    )
                  ),
                  ", don't get the other follow up. Also get the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] A Little Slime Goes a Long Way'
                    )
                  ),
                  ' ',
                  'from Laris Geardawdle and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Passing the Burden'
                    )
                  ),
                  ' ',
                  "from Historian Karnik if you don't have this quest already (those who did Chapter II of my guide should have it)."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Fly to Thelsamar, go talk to Mountaineer Pebblebitty once again and turn in the quest for another 4400 xp and the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Key to Searing Gorge'
                ),
                ' (which is kinda useless nowadays since they added the Thorium Point flight path, so you can bank it).',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'End of Searing Gorge circuit #1'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src: 'http://www.wow-pro.com/files/guidepics/xpratesg.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Note:'),
                  " I had XP Bonus for the major part of the circuit, however if you do the math it's still around 30000 XP / hour."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go back to Ironforge, sell, repair, check the Auction house.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to the Mystic ward and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Arcane Runes'
                  )
                ),
                ' ',
                'from Tymor, also get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] An Easy Pickup'
                  )
                ),
                ' ',
                'from him.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the Military Ward and get the follow up from Xiggs Fuselighter, turn in the quest so you receive',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '2 "Standard Issue Flare Gun"'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Fly to Menethil Harbor and take the boat to Auberdine, then fly to Rut'theran Village, go to Darnassus and turn in the quests in the Temple of the Moon:",
                  n.a.createElement('br', null)
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[49] Rise of the Silithid'
                      )
                    ),
                    ' ',
                    'and get the quest'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] March of the Silithid'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[50] Prayer to Elune'
                      )
                    )
                  )
                )
              ),
              'Go to Arch Druid Staghelm, who is on top of the tower at the Cenarion Enclave and get the follow up',
              ' ',
              n.a.createElement(
                'span',
                { className: 'quest' },
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "[50] Un'Goro Soil"
                )
              ),
              '.',
              n.a.createElement('p', null),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                "Make Darnassus your home location, ask a Sentinel if you don't know where the Inn is.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get out of Darnassus and fly back to Auberdine, then fly to Gadgetzan.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Gadgetzan, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] March of the Silithid'
                    )
                  ),
                  ' ',
                  'at Alchemist Pestlezugg and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Bungle in the Jungle'
                    )
                  ),
                  '. Also get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[54] Super Sticky from Tran'rek."
                    )
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Resupply food/drink (4 stacks), then ride southwest to the slope going down to Ungoro Crater ',
                n.a.createElement('span', { className: 'em' }, '(27,57)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Start of Un'goro Circuit #1"
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/ungorocircuit1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go down the slope and find Torwa Pathfinder to the right up a small hill ',
                  n.a.createElement('span', { className: 'em' }, '(71,75)'),
                  '. Get the 2 quests:',
                  n.a.createElement('br', null)
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        "[53] The Fare of Lar'korwi"
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        "[55] The Apes of Un'Goro"
                      )
                    )
                  )
                )
              ),
              'From now on, while in Ungoro Crater look around for crystals. There is 4 types of crystals:',
              n.a.createElement('p', null),
              n.a.createElement(
                'p',
                null,
                'Red, Blue, Yellow and Green crystals. Loot them anytime you see them until you got ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '7 of each color'
                ),
                '. Also look for Ungoro Dirt Piles and loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Un'goro soil"
                ),
                " from them. Un'goro soil also drops fairly often from most creatures in Un'goro crater, you should try to have ",
                n.a.createElement('span', { className: 'strong' }, 'at least'),
                " about 50 Ungoro Soil before we leave Un'goro, because we will need extra soils for 2 other quests which will require you to transmuate Un'goro soils into Morrowgrain."
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Go northwest until you find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"A Wrecked Raft"'
                ),
                ' at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(63,68)'),
                '. Right click it and accept the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] It's a Secret to Everybody"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Take a dive right next to where the wrecked raft is and look underwater for yellow bag called',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"A Small Pack"'
                  ),
                  ". Click it, turn in and get the follow up. You should receive a small pack in your inventory but don't open it for now, it will save you some bagspace."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Kill every ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'dinausaur'
                  ),
                  ' you find on your way and normally you should find a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Mangled Journal'
                  ),
                  " at some point (if you don't you will later on in Ungoro, don't worry). Right click the journal and get the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[50] Williden's Journal"
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go northeast from here until ',
                n.a.createElement('span', { className: 'em' }, '(68,56)'),
                ', where you will find a big dinosaur carcass on the floor. Right click it to get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Piece of Threshadon Carcass'
                ),
                '. The cog will be grey at most part of the threshadon\'s carcass. The only spot where you can get the yellow cog and loot the flesh is at the base of the neck, and only on the east side of the carcass. Once you have your "Piece of Threshadon Carcass", go back to Torwa Pathfinder, turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[53] The Scent of Lar'korwi"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go west back into the Marshlands until you find some purple eggs on the floor ',
                n.a.createElement('span', { className: 'em' }, '(67,73)'),
                '. Clear the',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'ravasaurs'),
                ' around it, then step up on the egg pile, a ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "Lar'korwi mate"
                ),
                ' ',
                'should appear and attack you, kill her and loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Ravasaur Pheromone Gland'
                ),
                ' (75% drop rate). Then go to the next pile of eggs north of this one',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(66,67)'),
                ", do the same thing. Go back and forth between these 2 egg piles until you got 2 Glands. Go back to Torwa Pathfinder and turn in the quest, don't get the follow up.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to the Marshlands and kill Dinosaurs while looking for crystals until the following 2 goals are reached:',
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'em' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        'level 52'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'item' },
                      '7 Power Crystals of each color'
                    )
                  )
                )
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 52')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                "Ride north then northwest to Marshall's Refuge",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(46,13)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null, 'Get the following quests:'),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] Chasing A-Me 01'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        "[51] Shizzle's Flyer"
                      )
                    ),
                    ' ',
                    'from Shizzle'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] Muigin and Larion'
                      )
                    ),
                    ' ',
                    'from Muigin'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[55] Beware of Pterrordax'
                      )
                    ),
                    ' ',
                    'from the Wanted Poster next to Spraggle Frock.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[51] Roll the Bones'
                      )
                    ),
                    ' ',
                    'from Spark Nilminer'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[50] Williden's Journal"
                  )
                ),
                ' ',
                'and get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[53] Expedition Salvation'
                  )
                ),
                ' ',
                'from Williden Marshal and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Alien Ecology'
                  )
                ),
                ' ',
                "from Hol'Anyee Marshal."
              ),
              n.a.createElement(
                'p',
                null,
                'Open the "small pack" in your inventory and loot all the items from it, then turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] It's a Secret to Everybody"
                  )
                ),
                ' ',
                "at Linken (he's inside a tree trunk south of Williden Marshal), don't get the follow up yet. You can destroy the throwing daggers and the Faded Photograph from your inventory."
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                "Go inside the cave at Marshall's Refuge and go to the end of it where you'll find a little gnome named J.D. Collie.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get her quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Crystals of Power'
                    )
                  ),
                  ' ',
                  'and turn it in. Then get the 3 follow up quests she gives you:'
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Eastern Pylon'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Northern Pylon'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Western Pylon'
                      )
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Your quest log should look like this:'
                )
              ),
              n.a.createElement(
                'p',
                null,
                n.a.createElement('img', {
                  src: 'http://www.wow-pro.com/files/guidepics/questloguc.jpg',
                  alt: '',
                  className: 'bb-image',
                })
              ),
              n.a.createElement(
                'p',
                null,
                "There's a weapon merchant, use it to repair and sell junk. You can also destroy the extra power crystals if you still have any, for more bagspace."
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                "Get out of Marshall's Refuge and ride east along the wall until",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(54,13)'),
                '. At this spot go up the mountain and you should find the Northern Crystal Pylon. Click it, and examine it, you should get a "quest complete" message. Further north of the crystal you should find some',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Pterrordax'
                ),
                ' (3 of them normally), kill them.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'From this point on, kill the following mobs on sight:'
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Bloodpetals of any kind (those walking flowers)'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Pterrordaxes'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Diametradons'
                    )
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'And also beware of the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Tyrant Devilsaurs'
                ),
                ", there is a few of them roaming in Un'Goro. They are lvl 55ish elite, run fast and hit hard. So watch your back."
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Go east to Fungal Rock. You should find plenty of',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'apes'),
                ' there outside and inside the cave.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Kill apes there until you get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "2 un'goro gorilla, stomper and thunderer pelts"
                  ),
                  '. Inside the ape cave at the first fork go right until you find',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'A-Me 01'),
                  ", turn in the quest but don't get the follow up."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Be careful when fighting the Un'Goro Gorillas, they call for help when they get low health, and any other ape in a rather wide range will come to help. So, fight them away from other apes."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go south until you find 3 black pools with',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Tar Creepers'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Tar Beasts'
                ),
                ' around them',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(60,26)'),
                '. Clear these 3 pools until you have ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '12 Super Sticky Tar'
                ),
                ' (drop rate is about 25% per kill)',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go southeast until the expedition encampment',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(68,36)'),
                ' and loot the Crate of Foodstuffs.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go southeast until you find the Eastern Crystal Pylon',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(76,48)'),
                  '. Click it and examine it.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go south to Torwa Pathfinder ',
                  n.a.createElement('span', { className: 'em' }, '(71,75)'),
                  ' ',
                  'and turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[55] The Apes of Un'Goro"
                    )
                  ),
                  ", don't get the follow up."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go west to the Slithering Scar and clear yourself a path to the bug lair entrance at ',
                n.a.createElement('span', { className: 'em' }, '(50,76)'),
                '. Inside the bug lair at the first fork go left, clear the circular room and then stand in the middle of it, look in your inventory for a black vial named "Scraping Vial" and click it. If it doesn\'t work try different spots in this room until you get a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Hive Wall Sample'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'At this point you might already have gotten a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Gorishi Scent Gland'
                  ),
                  ". If you didn't, keep on killing these bugs until one drops. It can drop from any of the bugs, inside or outside the lair, it doesn't matter."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go directly south of the bug lair and up the mountain',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(50,88)'),
                '. You should find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '2 Pterrordax'
                ),
                ' there, kill them.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'A bit further to the west you should find another of those spots up the mountains with 4 or 5 Pterrordax there',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(44,87)'),
                  ', kill them. Stay at this spot until you get your 10 Pterrodax kills, you can kill some bugs while waiting on respawns.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Then get on your mount and ride to the expedition camp at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(38,66)'),
                ', try to avoid the aggros as much as possible because most mobs are too tough for you here. At the expedition camp, look for a pile of crates named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Research Equipment"'
                ),
                " and loot them. Then go northwest, run away from any aggro if you have to, the lake is pretty safe so I suggest you just swim through it, going northwest until you reach the big rock on the other bank. Behind this rock you 'll find a little goblin named Krakle, get his quest quickly",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Find the Source'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  '(Quickly because a Devilsaur roams at this place every now and then.',
                  ' ',
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/tongue.png',
                    title: 'Sticking out tongue',
                    alt: 'Sticking out tongue',
                    className: 'smiley-content',
                  }),
                  ')'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go directly west and a bit to the south and you will find the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'western crystal pylon'
                ),
                n.a.createElement('span', { className: 'em' }, '(23,57)'),
                '. Click it and examine it.',
                ' ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Ride northeast back to Marshall's Refuge and sell and repair."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you haven't finished",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Muigin and Larion'
                    )
                  ),
                  ', go out and kill some more flowers until you complete it. Go to the area which is southeast of the black pools where we killed the Tar beasts. There are plenty there and they are the easiest flowers to kill ',
                  n.a.createElement('span', { className: 'em' }, '(65,27)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Also make a stop at the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Northern Crystal Pylon'
                  ),
                  n.a.createElement('span', { className: 'em' }, '(55,13)'),
                  ' and kill the 2 Pterrordax there, you should have your 10 Pterrordax kills then.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Then go back to Marshall's Refuge and turn in:",
                n.a.createElement('p', null),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] Alien Ecology'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] Muigin and Larion'
                      )
                    ),
                    ', Get the follow up',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] A Visit to Gregan'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] Expedition Salvation'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Eastern Pylon'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Northern Pylon'
                      )
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] The Western Pylon'
                      )
                    ),
                    ', get the follow up quest',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] Making Sense of it'
                      )
                    ),
                    ' ',
                    'from J.D. Collie. Turn it in. You can bank the book you get as reward from this quest (it tells you how to combine crystals at the various pylons for some consumable crystals with effects like heals or damage shields, but nothing so great, so just bank the book to have more bagspace).'
                  )
                )
              ),
              n.a.createElement(
                'p',
                null,
                'Get out of the cave and get the quest from Linken',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] It's a secret to everybody."
                  )
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Get on your mount and ride west along the mountain until you reach two stone pillars ',
                n.a.createElement('span', { className: 'em' }, '(29,22)'),
                ". From there, follow the path going up the mountain until you zone into Silithus, keep going west on the road until you reach Cenarion Hold. In Cenarion Hold find the Hippogryph Master, he's at the feet of the highest tower. Fly to Gadgetzan.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'In Gadgetzan, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Super Sticky'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Bungle in the Jungle'
                    )
                  ),
                  ", don't get the follow up quest."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Hearthstone to Darnassus, go to the Cenarion Enclave, behind the tower you should find Jenal. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[50] Un'Goro Soil"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "End of Un'goro circuit #1"
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/ungorocircuit1xp.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Note: '),
                  "This time no xp bonus at all, and the XP from turning in [50] Un'goro Soil is missing, because I went LD before using hearthstone, and managed to take the screenshot quick. So that's actually 41000 XP/ Hour, not too shabby!"
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the top of the Cenarion tower and get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[50] Morrowgrain Research'
                    )
                  ),
                  ' ',
                  'from Arch Druid Fandral Staghelm. A floor below get the follow up from Mathrengyl Bearwalker.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Search your inventory for something named',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Evergreen Pouch"'
                  ),
                  '. From now on, click it everytime the timer is ready, it will create an "Evergreen herb casing", open it and loot what\'s inside. It can be various herbs but sometimes it will be',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Morrowgrain'
                  ),
                  ", and that's what you need. You need ",
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '2 Ungoro Soil'
                  ),
                  ' ',
                  'everytime you want to use the pouch, but you should still have about 20 left even after turning the quests.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "You will need a total of 20 Morrowgrain, which you might not get if you are unlucky with the evergreen pouch, however you will probably get 10 Morrowgrain at least, and that's what you'll need in short term, the other 10 morrowgrains are not so urgent, and we'll go back to Un'goro if you run out of Un'goro soils anyway. However once you got 20 Morrowgrain you can stop using the evergreen pouch. I personally sold the seeds and the un'goro soil I had left after obtained my 20 morrowgrain, and also destroyed the evergreen pouch, because I like having bag space",
                  ' ',
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/tongue.png',
                    title: 'Sticking out tongue',
                    alt: 'Sticking out tongue',
                    className: 'smiley-content',
                  }),
                  ". Don't stand still and do nothing while waiting on the pouch timer though, go on with the next part of the guide! You can click on the evergreen pouch every now and then everytime the cooldown is refreshed, until you get",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '20 Morrowgrain.'
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Repair, sell, visit the auction house and resupply food/drink (4 stacks). Also go to your class trainer to get your lvl 52 skills. (Warlocks, Paladins and Mages will have to go to Ironforge).',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go to Rut'Theran village and fly to Auberdine, then ride south following the road until you zone into Ashenvale."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Ashenvale keep following the road until you hit Astraanar',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(36,49)'),
                  n.a.createElement('br', null),
                  'Make Astranaar your home location and get the new flight path.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Then keep going east following the road until you zone into Azshara ',
                  n.a.createElement('span', { className: 'em' }, '(92,46)'),
                  ", it's a long ride."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Right after entering Azshara you'll find Talrendis Point to the right ",
                  n.a.createElement('span', { className: 'em' }, '(11,77)'),
                  ". Get the new flight path. Get the two quests from the tauren named Loh'atu:"
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[47] A Land Filled with Hatred',
                      n.a.createElement('br', null),
                      '[47] Spiritual Unrest'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/azsharacircuit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go north on the other side of the road to Shadowsong Shrine',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(13,74)'),
                  '. Kill',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '6 Highborne Apparitions'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '6 Highborne Lichling'
                  ),
                  ". There's more of them just a bit further to the northeast"
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When done with that, go further to the northeast until',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Haldarr Encampment'
                ),
                ', kill',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'satyrs'),
                ' there until you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[47] A Land Filled with Hatred'
                  )
                ),
                ' ',
                'complete.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Talrendis Point and turn in the two quests. Then get back on the road and ride northeast. Go around the ruins of Eldarath by the west side of it and keep going northeast. Avoid the Timbermaw Furlbogs, don\'t kill any of them even if they attack you, just run away. Avoid the other timbermaw camp "ursolan", go around it by the east side and keep riding northeast until you get to sharp hill at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(53,21)'),
                ", get to the top of it, you can only access it from the north. Uptop you'll find a goblin named Kim'jael. Get his quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[53] Kim'jael Indeed"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Just southeast of Kim'jael you'll find Thalassian Base Camp",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(55,26)'),
                '. Start killing',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Blood Elves'
                ),
                ', a lot of blood elves. This is a good grinding spot, rarely occupied. The elves have low hit points and can drop runecloth, and they respawn fast!',
                n.a.createElement('br', null),
                "For those who aren't already level 53, I suggest you grind until you are level 53 and 4 bubbles of exp in (approximately 25000 XP). Read the Next paragraph though while you grind on those elves.",
                n.a.createElement('br', null)
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 53')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                "In the blood elf camp you'll find several crates named",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Kim\'Jael\'s Equipment"'
                ),
                " scattered around. Open them all, most of the time you'll find food in it, but 25% of the time you'll find",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Kim'Jael's compass"
                ),
                ',',
                ' ',
                n.a.createElement('span', { className: 'item' }, 'scope'),
                ', etc. You\'ll get them by pair of 2. So basically you just need to find 2 "good" crates and you are done.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Once you got the quest complete and have approximately 25000 xp in level 53, go back to Kim'Jael, turn in the quest, get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[53] Kim\'Jael\'s "Missing" Equipment'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride southwest and find the path going down to the Shattered Strand ',
                  n.a.createElement('span', { className: 'em' }, '(45,37)'),
                  ", it's right next to Ursolan, southeast of it. You'll encounter some",
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'naga'),
                  ' pretty soon, kill every',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'naga'),
                  ' on your way, go southwest, until you reach the Ruins of Eldarath by a path at',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(41,48)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'South of it, at ',
                  n.a.createElement('span', { className: 'em' }, '(39,50)'),
                  " you'll find a Pillar named Rune of Jin'yael, clear the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '2 ghosts'
                  ),
                  " guarding it and any naga close to it. Right click the pillar, it will use your drawing kit and you'll receive the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "Rubbing: Rune of Jin'yael"
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "A bit further to the south, at the central point of the Ruisn of Eldarath you'll find the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "Rune of Beth'Amara"
                ),
                n.a.createElement('span', { className: 'em' }, '(36,53)'),
                '. Right click it and get the rubbing.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Just southeast of this spot is the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Rune of Markri'
                  ),
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(39,55)'),
                  ', get the rubbing.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'And the last one is much further to the south and a bit to the east, at ',
                  n.a.createElement('span', { className: 'em' }, '(42,64)'),
                  " you'll find the Rune of Sael'hai."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Grind your way through nagas back from where you came from until the path leading to the Shattered Strand at',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(45,47)'),
                  '. Consider this as a mini grinding session, because these nagas go down easily and there is a lot of them = good grind spot.',
                  ' '
                ),
                n.a.createElement(
                  'p',
                  null,
                  'You should find ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Some Rune"'
                  ),
                  ' on one of the nagas on the shattered strand, keep killing Spitelash sirens and myrmidons until one drops "Some Rune".'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Find the slope taking you out of the Shattered Strand back on high ground at ',
                  n.a.createElement('span', { className: 'em' }, '(46,39)'),
                  " and then ride northeast back to Kim'Jael, turn in the quest."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride back to the Shattered strand by the same path',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(45,37)'),
                ". This time don't kill the nagas, just ride along the shore directly south, avoiding nagas as much as possible and keep going until you hit a spot where you can't go further without having to swim ",
                n.a.createElement('span', { className: 'em' }, '(58,73)'),
                '.',
                n.a.createElement('span', { className: 'strong' }, 'Note:'),
                ' if you actually like this spot and feel like grinding, do so.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Swim east and then south to the island marked on the map',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(77,91)'),
                ', just be careful to avoid the elite giants that walk at the bottom of the sea. Anything else you can handle.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get on the Helipad and use your',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Standard Issue Flare Gun'
                  ),
                  ' from your inventory. After a few seconds a gyrocopter will land and Pilot Xiggs will come out, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Arcane Runes'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Return to Tymor'
                    )
                  ),
                  ' ',
                  "(don't worry there is still 7000 xp to come from turning that one, I didn't make you cross the ocean for peanuts",
                  ' ',
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/wink.png',
                    title: 'Eye',
                    alt: 'Eye',
                    className: 'smiley-content',
                  }),
                  ' ',
                  ') You can destroy the Flare Gun.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Hearthstone to Astraanar, sell, repair and resupply food/drink up to 4 stacks.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride to felwood this time! Follow the road east and then north at the fork.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Felwood, stay on the road until you see an elf to the right named Arathandris Silversky ',
                  n.a.createElement('span', { className: 'em' }, '(54,86)'),
                  '. Get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Cleansing Felwood'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/felwoodcircuit1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Further along the road you'll find Emerald Sanctuary, left of the road you'll see a furlbog named Grazle",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(50,84)'),
                  ', get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[48] Timbermaw Ally'
                    )
                  ),
                  ' ',
                  'from him.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Emerald Sanctuary get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[51] Forces of Jaedenar'
                    )
                  ),
                  ' ',
                  'from Greta Mosshoofand',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The Corruption of Jadefire'
                    )
                  ),
                  ' ',
                  'from Eridan Bluewind.',
                  ' '
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Also get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Verifying the Corruption'
                    )
                  ),
                  ' ',
                  "from Taronn Redfeather, don't get the other quest."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go southwest and you'll find Deadwood Village",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(49,88)'),
                ', start slaughtering',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Furlbogs'),
                '. Keep doing that until you complete',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[48] Timbermaw Ally'
                  )
                ),
                n.a.createElement('br', null),
                'Go back to Grazle and turn in the quest, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Speak to Nafien'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north following the road until',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(43,67)'),
                ', to the west should be a green pool, go there and kill ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Cursed Oozes'
                ),
                '. Each time you kill one, and after looting it, target the corpse and click on an ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Empty Cursed Ooze Jar'
                ),
                ' ',
                'from your inventory (you get these by opening the jar container you should have in your inventory).',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Fill up 6 Cursed Ooze Jar in the same fashion.'
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Then get back on the road and ride north until',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(41,59)'),
                ', just a bit before Jaedenar, on the left side of the road is a small green pool with',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'tainted oozes'
                ),
                '.',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Fill up 6 Tainted Ooze Jar'
                ),
                '. If you lack oozes there is more just on the other side of the path leading to Jaedenar. Then go to Jaedenar ',
                n.a.createElement('span', { className: 'em' }, '(40,57)'),
                ', clear yourself a path westwards through Jadefire Hounds, Guardians, Adepts and Cultists until you get to the green pool at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(35,60)'),
                ', then go back out of Jaedenar and you should be done with',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] Forces of Jaedenar'
                  )
                ),
                ' ',
                'normally.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When done with Forces of Jaedenar, get back on the road and ride south, back to Emerald Sanctuary.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Collection of the Corrupt Water'
                    )
                  ),
                  ' ',
                  'from Greta Mosshoof.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Ride north on the road until ',
                  n.a.createElement('span', { className: 'em' }, '(42,69)'),
                  ', which is just before the green pool where you killed the Cursed Oozes. Go west until you find',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Satyrs'),
                  ' among the ruins',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(38,69)'),
                  '. Kill whats on the kill list of',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The Corruption of the Jadefire'
                    )
                  ),
                  '. Shadowstalkers are stealthed but you can see them from far enough. Work your way westwards through the satyrs until you reach a green moonwell. ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Xavathras'
                  ),
                  ' should be to the left of it with a guard. I killed the weak guard first quickly and then killed Xavathras. Use long cooldown abilities if needed. Then get the last kills you need to complete the quest on your way out.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] The Corruption of the Jadefire'
                  )
                ),
                ' ',
                'is complete, get back on the road, go north and then west back into Jaedenar, once again clear the way up to the Green pool where you already went to when you did',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] Forces of Jaedenar'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get close to the moonwell and click the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Empty Canteen'
                  ),
                  ' you should find in your inventory.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get out of Jaedenar and ride back to Emerald Sanctuary. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Colleciton of the Corrupt Water'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Seeking Spiritual Aid'
                    )
                  ),
                  '. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Corruption of the Jadefire'
                    )
                  ),
                  ' ',
                  'and get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Further Corruption'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get back on the road, ride north and this time past bloodvenom falls. Shortly after the bridge go right into Shatter Scar Vale',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(39,44)'),
                '. Kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '2 Entropic Beasts'
                ),
                ', they are immune fire and deal fire damage. Walk around in the Shatter Scar Vale until you get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Explore the craters"'
                ),
                ' complete message. Further to the east and a bit to the north at the last crater you should find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Entropic Horrors'
                ),
                ", they are just a bit higher level than the Entropic Beasts but still in your range. Kill two Entropic Horrors then get back on the road. If you don't find Entropic Horros, kill Entropic Beasts until Entropic Horros respawn instead.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north until the road curves to the right, just a bit further after the curve at ',
                n.a.createElement('span', { className: 'em' }, '(42,23)'),
                ', go north on a trail going up to Jadefire Run.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'In Jadefire Run clear yourself a path towards the west, and then take a narrow path towards the southwest.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "At the end of that path you'll find",
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Xavaric'),
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(39,22)'),
                  ', he is surrounded by 2 other satyrs and he moves from one to the other. You can actually pull each of the guards solo, if you wait for Xavaric to be away enough from one of them. ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Kill Xavaric'
                  ),
                  ", he's an easy fight if pulled solo."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Loot the ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Flute of Xavaric'
                  ),
                  ' and right click it to get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Flute of Xavaric'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Keep killing ',
                n.a.createElement('span', { className: 'strong' }, 'Satyrs'),
                ' in Jadefire run until you get ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '5 Jadefire Felbind'
                ),
                ' (they can drop from any of the 3 types of satyrs in Jadefire run) and complete the kill list of',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Further Corruption'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get back on the road and ride until Irontree Cavern as shown on map',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(55,15)'),
                '. Kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Warpwood Elementals'
                ),
                ' until you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '15 Blood Amber'
                ),
                ', they always drop.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the main road, go east and then south to Talonbranch Glade ',
                  n.a.createElement('span', { className: 'em' }, '(62,24)'),
                  '. Get the new flight path, sell and repair.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the road and ride north until the entrance of Timbermaw Hold, talk to Nafien, turn in the quest. Get the other quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Deadwood of the North'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go south on the road and at the first curve to the right make a u-turn, felpaw village should be right infront of you',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(63,14)'),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Start killing ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Deadwood furlbogs'
                ),
                ' ',
                'until the kill list is complete, be careful with the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Den Watchers'
                ),
                ', they call for help, fight them away from the others. Also check your reputation tab (press "U" key), you must be 150 reputation points away from "Unfriendly" before you go turn in the quest, so if you aren\'t, kill some more furlbogs. If you find a Deadwood Ritual Totem, don\'t click it, you can\'t do the quest yet, as you need to be neutral with the timbermaw furlbogs, and since we are short on quest log space, just keep the totem in your inventory for now.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go turn in the quest at Nafien, get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Speak to Salfa'
                  )
                ),
                '. You should now no longer be attacked on sight by the Timbermaw Furlbogs.',
                n.a.createElement('span', { className: 'em' }, 'Note:'),
                ' if you get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '5 deadwood headdress feathers'
                ),
                ", turn them in at nafien as well, it's a repeatable quest for extra faction with the timbermaws. (You get +50 faction points per turn in)",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go inside Timbermaw Hold, after the bridge keep going east. Right outside the tunnel to the right you'll find Salfa, turn in the quest, don't get the other quest.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride south to Donova Snowden, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[52] It's a Secret to Everybody"
                    )
                  ),
                  ', let her do her speech, and then get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] The Videre Elixir'
                    )
                  ),
                  ", don't get the other quest."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you didn't go to Maraudon and/or if you don't have the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[51] Seed of Life'
                    )
                  ),
                  ', use your hearthstone to Astraanar and skip the next paragraph.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Timbermaw Hold, this time in the tunnels, go under the bridge and to the north, keep going until you exit in Moonglade. In Moonglade go north straight to the shrine of Remulos',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(36,42)'),
                ', turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] Seed of Life'
                  )
                ),
                ' ',
                'at Keeper Remulos. Use your Hearhstone to Astraanar',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'In Astraanar, take a flight to Auberdine, make Auberdine your home location and fly to Feathermoon in Feralas. 10 minute break while on the Hippogryph!',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'In Feathermoon get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[50] Jonespyre's Request"
                    )
                  ),
                  ' ',
                  'from the Innkeeper, then go talk to Quintis Jonespyre at the top of the tower east of the inn, get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[50] The Mystery of Morrowgrain'
                    )
                  ),
                  ' ',
                  'and turn it in, as you should have',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '10 Morrowgrains'
                  ),
                  " at least by now, even if you're not lucky."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Sell/repair and resupply food/drink (up to 3 stacks). Take the boat to Feralas, then get on the road and ride north to the twin colossals, then go west to find Gregan Brewspewer, he\'s exactly under the "O" of the first o of the Twin Colossals.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] A Visit to Gregan'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Haze of Evil (Dungeon)'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Then buy a ',
                  n.a.createElement('span', { className: 'item' }, '"bait"'),
                  ' from Gregan (costs 20 silver)'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get back on the road and ride north until you are east of the Ruins of Ravenwind. You should find Miblon Snarltooth left of the road infront of some small temple with no roof at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(44,10)'),
                '. Place the bait on the floor infront of Miblon, the door behind him will open, quickly go and loot an evoroot. Now you should be',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  n.a.createElement('span', { className: 'strong' }, 'level 54')
                ),
                ' ',
                'or close. If you are not level 54, go west to the ruins of Ravenwind and grind on harpies until you ding. (',
                n.a.createElement(
                  'a',
                  {
                    href: 'http://www.wow-pro.com/node/569',
                    className: 'bb-url',
                  },
                  'Remember to keep the Vibram Plumes from those harpies for the darkmoon faire tickets'
                ),
                ')'
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 54')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Keep on grinding on those ',
                n.a.createElement('span', { className: 'strong' }, 'harpies'),
                ' ',
                'until your hearthstone timer is almost reset (approximately 2 minutes). Go back to Gregan, turn in the quest to get your',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '3 Videre Elixir'
                ),
                '. Use your hearthstone back to Auberdine, then fly to Darnassus and turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Morrowgrain'
                  )
                ),
                ' ',
                "at Arch Druid Staghelm if you got enough morrowgrain, if you got unlucky with combines and don't have enough morrowgrain and are out of Un'goro soils or Tharlendris seeds, go buy some extra seeds at the quest giver in the Cenarion Enclave (to be on the safe side, buy 3 Tharlendris seed per morrowgrain you still need), we will go back to Un'goro crater soon and you'll get the last un'goro soils you need there to complete this morrowgrain quest.",
                n.a.createElement('br', null),
                'Sell and repair, resupply food/drink (3 stacks), check the AH.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go get your new skills at your class trainer. Go to ironforge and turn in:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Return to Tymor (mystic ward)',
                      n.a.createElement('br', null),
                      '[52] A Little Slime goes a long way'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get the follow up quest.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] A Little Slime goes a long way'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Go back to Auberdine (use hearthstone if it's up). Fly to Talonbranch Glade (Felwood)."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to Timbermaw Hold, exit into Winterspring.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Start of xp rate winterspring --\x3e Un'goro --\x3e Ratchet"
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Ride south to Donova Snowden, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] The Videre Elixir'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Meet at the Grave'
                    )
                  ),
                  '. Ride back to Talonbranch Glade and fly to Ratchet.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "In Ratchet. Infront of a small house close to the docks you'll find Marvon's Chest ",
                n.a.createElement('span', { className: 'em' }, '(62,38)'),
                ', loot the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Stone Circle"'
                ),
                ' from it. Inside the house get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Volcanic Activity'
                  )
                ),
                ' ',
                "from Liv Rizzlefix. Make Ratchet your home location (yes, it's possible for alliance). From ratchet ride south along the merchant coast and go east to the Tidus Stair",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(65,43)'),
                ', right next to the ocean you should find Islen Waterseer next to a hut.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Seeking Spiritual Aid'
                  )
                ),
                ', watch her summon a water elemental spirit and then take her follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Cleansed Water Returns'
                  )
                ),
                ' ',
                'to Felwood.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on your mount and ride south along the merchant coast, past Northwatch Hold. Keep following the coast until you enter Dustwallow Marsh, then keep following the coast in Dreadmurk Shore until you arrive in Theramore Isle. Take a gryphon ride to Gadgetzan.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "In Gadgetzan, sell/sepair, resupply food/drink up to 4 stacks. Long session incoming. Get the mithril casing from the Gadgetzan bank, if you don't have it on you already."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to the Gadgetzan grayveyard, just east of Gadgetzan',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(53,28)'),
                '. Drink the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Videre Elixir'
                ),
                ", you'll die, but don't worry, no durability loss from this, it's normal. Release spirit but don't resurrect, go directly north from the Graveyard and up the mountain, you should soon see the yellow \"?\" on your minimap, go to it and talk to Gaeriyan, turn in and get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] A Grave Situation'
                  )
                ),
                '. Go back to the graveyard, resurrect and click the gravestone named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"A Conspicuous Gravestone"'
                ),
                ', complete the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] Linken's Sword"
                  )
                ),
                '. You can destroy the other Videre Elixir.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get back on your mount and ride directly south to Marvon Rivetseeker at the Broken Pillar ',
                n.a.createElement('span', { className: 'em' }, '(52,45)'),
                ', turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[51] The Stone Circle'
                  )
                ),
                ', get his 2 follow up:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[51] Into the Depths',
                      n.a.createElement('br', null),
                      '[52] Secret of the Circle'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Ride west/southwest until the entrance to Un'Goro.",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(27,57)')
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/ungorocircuit2.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Down the slope in Un'Goro talk to Torwa Pathfinder",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(71,76)'),
                  '. Get the 2 quests from him:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[55] The Mighty U'Cha and",
                      n.a.createElement('br', null),
                      "[56] The Bait for Lar'Korwi"
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you don't have enough space in your quest log (because of a class quest you don't want to abandon for example), abandon",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[50] Into the Temple of Atal'Hakkar"
                    )
                  ),
                  ', you can get it back easily in Stormwind later on before going to Sunken Temple.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north until the eastern crystal pylon, go up the trail and further east and you should see some huge dinosaur skeletons at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(80,49)'),
                ". Be full health/mana and ready to face a level 56 mob. Open Torwa's pouch in your inventory, loot the ",
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Preserved Threshadon Meat'
                ),
                ' and the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Pheromone Mixture'
                ),
                ', right click the meat, and then right click the Pheromone,',
                ' ',
                n.a.createElement('span', { className: 'strong' }, "Lar'korwi"),
                " will appear, kill him. He's rather easy, I had no problem to solo it at all at level 54. Loot ",
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "Lar'korwi's Head"
                ),
                '..',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north/northwest to Fungal Rock',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(63,16)'),
                ". Enter the cave, at the fork take the narrow path in the middle, then go right and keep going until you hit the end of the cave. Just be very careful where you fight the Un'Goro Gorilla, they call for help.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "At the end of the cave in a room with a puddle of water and a rock in the middle you'll find ",
                  n.a.createElement('span', { className: 'strong' }, "U'cha"),
                  ", lvl 55 Gorilla. There's another gorilla in the same room but you can pull it solo if you wait for U'cha to be away. Then pull U'cha solo, kill it and loot his ",
                  n.a.createElement('span', { className: 'item' }, 'pelt'),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Clear the way out of the cave, then kill all the apes outside the cave, make a clear path because you are gonna escort',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'A-Me 01'),
                " out of this cave soon. Once there's no ape left outside the cave, go back in and go right at the fork this time. After 2 or 3 more apes you'll find A-Me 01. Turn in the quest, get the follow up, turn it in (since you already have the mithril casing), then get the next follow up,",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[53] Chasing A-me 01'
                  )
                ),
                '. This will start the escort quest, once again the golden rule of escort quests, let A-me 01 infront, let her get hit first and then get the mobs off her. Escort her until Karna Remtravel and turn in the quest.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go up to Marshal's Refuge, turn in the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] Linken's Sword"
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[52] A Gnome's Assistance"
                  )
                ),
                ', go talk to J.D. Collie inside the crystal cave, turn in the quest, watch her do her speech and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[54] Linken's Memory"
                  )
                ),
                '. Get out of the cave and get the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Lost!'
                  )
                ),
                ' ',
                'from Spraggle Frock. Sell and repair.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go southwest until you hit the river',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(40,27)'),
                  ". On the southern side of the river you'll find plenty of",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Dinos and some Oozes'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In this area, kill every',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Frenzied Pterrordax'
                  ),
                  ',',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Elder Diametradon'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Ooze'),
                  ' you find. Open the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"bag of empty ooze containers"'
                  ),
                  ' from your inventory and put the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '10 "Empty Pure Sample"'
                  ),
                  ' Jar on a hotkey. Everytime you kill an ooze, loot it and then target the corpse and click the Jars to fill them up.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'You can stop killing Oozes once you got 10 Pure samples.'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Keep doing this until you complete:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[51] Shizzle's Flyer",
                      n.a.createElement('br', null),
                      '[51] Roll the Bones'
                    )
                  ),
                  ' ',
                  '(they drop from the Elder Diametradons approximately 25% drop chance)',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Beware of Pterrordax',
                      n.a.createElement('br', null),
                      '[54] A Little Slime Goes a Long Way'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "This might take a while but this is decent grinding since there's quite a lot of mobs, and you are completing 4 quests at the same time."
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Warning:'
                    )
                  ),
                  ' ',
                  'Be careful, 2 devilsaurs roam this area from time to time.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When you are done with these 4 quests, go southeast to Fire Plume Ridge, climb the mountain from the southern side in the middle',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(49,53)'),
                ". Find your way to the top of Fire plume ridge, you'll have to do almost a full circle around it for that, ignore the cave with Ringo for now. Kill every fire elemental on your way and you should get the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "9 Un'Goro Ash"
                ),
                ' you need.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'When at the top of Fire Plume Ridge, next to the lava pool you should see a conic stone named "Fire Plume Ridge Hot Spot". Search your inventory for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "Krakle's Thermometer"
                  ),
                  ', right click it next to the conic stone, this should complete the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Finding the Source'
                    )
                  ),
                  ". Don't get too close to the cave at the top, there's a lvl 56 Elite elemental there, avoid it."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "If you got 9 Un'Goro Ash already no need to kill more elementals, just get off fire plume ridge from the west side and ride west until Golakka hotsprings and find Krakle behind the geyser hill",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(30,50)'),
                '. Turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] The New Springs'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride east/southeast to Torwa Pathfinder',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(71,76)'),
                  '. Turn in the 2 quests:',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      n.a.createElement('br', null),
                      "[55] The Mighty U'cha",
                      n.a.createElement('br', null),
                      "[56] The Bait for Lar'korwi"
                    )
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go northwest to Fire Plume Ridge (yes, again!). Climb on it from the southern side in the middle ',
                n.a.createElement('span', { className: 'em' }, '(49,53)'),
                ' then go a bit east to reach the cave where Ringo is',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(52,51)'),
                '. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Lost!'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] A Little Help from My friends'
                  )
                ),
                '. Search your inventory for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Spraggle's Canteen"
                ),
                ' and put it on a hotkey.',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Everytime Ringo faints, click the canteen while being next to him'
                ),
                ". Get off the mountain by the eastern side, then go north, run to Marshall's Refuge while making sure Ringo always follows you, try to avoid mobs as much as possible. Run inside Marshal's Refuge until Spraggle Frock, you'll get the quest complete message.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Time to turn in some quests!',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Beware of Pterrordax',
                      n.a.createElement('br', null),
                      '[55] A Little Help from my Friends',
                      n.a.createElement('br', null),
                      '[51] Roll the Bones',
                      n.a.createElement('br', null),
                      "[51] Shizzle's Flyer"
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Finally some space in the quest log! Let's hope blizzard extends it to 25 someday",
                  ' ',
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/tongue.png',
                    title: 'Sticking out tongue',
                    alt: 'Sticking out tongue',
                    className: 'smiley-content',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Hearthstone to Ratchet, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Volcanic Activity'
                    )
                  ),
                  ' ',
                  'at Liv Rizzlefix, in the house just down of the inn.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "End of xp rate winterspring --\x3e Un'goro --\x3e Ratchet"
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpratewintorat.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Note:'),
                  ' This XP rate was just to show that with a proper quest path, you get great results even though there was a lot of travelling. This was done without any XP bonus.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Take the boat to Booty Bay, then fly to Stormwind.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Now you have two options:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement('span', { className: 'strong' }, '1.'),
                    ' Get a 5 man group together and go to Sunken Temple, which I highly recommmend because we got all the quests already, just have to pick',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        "[50] Into the Temple of Atal'hakkar"
                      )
                    ),
                    ' ',
                    "from Brohann Caskbelly in Stormwind's dwarven district and",
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[53] Jammalan the Prophet'
                      )
                    ),
                    ' ',
                    'in Hinterlands from the Exile or ask someone to share it. These quests will give a huge XP boost and the rewards are nice as well.',
                    n.a.createElement('p', null)
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement('span', { className: 'strong' }, '2.'),
                    " You don't want to do Sunken Temple, then I suggest you go grind in Azshara at the Blood Elf camp or on the Nagas on the Shattered Strands, OR kill deadwood Furlbogs in Northern Felwood to get neutral faction with the",
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Timbermaw Tribe'
                    ),
                    ' and being able to turn in the totem quest.'
                  )
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Before going to Sunken Temple, bind in Stormwind, then make sure you have the 6 quests:',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    "[50] Into the Temple of Atal'Hakkar",
                    n.a.createElement('br', null),
                    '[51] Into the Depths',
                    n.a.createElement('br', null),
                    '[51] Secret of the Circle',
                    n.a.createElement('br', null),
                    '[52] Haze of Evil',
                    n.a.createElement('br', null),
                    "[53] Jammal'an the Prophet",
                    n.a.createElement('br', null),
                    '[53] The God Hakkar'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'a',
                    {
                      href: 'http://www.wow-pro.com/node/592',
                      className: 'bb-url',
                    },
                    'Follow my Guide to Sunken Temple.'
                  ),
                  n.a.createElement('br', null)
                )
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'ul',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                "For those who don't do Sunken Temple, you will have to grind about 80000-90000XP. That's approximately half a level. However there's plenty of good spots to grind at this level, and for good reasons: Harpies for your Darkmoon Epic Necklace or Deadwood Furlbogs for your Timbermaw faction."
              ),
              n.a.createElement(
                'li',
                null,
                'When you are done with Sunken Temple, turn in all the quests besides',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Haze of Evil'
                  )
                ),
                ', we will go turn in it in the guide later. Also turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'A Little Slime Goes a long Way'
                  )
                ),
                ' ',
                'when you pass by Ironforge.',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[53] Jammal'an the Prophet"
                  )
                ),
                ' ',
                "can be turned in Hinterlands at the Atal'ai Exile in Shadra 'Alor",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(35,73)'),
                ". You should have already leveled up inside the temple, if not, you'll get to",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  n.a.createElement('span', { className: 'strong' }, 'level 55')
                ),
                ' ',
                'from turning in the quests.',
                n.a.createElement('br', null)
              )
            ),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 55')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Sell and repair, resupply food/drink up to 4 stacks.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Take the boat from Menethil Harbor to Auberdine, then fly to Rut'theran village, get the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Moontouched Wildkin'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Starfall'
                    )
                  ),
                  '.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Go to Darnassus and make it your home location'
                  ),
                  ". For those who didn't turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[50] Morrowgrain'
                    )
                  ),
                  ' ',
                  'yet, go turn it in in Darnassus at the Cenarion Enclave.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Auberdine then to Astranaar. Ride to Felwood.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Start of circuit Felwood --\x3e Everlook'
                ),
                ':',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/feltowincircuit1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Felwood just off the road to the right, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Cleansing Felwood'
                    )
                  ),
                  ' ',
                  'at Arathandris Silversky ',
                  n.a.createElement('span', { className: 'em' }, '(54,86)'),
                  '. Talk to her and ask her for a Cenarion beacon. From now on when you kill stuff in Felwood you can get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Corrupted Soul shards'
                  ),
                  ', which you will turn in later for cenarion plant salves. With those salves you can cure corrupted plants in felwood and get consumables in return.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go further north to Emerald Sanctuary',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(51,82)'),
                ', turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Cleansed Water Returns to Felwood'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Dousing the flames of Protection'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Flute of Xavaric'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Felbound Ancients'
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Further Corruption'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[54] Linken's Memory"
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Silver heart'
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Verifying the Corruption'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north along the road until ',
                n.a.createElement('span', { className: 'em' }, '(44,76)'),
                ", you'll see ",
                n.a.createElement('span', { className: 'strong' }, 'bears'),
                ' and',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'wolves'),
                ' to the east, from this spot, kill all bears and wolves you find while going north, until you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '11 Silvery Claws'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the road, ride to Jaedenar',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(40,57)'),
                  '. in Jaedenar clear the way westwards until the green pool you already went to before to',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'fill up the vial'
                  ),
                  '. Enter Shadow Hold ',
                  n.a.createElement('span', { className: 'em' }, '(35,58)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "At this point if you can find people to group it will be much easier. Dousing the Flames of Protection is doable solo (but kinda hard), on the other hand there's an escort quest which is almost impossible solo, at least for most classes. It also depends on how crowded the area is, if there's lots of people farming in the shadow hold already, it's doable solo."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Clear your way down the first tunnel, in the first room you'll find a captured elve named",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Arko'narin"
                  ),
                  '. This is the NPC that gives the escort quest, but to get it you first need to find a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Blood Red Key'
                  ),
                  ' from one of the mobs inside Shadow Hold, click it and get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] A Stranged Red Key'
                    )
                  ),
                  ". You have to turn this quest at Captured Arko'narin later. The follow up will be the escort quest."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'In the same room you can find the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '1st and 2nd brazier'
                ),
                ' (the 2nd one is on the slope going to the next tunnel),',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'click them to turn them off'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'If you are in a group (at least a duo of lvl 55 people), and get a Blood Red Key (the whole group can loot it if it drops),',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'tell everyone to turn in the first quest at the captured elf'
                ),
                '. When everyone has turned in the first quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] A Stranged Red Key'
                  )
                ),
                ', one person should start the follow up, which is the escort quest.',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  n.a.createElement('span', { className: 'strong' }, 'Note:')
                ),
                ' ',
                "You have to click on the elf through the cage. Some people try to click the cage itself, but that doesn't work.",
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Escort Arko'Narin to her equipment, then escort her out, things can get rough at times because she engages 2 or 3 lvl 55 mobs a the same time and is fragile until she has her equipment on. In the same room where her equipment is you'll find the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '3rd and 4th Brazier'
                ),
                ', turn them off too. At the exit',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'a 53 Elite mob will attack you.'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Defeat it and then Arko'narin will leave and you'll get the quest complete message."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you don't find anyone to group with, just don't do the escort quest, clear your way inside the Shadow Hold and turn off the 4 brazier."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Once done with that, get back on the main road and follow it until Irontree Woods ',
                n.a.createElement('span', { className: 'em' }, '(45,23)'),
                '. Kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Irontree Stompers'
                ),
                ' and',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Wanderers'),
                ' until one drops an',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Irontree Heart'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the road follow it until Talonbranch Glade, sell and repair then go to Timbermaw Hold. In Timbermaw go to the winterspring exit.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/feltowincircuit2.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Right outside of Timbermaw Hold get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Winterfall Activity'
                    )
                  ),
                  ' ',
                  'from Salfa.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride south to Donova Snowden, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] The New Springs'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Strange Sources'
                  )
                ),
                '. Also get the other quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Threat of the Winterfall'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'From now on, throughout winterspring look for big white/blue feathers on the floor named',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Moontouched Feather"'
                  ),
                  ', you need 10 of these.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/winterfeather.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride east to Timbermaw Post ',
                n.a.createElement('span', { className: 'em' }, '(39,44)'),
                '. Kill ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '8 Winterfall Pathfinder'
                ),
                ',',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Den Watcher'
                ),
                ' and',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Totemic'),
                " there. If you find a Winterfall Ritual Totem, don't click it to get the quest unless you are neutral with the Timbermaws already (you need neutral to be able to turn in this quest in Timbermaw Hold)",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Keep killing these ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Furlbogs'
                  ),
                  ' until you also get a ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Empty Firewater Flask'
                  ),
                  ', click it and get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Winterfall Firewater'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get back on the road and ride east until a crossroad',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(53,34)'),
                '. Go north to Starfall Village',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(51,30)'),
                '. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Starfall'
                  )
                ),
                ', get the follow up. Talk to Jaron Stoneshaper, turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[56] The Ruins of Kel'Theril"
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Troubled Spirits of Kel Theril'
                  )
                ),
                '. Also get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[59] Enraged Wildkin'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the road, go south to the crossroads, when you are there go southeast this time until everlook.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'End of circuit Felwood --\x3e Everlook:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpfeltoeverlook1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Note:'),
                  " I had XP Bonus during 90% of that one. So that's about 35000 XP / Hour."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'In Everlook get',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Are We There, Yeti?'
                  )
                ),
                ' ',
                'from Umi Rumplsnicker.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'In the Inn, get the quests:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Duke Nicholas Zverenhoff',
                      n.a.createElement('br', null),
                      '[52] The Everlook Report',
                      n.a.createElement('br', null),
                      '[55] Sister Pamela'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'You can put in bank',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"The Everlook Report"'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Studies in Spirit Speaking"'
                  ),
                  ". I'll say when to get them back from the bank later in the chapter.",
                  n.a.createElement('br', null),
                  "Sell and repair, resupply food and drink (4 stacks), get the flight path (it's on the eastern side of Everlook.)"
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go west to the Lake of Kel'Theril. Look around for blue runes amidst the floor named",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Highborne Relic Fragment"'
                ),
                '. Watch out before you pick any of them though, be full health/mana, because',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '2 lvl 55 spawn'
                ),
                ' and attack you each time you click one. You can either kill them or run away.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'The 1st'
                    ),
                    ' Relic fragment is at',
                    ' ',
                    n.a.createElement('span', { className: 'em' }, '(55,43)')
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'The 3rd'
                    ),
                    ' is just west of it at',
                    ' ',
                    n.a.createElement('span', { className: 'em' }, '(53,43)')
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'The 4th'
                    ),
                    ' one is directly north of the 3rd at ',
                    n.a.createElement('span', { className: 'em' }, '(52,41)')
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'The 2nd'
                    ),
                    ' one is west of the 4th one at ',
                    n.a.createElement('span', { className: 'em' }, '(51,41)')
                  )
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Ride west back to Donova Snowden ',
                n.a.createElement('span', { className: 'em' }, '(31,44)'),
                ' ',
                'and get as much ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Moontouched Feather'
                ),
                ' ',
                'as possible on the way.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Threat of the Winterfall'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Winterfall Firewater'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Falling to Corruption'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Ride north, back to Timbermaw Hold, go through it to Felwood. As soon as you exit in Felwood, jump down west in Felpaw Village. Clear yourself a path to the camp which is on the upper level of Felpaw Village, northwest of the green pool.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Clear the camp'
                ),
                ' (which might be hard, so use everything you got if needed) and you should find a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Deadwood Cauldron"'
                ),
                ' ',
                n.a.createElement('span', { className: 'em' }, '(60,5)'),
                '. Click it, turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Mystery Goo'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Winterspring through Timbermaw Hold. Go back to Donova Snowden, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Mystery Goo'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Toxic Horrors'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Now if you haven't gathered your 10 Moontouched Feathers yet, go do it, then Hearhstone to Darnassus."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Darnassus go to the Temple of the Moon and fill up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Eridan's Vial"
                  ),
                  ' in the pool. Go to the bank and put the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '4 relic fragments'
                  ),
                  " there, as we won't be needing them for a while. You can destroy Jaron's Pick too."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go out of Darnassus to Rut'theran Village and turn in",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Moontouched Wildkin'
                  )
                ),
                '. Get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Find Ranshalla'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'You should be',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement('span', { className: 'strong' }, '56')
                  ),
                  ' ',
                  "by now, so go get your new skills. If you aren't 56 yet it's not a problem, we'll be back in town in a few.",
                  n.a.createElement('br', null)
                )
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 56')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Fly to Auberdine and then to Astranaar. Ride to Felwood. ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Start of XP Circuit Felwood --\x3e Everlook #2'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Inside Felwood just on the right side of the road you'll find Arathandris Silversky ",
                  n.a.createElement('span', { className: 'em' }, '(54,86)'),
                  ". Turn in the Salve quests you completed there (if you don't have any gathering skill, you will only have Salve via Hunting completed). These quests are repeatable but only the first turn ins give XP. On the other hand you get",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Cenarion Plant Salves'
                  ),
                  ' which you can use to cleanse corrupted plants in Felwood and get buffs or consumables from them.',
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href: 'http://www.wow-pro.com/node/570',
                      className: 'bb-url',
                    },
                    'Check this guide for more details.'
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride further north to Emerald Scantuary. Turn in the quests',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Dousing the Flames of Protection'
                  )
                ),
                ' ',
                'and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Rescue From Jaedenar'
                  )
                ),
                ' ',
                'if you managed to finish that one.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Get the two follow ups:'
                  ),
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      n.a.createElement('br', null),
                      '[58] A Final Blow',
                      n.a.createElement('br', null),
                      '[57] Retribution of the Light',
                      n.a.createElement('br', null)
                    )
                  ),
                  n.a.createElement('br', null),
                  'Also turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Silver Heart'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Felbound Ancients'
                    )
                  ),
                  ' ',
                  'at Eridan Bluewind.',
                  n.a.createElement('br', null),
                  'Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Aquementas'
                    )
                  ),
                  '. Also get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Purified!'
                    )
                  ),
                  ', turn it in, you\'ll get the "Flue of the Ancients" as reward.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go back to Jaedenar into the Shadow Hold. Clear inside the hold further than when you doused the last 2 flames, past the red pool. Just a bit further down a slope you should find a room with an altar in it's middle,",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '4 warlocks/darkweavers arouned it'
                ),
                ', channeling a ritual, and ',
                n.a.createElement('span', { className: 'strong' }, 'Rakaiah'),
                ' ',
                'infront.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "You can pull Rakaiah solo, the 4 warlocks will be aggro on you but won't attack as long as you don't directly attack them. After you got rid of Rakaiah, you will still be locked in combat mode because of the 4 warlocks, to lose combat mode you just have to run back some distance away from them until they forget you. Basically they never attack you unless you directly attack them. However the warlock's imp pets will attack you and you should dispose of them.",
                  ' '
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Kill the 2 other mobs on each side of the room and the one in the back, then you can kill each of the 4 warlocks one by one. When the room is clear, click on the Remains of',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Trey Lightforge'
                ),
                ' on the altar, choose your reward and complete the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Retribution of the Light'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '|57] The Remains of Trey Lightshadow.'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go past the Altar Room and down a spiral, after a couple of pulls you'll be facing a small bridge going up straight ahead and a slope going down to your left. ",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go left and keep going in that direction until you reach a big room where you'll find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Shadow Lord Fel'dan"
                  ),
                  ' and his two succubus guards.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "It wasn't an easy fight to solo, I basically used everything I had with the mage and rogue. I sheeped Shadow Lord Fel'dan and killed the two succubus fast. Same with rogue, I sapped the shadow lord and killed it last. With the warrior I used retaliation. Don't forget to loot the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'head of the Shadow Lord.'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'This part of the dungeon is just much easier with a group, you can try it solo but I recommend at least finding a person to duo it with.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Clear your way out of the Shadow Hold and out of Jaedenar, get back on the road and ride north until Irontree Woods.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the crater at ',
                  n.a.createElement('span', { className: 'em' }, '(49,27)'),
                  ", you'll find plenty of ",
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Toxic Horrors'
                  ),
                  ' ',
                  'there, kill them until you got',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '3 Toxic Horror Droplet'
                  ),
                  ". There's more Toxic Horrors all around the big green pool just north of the crater."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'In Irontree woods go to the ruins at',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(49,30)'),
                ' and click the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Flute of the Ancients'
                ),
                ' from your inventory. some treant spirits will appear, especially one huge treant named ',
                n.a.createElement('span', { className: 'strong' }, 'Arei'),
                ". If he's not there, it means someone else is already escorting him. Go kill some",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'treants and elementals'
                ),
                ' while waiting. Get his quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Ancient Spirit'
                  )
                ),
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'and escort Arei'
                ),
                ". He will do a full turn around the green pool, so I suggest you clear the toxic horrors around the crater before you start the escort. Let him be infront and get hit first or he won't assist. The good thing is that he is quite a tank so you can let him tank a bit when there is multiple mobs. He will get back on the road after having done a full circle around the pool,",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '3 irontrees will ambush him'
                ),
                ' at this point. Kill them fast one by one while Arei tanks the others. You will get a quest complete message normally.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride back to Emerald Sanctuary, turn in the quests',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[58] A Final Blow'
                  )
                ),
                ' ',
                'and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] The Remains of Trey Lightforge'
                  )
                ),
                '. Ride to Ashenvale. When in Ashenvale follow the road south and then east towards Azshara, make a stop at Forest song which is just east of Satyrnaar. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Ancient Spirit'
                  )
                ),
                ' ',
                'at Kayneth Stillwind ',
                n.a.createElement('span', { className: 'em' }, '(85,44)'),
                '. ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the road and ride east to Azshara, go to Talrendis Point and fly to Talonbranch Glade. Sell and repair. Go to Winterspring through Timbermaw Hold.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride south to Donova Snowden, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Toxic Horrors'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Winterfall Runners'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Time to find those runners!'
                  ),
                  ' Check the map below to see which path they follow, they are on the road from Timbermaw entrance to the crossroads, then they go around the mountain by the north and to Winterfall Village.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/wtfrunnersroute.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'When you find the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '3 Winterfall runners'
                  ),
                  " (lvl 57), you don't have to kill all 3. Just kill one fast and run away, come back and loot the crate. They all drop it."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to Everlook, resupply food/drink up to 4 stacks, sell and repair.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'End of Circuit Felwood --\x3e Everlook #2:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpfeltoeverlook2.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Start of Circuit Everlook --\x3e Darnassus'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/wintertodarnacircuit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go east of Everlook to Winterfall Village',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(66,33)'),
                  ', kill',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '8 Winterfall Shamans'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '8 Winterfall Ursa'
                  ),
                  ' there.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Once that is done, go south over the mountain to Ice Thistle Hills',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(65,41)'),
                  '. Kill',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Ice Thistle Yetis'
                  ),
                  ' there until you have ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '10 Thick Yeti Fur'
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride south along the road. At ',
                n.a.createElement('span', { className: 'em' }, '(62,60)'),
                ' ',
                'you\'ll find a small trail going west, just a bit further you\'ll find a camp named "Dun Mandarr" ',
                n.a.createElement('span', { className: 'em' }, '(59,59)'),
                '. Kill the ',
                n.a.createElement('span', { className: 'strong' }, 'owlbeasts'),
                ' in it so that you can access the ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Damaged Crate"'
                ),
                ' in the camp.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Click on the Damaged Crate, turn in the quest and get the follow up. Go east and you'll find a wagon with a keg atop at",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(61,60)'),
                  ' just west of the road.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Jaron's Supplies"
                  ),
                  ' are at the wagon, they are small crates half burried in the snow, loot one of them. Then get back on the road and ride south, go over the ice bridge and keep going south until you discover Darkwhisper Gorge and get the complete message for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Strange Sources'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go back north, past the wagon and you'll find Ranshalla, she is on the east side of the road at ",
                n.a.createElement('span', { className: 'em' }, '(63,59)'),
                " in front of the entrance to Owl Wing Thicket. If she's not there, someone is probably doing the escort quest already, so go kill some owlbeasts while waiting for her to return. When you find her, turn in the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Find Ranshalla'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[59] Guardians of the Altar'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Escort her to the cave, inside the cave she'll start to cast a spell, while she does, click on the stave infront of her named",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Fire of Elune"'
                  ),
                  " and it will be lit. You can drink/eat while she is channeling her spell, you don't have to light the torch immediately."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Always let her in front and get the first hit.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Escort her inside the 5 caves and light the 5 torches'
                  ),
                  '. Then she will go to the altar of elune, which you will have to click too. Then a beautiful scene will happen and you will have the quest complete message at the end of it.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'While escorting her you should have normally looted the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Blue-Feathered Amulet'
                  ),
                  " you need for the other quest. If you didn't, keep killing these owlbeasts until one drops."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go north back to Everlook, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Are We There, Yeti?'
                  )
                ),
                ' ',
                'and get the follow up. Sell, repair and resupply food/drink. Go east/southeast of Everlook back to Ice Thistle Hills, this time enter the cave further to the east up the hills',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(68,42)'),
                ' and kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Ice Thistle Matriachs/Patriachs'
                ),
                ' ',
                'until you get ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '2 Pristine Yeti Horn'
                ),
                '.',
                ' ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go back to Everlook, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Are We There, Yeti?'
                    )
                  ),
                  ' ',
                  'and get the follow up. Find a goblin named',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Legacki'),
                  ', she stands to the left of the Inn. Target her and right click',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Umi's Mechanical Yeti"
                  ),
                  ' from your inventory.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride west/northwest to Starfall Village and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[59] Enraged Wildkin'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go west to Donova Snowden, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Strange Sources'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Winterfall Runners'
                    )
                  ),
                  ' ',
                  'and get away from the pool.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '3 Winterfall Ambushers'
                  ),
                  " will spawn shortly after you turn in the quest, but if you are away enough they won't aggro you. Don't get the follow up."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go north to the Timbermaw Hold entrance and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[58] Winterfall Activity'
                  )
                ),
                ' ',
                'at Salfa.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Hearthstone to Darnassus, go out to Rut'theran village and turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[59] Guardians'
                    )
                  ),
                  ' ',
                  'of the Altar and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Wildkin of Elune'
                    )
                  ),
                  '. Go back inside Darnassus to Arch Druid Staghelm at the Cenarion Enclave and turn in the quest.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'End of circuit Everlook --\x3e Darnassus:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpeverlooktodarna.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Note:'),
                  ' No XP bonus at all.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Visit the AH, resupply food/drink (4 stacks).',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'You can put your cenarion beacon and any Corrupted Soul Shard or Cenarion Plant Slave at the bank'
                ),
                ', if you still have any. We are not going back to Felwood so they are just taking bagspace for nothing now. Same for the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Flute of the Ancients'
                ),
                ", put it in the bank, I don't dare destroying it because who knows, might need it one day for another quest, even though I doubt it.",
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    'You should also be level 57 or very close now.'
                  )
                ),
                n.a.createElement('br', null)
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 57')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                "Fly to Tanaris. in Gadgetzan, find a goblin named Sprinkle (she's close to the horde exit). Scare her away with the mechanical yeti. Make Gadgetzan your home location.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "If you didn't turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] The God Hakkar'
                    )
                  ),
                  ' ',
                  'yet, go east to Steamwheedle Port and turn it in.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to Lost Rigger Cove ',
                n.a.createElement('span', { className: 'em' }, '(68,41)'),
                ', inside lost rigger cove go south to the other side of the pirate camp and then west until you find a stone circle',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(70,49)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Open the blue bag named',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Eridan\'s Supplies"'
                  ),
                  ', loot everything from it. Then step inside the circle and click the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Book of Aquor'
                  ),
                  '.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Aquementas'
                  ),
                  ", a lvl 54 elemental, will come to the circle and attack you. You don't have to kill it, just have to stand in the stone circle and let him attack you once. If you want to kill it, just know that",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'he is immune to frost and deals frost damage'
                  ),
                  ' ',
                  '(mages use Frost Ward). He should be a cakewalk at level 57.',
                  n.a.createElement('br', null),
                  'You should now have',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'the Silver Totem of Aquementas'
                  ),
                  '. If you do, you can destroy the "Book of Aquor", the "Silver Claws" and the "Irontree Heart".'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Ride to Un'Goro Crater, when in Un'goro, gather",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '3 Bloodpetal Sprouts'
                ),
                " while heading to marshall's refuge. You get these sprouts by clicking on",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Bloodpetal Sprouts'
                ),
                " (green cabbage-looking plants scattered everywhere in Un'goro)",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "At Marshall's refuge turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Haze of Evil'
                    )
                  ),
                  ', and then turn in the follow up immediatly (thanks to the 3 Bloodpetal sprouts you just gathered on the way).'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go inside the crystal cave and talk to J.D. Collie, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Aquementas'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[54] Linken's Adventure"
                  )
                ),
                ". Go to Linken and turn it in, don't get the follow up unless you got a few people to help you. Get at least a healer and a tank type. Blazerunner is a lvl 56 Elite fire elemental and he hits for 400. So just save this quest for when you are level 60 and have time to spend on that quest, the rewards aren't that great, we did it for XP.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Anyway here is how to defeat',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Blazerunner'
                  ),
                  ', the last boss of the long quest chain "Linken\'s Adventure". Go to the top of fire plume ridge, clear all the ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'elementals'
                  ),
                  ' ',
                  "around to make sure they don't add during the fight. Equip the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Silver Totem of Aquementas'
                  ),
                  ' and put it on a hotkey. Click it to dispel',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Blazerunner's aura"
                  ),
                  ' right at the start and everytime it reappears. Blazerunner is somewhat invincible when his aura is on, he keeps knockbacking people and every damage he takes is divided by 10.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'So be sure to always keep that aura dispelled'
                  ),
                  '. ',
                  n.a.createElement('br', null),
                  "Another thing, fight him inside his cave with your back facing the walls, so if he knockbacks you when the aura appears again you won't end up being tossed off the mountain or into adds.",
                  n.a.createElement('br', null),
                  "He's a tough fight, I did it with a level 57 Priest, a level 55 Paladin and me (lvl 57 rogue) and it wasn't easy. On the other hand I soloed it with my lvl 57 frost mage, thanks to kiting, it took time and several attempts though. So I recommend saving that quest for when you are level 60 and have time to spend on it, unless you got enough people to help you immediately. Anyway if you do manage to kill Blazerunner, you must also go loot the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Ornate Chest'
                  ),
                  ' in his cave. Then turn in the quest at Linken.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Before you leave Marshal's Refuge, find a goblin named Quixxil and scare him with the mechanical yeti.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Hearthstone to Gadgetzan, fly to Theramore, take the boat to Menethil Harbor, fly to Ironforge.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Ironforge, sell/repair, resupply food and drink (4 stacks), check the AH.',
                  n.a.createElement('br', null),
                  'Go to the throne room and take the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The Smoldering Ruins'
                    )
                  ),
                  ' ',
                  'of Thaurissan from Royal Historian Archesonus, then talk to her again and go through her dialogue. Turn in the quest and get the follow up.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the bank and get your',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Black Dragonflight Molt'
                  ),
                  " from it (if you don't have it on you already, that is)."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Fly to Stormwind,',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'make Stormwind your home location'
                ),
                ', then fly to Lakeshire, Redridge Mountains. In Redridge follow the road north to Burning Steppes.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go through Blackrock Pass and then east to Morgan's Vigil, it's a narrow path going up the mountain with torches on each side",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(83,63)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/bsteppescircuit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement('li', null, 'Get the flight path.'),
                  n.a.createElement(
                    'li',
                    null,
                    'Get the quests',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[52] Extinguish the Firegut'
                      )
                    ),
                    ' ',
                    'and',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[56] FIFTY! YEP!'
                      )
                    ),
                    ' ',
                    'from Oralius.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    'Get',
                    ' ',
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[54] Dragonkin Menace (Elite)'
                      )
                    ),
                    ' ',
                    'from Helendis Riverhorn.'
                  ),
                  n.a.createElement('li', null, "Don't get the other quests.")
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Start of XP Circuit Burning Steppes'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride northwest to Flame Crest ',
                  n.a.createElement('span', { className: 'em' }, '(63,30)'),
                  ', get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Broodling Essence'
                    )
                  ),
                  ' ',
                  'from Tinkee Steamboil and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[50] Tablet of the Seven'
                    )
                  ),
                  ' ',
                  'from Maxwort Uberglint.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'From now on try to find a partner or more to do the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Dragonkin Menace (Elite)'
                    )
                  ),
                  ", some of the dragons will most likely be too hard for you to solo, so ask for help (Hunters, Warlocks and frost mages will probably be able to solo them though). If you don't find help immediatly for it, proceed with the next steps of the guide while actively looking for people to help you with the dragons. When you find someone, go to the paragraph called",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Dragonkin Menace"'
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go south to the Ruins of Thaurissan and kill mobs there while looking around for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Thaurissan Relics"'
                ),
                '. They are grey stones looking like this:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/thaurissanrelic.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "While gathering relics go towards the western end of the Ruins of Thaurissan, you'll find a Dwarven Statue at",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(53,40)'),
                ' and the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Tablet of the Seven'
                ),
                ' at its feet. Click it and ',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  '"Transcribe the tablet"'
                ),
                ". You'll receive a ",
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Tablet Transcript'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Once you have ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '12 Tablet Transcripts'
                ),
                ', go west to the Blackrock Stronghold',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(44,35)'),
                '. Kill',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Orcs'),
                ' there unil you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '50 Blackrock Medaillons'
                ),
                '. If the place is too crowded (it often is), go south to the area named "The Pillar of Ash", there\'s more Blackrock Orcs there.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go east to Dreadmaul Rock ',
                n.a.createElement('span', { className: 'em' }, '(73,48)'),
                ". Kill what's on the kill list of",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Extinguish the Firegut'
                  )
                ),
                '. You can find these ',
                n.a.createElement('span', { className: 'strong' }, 'ogres'),
                ' all around Dreadmaul Rock, I recommend fighting on the eastern side though so you avoid dragonkin adds.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "At this point if you still haven't found someone to help you, grind on Orcs at the Blackrock Stronghold or PIllar of Ash. Ask your guild for help or your friends, but get someone to help you for",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Dragonkin Menace'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Dragonkin Menace '
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'When you find a partner to duo the dragonkins with, go to the area which is north of Dreadmaul Rock',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(78,28)'),
                  ', you should find',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Black Broodlings'
                  ),
                  ' there. Search your inventory for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Draco-Incarcinatrix 900'
                  ),
                  ' and put it on a hotkey. Use it on every Black Broodling before killing them. When they die while having the incarcinatrix aura on, a crystal will appear at their corpse named',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Broodling Essence"'
                  ),
                  '. You need 8 of these.',
                  n.a.createElement('br', null),
                  "Make a semi circle around the eastern side of Dreadmaul Rock, that's where you'll find the dragonkins you need. Complete the kill list of",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Dragonkin Menace'
                    )
                  ),
                  ' ',
                  'while getting the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '8 Broodling Essence'
                  ),
                  ' as well.',
                  n.a.createElement('br', null),
                  "Before you leave this area go to the northeastern edge of it, you'll find a cave with Cyrus Therepentous in it.",
                  n.a.createElement('br', null),
                  'Take his quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] A Taste of Flame'
                    )
                  ),
                  ', talk to him and click on the dialogue line, then turn in the quest, get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] A Taste of Flame (Dungeon)'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go west, back to Flame Crest. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Broodling Essence'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Felnok Steelspring'
                  )
                ),
                '. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[50] Tablet of the Seven'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go back to Morgan's Vigil, turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] FIFTY! YEP!'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Extinguish the Firegut'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[53] Gor'tesh the Brute Lord"
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Dragonkin Menace'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The True Masters'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Fly to Redridge Mountains, go to Lakeshire, find Magistrate Solomon in the town hall and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] The True Masters'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Hearthstone to Stormwind, go to Stormwind Keep and turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The True Masters'
                    )
                  ),
                  ' ',
                  'at Highlord Bolvar Fordragon and get the follow up. Also get the other quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] The First and the Last (Elite).'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Talk to Lady Katrana Prestor who is right next to Bolvar, go through her dialogue then turn in the quest at Highlord Bolvar and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The True Masters.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Go talk to Mathis Shaw in the Old Town, he's on the first floor of the big building named SI:7."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] The First and the last'
                    )
                  ),
                  ', get the follow up, turn it in and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] Flint Shadowmore.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Sell and repair. Resupply food/drink (4stacks).'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Fly to Lakeshire, Redrige. Go to Magistrate Solomon and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] The True Masters'
                  )
                ),
                ' ',
                'and get the follow up.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go back to Morgan's Vigil in the Burning Steppes. Turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The True Masters'
                    )
                  ),
                  ' ',
                  'at Marshal Maxwell and get the follow up.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Ride northwest and then west along the road which is north of the area called "The Pillar of Ash".'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'On the western end of The Pillar of Ash you should find',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Gor'tesh"
                  ),
                  ' next to an orc bunker',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(39,53)'),
                  ". Kill Gor'tesh, be carefull he hits hard and has one guard. Use everything you got if needed.",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Loot his head'
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go northeast to Flame Crest. ',
                n.a.createElement('span', { className: 'em' }, '(63,30)'),
                '. Talk to Ragged John and listen to his story until you get the',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '(Complete)'
                ),
                ' message. ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go back to Morgan's Vigil. Turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[53] Gor'tesh the Brute Lord"
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Ogre head on a stick = Party.'
                    )
                  ),
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53]The True Masters'
                    )
                  ),
                  ", don't get the follow up. We will get all these Blackrock Depths quests later on when we go do the instance."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go north to Dreadmaul Rock, go around it by the western side and keep going north until the slope with a bridge going up the mountain at ',
                n.a.createElement('span', { className: 'em' }, '(75,38)'),
                ". Clear your way to the top of Dreadmaul Rock. You'll find a",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Soft Dire Mound"'
                ),
                ' right behind some altar ',
                n.a.createElement('span', { className: 'em' }, '(81,46)'),
                '. Right click it to plant the ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  "Gor'tesh head"
                ),
                ". Then go south, back to Morgan's Vigil, turn in",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[53] Ogre Head on a Stick = Party'
                  )
                ),
                '.',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  n.a.createElement('br', null),
                  'End of Burning steppes circuit'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpburningstep.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'em' }, 'Note:'),
                  ' I got delayed a lot because someone was doing the onyxia key quest where a bunch of elite dragons attack Highlord Bolvar, had to wait quite a while for Lady Katrana Prestor to reappear. Still decent.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Hearthstone to Stormwind, or fly there if your stone isn't up.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Sell and repair, check the AH, resupply food and drink (4 stacks) get the following quest tt-link from your bank:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Everlook Report" '
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "You can put your Alterred Black Dragonflight Molt in bank as well, you'll just have to get it back before going to BRD."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Ironforge, to to the throne room. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] The Smoldering Ruins of Thaurissan.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Aerie Peak, follow the road southwest to Hillsbrad Foothills, then go west/northwest along the mountain until you hit the river. Follow the river north towards Chillwind Point, then go straight north to Western Plaguelands until you find Chillwind Camp ',
                  n.a.createElement('span', { className: 'em' }, '(43,85)'),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Start of circuit Plaguelands #1'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/plaguelandscircuit1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get the flight path. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] Flint Shadowmore'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] The Eastern Plagues'
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  'Get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Clear the Way'
                    )
                  ),
                  ' ',
                  'from Commander Ashlam.',
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] The Everlook Report'
                    )
                  ),
                  ' ',
                  'from Aregent Officer Pureheart, also complete the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Argent Dawn Commission'
                  ),
                  ', you will receive a trinket.',
                  n.a.createElement('br', null),
                  'When you kill undeads while having this trinket equiped, you can collect',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Scourgestones'
                    )
                  ),
                  ' ',
                  'from their bodies. I suggest equiping it from now on everytime you kill undeads in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'eastern and western plaguelands'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turning in these Scourgestones at Argent Officer Pureheart gets you ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'faction increases'
                  ),
                  ' with the Argent Dawn and a token. These tokens are the only way to raise your faction with the Argent Dawn at a certain point in reverred, so save them until then.',
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href:
                        'http://www.worldofwarcraft.com/info/basics/factions/argent/',
                      className: 'bb-url',
                    },
                    "Check blizzard's official homepage to see what rewards you get at the different faction levels"
                  ),
                  '.'
                ),
                n.a.createElement('p', null, "Don't get the other quests."),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Take the eastern road, to Sorrow hill',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(46,81)'),
                '. Kill',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '10 Skeletal Flayers'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '10 Slavering Ghouls'
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go back to Chillwind camp and turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Clear the Way'
                    )
                  ),
                  ', get the two follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] The Scourge Cauldrons'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] All Along the Watchtowers'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to High Priestess MacDonnell and turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] The Scourge Cauldrons'
                    )
                  ),
                  '. Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Target: Felstone Field'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go back through Sorrow Hill and enter the Ruins of Andorhal by the south gate ',
                  n.a.createElement('span', { className: 'em' }, '(49,73)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "In Andorhal try to avoid the roads as much as possible, as level 56 elite abominations roam them. So just clear yourself a path through the destroyed houses. Also avoid the center of the town of course, there's a huge bunch of mobs there and Araj the Summoner (lvl 61 elite)."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to the ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Fourth Watch Tower'
                ),
                n.a.createElement('span', { className: 'em' }, '(46,70)'),
                ". Clear what's in your way but be careful not to aggro the skeletal warlord inside of it (lvl 56-57 elite). You can drop the torch at the entrance of the watch tower without aggroing the Skeletal Warlord if you just get close to it without being in it's line of sight. Look for the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"beacon torch"'
                ),
                " in your inventory and click it while standing next to the tower's door.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Tower One'
                  ),
                  ' which is direclty to the west ',
                  n.a.createElement('span', { className: 'em' }, '(40,71)'),
                  ". It's close to the western entrance to Andorhal. Mark it with the torch just like you did for the previous tower."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Tower Two'
                  ),
                  ', northeast of tower one ',
                  n.a.createElement('span', { className: 'em' }, '(42,66)'),
                  ". It's close to the northern entrance to Andorhal. Mark it."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'The Tower Three is right behind tower two, northeast of it. Be careful of the scarlet patrol and abomination patrol when you go there ',
                  n.a.createElement('span', { className: 'em' }, '(44,63)'),
                  '. Mark tower three.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get out of Andorhal by the north side then go west to Felstone Field',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(37,58)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Clear yourself a path to the Cauldron in the middle of the field, when you get close,',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Cauldron Lord Bilemaw'
                  ),
                  ' will spawn, kill it and loot the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Felstone Field Cauldron Key'
                  ),
                  ' from him, then go to the cauldron and click it, turn in the quest and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Return to Chillwind Camp.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In the Felstone Field, go to the houses on the north side of the field, enter the one which is the most to the west',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(37,54)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "On the 2nd floor of the house you'll find Janice Felstone, get the quest",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Better Late than Never.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the next house which ',
                  n.a.createElement('span', { className: 'em' }, '(38,55)'),
                  " and find Janice's Parcel inside it. Click it, turn in the quest, then click it again and get the follow up",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Better Late Than Never.',
                      n.a.createElement('br', null)
                    )
                  ),
                  n.a.createElement('br', null)
                )
              ),
              n.a.createElement(
                'li',
                null,
                'Ride south to chillwind camp, avoid Andorhal this time.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] All Along the Watchtowers'
                    )
                  ),
                  '. Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Scholomance'
                    )
                  ),
                  ", don't get the other follow up."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[53] Return to Chillwind Camp'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[55] Target: Dalson's Tears"
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Scholomance'
                    )
                  ),
                  ' ',
                  'at Alchemist Arbington and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Skeletal Fragments.'
                    )
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go north, around Andorhal and then east to Dalson'Tears",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(45,52)'),
                ", it's the field directly east of Felstone Field. Clear yourself a path to the Scourge Cauldron, when you get close",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Cauldron Lord Malvinious'
                ),
                ' will spawn, kill it and loot his key, go to the Cauldron and click it, turn in the quest and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Return to Chillwind Camp'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go to the houses on the north side of Dalson's Tears, enter the right one ",
                n.a.createElement('span', { className: 'em' }, '(47,51)'),
                ". Clear what's inside and look on the floor for",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "Mrs. Dalson's Diary"
                ),
                ', get the quest and complete it.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get out of the barn and look around for a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Wandering Skeleton'
                  ),
                  ', there is only one of this kind and he roams around the barn, so keep killing stuff around the barn until you find it, kill it and loot',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Dalson Outhouse Key"'
                  ),
                  ". Go behind the barn, you'll find an Outhouse ",
                  n.a.createElement('span', { className: 'em' }, '(48,49)'),
                  '. Open it, kill Farmer Dalson, loot',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Dalson Cabinet Key'
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to the other house now ',
                n.a.createElement('span', { className: 'em' }, '(47,50)'),
                ", on the 2nd floor of it you'll find a",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Locked Cabinet"'
                ),
                ', click it and turn in the quest.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Go straight north to the Northridge Lumbermill, when you are next to the lumbermill, go northeast of it, follow a trail going down to a destroyed wagon. You'll find Kirsta Deepshadow there",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(51,28)'),
                  ', get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Unfinished Business'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'You can find the ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Scarlets Knights'
                  ),
                  ' ',
                  'and ',
                  n.a.createElement('span', { className: 'strong' }, 'Mages'),
                  ' you need to kill for the quest just southeast of Kirsta, on the road to Hearthglen. For the',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Hunters'),
                  ' and',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Medics'),
                  ' go to the camp further south and to the east ',
                  n.a.createElement('span', { className: 'em' }, '(51,44)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'When you completed the kill list, go back to Kirsta and turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Unfinished Business'
                    )
                  ),
                  ', get the follow up.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back on the road just east of Kirsta.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'At ',
                  n.a.createElement('span', { className: 'em' }, '(54,34)'),
                  ' the road forks off to the left and right. Go right and up the slope you will find Hunstman Radley ',
                  n.a.createElement('span', { className: 'em' }, '(57,35)'),
                  '. She can be pulled solo if you wait for the right moment: when the mage close to her goes far enough.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get back on the main road and this time at the fork go left, keep going north until you hit the watch tower',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(53,24)'),
                  '. Kill the 2 guards infront of it then wait for ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Cavalier Durgen'
                  ),
                  ' ',
                  "to show up. He goes to the top of the tower then walks back to the entrance. You don't need to go look for him inside the tower."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'After killing Durgen, you can go directly back to where Kirsta is by going southwest and jumping down in the crater where she is. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Unfinished Business'
                  )
                ),
                ", don't get the follow up.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'You should be level 58 already or at least 5000 XP away from it. If you are not grind on',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Scarlet Dudes'
                  ),
                  ' or',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'Undeads'),
                  ' in one of the cauldron fields until you are 5000XP away from 58.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Hearthstone to Stormwind, go to the Cathedral Square and inside the City Hall ',
                n.a.createElement('span', { className: 'em' }, '(48,32)'),
                ' on the 2nd floor. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Better Late Than Never.'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Now try to find Ol'Emma, she wanders in between the Cathedral Square and the Trade district. Shouldn't be hard to find because you'll see the yellow \"?\" on the minimap. She makes a stop in a house bordering the canals close to the Cathedral district too",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(52,41)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'When you find her turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Good Natured Emma'
                    )
                  ),
                  '. Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Good Luck Charm'
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    'End of circuit Western Plaguelands'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpplaguelands1.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 58')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Go visit your class trainer, sell/repair, visit the AH, resupply up to 4 stacks of food/water.',
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  'Get this quest tt-link from bank:'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Studies in Spirit Speaking'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Ironforge, then fly to Chillwind camp.',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    'Start of XP circuit Plaguelands #2'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/plaguelandscircuit2a.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Chillwind Camp, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Return to Chillwind Camp'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Target: Writhing Haunt'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go north to the Felstone Field, go into the left house',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(38,54)'),
                ' on the 2nd Floor. Turn in the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[52] Good Luck Charm'
                  )
                ),
                ' ',
                'at Janice Felstone and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Two Halves Become One.'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get out of the house and look for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'a Jabbering Ghoul'
                  ),
                  " wandering the area in front of the barn. If it's not there just keep the area clean until it respawns. Kill it and it will drop a",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Good Luck Other-Half-Charm"'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Once you have the other half charm, go back to Janice Felstone, right click on the other-half-charm in your inventory. Turn in the quest.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get out and back on the road, ride east until',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(49,56)'),
                ' where a trail crosses the road. Go south following the trail to the Writhing Haunt',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(52,66)'),
                '. Clear a path to the Scourge Cauldron, when you get close to it,',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Cauldron Lord Razarch'
                ),
                " will spawn, kill it and loot the key. Clear what's around the Cauldron and go click it, turn in the quest and get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Return to Chillwind Camp'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go south, cross the river and go back to Chillwind Camp through Sorrow Hill. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Return to Chillwind Camp'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[58] Target: Gahron's Withering"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Ride east through Sorrow hill, then northeast, across the river and to Gahron's Withering ",
                  n.a.createElement('span', { className: 'em' }, '(62,57)'),
                  '. Clear a path to the Scourge Cauldron, when you get close',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Cauldron Lord Soulwrath'
                  ),
                  " will, appear, kill it. He's harder than the other cauldron lords, he knockbacks and silences, so be careful where you fight him. Loot his key then go to the Cauldron, turn in the quest and get the follow up",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Return to Chillwind Camp'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Ride east until you hit Thondroril River, go north along the river bank, then cross the river so you are on the eastern bank and ride north until you find a house. In front of it you'll see Tirion Fordring, get his 3 quests:",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Demon Dogs',
                      n.a.createElement('br', null),
                      '[56] Blood Tinged Skies',
                      n.a.createElement('br', null),
                      '[56] Carrion Grubbage'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'From now on, kill on sight the following:'
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Plaguehound Runt'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Carrion Worm'
                    )
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      'Plaguebat'
                    )
                  )
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Go south along the river and then east into Eastern Plaguelands.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/plaguelandscircuit2b.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Go southeast while killing everything on the way. Find the Marris Stead but don't get close to it! There's a lvl 62 Elite NPC there, hits like a truck. Go around the Marris Stead so that you are on the east of it ",
                  n.a.createElement('span', { className: 'em' }, '(29,74)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Just a bit closer to Nathanos lightcaller you'll find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Mangled Human Remains"'
                  ),
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(28,74)'),
                  '. Loot the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'SI:7 Insignia (Turyen)'
                  ),
                  ' from it.',
                  n.a.createElement('br', null),
                  'Go a bit closer to Nathanos, on a small mound right infront of him you should find other human remains',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(27,74)'),
                  ". Loot Fredo's Insignia from it. This is as close as you can get to Nathanos without aggroing it, and you should get the",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Blightcaller Uncovered" (Complete) message'
                  ),
                  '. Go backwards a bit and then south, you should find the last human remains close to the road',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(28,79)'),
                  '. Loot',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "Rutger's Insignia"
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go southeast to Darrowshire, keep killing everything on sight that you need for quests, there should be plenty.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Inside Darrowshire, find a small destroyed house on the western side of Darrowshire. You should find Pamela Redpath there, turn in the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Sister Pamela'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[55] Pamela's Doll"
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Now you must find the 3 parts of pamela's doll, they can be in any of the other houses in Darrowshire, mostly on the 2nd floor of it. Look on the floor for some brown objet. Everytime you get close to one of the doll parts, a",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'level 55 ghost spawns'
                  ),
                  ' and attack you.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Once you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  "Pamela's Doll's Left Side, Right Side and Head"
                ),
                '. Right click them in your inventory to combine them. Go to Pamela and turn in the quest. Get the two follow up quests:',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    '[56] Uncle Carlin',
                    n.a.createElement('br', null),
                    '[56] Auntie Marlene'
                  )
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go back towards the Marris Stead and keep doing wide circles around it killing everything until you got',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '30 Plaguebat'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '20 Plaguehound Runts'
                  ),
                  ' slain. This is the best area to find them.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Go east to the area north of the infectis scar and Corin's Crossing. Kill everything around until you have",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '5 Plaguehound Kills'
                  ),
                  '. Focus on',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Carrion Grubs'
                  ),
                  ' as well.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Once you got 5 Plaguehound kills, go to the area which is north of Blackwood Lake ',
                n.a.createElement('span', { className: 'em' }, '(51,41)'),
                '. You should find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Frenzied Plaguehounds'
                ),
                ' around this area, also kill ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Carrion Devourers'
                ),
                ' ',
                'and ',
                n.a.createElement('span', { className: 'strong' }, 'Bats'),
                ' in the way.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Once you have',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '5 Frenzied Plaguehound kills'
                  ),
                  ", go southeast, around the Pestilent scar by the north of it and then go southeast to Light's Hope Chapel",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(81,59)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get the flight path. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[52] Duke Nicholas Zverenhoff'
                    )
                  ),
                  '. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Uncle Carlin'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Defenders of Darrowshire'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Just a bit south of Light's Hope Chapel find Caretaker Alen",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(79,63)'),
                  '. Get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Zaeldarr the Outcast'
                    )
                  ),
                  ' ',
                  'from him.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'em' }, 'Note:'),
                  " Don't sell",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'evil bat eyes'
                  ),
                  ', they can be used to get ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Darkmoon Faire Tickets'
                  ),
                  " for your future epic necklace. If you aren't interested in the Darkmoon rewards you can sell the eyes at the AH for nice cash."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Check how many',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '"Slab of Carrion Worm Meat"'
                ),
                " you need, then go kill in the area south and southwest of Light's Hope Chapel until you got your",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '15 Carrion Worm Meat'
                ),
                ". Then go to Light's Hope Chapel, fly to Chillwind camp. Turn in",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[58] Return to Chillwind Camp'
                  )
                ),
                ', go to Commander Ashlam Valorfirst and complete the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Mission Accomplished!"'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] The Eastern Plagues'
                    )
                  ),
                  ' ',
                  'at Flint Shadowmore, get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[62] The Blightcaller Cometh'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Hearthstone to Stormwind, Go to Stormwind Keep and turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[62] The Blightcaller Cometh'
                  )
                ),
                ' ',
                'at Highlord Bolvar. Take the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[62] Order Must Be Restored (Raid)'
                  )
                ),
                ", we won't be doing it in the guide, however it's one of those \"must do at level 60\" quests. You'll need a mini raid for it, and the rewards are good.",
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'End of circuit Plaguelands #2:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpplaguelands2.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Sell/repair, resupply food/drink (4 stacks), check the AH.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Ironfore,',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    ' make the Inn your home location'
                  ),
                  ', go to the bank and get the following quest items:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'The 4 Relic Fragments.'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Fly to Chillwind Camp. Get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] A Plague Upon Thee'
                    )
                  ),
                  ' ',
                  'from Nathaniel Dumah.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Start of XP circuit Plaguelands #3'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/plaguelandscircuit3a.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Ride east to Sorrow Hill and find Marlene Redpath in the only house there is ',
                  n.a.createElement('span', { className: 'em' }, '(49,78)'),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Auntie Marlene'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] A Strange Historian (Elite)'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Search the graveyard just north of the house where Marlene Redpath is, look for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Joseph Redpath\'s Monument"'
                  ),
                  ' among the graves ',
                  n.a.createElement('span', { className: 'em' }, '(49,76)'),
                  '. Click the grave and get ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    "Joesph's Wedding Ring"
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back towards Chillwind Camp and take the other path to Andorhal, go inside the Ruins of Andorhal by the western entrance.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Just a bit inside Andorhal go to the house to the north, it's the only house around with a floor and not totally destroyed",
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(39,68)'),
                  ". Inside the house go to the 2nd floor, in one of the rooms you'll find Chromie. Turn in [",
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    'b][56] A Strange historian[/b]'
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] The Annals of Darrowshire'
                    )
                  ),
                  '. Also ge the other quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] A Matter of Time'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Go to the northern gate of Andorhal, and east of the first watch tower you'll find two wooden silos",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(45,62)'),
                ' which look like this:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/woodensilo.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Get full hp/mana, get next to one of them and click your',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Temporal Displacer'
                  ),
                  ' (looks like a horn).',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '1 to 3 lvl 57 worms will spawn and attack you'
                  ),
                  ". When it's 3 it might be tough to handle solo, so always start those fights with full hp and if possible potions / long cooldown abilities up. Back off from the silos after you summon the worms, if you stay too close more worms will spawn sometimes, and that's probably more than you can handle solo."
                ),
                n.a.createElement(
                  'p',
                  null,
                  "The worms only appear when the silo is sparkling blue. They take a while to sparkle again after you use the temporal displacer next to them. There's 3 more silos just a bit more to the east."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Keep doing that until you have',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '15 Temporal Parasites'
                  ),
                  ' slain.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Chromie, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] A Matter of Time'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Counting Out time'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Now what you have to do is go from destroyed house to destroyed house in Andorhal and look for Small Lockboxes like this:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/smalllockbox.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Loot the Andorhal Watch from it. Keep doing this until you have',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '5 Andorhal Watches.'
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go to the town hall (with a tower clock) which is in the middle of Andorhal, close to where Araj the Summoner is, you can sneak in the town hall without having to fight any of the bunch of mobs close to it.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Inside the town hall you'll find several",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Musty Tome"'
                  ),
                  ' lying on the floor. When you click one, there is a chance you will find the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Annals of Darrowshire'
                  ),
                  ', but there is a higher chance that you will get a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '"Ruined Tome"'
                  ),
                  ' and 1 or 2 level 57 mobs will attack you. They give no loot and no exp. Hoewever there is a trick to know which tome is the right one.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'There is a slight graphical difference'
                  ),
                  '. The pages of the fake tomes have two-tone colored pages, lightbrown and white, like this one:',
                  ' '
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src: 'http://www.wow-pro.com/files/guidepics/wrongtome.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'The good tome looks "newer", and it\'s pages only have one color tone, like this one:',
                  ' '
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src: 'http://www.wow-pro.com/files/guidepics/goodtome.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'You can easily see the difference if you zoom in 1st person view and put your mouse pointer over the books to highlight them. Loot the ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Annals of Darrowshire.'
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Chromie, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Counting Out Time'
                  )
                ),
                '. ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'The Attuned Dampener'
                ),
                " you get as a reward is only useable on Araj the Summoner, so save it for later when you are 60 and do the big quests. Killing Araj is necessary to get your Scholomance key and another quest for a decent trinket. You'll need a solid group of 60s to kill him, but the Attuned Dampener will help. You can actually repeat the quest",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Counting out Time'
                  )
                ),
                ' ',
                'to get more dampeners for an easier Araj kill.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] The Annals of Darrowshire'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Brother Carlin'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Now you should also have finished',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Skeletal Fragments'
                    )
                  ),
                  ", if you haven't, kill some more skeletons while you are in Andorhal."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get out of Andorhal by the north gate, then go east till Thondroril River and ride north to Tirion Fordring',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(7,43)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Demon Dogs'
                    )
                  ),
                  ',',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Blood Tinged Skies'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Carion Grubbage'
                    )
                  ),
                  '. Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Redemption'
                    )
                  ),
                  ". Listen to Tirion's tale, turn in the quest and get the follow up",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Of Forgotten Memories'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride to Eastern Plaguelands and go southeast to the Undercroft, which is directly south of the Marris Stead.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/plaguelandscircuit3b.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Behind the crypt in the Undercroft you'll find",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Tiron Fordring's Grave"
                  ),
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(28,86)'),
                  '. Next to should be a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Loose Dirt Mound"'
                  ),
                  '. This is where you need help, this almost impossible to do solo unless you use a lot of creativy and everything you got. Anyway here is what happens when you click the dirt mount,',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Mercutio Filthgorger'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '3 Dwarf Graverobbers'
                  ),
                  ' spawn and go to the dirt mound, if you are close they of course jump you.',
                  n.a.createElement('br', null),
                  'They all hit hard, especially Mercutio, and all have a lot of hit points for non elites. Here is what I suggest:'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'As soon as you click the dirt mount, run to the other side of the fence, you can jump over it if you walk up the mountain a bit. The 4 dwarves will walk to the grave and stand there.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'You have two ways to do this now:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, '1.'),
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Polymorph Mercutio'
                  ),
                  ' (if you have a mage with you) and kill the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '3 gravediggers'
                  ),
                  '. Then bandage up and kill Mercutio, loot his hammer.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, '2.'),
                  ' Ignore the 3 adds and go all out on Mercurio, loot the hammer and run.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'Use creativity with the classes you have!'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('span', { className: 'strong' }, 'Ex:'),
                  " With my rogue I got help from a warrior. He charged Mercutio and used intimidating shout as soon as possible to send the 3 gravediggers away for 10 sec or so. We both went all out on Mercutio, looted and ran away. Anyway, if you don't get help immediatly, there's something to do in the Undercroft while you look for help:"
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go inside the crypt ',
                  n.a.createElement('span', { className: 'em' }, '(27,85)'),
                  ', clear the way down, kill',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Zaeldarr the Outcast'
                  ),
                  ' and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'loot his head'
                  ),
                  '.',
                  n.a.createElement('br', null),
                  'In the same room look for a',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Torn Scroll"'
                  ),
                  ' on the floor, click it can get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[60] Hameya's Plea"
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "If you still didn't get anyone to help you on",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Of Forgotten Memories'
                    )
                  ),
                  ', grind on the trolls in the Undercroft while waiting for someone to help you. It just takes 10 min! Call a guildmate or something.',
                  ' ',
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/smile.png',
                    title: 'Smiling',
                    alt: 'Smiling',
                    className: 'smiley-content',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Tiron Fordring, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[56] Of Forgotten Memories'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[58] Of Lost Honor'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Get back into Eastern Plaguelands and ride east to Light's hope Chapel. Turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Brother Carlin'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Villains of Darrowshire'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Heroes of Darrowshire.'
                    )
                  ),
                  n.a.createElement('br', null),
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Zaeldarr the Outcast'
                    )
                  ),
                  ' ',
                  'further to the south at Caretaker Alen. Sell junk and resupply food and drink there. (4 stacks).'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Ride west to the Infectis scar by passing Corin's crossing by the south side. Go down the Infectis Scar at",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(49,74)'),
                ', then go to',
                n.a.createElement('br', null),
                n.a.createElement('span', { className: 'em' }, '(53,65)'),
                " where you'll find the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Shattered Sword of Marduk"'
                ),
                ', as marked on the map. It looks like this:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/swordofmarduk.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null, 'Loot it.'),
                n.a.createElement(
                  'p',
                  null,
                  'Get out of the Infectis scar by the way you came in.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go north to Blackwood Lake ',
                n.a.createElement('span', { className: 'em' }, '(49,51)'),
                ". Take a dive, in the middle of the pool at the bottom you'll see",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Ghosts of Darrowshire'
                ),
                ' fighting each other, amongst them you should see a glowing violet skull named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Horgus Skull"'
                ),
                ' ',
                n.a.createElement('span', { className: 'em' }, '(51,50)'),
                ', it looks like this:',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/horgusskull.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null, 'Loot it.'),
                n.a.createElement(
                  'p',
                  null,
                  'Go north until you find Aurora Skycaller',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(53,22)'),
                  ", she is close to Quil'Lithien Lodge. Turn in",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      "[56] Troubled Spirits of Kel'Theril"
                    )
                  ),
                  ", don't get the follow up.",
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      n.a.createElement('br', null),
                      'You should be level 59 by now.'
                    )
                  ),
                  n.a.createElement('br', null)
                )
              )
            ),
            n.a.createElement('p', null),
            n.a.createElement(
              'p',
              null,
              n.a.createElement(
                'span',
                { className: 'small' },
                n.a.createElement('span', { className: 'strong' }, 'Level 59')
              ),
              n.a.createElement('br', null)
            ),
            n.a.createElement(
              'ol',
              { className: 'bb-list' },
              n.a.createElement(
                'li',
                null,
                'Go west to the Plaguewoods. In the plaguewoods look around for',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Large Termite Mounds '
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/termitemound.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null, 'and loot them.'),
                n.a.createElement(
                  'p',
                  null,
                  'Kill stuff inside plaguewood while looking for those termite mounds, but also try to find as much',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Cannibal Ghouls'
                  ),
                  ' as possible. Anytime you kill one of these, a Spirit of Darrowshire will appear, right click it to free it. You need to free',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '15 Darrowshire Spirits'
                  ),
                  '. The Cannibal Ghouls are not so numerous though, so it will take a while, consider this as a mini grinding session, plus you are getting faction with the ',
                  n.a.createElement('span', { className: 'em' }, 'Argent Dawn'),
                  ' ',
                  'and Scourgestones.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When you are done with both',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] A Plague Upon Thee'
                  )
                ),
                ' ',
                'and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Defenders of Darrowshire'
                  )
                ),
                ", go east to Zul'Mashar ",
                n.a.createElement('span', { className: 'em' }, '(64,24)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "Clear the way up the slope, and to the east, you'll soon face a big pyramid. At it's base you should see tombs with some trolls roaming about them. One of them is",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Infiltrator Hameya'
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Clear some of the trolls until you get a clear pull on Hameya, pull him solo and kill him,',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'then loot his key'
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Clear your way out of Zul'Mashar then go southeast to Northdale, take a dive in the pool which is just south of Northdale. Clear the",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'elementals'
                ),
                ' in the way. At',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(71,33)'),
                ', next to a cage you should see a white flag with a blue runed on it named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Symbol of Lost Honor"'
                ),
                ':',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/losthonorsymbol.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null, 'Loot it.'),
                n.a.createElement(
                  'p',
                  null,
                  "Ride southeast back to Light's Hope Chapel."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Defenders of Darrowshire'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Villains of Darrowshire'
                    )
                  ),
                  '. Get the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[56] Heros of Darrowshire'
                    )
                  ),
                  ". We won't be doing it in the guide, however it's one of the cool quest lines to do at level 60."
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride west and slightly south to the Undercroft. Right behind the crypt in the Undercroft you should find a',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Mound of Dirt"'
                ),
                ". Not the one next to Tiron's grave, the other one close to a charriot",
                ' ',
                n.a.createElement('span', { className: 'em' }, '(28,86)'),
                '. Click it, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "[60] Hameya's Plea"
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Ride northwest back to Tirion Fordring, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Of Lost Honor'
                    )
                  ),
                  ' ',
                  'and get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Of Love and Family'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go south and then west back into the Western Plaguelands. '
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go south and swim to Caer Darrow isle, On the western side of Caer Darrow, find Artist Renfray in a wooden house',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(65,75)'),
                '. Turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[58] Of Love and Family'
                  )
                ),
                ' ',
                'and get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[60] Of Love and Family'
                  )
                ),
                '. ',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "This quest will be taking you to Stratholme so it's something we won't do in the guide. However it is a great quest, yet another 'must do\" at level 60."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Swim west until you reach Sorrow Hill, then ride west to Chillwind Camp. Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Skeletal Fragments'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Mold Rhymes With...'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  'This is for your',
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href: 'http://www.wow-pro.com/node/560',
                      className: 'bb-url',
                    },
                    'Scholomance Key quest'
                  ),
                  ', and clearly yet another "must do" at level 60. Don\'t forget to take the quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] Alas, Andorhal'
                    )
                  ),
                  ' ',
                  'from Commander Ashlam Valorfist when you go kill Araj for your Scholomance Key quest - killing two birds with one stone.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] A Plague Upon Thee'
                    )
                  ),
                  ', take the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] A Plague Upon Thee'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride north around Andorhal and then northeast to Northridge Lumber Camp. Go straight to the lumber mill which is at the northeastern tip of the lumber camp.',
                n.a.createElement('br', null),
                'Inside the lumber mill you should find a big crate named',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  '"Northridge Lumber Mill Crate"'
                ),
                '. Click it and place the ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'Termite Barrel'
                ),
                ' ',
                'on it. A barrel with green smoke should appear, click it and get the follow up.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go back to Chillwind Camp, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] A Plague Upon Thee'
                    )
                  ),
                  '.',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    n.a.createElement('br', null),
                    'End of circuit Plaguelands #3'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/xpplaguelands3.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Hearthstone to Ironforge. Resupply food/drink (4 stacks). Sell and repair, visit the Auction House: this is your last chance to buy your dungeon set 1 bracers, we are gonna need them now.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go to the throne room, get the quest get quest',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] An Earnest Proposition from Deliana.'
                    )
                  ),
                  n.a.createElement('br', null),
                  'Also get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[59] Kharan Mighthammer'
                    )
                  ),
                  ' ',
                  'from King Magni Bronzebeard while you are here.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Go to Auberdine, fly to Everlook, Winterspring. (or ask a mage to teleport you to Darnassus, then fly to auberdine --\x3e everlook).'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'In Everlook, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] Are We There, Yeti?'
                    )
                  ),
                  ' ',
                  'at Umi Rumplesnicker.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Felnok Steelspring'
                    )
                  ),
                  ', get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Chillwind Horns'
                    )
                  ),
                  '.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/wintercircuit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Ride straight north until you are in the area east of Frostsaber Rock on the map. You will find',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Chillwind Ravagers'
                ),
                ' and',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'strong' },
                  'Edler Shardtooths'
                ),
                ' in this area. Kill every of them until you have',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  '8 Uncracked Chillwind Horns.'
                ),
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Once you got 8 Uncracked Horns, go west, closer to Frostsaber Rock, you will find a lot of',
                  ' ',
                  n.a.createElement('span', { className: 'strong' }, 'tigers'),
                  ' there. Kill them until you got ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    '15 "Winterspring Blood Sample"'
                  ),
                  ". This will take a while, but it's normal, this is your new armor set quest (",
                  n.a.createElement(
                    'a',
                    {
                      href:
                        'http://www.worldofwarcraft.com/info/items/armorsets/',
                      className: 'bb-url',
                    },
                    'For Dungeon Set 2'
                  ),
                  ').'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'When done, ride back to Everlook, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Chillwind Horns'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[54] Return to Tinkee'
                  )
                ),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Hearthstone to Ironforge, go to the throne room, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] An Earnest Proposition'
                    )
                  ),
                  ' ',
                  'at Deliana and get your Dungeon Set 1 bracers updated!',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '3 Spectral stalkers'
                  ),
                  ' (non elite) will spawn and attack Deliana, help her to kill them. ',
                  n.a.createElement('br', null),
                  'Get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] A Supernatural Device'
                    )
                  ),
                  ". This is the next step for your armor quest, but we won't be doing it in this guide, that's yet another thing for you to do at level 60!"
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'You should be approximately 2/3 done in your level 59 by now.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  "It's time for you to go to",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Blackrock Depths'
                  ),
                  '! Gather all the quests,',
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href: 'http://www.wow-pro.com/node/591',
                      className: 'bb-url',
                    },
                    'follow this guide'
                  ),
                  ". Don't forget to take your",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Altered Black Dragonflight Molt'
                  ),
                  ' with you, and also go turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[54] Return to Tinkee'
                    )
                  ),
                  ' ',
                  'in the Burning Steppes at Flame Crest.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Doing Blackrock Depths and all the quests should easily ding you 60, and some of these quests are important for your level 60 life:'
                ),
                n.a.createElement(
                  'ul',
                  { className: 'bb-list' },
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[60] Attunement to the Core:'
                      )
                    ),
                    ' ',
                    'which allows you to enter the Molten Core (a high level 40-man raid instance) by a teleport window.',
                    n.a.createElement('p', null)
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    n.a.createElement(
                      'span',
                      { className: 'quest' },
                      n.a.createElement(
                        'span',
                        { className: 'strong' },
                        '[54] Marshall Windsor'
                      )
                    ),
                    ', which is actually the Onyxia Key quest line.'
                  )
                )
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'p',
                null,
                "However, if after Blackrok Depths and all it's quest XP rewards you are still level 59, here is one last bonus XP circuit (And remember, after patch 1.10 you will be able to cash in quests for gold - means epic mount sooner",
                ' ',
                n.a.createElement('img', {
                  src:
                    'http://www.wow-pro.com/sites/all/modules/smileys/packs/Example/smile.png',
                  title: 'Smiling',
                  alt: 'Smiling',
                  className: 'smiley-content',
                }),
                '):'
              ),
              n.a.createElement('p', null),
              n.a.createElement(
                'li',
                null,
                'Take two ',
                n.a.createElement(
                  'span',
                  { className: 'item' },
                  'thorium bars'
                ),
                ' with you (buy them at the AH or something). Sell and repair, resupply food/drink (4 stacks).',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Go to Gadgetzan, turn in',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Mold Rhymes With...'
                    )
                  ),
                  ' ',
                  'get the follow up',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Fire Plume Forged.'
                    )
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Ride to Un'Goro Crater, right after entering it from the slope, go northwest to Fire Plume Ridge, climb to the top of it. Go next to the lava pool and right click your",
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Skeleton Key Mold'
                  ),
                  ' from your inventory.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Get off the mountain by the west side, ride northwest to the slope leading to Silithus ',
                n.a.createElement('span', { className: 'em' }, '(29,22)'),
                '. In Silithus, ride west to Cenarion Hold',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(51,37)'),
                '.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Get',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Securing the Supply Lines'
                    )
                  ),
                  ' ',
                  'from Windcaller Proudhorn.',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Deadly Desert Venom'
                    )
                  ),
                  ', from Beetix Fickelspragg on the 1st Floor of the Inn.',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[58] The Twilight Mystery'
                    )
                  ),
                  ' ',
                  'from Geologist Larksbane',
                  n.a.createElement('br', null),
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] Secret Communication'
                    )
                  ),
                  ' ',
                  'from Bor Wildmane'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/silithuscircuit.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                "Get out of Cenarion Hold by the west side, keep going west a little bit, you'll quickly encounter",
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Scorpids'),
                ',',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Spiders'),
                ' and',
                ' ',
                n.a.createElement('span', { className: 'strong' }, 'Worms'),
                '. Kill all of them on sight. Kill the Twilight mobs at the Twillight Base Camp',
                ' ',
                n.a.createElement('span', { className: 'em' }, '(41,42)'),
                '. There is a lot of scorpids, spiders and worms in the area north of the twilight camp.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'Keep kiling around this camp until you complete [',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    'b][60] Secret Communication[/b]'
                  ),
                  ',',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Deadly Desert Venom'
                    )
                  ),
                  ' ',
                  'and',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[55] Securing the Supply'
                    )
                  ),
                  ' ',
                  'lines.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  "It's gonna take a while. But anyway this is good because you are working on our cenarion faction (which is very good at level 60 for many reasons,",
                  ' ',
                  n.a.createElement(
                    'a',
                    {
                      href:
                        'http://www.worldofwarcraft.com/info/basics/factions/cenarion/',
                      className: 'bb-url',
                    },
                    "check Blizzard's homepage here for rewards etc."
                  ),
                  ') and you get ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Glowing Scorpid Blood'
                  ),
                  ', which can be traded for tickets at the',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Darkmoon Faire'
                  ),
                  ". (or sell for nice cash if you aren't interested in the Darkmoon faire rewards)."
                ),
                n.a.createElement(
                  'p',
                  null,
                  'While killing Twilight mobs, you will sometimes find',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'item' },
                    'Twilight Cultist Robe'
                  ),
                  ',',
                  ' ',
                  n.a.createElement('span', { className: 'item' }, 'Mantle'),
                  ' and',
                  ' ',
                  n.a.createElement('span', { className: 'item' }, 'Cowl.')
                ),
                n.a.createElement(
                  'p',
                  null,
                  'Keep them, you will need them later on for level 60 faction quests with cenarion.'
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Things to be careful with:'
                  )
                ),
                n.a.createElement(
                  'p',
                  null,
                  "Don't touch the greater wind stones or you'll get nuked by it. These stones are to be used while wearing the full twilight cultist set and only when doing specific quests. Don't bother with them for now.",
                  n.a.createElement('br', null),
                  'Avoid ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Twilight Keeper Havunth'
                  ),
                  ", he hurts a lot and doesn't drop anything particular.",
                  n.a.createElement('br', null),
                  'The Scorpids you need to kill are the grey/green ones,',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'em' },
                    'named Stonelash Scorpids, NOT the golden ones.'
                  ),
                  ' ',
                  'Kill Twilight mobs until you finish',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[60] Secret Communication.'
                    )
                  )
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'You should finish the quest',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[55] Securing the Supply Line'
                  )
                ),
                ' ',
                "before the others, go turn it in as soon as it's complete (along with the Secret Communication Quest). Get the follow up",
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Stepping Up Security'
                  )
                ),
                ', then go back to finish the other 2.',
                n.a.createElement('p', null),
                n.a.createElement(
                  'p',
                  null,
                  'When you are done with them, go northwest, kill every',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'Dredge Crusher'
                  ),
                  ' you see on the way. Keep going northwest until you are in the northwestern most corner of Silithus named "The Crystal Vale"',
                  ' ',
                  n.a.createElement('span', { className: 'em' }, '(20,18)'),
                  '. Look around for',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '"Twilight Tablet Fragments"'
                  ),
                  ', they look like this:',
                  ' '
                ),
                n.a.createElement(
                  'p',
                  null,
                  n.a.createElement('img', {
                    src:
                      'http://www.wow-pro.com/files/guidepics/twilightfragment.jpg',
                    alt: '',
                    className: 'bb-image',
                  })
                ),
                n.a.createElement(
                  'p',
                  null,
                  'As soon as you have ',
                  n.a.createElement('span', { className: 'item' }, '8 tablets'),
                  ', go southeast towards Cenarion Hold, kill every Dredge Crusher on the way so that you finish',
                  ' ',
                  n.a.createElement(
                    'span',
                    { className: 'quest' },
                    n.a.createElement(
                      'span',
                      { className: 'strong' },
                      '[57] Stepping Up Security'
                    )
                  ),
                  '.'
                ),
                n.a.createElement('p', null)
              ),
              n.a.createElement(
                'li',
                null,
                'Go back to Cenarion Hold, turn in all the quests, hearthstone to Ironforge, fly to Chillwind Camp, turn in',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    '[57] Fire Plume Forged'
                  )
                ),
                ', get the follow up',
                ' ',
                n.a.createElement(
                  'span',
                  { className: 'quest' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    "Araj's Scarab"
                  )
                ),
                ' ',
                "(that's for your Scholomance key).",
                n.a.createElement(
                  'span',
                  { className: 'em' },
                  n.a.createElement(
                    'span',
                    { className: 'strong' },
                    'That should for sure make you ding level 60!'
                  )
                ),
                n.a.createElement('br', null)
              )
            ),
            n.a.createElement(
              'h6',
              null,
              n.a.createElement(
                'span',
                { className: 'strong' },
                'LEVEL 60 -- End of chapter III!'
              )
            ),
            n.a.createElement('p', null, '-Jame')
          )
        );
      };
      function G() {
        var e = Object(u.a)([
          '\n  html {\n    box-sizing: border-box;\n    font-family: ',
          ';\n    font-weight: 400;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    background-color: ',
          ';\n    color: #abb2bf;\n  }\n\n  a {\n    &,\n    &:hover,\n    &:focus {\n      color: ',
          ';\n    }\n  }\n\n  h1 h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: #58f;\n  }\n\n  h1 {\n    color: #999;\n    font-size: 2rem;\n  }\n  h2 {\n    font-size: 1.8rem;\n  }\n\n  .em,\n  em {\n    font-style: italic;\n  }\n  .strong,\n  strong {\n    font-weight: bold;\n  }\n\n  hr {\n    border-top: 1px solid #ccc;\n  }\n\n  .tt-link {\n    color: #c63;\n  }\n  .quest {\n    color: #ffcc00;\n    font-weight: bold;\n  }\n\n  .small {\n    font-size: 15px;\n  }\n',
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      var C = Object(i.b)(G(), h.fontFamily, h.darkGray, h.lightBlue);
      var I = document.getElementById('root');
      r.a.render(
        n.a.createElement(function () {
          return n.a.createElement(
            'div',
            { className: 'app' },
            n.a.createElement(i.a, { styles: C }),
            n.a.createElement(g, null),
            n.a.createElement(
              w,
              null,
              n.a.createElement(
                o.a,
                null,
                n.a.createElement(v, { path: '/' }),
                n.a.createElement(v, { path: '/1' }),
                n.a.createElement(T, { path: '/2' }),
                n.a.createElement(S, { path: '/3' })
              )
            ),
            n.a.createElement(q, null)
          );
        }, null),
        I
      );
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.24fbf313.chunk.js.map
