import React from 'react';
import TtLink from '../tt-link/TtLink';

function Level40() {
  return (
    <div>
      <h6 id="l40">Level 40</h6>
      <ol>
        <li>
          At level 40 warp to <strong>Ironforge</strong>, train skills, repair,
          auction house, etc. Go get your mount if you can afford it (if not,
          you should soon, cause there is more elemental killing and grinding to
          do{' '}
          <span role="img" aria-label="tongue">
            😛
          </span>
          )
        </li>
        <li>
          When ready to go, fly to Thelsamar, turn in{' '}
          <TtLink type="quest" id="2500">
            [39] Badlands Reagent Run
          </TtLink>
          . Go to Prospector Ironband and turn in{' '}
          <TtLink type="quest" id="739">
            [42] Murdaloc
          </TtLink>
          . Then go back to the Badlands.
        </li>
        <li>
          Go to the southwestern part of the map (17, 83) and kill Greater Rock
          Elementals until you get 5{' '}
          <TtLink id="4628">Bracers of Rock Binding</TtLink>. There's another
          camp of Greater Rock Elementals further to the west past the Ogres
          (6,83). This will be hard because some of the elementals are level 44.
          Try to find level 42 or 43 ones if the level 44 are too hard for you.
        </li>
        <li>
          When you are done, grind until you are about 5000 xp or less from
          level 41. Grind on Elementals, or Dwarves, up to you. Warning: This is
          a long grinding session, if grinding is too boring for you, then by
          all means do something else, go to Scarlet Monastery a few times for
          example. Also one of the reasons for grinding here even though we got
          a few quests we could do in Stranglethorn Vale is that I want to save
          these quests for later so we can do the whole rest of Booty Bay quests
          in one run. So right now we are already setting up a very juicy XP
          session for the future.{' '}
          <span role="img" aria-label="smile">
            🙂
          </span>
        </li>
        <li>
          Once you are 5000 xp away from level 41, go to Lotwil Veriatus, turn
          in{' '}
          <TtLink type="quest" id="712">
            [42] Study of the Elements: Rock
          </TtLink>{' '}
          and get the follow up{' '}
          <TtLink type="quest" id="777">
            [42] This is Going to Be Hard
          </TtLink>
          . Then go talk to his assistant Lucien Tosselwrench. Get quest{' '}
          <TtLink type="quest" id="716">
            [42] Stone is Better than Cloth
          </TtLink>{' '}
          and complete it, as you should still have the patterned bracers. This
          will make you ding level 41.
        </li>
      </ol>
      <p>
        This grinding sessions was tested by 3 different characters, the XP/Hour
        rate was in between 22000 XP/HOUR and 26000 XP/HOUR depending of the
        class. And there is still a nice little XP boost to come when completing
        the following steps. So grinding isn't bad at all, of course it's not as
        good as an optimized quest circuit, but it's still decent and you will
        see for yourself, it will bring a nice sum of cash. The stones from the
        elementals stack and sell nicely at the merchant, plus, they drop{' '}
        <TtLink id="7067">Elemental Earth</TtLink> which goes for at least 50
        silver each at the AH. Same thing with the Dwarves, they drop Silk and
        sometimes <TtLink id="4338">Mageweave</TtLink>. Sell{' '}
        <TtLink id="4306">Silk</TtLink> / <TtLink id="4338">Mageweave</TtLink>{' '}
        at the AH and you'll get rich quickly.
      </p>
    </div>
  );
}

export default Level40;
