import React from 'react';
import { Link } from '@reach/router';

import Level50 from '../components/levels/Level50';
import Level51 from '../components/levels/Level51';
import Level52 from '../components/levels/Level52';
import Level53 from '../components/levels/Level53';
import Level54 from '../components/levels/Level54';
import Level55 from '../components/levels/Level55';
import Level56 from '../components/levels/Level56';
import Level57 from '../components/levels/Level57';
import Level58 from '../components/levels/Level58';
import TtLink from '../components/tt-link/TtLink';

function Chapter3() {
  return (
    <div>
      <h2>Chapter 3 (50-60) [old version]</h2>
      <h3>Introduction:</h3>
      <p>
        This guide starts at <em>level 50</em>, it is the 3rd chapter of my
        guide. Before starting I suggest you read the introduction and
        recommendations of my <Link to="/1">1st Chapter</Link>. If you are
        already level 50+ and just found this guide, I suggest you start at some
        point in the <Link to="/2">Chapter II</Link> so you get the following
        quests, which we will be doing in this chapter: <br />
      </p>
      <ul>
        <li>
          <TtLink type="quest" id="">
            [49] Rise of the Silithid
          </TtLink>
        </li>
        <li>
          <TtLink type="quest" id="">
            [50] Into the Temple of Atal'Hakkar (Dungeon)
          </TtLink>
        </li>
        <li>
          <TtLink type="quest" id="">
            [51] The Stone Circle
          </TtLink>
        </li>
        <li>
          <TtLink type="quest" id="">
            [53] The God Hakkar (Dungeon)
          </TtLink>
        </li>
      </ul>
      However, if at any moment in the guide you lack quest log space (because
      of a class quest you don't want to abandon for exemple), then abandon{' '}
      <TtLink type="quest" id="">
        [50] Into the Temple of Atal'Hakkar
      </TtLink>
      , you can easily get it back later on in Stormwind right before you go to
      the <strong>Sunken Temple</strong>.
      <p>
        Also, this guide doesn't take into account tradeskills, class specific
        quests or PvP.{' '}
        <em>
          It's 100% focused on getting the most experience possible in the
          shortest possible time
        </em>{' '}
        while doing a lot of quests and enjoying as much content as possible,
        any race/class combination can do this guide. The most part of the guide
        is doable solo, when it's not it will be mentioned. The guide has been
        tested with four different characters, non twinked, played by the
        wow-pro team: a warrior, a mage, a rogue and a hunter to ensure that the
        guide is accessible for any class. <em>Enjoy!</em>
      </p>
      <h5>Shopping List</h5>
      <ul>
        <li>
          <strong>Before level 54</strong> 1 x{' '}
          <TtLink id="10561">Mithril Casing</TtLink> (about 70-90silver at the
          AH)
        </li>
        <li>
          <strong>Before level 58</strong> (but can equip it at level 52): 1 x{' '}
          Your class{' '}
          <a
            href="https://classic.wowhead.com/item-set=186/beaststalker-armor"
            rel="noreferrer noopener"
            target="_blank"
          >
            Dungeon Set 1
          </a>{' '}
          <TtLink id="16681">bracers</TtLink>.
        </li>
        <li>
          <strong>The sooner the better</strong> 3 x{' '}
          <TtLink id="4500">Traveller backpacks</TtLink> (those 16 Slot
          backpacks). They go for 5g-8g at the auction house. Hunters and
          warlock should just buy two, since one of their bag slots is reserved
          for quiver or soul bag. <br />
          Having a lot of bag space is really important. The higher you get in
          levels, the more we will go for long xp circuits far from any vendor.
          At level 60 when you will go farm money or anything, it will also be
          very handy to have a lot of bag space. Why only 3 traveller backpacks
          and not 4? Because at level 60 you will do a long quest line named{' '}
          <TtLink type="quest" id="">
            [60] You Are Rakh'likh, Demon (Elite)
          </TtLink>
          , and one of the rewards is a 16-slot bag, so no need to waste money
          on a 4th traveller pack.
          <br />
        </li>
      </ul>
      <Level50 />
      <Level51 />
      <Level52 />
      <Level53 />
      <Level54 />
      <Level55 />
      <Level56 />
      <Level57 />
      <Level58 />
      <h6>
        <span className="strong">LEVEL 60 -- End of chapter III!</span>
      </h6>
      <p>-Jame</p>
    </div>
  );
}

export default Chapter3;
