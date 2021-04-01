import React from 'react';
import { Link } from '@reach/router';

import TtLink from '../components/tt-link/TtLink';
import Level41 from '../components/levels/Level41';
import Level42 from '../components/levels/Level42';
import Level43 from '../components/levels/Level43';
import Level44 from '../components/levels/Level44';
import Level45 from '../components/levels/Level45';
import Level46 from '../components/levels/Level46';
import Level47 from '../components/levels/Level47';
import Level48 from '../components/levels/Level48';
import Level49 from '../components/levels/Level49';

function Chapter2() {
  return (
    <div>
      <h2>Chapter 2 (41-50) [old version]</h2>
      <h3>Introduction:</h3>
      <p>
        This guide will take you from level 41 to level 50 in a breeze, but you
        can actually start with it at level 44 for example and catch up with the
        guide really quick, it's not an issue. I suggest you read the{' '}
        <span className="text-success">
          <strong>basic rules</strong>
        </span>{' '}
        and{' '}
        <span className="text-success">
          <strong>recommendations</strong>
        </span>{' '}
        I listed in the{' '}
        <strong>
          <Link to="/1">Chapter I</Link>
        </strong>{' '}
        of my leveling guide if you haven't already. No matter if you are a
        beginner or a veteran world of warcraft player, if you follow this guide
        carefully you'll find yourself XP'ing at an hilarious rate. So please
        give it a try and then say how it went for you!
      </p>
      <h5>Shopping List:</h5>
      <ul>
        <li>
          2x <TtLink id="3825">Elixir of Fortitude</TtLink>
        </li>
      </ul>

      <Level41 />
      <Level42 />
      <Level43 />
      <Level44 />
      <Level45 />
      <Level46 />
      <Level47 />
      <Level48 />
      <Level49 />

      <em>-Jame</em>
      <p className="my-3">
        <Link to="/3">Next - Chapter 3 (51-60)</Link>
      </p>
    </div>
  );
}

export default Chapter2;
