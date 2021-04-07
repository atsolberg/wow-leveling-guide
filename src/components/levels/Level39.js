import React from 'react';
import TtLink from '../tt-link/TtLink';

function Level39() {
  return (
    <div>
      <h6>Level 39</h6>
      <ol>
        <li>
          Go east and a bit to the north to Hammertoe's Digsite.
          <br />
          At (53,34) under a tent next to a big keg you will find a{' '}
          <span className="object">Crumpled Map</span> on the floor. Click it
          and get the quest{' '}
          <TtLink type="quest" id="720">
            [35] A Sign of Hope
          </TtLink>
          . Then keep on killing Dark Dwarves until you get Ryedol's Lucky Pick.
        </li>
        <li>
          Then go northeast to Camp Kosh where you can find the{' '}
          <span className="object">Supply Crate</span>. (67,22)
          <p>
            When you got the crate, go back to Prospector Ryedol south of
            Hammertoe's Digsite and turn in the quests.
            <br /> Get the follow up{' '}
            <TtLink type="quest" id="733">
              [39] Scrounging
            </TtLink>{' '}
            from Sigrun Ironhew.
          </p>
        </li>
        <li>
          Go south to Agmond's End and find a Battered Dwarven Skeleton (50,62),
          click it and complete the quest and get the follow up{' '}
          <TtLink type="quest" id="739">
            [42] Murdaloc
          </TtLink>
          .
        </li>
        <li>
          Kill 12 Stonevault Bonesnapper and Murdaloc, you can find him inside
          the camp next to the Dwarven Corpse. Keep killing those Troggs until
          you get 10 <TtLink id="5797">Indurium Flakes</TtLink> as well.
        </li>
        <li>
          Once both quests complete go south into the mountains and kill Rock
          Elementals at (40,73) until you get 3{' '}
          <TtLink id="4627">Large Stone Slabs</TtLink>.
        </li>
        <li>
          Go west to the ogre area named Camp Cagg (10,72), kill ogres there
          until you get 7 <TtLink id="4630">Scrap Metal</TtLink>. This may take
          a while.
        </li>
        <li>
          Go north to Apocryphan's Rest (16,60) and kill Buzzards / Coyotes
          until complete{' '}
          <TtLink type="quest" id="703">
            [40] Barbecued Buzzard Wings
          </TtLink>{' '}
          and{' '}
          <TtLink type="quest" id="2500">
            [39] Badlands Reagent Run
          </TtLink>
          .
        </li>
      </ol>
      <p>
        When that is done, go east to Martek the Exiled (42,52) and turn in the
        quests{' '}
        <TtLink type="quest" id="1108">
          [39] Indurium
        </TtLink>{' '}
        and get the follow up{' '}
        <TtLink type="quest" id="1137">
          [38] News for Fizzle
        </TtLink>
        . Turn in{' '}
        <TtLink type="quest" id="703">
          [40] Barbecued Buzzard Wings
        </TtLink>{' '}
        to Rigglefuzz as well. Repair and sell while you are here.
      </p>
      <p>
        Then go northeast and turn in{' '}
        <TtLink type="quest" id="733">
          [40] Scrounging
        </TtLink>{' '}
        at Sirun Ironhew.
        <br /> After that go west to Lotwil Veriatus and turn in the quest, get
        the follow up{' '}
        <TtLink type="quest" id="712">
          [42] Study of the Elements: Rock
        </TtLink>
        .
      </p>
      <p>
        You should be getting close to level 40 at this point, about 35000 xp to
        go normally, if you still follow the "kill everything on your way" rule.
        Go grind on Rock Elementals or Lesser Rock Elementals, Dark Dwarves or
        Troggs. There are a lot of Dwarves at the Angor Fortress. It's up to
        you. Should take about 1h30 of grinding.
      </p>
      <p>
        It went quite well for me, I was doing 41000 XP/Hour before I got to the
        grinding part. This is my XP rate starting from the moment I talked to
        Prospector Ryedoll until level 40.
      </p>
      <p>
        <img src="/assets/wp/badlandsxp.jpg" alt="" />
      </p>
      <p>So that's approximately 1 level and a half in 4 Hours.</p>
    </div>
  );
}

export default Level39;
