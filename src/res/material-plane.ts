import {Location} from "@/types/location";

export const Continents: Location[] = [
    {
        id: "580c0304-e112-4bcf-84ca-4823902bcf14",
        name: "Zyxs",
        pronunciation: "zie-k-ses",
        type: "Continent",
        image: "zyxs.png",
        snippet: "A continent that prefers to deal with Arcane magic, their knowledge and mastery is a part of daily life. Has a bloody past with Navirar.",
        description: [
            `A magically adept continent brimming with Arcane potential and favoured by those of an Arcane persuasion (wizards, sorcerers, etc.) though they do not shun those without magical abilities. Each country specialises in a different school of magic, to varying degrees of success.`,
            `Distrustful of the Divine, they view those who worship gods with suspicion as they believe power should come from within and not at the whims of sometimes capricious gods. Those who worship the Divine will not be outright harmed or imprisoned, but can sometimes expect a frosty reception.`,
            `Strangely enough, they do not have the same distrust of warlocks as it is commonly believed that siphoning power from otherworldly entities - through deals or otherwise - is an achievement to be celebrated.`,
        ],
    },
    {
        id: "607d1a32-e2de-4cb2-b9f6-4188636e4609",
        name: "Navirar",
        pronunciation: "nav-ee-rah",
        type: "Continent",
        image: "navirar.png",
        snippet: "Devout followers of gods and the divine, these lands brim with Divine magic potential. Previous interactions with Zyx have left deep scars.",
        description: [
            `A quite religious continent with a rich history steeped in Godly interactions and worship, citizens of Navirar are deeply entwined with the Divine, whether in worship, prayer, or simple acknowledgement of powers beyond this world. Devotion is not a necessity though and even those without strong beliefs are treated fairly. Each country typically follows a Chief Deity which has guided the beliefs of their people for millenia and which many do their best to embody in their everyday life.`,
            `While Arcane magic is commonplace, some schools of spells are met with distaste or suspicion, particularly those who interfere with the cycle of life and death. Those who practice Arcane magic are often watched warily by those with Divine magic due to old scars of past interactions with Zyxs, though it is unlikely any actions will be taken unless they have reason to suspect you.`,
        ],
    },
    {
        id: "2346b690-8428-47ae-9cdf-dc346616c123",
        name: "Kingdom of Five Emperors",
        pronunciation: "",
        type: "Continent",
        image: "kingdom-of-five-emperors.png",
        snippet: "Not originally of this world, it is a strange land filled to the brim with treasures and untapped resources. Protected vigilantly by the Five Emperors.",
        description: [
            `Not originally part of the world, this continent-island was created from a piece of Tiamat’s plane when she tried to invade the world in the late second era. Unfathomably rich with natural resources, it is frequented by those who wish to trade, and watched over by the Five Emperors - five great dragons that protect the land and sea from any who would try to cause harm to their land or their people.`,
            `Many rumours abound about this strange and exciting continent, enough that determining what is real and what is a tall tale is quite difficult to understand. Perhaps in time more will be discovered?`,
        ],
    },
];

