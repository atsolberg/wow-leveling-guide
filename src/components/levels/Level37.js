import React from 'react';
import TtLink from '../tt-link/TtLink';

function Level37() {
  return (
    <div>
      <h6>Level 37</h6>
      <ol>
        <li>
          Go southwest toward the big arch (63,79). Kill 30 Undead Ravagers
          there. Beware of the Outcast Necromancers, interrupt them when they
          cast their summon spell. If not, they summon an Undead Ravager.{' '}
          <span role="img" aria-label="tongue">
            😛
          </span>
        </li>
        <li>
          When done with the 30 Ravagers, from the big Arch, go west, stay close
          to the mountain on your left until you reach Gelkis Village. Then go
          northwest until you find Uthek The Wise (36,79). Turn in the quest{' '}
          <TtLink type="quest" id="1382">
            [35] Strange Alliance
          </TtLink>
          , don't get the follow up.
        </li>
        <li>
          Take the road east / northeast and then north. Follow the road until
          you reach Kormek's Hut (62,38) and turn in{' '}
          <TtLink type="quest" id="5501">
            [39] Bone Collector
          </TtLink>
          .
        </li>
        <li>
          Then go north to Nigel's Point and turn in all the quests. Get the
          follow ups:
        </li>
      </ol>
      <ul>
        <li>
          <TtLink type="quest" id="1456">
            [39] The Karnitol Shipwreck
          </TtLink>
        </li>
        <li>
          <TtLink type="quest" id="1052">
            [40] Down the Scarlet Path
          </TtLink>
        </li>
      </ul>
      <p>XP rate:</p>
      <img src="/assets/wp/xpratedesolace.jpg" alt="" />
      <p className="mt-3">
        This session started with the Satyr quest and finished right now after
        turning in all the quests in Nijel's Point. That was done with a level
        36 character with average gear, solo, on a new server (no twink). I've
        tried it with 3 different classes and it works just as well. And there
        is still two quests to turn in, that's just to show how efficient the
        quest path of Desolace can be when done the right way.{' '}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </p>
      <p>
        Warp to <strong>Ironforge</strong>, go to the Hall of Explorers and turn
        in the quest{' '}
        <TtLink type="quest" id="1457">
          [39] The Karnitol Shipwreck
        </TtLink>
        .<div className="mt-4">At this point, you got 2 options:</div>
      </p>
      <ol>
        <li>
          Go to Scarlet Monastery. I highly recommend this, an instance run will
          slow down your exp rate (unless you get a good group going fast). But
          every 10 level or so you need some gear upgrades and instances are the
          best for that, Scarlet Monastery is a great instance, not too time
          consuming. And you already got the main quest. Go further in the Hall
          of Explorers and get{' '}
          <TtLink type="quest" id="1050">
            [38] Mythology of the Titans
          </TtLink>{' '}
          from Librarian Mae Paledust. Repair, sell, check auction house etc.
          Then fly to Southshore, turn in the quest{' '}
          <TtLink type="quest" id="1052">
            [40] Down the Scarlet Path
          </TtLink>{' '}
          and get the follow up{' '}
          <TtLink type="quest" id="1053">
            [40] In the Name of the Light
          </TtLink>
          . Get a group together and go to Scarlet Monastery in Tirisfal Glade.
        </li>
        <li>
          You don't like instances at all. In that case, go to the next step of
          the guide, Badlands.
        </li>
      </ol>
      <p>
        Note: Doing Scarlet monastery got me about 75000 XP. That's almost a
        full level, so I was level 38 and halfway to level 39 before going to
        Badlands.
      </p>
    </div>
  );
}

export default Level37;
