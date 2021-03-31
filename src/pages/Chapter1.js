import React from 'react';
import { Link } from '@reach/router';

import TtLink from '../components/tt-link/TtLink';
import Level30 from '../components/levels/Level30';
import Level31 from '../components/levels/Level31';
import Level32 from '../components/levels/Level32';
import Level33 from '../components/levels/Level33';
import Level34 from '../components/levels/Level34';
import Level35 from '../components/levels/Level35';
import Level36 from '../components/levels/Level36';
import Level37 from '../components/levels/Level37';
import Level38 from '../components/levels/Level38';
import Level39 from '../components/levels/Level39';
import Level40 from '../components/levels/Level40';

function Chapter1() {
  return (
    <div>
      <h2>Chapter 1 (30-41) [old version]</h2>
      <h3>Introduction:</h3>

      <p>
        This guide starts at{' '}
        <em>
          <strong>level 30</strong>
        </em>
        . It is your task to reach that level on your own and it shouldn&apos;t
        be a problem, you can check the other leveling guides in our leveling
        guide forum for the earlier levels. The main reason why I don&apos;t
        want to start a guide at level 1 is because:
      </p>
      <ol>
        <li> It&apos;s not so needed</li>
        <li>
          Depending on your race/class choice you will start from different
          areas so covering them all would be a mess.
        </li>
      </ol>

      <p>
        This guide is optimized for <strong>FAST</strong> leveling with a
        minimum of grinding sessions. Quests are important, they give rewards
        and faction and are less boring than pure grinding, BUT sometimes some
        quests are really a time waste and we will be skipping those and
        replacing them by good grinding spots when it is necessary. Some people
        say that Grinding is always faster than questing, this is true in theory
        when you don&apos;t know which quests to take and which to avoid, and
        what is the best order to do them. With this guide, questing will be
        very efficient and much better than pure grinding. Follow each
        instruction carefully and you will see for yourself. The quests choices
        and order to do them are optimal so that you run as few as possible
        while doing the most possible and then turning several quests at the
        same time. This guide will be very useful for both veteran and novice
        players, and this is why sometimes I describe things in two fashion{' '}
        <strong>&quot;In short&quot;</strong> (for the veterans) and{' '}
        <strong>&quot;in details&quot;</strong> (for the novices). That way the
        veteran players can skip those &quot;in details&quot; paragraph if the
        &quot;in short&quot; one was enough information for them. So even the
        guide itself is optimized for the minimum reading possible, to save
        time! Let&apos;s get started immediately then!
      </p>

      <p>
        Everything described in this guide can be done solo (besides when I say
        otherwise). You can of course follow this guide while duoing, grouping,
        it&apos;s not a problem, it works too.
      </p>

      <h5>Basic rules:</h5>
      <ol>
        <li>
          While traveling, <strong>kill everything that is on your way</strong>{' '}
          and gives experience (Yellow mobs preferably).
        </li>
        <li>
          {' '}
          Spend your <strong>talent points</strong> so you do the most damage
          possible. (e.g: Priest should specialize in Shadow Talents, Warriors
          in Arms/Fury, Rogues Combat/Assassination, etc).
        </li>
        <li>
          <strong>
            Don&apos;t waste your time trying to find groups for questing
          </strong>
          , you can solo everything that is described in this guide. Only group
          with someone when it&apos;s not gonna be a waste of time (e.g: meeting
          the person at the other end of the map to show him the way to where
          your quest is)
        </li>
        <li>Try to always log out in an Inn when you take a break.</li>
        <li>
          If I don&apos;t mention a quest, it means I consider it a waste of
          time, so don&apos;t take it thinking I forgot a quest here and there,
          I didn&apos;t.&nbsp;
          <span role="img" aria-label="smile">
            🙂
          </span>
          <br />
          Also don&apos;t abandon a quest unless I say you should.
        </li>
        <li>
          Sometimes I will be making lists of quest you should have before
          starting with an area, that doesn&apos;t mean I will list the whole
          quest log, JUST the quests that interest us for the moment.
        </li>
      </ol>
      <hr />

      <h5>Shopping List:</h5>
      <p>
        Every time you pass by an auction house, try to buy the following items:
      </p>

      <ul>
        <li>
          1X <TtLink id="2868">Patterned Bronze Bracers</TtLink> ~50 Silver
        </li>
        <li>
          1X <TtLink id="3829">Frost Oil</TtLink> ~ 2 Gold
        </li>
        <li>
          1X <TtLink id="4389">Gyrochronatom</TtLink> ~1 Gold
        </li>
      </ul>

      <p>These might not always be up for sale, so start checking early.</p>

      <h5>
        Chapter 1 - [Level 30 - 41] Journey from Thousand Needles to Badlands
      </h5>

      <Level30 />
      <Level31 />
      <Level32 />
      <Level33 />
      <Level34 />
      <Level35 />
      <Level36 />
      <Level37 />
      <Level38 />
      <Level39 />
      <Level40 />

      <h6>Level 41</h6>
      <p>
        Complete <span className="quest">[42] This is Going to be Hard</span>{' '}
        and get the follow up. Talk to Lotwil and complete the quest but BEFORE
        you accept the next step from Lotwil, be warned: A level 45 Elemental
        will spawn and you will have to defeat it. At level 41 this is hard but
        possible for every class. Just use every long cooldown ability you have
        as well as potions. Loot{' '}
        <TtLink id="4847">Lotwil&apos;s Shackles of Elemental Binding</TtLink>{' '}
        from the Fam&apos;retor Elemental and go turn in the quest to Lotwil.
        Congratulations, you are done with Badlands and with the first Chapter
        of this leveling guide! Warp to <strong>Ironforge</strong> and sell /
        repair / auction etc.
      </p>
      <p>-Jame</p>
      <p className="my-3">
        <Link to="/2">Next - Chapter 2 (41-50)</Link>
      </p>
    </div>
  );
}

export default Chapter1;