export const Countries: Location[] = [
    // Zyxs
    {
        id: "2d8f7c26-c6e6-4cfb-a01e-abc189c2042e",
        name: "Deadlands of Dolorex",
        pronunciation: "deadlands of dollor-ex",
        image: "deadlands-of-dolorex.png",
        snippet: "[INFORMATION REDACTED] THIS LOCATION DOES NOT EXIST. THIS LOCATION DOES NOT EXIST.",
        description: [
            `[INFORMATION REDACTED]`,
            `[THIS LOCATION DOES NOT EXIST]`,
            `[THIS LOCATION DOES NOT EXIST]`,
            `[THIS LOCATION DOES NOT EXIST]`,
            `[L O O K  A W A Y]`,
        ],
        type: "Country",
    },
    {
        id: "27556c2f-a783-4fc0-a6e9-11d04de8254c",
        name: "Namarus",
        pronunciation: "nam-ah-ruus",
        image: "namarus.png",
        snippet: "A peaceful and generally kind land with a penchant for Abjuration magic. Quite kind, they make allies often.",
        description: [
            `Specialising in Abjuration magic, they seem to prefer more protective/warding magic and are one of the most open to trade countries within the continent.`,
            `Generally peaceful and highly cooperative, they seem to make allies wherever they go.`,
        ],
        type: "Country",
    },
    {
        id: "fb7695aa-f638-42b2-9e86-18dabddfa1f1",
        name: "Sedamixium",
        pronunciation: "sed-ah-mix-ee-um",
        image: "sedamixium.png",
        snippet: "Conjuration mages with an deep desire to learn of more of other worlds and the creatures within them. There experiments can sometimes be dangerous.",
        description: [
            `Practitioners of Conjuration magic, they seem to have an insatiable knowledge of otherworldly planes and creatures.`,
            `Though there have been reports of dangerous creatures being summoned, no reports have ever been verified.`,
        ],
        type: "Country",
    },
    {
        id: "ad844d14-4ec1-4076-8e50-f8e6ca4e3e1b",
        name: "Lintave",
        pronunciation: "lin-tah-vey",
        image: "lintave.png",
        snippet: "A mysterious nation of powerful Divination mages who seem to focus most of their efforts internally. Reclusive and secretive, much of their nation is a mystery.",
        description: [
            `Masters of Divination magic, they seem to have an uneasy alliance with Thay and a penchant for collecting powerful - and sometimes dangerous - artefacts.`,
            `Little is known about their inner workings save that they seem to be quite reclusive by nature.`,
        ],
        type: "Country",
    },
    {
        id: "1fbd1b6d-d026-4b99-bf4f-f4ffae2eb4d4",
        name: "Hypnia",
        pronunciation: "hip-knee-ah",
        image: "hypnia.png",
        snippet: "Steeped in Enchantment magic, this country is has a deep desire to expand its knowledge by any means.",
        description: [
            `A morally-grey kingdom with a fascination for Enchantment magic, due to a series of unfortunate events their greatest discovery - Power Word: Kill - was able to make its way out from their borders and be learned by Arcane users all around the world.`,
            `Not much more is known, at least publicly.`,
        ],
        type: "Country",
    },
    {
        id: "55a6941b-a414-4c9e-a04d-9cc9fd086aef",
        name: "Wintexia",
        pronunciation: "win-tex-ee-ah",
        image: "Wintexia.png",
        snippet: "Focusing on the raw power that is evident in the Arcane, this country studies Evocation magic with relentless passion.",
        description: [
            `One of the most primal forms of Arcane magic, their study of Evocation magic is as impressive as it is terrifying.`,
            `There have been reports of them utilising this magic to fight at borders with Thay, although both sides refuse to substantiate this claim.`,
        ],
        type: "Country",
    },
    {
        id: "5add2673-f8a0-4c88-bb26-eee00178f27a",
        name: "Illuxtria",
        pronunciation: "ill-ucks-tree-ah",
        image: "illuxtria.png",
        snippet: "A beautiful, incredibly wonderful, and perfect nation that has mastered the school of Illusion.",
        description: [
            `Well-kept, perfectly orderly, and unnaturally beautiful, Illuxtria’s control of the school of Illusion leaves one feeling uncomfortable.`,
            `It is rumoured they have a vast spy network across the entire continent (which the vehemently deny, of course)`,
        ],
        type: "Country",
    },
    {
        id: "e0945a07-26fb-46f4-a5d2-5592a28b96fd",
        name: "Thay",
        pronunciation: "th-ay",
        image: "thay.png",
        snippet: "Necromancy permeates every part of Thayan culture, for better or worse. Be wary of the notoriously vicious Red Wizards.",
        description: [
            `Fully called the “Unholy Kingdom of Thay”, they are a Necromantic country notorious for the Red Wizards that travel from their home country into other lands and cause pain and suffering.`,
            `Despite this, Thay itself does not appear to be inherently evil and seems to be trying to fight back against this threat.`,
        ],
        type: "Country",
    },
    {
        id: "aa783363-2892-424d-8da5-6087e4cde44a",
        name: "Quixus",
        pronunciation: "quick-sus",
        image: "quixus.png",
        snippet: "Masters of Transmutation magic, they are known throughout Zyxs as being very laid back, welcoming to outsiders, and a great destination for tourists.",
        description: [
            `A very laid back country that specialises in Transmutation magic, they are notorious for their rapidly changing landscapes which enable them to change large sections of their land at will.`,
            `It has even been rumoured that their major city can influence the seasons themselves, at least in their local area.`,
        ],
        type: "Country",
    },
    {
        id: "c41a9f01-05ff-4482-91d0-85db7ed9ec65",
        name: "Metavixium Commonwealth",
        pronunciation: "meta-vix-ee-um commonwealth",
        image: "metavixium-commonwealth.png",
        snippet: "A newly established Commonwealth that welcomes all manner of individuals, including those who are not adept at Arcane magic.",
        description: [
            `An oddity on the continent, this country was established only 500 years ago and seems to cater to all kinds of magic and magical tinkering instead of one particular school.`,
            `Of particularly strange note is their openness to interactions and trading with Navirar, something no other country will even consider. Their desire for interactions have even lead to trade agreements with Navirar!`,
        ],
        type: "Country",
    },

    // Navirar
    {
        id: "9dcc0ed7-71d9-4ae0-9d9c-a4a754d92be8",
        name: "Tsendoric",
        pronunciation: "tse-n-door-ick",
        image: "tsendoric.png",
        snippet: "Followers of Waukeen, this land is renowned for its opulence, charity, and shrewd traders.",
        description: [
            `A bountiful country with great wealth and expensive tastes that worships Waukeen. Tsendoric is the trade capital of the world and has a reputation for being one of the most charitable, using their vast wealth to ensure nobody in their land is left homeless or hungry.`,
            `The Cult of Coin is the most powerful - and kind - religious organisation in this country and has made the Profaned Capital a widely recognised name.`,
        ],
        type: "Country",
    },
    {
        id: "502055c5-cc2a-4f9a-b4d0-7c1a2e872873",
        name: "Zarak",
        pronunciation: "zar-ack",
        image: "zarak.png",
        snippet: "Guided by the light of Lathander, they are strong believers in the sacred cycle of life and death which can be off-putting to outsiders.",
        description: [
            `A smaller country that reveres creation, birth, and the cycle of life just like their patron diety Lathander. They are particularly offended by any magics that “interfere with the natural order of things” including resurrection magic.`,
            `Many are known to raise children as a community instead of focusing purely on an individual family’s resources, which has led to many community houses and orphanages.`,
            `Be wary of their “us and them” mentality.`,
        ],
        type: "Country",
    },
    {
        id: "6dcbac0b-83ee-48b2-b1fe-1be6144aecd0",
        name: "Hala’Shu",
        pronunciation: "ha-la-shoo",
        image: "hala-shu.png",
        snippet: "Honorable, powerful, and ruthless they embody the virtues of Tyr in all that they do. Be wary of getting on their bad side.",
        description: [
            `Much like their god, Tyr, they have a strong sense of justice, truth, and self-control. This country values honor above all but as a result is much more harsh on those who commit crimes.`,
            `Most people from this land wander as a warrior/bushido, ensuring justice is meted out wherever it is needed.`,
        ],
        type: "Country",
    },
    {
        id: "1f32c7d5-5352-439b-b1bc-b5d228963b39",
        name: "Malgalus",
        pronunciation: "mal-gal-us",
        image: "malgalus.png",
        snippet: "Devoted to goodness and striving ever to measure up to Illmater's kindness, they are well known for being dependable allies.",
        description: [
            `The people of this land are incredibly kind, caring, and devoted to goodness in all forms. It is common to see them as wandering heroes, healers, and spiritual guides and are known to stand against overwhelming odds even when they have no chance of success if it may allow others to escape.`,
            `Of note is that it is common to see the most devout engage in self-flagellation as a way to relieve the pain of their god Illmater, though they notably do not force this upon others.`,
        ],
        type: "Country",
    },
    {
        id: "2dd41b8c-e114-4ccf-8dfe-f712b78b5e25",
        name: "Rathex",
        pronunciation: "rath-ex",
        image: "rathex.png",
        snippet: "Studious followers of Labelas Enoreth, they seek to uncover the many unknowns of the past and document it for all to see.",
        description: [
            `Chief record keepers of the world and those who desire to learn the most about the secrets of the past rather than the unknowns of the future, you will find no better learned individuals than scholars from this country.`,
            `Unlike scholars of other countries, Rathex scholars are - much like Labelas Enoreth herself - just as likely to be found exploring ancient ruins as they are buried in tomes.`,
        ],
        type: "Country",
    },
    {
        id: "e53774fe-ab52-4845-92de-aedbea8038d1",
        name: "Vuloth",
        pronunciation: "voo-lo-th",
        image: "vuloth.png",
        snippet: "The eccentrics of Navirar, their desire to learn and understand closely mirrors that of their chief deity, Oghma. Their mastery of nature magic is unusual.",
        description: [
            `Unlike Rathex, Vuloth embodies the ever-learning desires of their God, Oghma, and prefer to study the current state of the world and try to unravel all the many mysteries associated with it as it currently is.`,
            `Strangely, they prefer to use Nature magic instead of Divine or even Arcane and are notorious for their many eccentricities and esoteric ways of living.`,
        ],
        type: "Country",
    },
    {
        id: "7ef34938-e1b5-474d-a0d2-5cac2fd17a09",
        name: "Dalortha",
        pronunciation: "dal-or-tha",
        image: "dalortha.png",
        snippet: "Holding their patron deity Torm in the higest regard, these individuals are resilient, diligent, hardy folk who will keep their word no matter what.",
        description: [
            `The people of this land are hardy and reliable - much like their deity, Torm, and despite the harshness of the land they are very adept at farming it, able to cultivate crops that many others have difficulty even understanding how to produce. Known to honor their word no matter what, they have attained a healthy respected relationship with the rest of the continent.`,
            `“A Dalorthan’s words are worth more than any parchment they could ever be written on, no matter how valuable.” - common saying amongst those who interact with them.`,
        ],
        type: "Country",
    },
    {
        id: "625a3220-62bc-4140-a452-93ae1f7c32a0",
        name: "Andoril",
        pronunciation: "an-door-ill",
        image: "andoril.png",
        snippet: "Adherents to the openness of diversity, these followers of Bahamut take great joy in the numerous different religions and races that grace their lands.",
        description: [
            `Embracing the openness of their lord deity, Bahamut, they are the most diverse country of Navirar. Their open acceptance of all religions and encouragement of cross-country interactions has led to them becoming the largest kingdom on the continent and one of the most well known and respected.`,
            `The land is a melting pot of different cultures and races which have become so diverse that many consider it a regular part of life when interacting with races that are normally uncommon such as the Drow, Yuan-Ti, or Goliath.`,
        ],
        type: "Country",
    },
];

