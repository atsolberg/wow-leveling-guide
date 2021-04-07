import React from 'react';

import TtLink from '../tt-link/TtLink';
import WowIcon from '../icons/wow-icon/WowIcon';

function Level32() {
  return (
    <div>
      <h6>Level 32</h6>
      <p>At level 32 the zone we will be aiming for is Stranglethorn Vale. </p>
      Quest Gathering:
      <br />
      <ul>
        <li>
          Fly to <strong>Darkshire</strong> and run west/south to{' '}
          <strong>Stranglethorn Vale</strong>. Get the quests in the Rebel Camp
          in Strangelthorn Vale (37,3).
        </li>
        <li>
          Then go to the Nesingwary's Camp (35,10). Turn in{' '}
          <TtLink type="quest" id="5762">
            [31] Hemet Nesingwary
          </TtLink>
          . Get the quest{' '}
          <TtLink type="quest" id="583">
            [30] Welcome to the Jungle
          </TtLink>{' '}
          from Barnil Stonepot and turn in it at Hemet Nesingwary Jr. This
          should unlock several other quests, get them all.
        </li>
      </ul>
      <br />
      You should have these quests: <br />
      <ul>
        <li>
          <TtLink type="quest" id="575">
            [31] Supply and Demand from Drizzlik
          </TtLink>{' '}
          in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="192">
            [31] Panther Mastery
          </TtLink>{' '}
          From Nesingwary camp.
        </li>
        <li>
          <TtLink type="quest" id="185">
            [31] Tiger Mastery
          </TtLink>{' '}
          From Nesingwary camp.
        </li>
        <li>
          <TtLink type="quest" id="201">
            [32] Investigate the Camp
          </TtLink>{' '}
          From Krazek in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="203">
            [33] The Second Rebellion
          </TtLink>{' '}
          From Sergeant Yohwa at the Rebel Camp.
        </li>
        <li>
          <TtLink type="quest" id="204">
            [34] Bad Medicine
          </TtLink>{' '}
          Sergeant Yohwa at the Rebel Camp.
        </li>
        <li>
          <TtLink type="quest" id="194">
            [34] Raptor Mastery
          </TtLink>{' '}
          From Nesingwary camp.
        </li>
        <li>
          <TtLink type="quest" id="189">
            [35] Bloodscalp Ears
          </TtLink>{' '}
          From Kebok in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="605">
            [35] Singing Blue Shards
          </TtLink>{' '}
          From Crank Fizzlebub in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="213">
            [36] Hostile Takeover
          </TtLink>{' '}
          From Kebok in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="1112">
            [36] Parts for Kravel
          </TtLink>{' '}
          From Wharfmaster Dizzywig.
        </li>
        <li>
          <TtLink type="quest" id="210">
            [37] Krazek's Cookery
          </TtLink>{' '}
          From Corporal Kaleb at the Rebel Camp.
        </li>
        <li>
          <TtLink type="quest" id="1180">
            [37] Goblin Sponsorship
          </TtLink>{' '}
          From the Baron Revilgaz on top of the <strong>Booty Bay</strong> Inn.
        </li>
        <li>
          <TtLink type="quest" id="578">
            [37] The Stone of the Tides
          </TtLink>{' '}
          From Baron Revilgaz in <strong>Booty Bay</strong>, prereq for this
          quest is given by Krazek in <strong>Booty Bay</strong>.
        </li>
        <li>
          <TtLink type="quest" id="606">
            [41] Scaring Shaky
          </TtLink>{' '}
          From "Sea Wolf" McKinley in <strong>Booty Bay</strong>.
        </li>
      </ul>
      <p>
        No need to take the Green Hills of Stranglethorn quests (the one with
        the chapters), it will just encumber your quest log for now. You will
        complete each chapter when you get the right pages. So while you hunt
        always look out for these:
      </p>
      <p>
        <TtLink id="2725" className="d-inline-block">
          <WowIcon name="inv-misc-note-06" size="lg" />
        </TtLink>
      </p>
      <p>Hunting</p>
      <p>
        <img src="/assets/wp/stvroute1.jpg" alt="" />
      </p>
      <p>
        Step 1: Kill River Crocolisks which can be found all along the river in
        northern Stranglethorn Vale until you find 2{' '}
        <TtLink id="4053">Large River Crocolisk Skin</TtLink>. While you search
        for crocs you can also kill Young Tigers close to the river for Tiger
        Mastery.
      </p>
      <p>
        Step 2: Then kill 10 Young Tigers (or as much as you still got left)
        <br /> Tigers can be found mostly south and around the Nesingwary camp.
      </p>
      <p>
        Step 3: Kill Young Panthers, they are mostly found on the other side of
        the river to the east. (41,10).{' '}
      </p>
      <p>
        Step 4: Go further northeast to the Kurzen Camp (44,11) and kill 15
        Kurzen Jungle Fighters as well as Kurzen Medecine Men until you get 7{' '}
        <TtLink id="2633">Jungle Remedies</TtLink> (might take a while). Also
        you'll need a <TtLink id="2634">Venom Fern Extract</TtLink> from one of
        the piles of crates scattered around the Kurzen Compound.
      </p>
      <p>
        Step 5: Once all 4 quests are done go turn them in (besides Supply and
        Demand, which you will turn in later) at the Rebel Camp where you get
        the follow up:
      </p>
      <ul>
        <li>
          <TtLink type="quest" id="574">
            [38] Special Forces
          </TtLink>
          .
        </li>
      </ul>
      <p>Step 6: And at the Nesingwary camp where you get the follow ups:</p>
      <ul>
        <li>
          <TtLink type="quest" id="186">
            [33] Tiger Mastery
          </TtLink>
        </li>
        <li>
          <TtLink type="quest" id="191">
            [33] Panther Mastery
          </TtLink>
        </li>
      </ul>
      <p>
        Step 7: Go west until you reach a plateau (30,9). Up there you can find
        Panthers and Tigers. Kill 10 of each.{' '}
      </p>
      <p>
        Step 8: Further southwest on the plateau you should find Stranglethorn
        Raptors, kill 10.{' '}
      </p>
      <p>
        Step 9: Go south and down the plateau until you find the troll camp at
        Bal'lal Ruins (29,20)
        <br /> It should take a while to get 15{' '}
        <TtLink id="1519">Bloodscalp Ears</TtLink> but it is a nice grinding
        spot anyway. So grind at this spot until you hit level 33. If you don't
        have enough trolls there is another camp northeast at the Tkashi Ruins
        (33,15).
      </p>
    </div>
  );
}

export default Level32;
