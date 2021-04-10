import React from 'react';
import Item from '../item/Item';
import Quest from '../quest/Quest';
import Npc from '../npc/Npc';

function Level50() {
  return (
    <div>
      <h6>Level 50</h6>
      <ol>
        <li>
          Go To <strong>Maraudon</strong>. Doing all the quests (or at least the
          main ones) should get you about 75% done in level 50. Don't turn in
          the quest <Quest id="7066">[51] Seed of Life</Quest> though, it's in
          Moonglade and we'll make a stop there later on in the chapter.
        </li>
        <li>
          Time to explore new areas! Repair, resupply food and drink (3 stacks),
          check the AH.
          <br /> <strong>Make Ironforge your homepoint</strong>.<br /> Buy 15
          silk cloth if you don't have that on you already. You'll need them for
          a searing gorge quest.
          <p>
            <em>In short:</em> Go to <strong>Searing Gorge</strong>.<br />
            <em>In details:</em> From Ironforge, fly to Thelsamar, then go south
            to Badlands. In Badlands you can find the entrance to the Searing
            Gorge on the western end of the Badlands, south of Kargath (the
            horde outpost) at <em>(3,61)</em>
          </p>
          <p>Inside Searing Gorge:</p>
          <p>
            Follow the trail north and then west around the area named "The
            Cauldron" and find <Npc id="">Kalaran Windblade</Npc>{' '}
            <em>(38,39)</em>. Get the quest{' '}
            <Quest id="3441">[48] Divine Retribution</Quest> then talk to
            Kalaran again and go through his dialogue. Turn in the quest and get
            the follow up <Quest id="3442">[48] The Flawless Flame</Quest>.
          </p>
          <p>
            Go a bit further west and you should find a path going up the
            mountain to <strong>Thorium Point</strong> <em>(32,33)</em>.
          </p>
          <p>
            In Thorium point, find an panel at <em>(37,26)</em>. Right click it
            and get the quests:
          </p>
          <ul>
            <li>
              <Quest id="7729">
                [48] JOB OPPORTUNITY: Culling the Competition
              </Quest>
            </li>
            <li>
              <Quest id="7728">
                [48] STOLEN: Smithing Tuyere and Lookout's Spyglass
              </Quest>
            </li>
            <li>
              <Quest id="7701">[50] WANTED: Overseer Maltorius (Elite)</Quest>
            </li>
          </ul>
          <p>
            Get the 3 quests from Hansel Heavyhands:
            <br />
          </p>
          <ul>
            <li>
              <Quest id="7727">
                [49] Incendosaurs? Whateverosaur is More like It.
              </Quest>
            </li>
            <li>
              <Quest id="7723">[49] Curse These Fat Fingers</Quest>
            </li>
            <li>
              <Quest id="7724">[49] Fiery Menace!</Quest>
            </li>
          </ul>
        </li>
        <p>
          and <Quest id="7722">[50] What the Flux?</Quest> from Master Smith
          Burninate.
        </p>
        <p>
          <em>Note:</em> If you ever need to sell and repair, you should go to
          this NPC.
        </p>
        <p>
          <strong>Get the flight path.</strong>
        </p>
        <p>Your quest log should look like this:</p>
        <p>
          <img src="/assets/wp/questlogsg.jpg" alt="" className="bb-image" />
        </p>
        <p>
          Note: You should have{' '}
          <Quest id="162">[49] Rise of the Silithid</Quest> instead of{' '}
          <Quest id="4493">[53] March of the Silithid</Quest>, which is the
          follow up. We will get it later in the guide.
        </p>
        <p>
          <strong>Start of Searing Gorge circuit #1</strong>
        </p>
        <p>
          <img src="/assets/wp/sgcircuit1.jpg" alt="" className="bb-image" />
        </p>
        <li>
          First, go south where you'll find a big wheel (its part of a dark iron
          dwarven forge) and kill all the <Npc id="">Dark Iron Steamsmith</Npc>{' '}
          you find there <em>(39,50)</em>, there should be 5 or 6 around here.
          Hopefully one of them will drop the{' '}
          <Item id="18959">Smithing Tuyere</Item> you need. If not, lets just go
          on, we'll come back here later.
        </li>
        <li>
          Start heading east and kill any <strong>elemental</strong> or{' '}
          <Npc id="">Heavy War Golem</Npc> you find on the way. Also kill{' '}
          <Npc id="">Dark Iron Taskmasters</Npc> and{' '}
          <Npc id="">Dark Iron Slavers</Npc> on your way. Don't wait for
          respawns, just kill them while going east. At <em>(59,35)</em> mount
          up and ride southeast to Grimesilt Dig site and find a little wooden
          house at <em>(65,62)</em> behind the dig site, which actually looks
          like some public toilet. Right click it and get the quest{' '}
          <Quest id="4449">[45] Caught!</Quest>.
          <p>
            Start killing the <strong>Dark Iron dwarves</strong> in the camp as
            well as the <strong>golems</strong> around here. After you have
            killed 8 <Npc id="">Dark Iron Gelologists</Npc> and got 15{' '}
            <Item id="4306">Silk Cloth</Item> (if you don't have them, kill more
            of those dwarves, they drop silk cloth), go back to the Wooden
            Outhouse and turn in the quest, don't get the follow up though.
          </p>
        </li>
        <li>
          Now go back to the digsite, and clear it entirely, especially the
          northern part. Get full HP/Mana and get the quest from{' '}
          <Npc id="">Dorius Stonetender</Npc>{' '}
          <Quest id="3367">[48] Suntara Stones</Quest>.
          <p>
            At <em>(66,44)</em> he will stop to catch his breath and will get
            ambushed by 4 lvl 43 <Npc id="">Dark Iron Steelshifters</Npc>. Easy
            fight for you but make sure you get at least all but one off Dorius
            quickly so that he doesn't die.
          </p>
          <p>
            At <em>(74,19)</em> he will get assassinated (you can't help it) and
            a parchment will appear on the floor next to him.
          </p>
          <p>
            <img
              src="/assets/wp/dariusscroll.jpg"
              alt=""
              className="bb-image"
            />
          </p>
          <p>
            {' '}
            Click it and turn in the quest, get the follow up{' '}
            <Quest id="3368">[48] Suntar Stones</Quest>.
          </p>
        </li>
        <li>
          Ride north to the entrance of The Cauldron <em>(63,38)</em>. Inside
          the Cauldron, kill all the <strong>Dark Iron dwarves</strong> and{' '}
          <strong>Elementals</strong> you find.{' '}
          <strong>The Blazing Elementals</strong> and the{' '}
          <strong>Magma Elementals</strong> drop the{' '}
          <Item id="10509">Heart of Flame</Item> you need. Also kill any{' '}
          <strong>Heavy War Golem</strong> you find.
          <p>
            <em>Note:</em> If while killing dwarves you find a{' '}
            <Item id="11818">Grimesilt Outhouse Key</Item>, right click it to
            start the quest <Quest id="4451">[47] The Key to Freedom</Quest>, we
            will turn it in later on.{' '}
          </p>
        </li>
        <li>
          <p>
            Progress westwards inside the Cauldron until you find an iron slope
            going up at <em>(46,53)</em>. Follow this slope until you find an
            entrance to the Slag Pit at <em>(41,54)</em>.
          </p>
          <p>
            <img src="/assets/wp/theslagpit.jpg" alt="" />
          </p>
          <p>
            Inside the slag pit go across the bridge, on your left will be the
            Quarry Gate, go through it.
            <br />
            Work your way northwards until a bigger room where you'll find{' '}
            <Npc id="">Enslaved Archeologists</Npc> and a big{' '}
            <strong>52 Elite elite golem</strong> lying down (ignore it). Go up
            the iron slope, midway on the slope you have 2 options, straight or
            left. Go straight. You'll soon enter a room with several pairs of{' '}
            <strong>taskmasters</strong> and <strong>slavers</strong>.
          </p>
          <p>
            In this room further in and to the right you'll find{' '}
            <Npc id="">Overseer Maltorius</Npc> and{' '}
            <Npc id="">2 Dark Iron Sentries</Npc>. These are 3 elites so you
            can't solo them. You can either try to find more people (I managed
            to duo it with mage + paladin) or just abandon this quest. However,
            behind these 3 elites you can find{' '}
            <Item id="18922">Secret Plans: Fiery Flux</Item>.
          </p>
          <p>
            You need to click the plan and not be interupted for 6 seconds. So
            how do you do this? Well several classes can't do it, Paladins for
            example. Some can, like mage:
          </p>
          <p>
            Sheep the overseer, let the 2 sentries come to you, Iceroot them,
            run for the scroll and loot it fast, then jump down the ledge behind
            the scroll.
          </p>
          <p>
            Or warlock, hunter: Send in the pet, quickly loot the scroll and
            jump down.
          </p>
          <p>
            Or warrior: charge the Taskmaster, and use intimidating shout. Loot
            the scroll quickly and jump down.
          </p>
          <p>
            Engineers can probably make it too if they got a high level target
            dummy.
          </p>
          <p>
            Anyway, that's if you can't find people to kill those 3 elites with
            you, so try to find people for it and in the meantime you can go on
            with the other quests inside the Slag Pit. Better try it with 2
            other people, its a tough fight because Overseer is a mage and casts
            polymorph. If you got paladin or priest they can dispell it. Best is
            to sap/sheep Overseer and kill the 2 sentries first, then deal with
            the overseer alone.
          </p>
        </li>
        <li>
          From the same big room, go over the iron bridge which is on the
          opposite side of the 3 elites. On the other side of the bridge, jump
          down to the lower floor at the drop off spot indicated on the map.
          From this spot go east and you should find{' '}
          <Npc id="">Incendosaurs</Npc>, kill 20 of them.
        </li>
        <li>
          When done with that, go back up the ramp and then get out of the Slag
          pit, jump down back into the Cauldron and work your way westwards
          looking for <Npc id="">Blaze Elementals</Npc> until you get 4{' '}
          <Item id="10509">Heart of Flame</Item>.
        </li>
        <li>
          Then go to the iron slope you took previously at <em>(46,53)</em>{' '}
          Follow this slope but this time skip the first entrance to the slag
          pit, and get on the elevator <em>(40,54)</em>. The elevator will stop
          at the 1st floor and 2nd floor but don't get off. Wait until it's on
          the 3rd floor from there you can get out of the Cauldron.
          <p>
            Kill every <Npc id="">Steamsmith</Npc> you find around the buildings
            infront and to the left of you after getting off the elevator{' '}
            <em>(39,50)</em>. There is 5 Steamsmiths at this spot, pray that one
            of them drops a smithing Tuyere. If not don't worry, we'll kill more
            of these later.
          </p>
        </li>
        <li>
          Kill every <Npc id="">Heavy War Golem</Npc> around and go north to
          Karalan Windblade <em>(39,38)</em>. Turn in the quest and get the
          follow up <Quest id="3443">[48] Forging the Shaft</Quest>
        </li>
        <li>
          Go to thorium point and turn in the quests you have completed. When
          turning in <Quest id="7722">[50] What the Flux?</Quest>, Master Smith
          Burninate will open 3 new quests to you, but they are just to work on
          thorium brotherhood faction, so don't bother unless you care about
          this faction.
          <p>
            You should be{' '}
            <em>
              <strong>level 51</strong>
            </em>{' '}
            by now, if not you should grind on{' '}
            <strong>dark iron dwarves</strong> in the slag pit for exemple to
            catch up.
            <br />
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Level50;