export const Towns: Location[] = [
    {
        id: "bae4178c-a1b7-48ec-90cd-6165b3cb2a44",
        name: "Phandalin",
        pronunciation: "fan-dah-lin",
        image: "phandalin.jpg",
        snippet: "A frontier town set up near the supposed location of the now-rediscovered Phandelver Mine.",
        description: [
            `Hundreds of years ago, this was a thriving town that hosted all manner of miners, villagers, traders and
            more who worked alongside others in the Phandelver Mine. However, an orc raid completely razed the town as
            well as the mine and all settlements around it, leaving nothing but ruins and fire. With the location of the
            mine lost and death at every turn, the town was abandoned for centuries and all but forgotten.`,
            `With the supposed recent discovery of a map leading to the long-forgotten Phandelver Mine a new town has been
            built over the top of the old one by those hopeful to uncover wealth in the area.`,
            ``,
            `As a frontier town it is no stranger to its fair share of issues and had to contend with an unsavoury groups
            of bandits called Redbrands causing chaos. Until the party stepped in and put a stop to their cowardly acts,
            freeing the town from oppression and bringing joy to the townsfolk.`,
        ],
        type: "Town",
    },
    {
        id: "e304ce6e-917c-4c61-b48a-2788045ed5c9",
        name: "Baldur's Gate",
        pronunciation: "bal-duh-s gate",
        image: "placeholder.png",
        snippet: "The capital city of Andoril and the beating heart of the country. Many adventurers start their journeys here.",
        description: [
            `By far the largest city in Andoril and the capital of the country, this city is also one of the largest on
            Navirar. With it's many districts and the incredibly diverse number of races that both call it home and visit
            it, it is a venerable melting pot of cultures, ideals, knowledge.`,
            `The city is also known for it's unique approach to Divine worship, opting to have entire temples built for
            well-known and worshipped non-evil deities instead of a singular segmented temple (which is common in other
            countries). This approach has resulted in the city growing quite large to accommodate new districts of Divine
            worship and facilities for various rituals.`,
            `Beyond Divine worship, the city is also known for the large number of adventurers and heroes, with many shops
            offering everything needed for both new adventurers and celebrated heroes to undertake even the harshest of
            journeys. Blacksmiths, alchemists, master craftsmen of all kinds line the massive market district to peddle
            all manner of both mundane and esoteric goods.`,
            `But above all its most incredible achievement is the enormous temple to Bahamut that lies in the center of
            the city. Doubling as the castle from which the great King Aldis and Queen Sianne Raverex rule, the enormous
            platinum-plated statue of Bahamut can be seen from anywhere in the city; truly a dedication worthy of the Lord
            Dragon's favour!`,
        ],
        type: "Town",
    },
    {
        id: "59af4720-25af-4d9c-a814-c71afa539542",
        name: "Profaned Capital",
        pronunciation: "",
        image: "placeholder.png",
        snippet: "The city of gold and capital of Tsendoric. A paradise of opulence, commerce and trade, and charity.",
        description: [
            `Without a doubt the richest city in Navirar and capital of the country of Tsendoric, it is a city favoured
            by merchants, traders, and all who wish to embrace Waukeen's blessings of coin. The architecture of each
            building is intricate, opulently decorated, exceedingly comfortable, and rich beyond compare to any other town.`,
            `Ruled by a collection of elected individuals known as the High Council - many of which are officially and
            openly associated with the Cult of Coin - this council of five works together to ensure the best for the town
            and all who reside within it as well as creating new and maintaining existing trade agreements throughout Navirar
            and beyond.`,
            `Despite the excess of coin that each building and individual exudes, the town also looks after the less fortunate
            with many simple - but still quite beautiful - sharehouses provided to their residents for free and also have
            many soup kitchens and medicine houses run by the Cult of Coin to ensure nobody goes without proper care. It
            is the only known town or city with a consistent 0% homeless rate.`,
            `Any who visit this city would do well to stop by the Grand Temple of Waukeen to talk with the numerous Cult
            of Coin priests and be blessed with good fortune on your journey. Who knows, with any luck you might even be
            fortunate enough to meet with High Councilwoman - and High Priestess - Saren Goldblood herself!`,
        ],
        type: "Town",
    },
    {
        id: "c8b535d2-62b8-4ea9-921f-3f8957d91042",
        name: "Wolfhaven",
        pronunciation: "",
        image: "wolfhaven.png",
        snippet: "A small farming village recently established by an ex-adventurer. Also trades in pelts, meat, and other item from the surrounding forest.",
        description: [
            `This tiny and quiet village that was established by a retired adventurer - Pete "Peet" McBuggins - nearly
            30 years ago when he stepped away from his duties to settle back into a simple lifestyle. Though originally
            just one house and a simple field, its proximity to the Andoril-Malgalus trade route eventually led to more
            people setting up in the area until it became the small village it is today.`,
            `Growing a small variety of hardy vegetables and grains, and hunting the plentiful animals in the forests 
            around them, the village is entirely nearly self-sufficient though does sometimes trade with passing caravans
            to obtain more exotic or difficult-to-make goods.`,
            `They seem to prefer hunting alongside animals, particularly wolves!`,
        ],
        type: "Town",
    },
    {
        id: "50905b22-27d5-496c-aa27-d2c90659f8ff",
        name: "Windsore Planes",
        pronunciation: "",
        image: "windsore-planes.png",
        snippet: "A small farming town teeming with rabbitfolk and renowned for the hardy and delicious turnips they grow.",
        description: [
            `A quite isolated farming town that is nevertheless renowned in Illuxtria for the surprisingly delicious and
            filling turnips that are carefully cultivated by the proud rabbitfolk who grow them. Many have asked how they
            are able to grow such tasty vegetables so consistently, but even now the secret remains known only to the
            townsfolk.`,
            `Generally quite friendly towards outsiders, the villagers here often find themselves frequented by wandering
            performers travelling between Illuxtria and Hypnia and are no stranger to hosting guests. As long as you stay
            on their good side they are quite wonderful hosts, just don't try to pick up any of the rabbitfolk or you'll
            soon discover just how powerful their legs can be.`,
        ],
        type: "Town",
    },
];

export const PlacesOfInterest: Location[] = [
    {
        id: "846c0fe8-df38-4531-bcee-bdb2e9b1b50c",
        name: "Ruins of Thundertree",
        pronunciation: "",
        image: "ruins-of-thundertree.jpg",
        snippet: "The ruins of an abandoned village left. Nature has retaken it, making it a home for animals and plants.",
        description: [
            `Once a prosperous community of woodcutters and trappers, a magical mishap caused the destruction of the town
            and zombification of several residents. Fearing for their lives, those who didn't perish fled leaving the
            town to wither and crumble away. Now it is home to various animals and plants as nature works to recover a
            land devoid of civilian activities.`,
            `Once a frequent hideout for Reidoth, after a dragon settled the area the party was contacted to scare it off
            and restore peace. However the great beast - Venomfang - was unwilling to listen to reason and so was
            subsequently slain.`,
            `Now the town is empty again, save for the giant spiders that make their nest under the town, and the twig
            blights that occasionally roam through the desolate streets.`
        ],
        type: "Place of Interest",
    },
    {
        id: "690a0867-d527-4971-b448-45f54214c8ec",
        name: "Cragmaw Hideout",
        pronunciation: "",
        image: "cragmaw-hideout.jpg",
        snippet: "A hidden cave that acts as a hideout for the goblins that roam the area. Allows easy access to nearby areas for pillaging.",
        description: [
            `A small cave system inhabited by numerous goblins, it is used as an outpost, hideout, and location to set
            store the ill-gotten gains the goblins 'obtain' from their many raids. Being very crudely furnished, simple
            in design, and rudimentary in most regards it is likely this cave was simply found rather than made.`,
            `Despite the numerous goblins and other creatures that took upn refuge in this cave, the party was able to
            infiltrate it, take care of the inhabitants, and remove the stain of goblin filth for good. It now sits as
            an empty reminder of what happens to those who harm others.`,
        ],
        type: "Place of Interest",
    },
    {
        id: "3796dbf2-ee1a-409b-a718-ec008b9d3ba7",
        name: "Redbrand Hideout",
        pronunciation: "",
        image: "redbrand-hideout.jpg",
        snippet: "The Redbrands' base of operation in Phandalin, hidden under the ruins of Tresendar Manor in its dungeon-like corridors.",
        description: [
            `Previously the cellar and connected crypt of Tresendar Manor before its fall to ruins, it has since been
            expanded out in various areas allowing quicker access to some rooms and easier traversal by the brigands. The
            digging also opened a crevice into the earth that housed a dangerous creature, be wary of where you step.`,
            `The Redbrands' secret base was evidently not secret enough as the party was able to successful infiltrate it,
            deal with the cowardly brigands, and capture Iarno thus putting an end to the wizard's plans and leaving the
            hideout devoid of evil.`,
        ],
        type: "Place of Interest",
    },
    {
        id: "6ca78115-8c05-40ac-9d6f-23d80f96fd52",
        name: "Old Owl Well",
        pronunciation: "",
        image: "old-owl-well.jpg",
        snippet: "Built thousands of years ago by a long-vanished empire, it is now a ruined watchtower with little more than a few crumbling ruins.",
        description: [
            `Once a solid watchtower and minor place of rest for weary travellers in ages long past, it is now nothing
            more than a few crumbling walls and the broken stump of a tower. The only remaining buildings are rotted and
            destroyed, the well a shoddy shadow of what must have once been a well-kept area. Oh how cruel time can be!`,
            `This area was once home to a powerful Diviner named Agatha who cared deeply for the area and is said to have
            stayed to the bitter end even when she foresaw her own death at the hands of the raiders that pillaged the area.
            It is said that even now her spirit clings desperately to it, though why is unknown.`,
            `Thanks to the party's investigation they were able to put a stop to a necromancer and his fetid minions, as
            well as soothe the spirit of Agatha who thanked them for their help before returning to her well. Now the
            watchtower is once again silent.`,
        ],
        type: "Place of Interest",
    },
    {
        id: "8079e45b-f9d3-4b66-b6ee-febed9114612",
        name: "Wyvern Tor",
        pronunciation: "",
        image: "wyvern-tor.jpg",
        snippet: "A tor that was once home to wyverns but is now being squatted in by a roaming band of orcish raiders who prey on travellers.",
        description: [
            `Formerly the home of a large and dangerous nest of wyverns, a band of bold adventurers was able to deal with
            the monsters years ago leaving the location empty for many years. Unfortunately, with the wyverns slain other
            less-savory creatures now use its hidden and defended location to set up camp. Orcish raiders are the latest
            inhabitants, seeing it as the perfect location to ambush and kill unsuspecting travellers.`,
            `Though the savage brutes fought viciously - and even brought in an orge to try to turn the tables - they were
            no match for the valiant heroes who triumphed over them. Now the tor is once again empty of threats, let's
            hope it stays that way for a while longer.`,
        ],
        type: "Place of Interest",
    },
    {
        id: "c4c55da5-a879-4f37-a3e3-dbb26876ea31",
        name: "Ruins of Thundertree - Spider Cave",
        pronunciation: "",
        image: "thundertree-spider-cave.png",
        snippet: "An expansive spider cave system that extends far under the Ruins of Thundertree. The spiders have clearly been here a while.",
        description: [
            `Underneath the Ruins of Thundertree, spiders have emerged from the Underdark and made the sprawling cave
            system their lair. Filled with webs, spiders of all ages and sizes, and a scary number of victims (some
            animals, some humanoid) it seems the spiders have been building this out for a while. Even the stone looks to
            have chipped away in parts, a clear indication of the spiders' needs to grow their space.`,
            `By making peace with the spiders and helping them remove a monstrosity that sought to kill, devour, or
            enslave the innocent arachnids that resides there, the party was able to successfully secure the spiders' home
            without any unnecessary bloodshed. Even the spiders seemed to think highly of them!`,
        ],
        type: "Place of Interest",
    },
    {
        id: "e41c27dc-4783-40ae-84d9-6aef676b5810",
        name: "Ruins of Thundertree - Spider Cave (Deep Chamber)",
        pronunciation: "",
        image: "thundertree-spider-cave-deep-chamber.jpg",
        snippet: "A chamber deep in the innermost part of the spiders' nest. It seems this is where the spiders broke out of the Underdark.",
        description: [
            `A massive chamber deep in the heart of the spiders' nest, it is covered in spider silk that is much more fine
            and delicate than the webs outside. It does not appear to be made to capture prey, perhaps this is a hatchery?
            The back of the chamber looks to have been broken through the stone wall and patched up with stronger, stickier
            silk. Looking past it reveals a long drop into total darkness, likely leading all the way to the Underdark
            where the spiders must have originally come from.`,
            `By providing assistance, the party was able to bring down the creature that threatened the spiders' nest and
            ensure the entrance to the Underdark was properly sealed up again. How delightful!`,
        ],
        type: "Place of Interest",
    },
];
