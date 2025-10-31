// Available tags for the system
const availableTags = [
    'cursed', 'desolate', 'haven', 'occult',
    'religion', 'technology', 'warren', 'wild'
];

// Event database with tags for filtering
const transitionEvents = [
    {
        title: "Pig farmer",
        description: "A beleaguered Derelictus pigfarmer stumbling back from the depths with her prize: a monstrous Carrion Pig (p. 189) that’s not eaten for days",
        tags: ["haven", "warren"],
        length: "short",
        author: "Rowan, Rook & Decard",
        link: "https://rowanrookanddecard.com/?"
    },
    {
        title: "Last ride",
        description: "An out of control fairground ride, excited by the arrival of the Delvers, wrenches itself off its mounting and tumbles towards them",
        tags: ["technology", "cursed"],
        length: "short",
        author: "Rowan, Rook & Decard",
        link: "https://rowanrookanddecard.com/?"
    },
    {
        title: "Red saint",
        description: "A decrowned Red Saint (p. 203), mad from decades of unanswerable prayers and exiled from the surface of the moon, rocks back and forth in a bloody antechamber – behind it, the Red Moon stretches forth eternal",
        tags: ["haven", "warren"],
        length: "short",
        author: "Rowan, Rook & Decard",
        link: "https://rowanrookanddecard.com/?"
    },
    {
        title: "Flood of joy",
        description: "A tidal wave of liquid shit accompanied by joyful trumpets and tambourines",
        tags: ["warren"],
        length: "short",
        author: "Rowan, Rook & Decard",
        link: "https://rowanrookanddecard.com/?"
    },
    {
        title: "Cable trees",
        description: "Power cables from some forgotten Vermissian project, now twisted into gnarled, tree-like formations, periodically discharge arcs of violent lightning. Scorched earth bears witness to their fury with a corpse of an unlucky delver, still clutching a bundle of metal poles in a death grip, convulses with lightning repeatedly striking its ruined form.",
        tags: ["technology", "wild"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Incense chapel",
        description: "<i>The air itself becomes an adversary...</i> <br> Chamber choked with ritual smoke. A small font of murky water sits neglected near the threshold. Hundreds upon hundreds of tiny dots of light penetrate the smoke, the very same incense sticks producing it.  The smoke is thick enough to taste. <br><br> Those who scout will discover a small chamber to the side of main room where air is free of smoke. Going to the side chamber requires standard endurance test, crossing whole room in one go would require a hard one. Using breathing aid grants Knack on these tests.",
        tags: ["religion", "occult"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Missing train",
        description: "The path abruptly ends at an automated train door that opens when approached. The train carts inside windows are made of stained glass, allowing an eerie light to filter in from outside. In the middle of the train car lies a sleeping skeletal humanoid figure, wearing an ill-fitting conductor's uniform, with its head replaced by a dimly glowing lump of coal. If it awakens, it will demand to see tickets. However, any technological item can confuse it long enough for you to pass without harm. Otherwise, it resembles a rail-punk themed Butcher (p. 188).  Defeating the Conductor could act as a connection goal",
        tags: ["religion", "technology", "connection"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Last conflict",
        description: "Barricades and sandbags create a maze of trenches. Bullet holes pockmark the walls, and spent shell casings crunch underfoot. Ghosts of 33rd regiment hount the trenches",
        tags: ["warren", "cursed"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
        {
        title: "Handsand",
        description: "<i>Give me hand, wouldn't you?</i> <br> The floor grows soft and viscous underfoot. Soon, pale hands emerge, clawing at boots and dragging at ankles, pulling downward with desperate strength.",
        tags: ["occult", "cursed"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Oozy lab",
        description: "Alchemical equipment lies scattered across laboratory, some still bubbling with unknown compounds. Huge puddle of smooking ooze blocks your path",
        tags: ["cursed", "haven"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Pest control",
        description: "A particularly insistent ratcatcher blocks the path, pushing a cart laden with toasted mystery meat. He demands either purchase or donation, warning that refusal brings terrible bad luck. <br> The meat is not rat. A waggling tail poorly hidden beneath his coat tells reflects his true allegiance. <br> Pay the toll or buy his wares, or his hidden swarm of teeth will hunt start their hunt.",
        tags: ["warren"],
        length: "long",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Flooded Passage",
        description: "The path ahead floods with murky water reaching knee-height. Small things move beneath the surface, unseen, but felt. <br> The corridor pitches sharply downward. The only way forward is to dive.",
        tags: ["haven", "warren"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The cursed artist",
        description: " <i>Obsession knows no mercy...</i> <br> Pale veins of Madman's Script grow directly from the walls—living text, pulsing with alien purpose. <br> A blind artist, long lost to the Heart's influence, endlessly traces over these growths with his own blood. His fingers are raw stumps, his work never complete. <br> He seeks for someone to replace him, AT ANY COSTS.",
        tags: ["occult", "cursed"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The Psychopomp's nest",
        description: "A mad two-headed psychopomp has built its nest of bones directly across your path. Both heads watch with unsettling intensity, protective and paranoid. Within the nest rests a single egg, soon to hatch. Inside: a perfectly ordinary drow infant and d4+1 of religious and occult artefacts <br> Mechanically it is two psychopomps.",
        tags: ["religion", "desolate", "connection"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The burden",
        description: "The mechanical porter still dutifully carries its cargo after centuries, unaware its master's corpse is strapped to its back.",
        tags: ["technology"],
        length: "medium",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Smugglers",
        description: "<i>Witnesses are liabilities. Accomplices are assets.</i> <br> A crew of goons hauls heavy crates filled with exotic contraband. They're professional, capable, and entirely willing to eliminate anyone who sees too much. <br> Their leader is absent. In his absence, coin speaks louder than loyalty.",
        tags: ["haven", "warren"],
        length: "long",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The Collector's Gallery",
        description: "A hunched figure meticulously arranges heads on pikes in perfect rows, each wearing a different mask of porcelain. He turns, eager to add fresh specimens to his collection.",
        tags: ["cursed", "occult"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The prophet's sermon",
        description: "A eyeless preacher stands atop rubble, delivering fevered prophecies to an audience of corpses who still bow their heads in reverence. He mistakes your approach for congregation and demands tithe.",
        tags: ["religion", "cursed"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The swine prince's court",
        description: "A massive three-headed boar sits enthroned on a mound of refuse. It judges each gift with terrible scrutiny before devouring or dismissing the bearer.",
        tags: ["warren", "wild"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The flesh cultivation",
        description: "Rows of pulsating fleshpods grow from the floor like obscene crops. A robed figure tends them, humming cheerfully while harvesting ripe organs.",
        tags: ["occult", "cursed"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The ancestor's machine",
        description: "Wall bursts as a vast brass engine churns endlessly, fed by conveyor belts carrying fragments of bone and memory. Its architect's skeleton sits in the operator's chair, hand still on the lever",
        tags: ["technology", "cursed"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The pelagic priest",
        description: "A waterlogged cleric preaches to schools of eyeless fish, his congregation circling endlessly in the flooded chamber. He offers baptism to all who enter, whether they consent or not.",
        tags: ["religion", "wild"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "The miller's toll",
        description: "A blind miller eternally grinds at his wheel, crushing anything that wanders too close into fine red dust. He insists everything must eventually be milled, and your turn is overdue.",
        tags: ["cursed", "desolate"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Nest of fingers",
        description: "A small and rotund bird with very human like eyes sings a lulaby one of delvers knows. Its nest is lined with severed toes, still warm and twitching. It looks at you with what could only be described as a crooked grin.",
        tags: ["cursed", "desolate"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Sea of flowers",
        description: "A sea of flowers blooms ahead. Their stems are woven from razor wire, and fleshy tissue makes up its petals revealing a single eyeball at the center of each bulb. <br> Blood stress is highly likely unless clever measures are taken",
        tags: ["cursed", "wild"],
        length: "short",
        author: "Awfor",
        link: "https://danielius.vercel.app"
    },
    {
        title: "Rats in the Walls",
        description: "The vile courtiers of the King of Teeth gnawed tunnels here from Grist. Or did they come to Grist through these tunnels from here? It doesn't really matter: either way, there are burrows full of bones. These anthropophagi are not entirely elves or humans; but they retain enough of the elven and human mind to make it possible to parley with them.",
        tags: ["warren"],
        length: "short",
        author: "Basil"
    },
    {
        title: "Ferrier-Errant",
        description: "<i>You've died. Don't worry, it happens to the best of us.</i> <br> Feral Psychopomp it trying to escort characters to delve’s most-relevant afterlife, politely but firmly.",
        tags: ["desolate"],
        length: "short",
        author: "Basil"
    },
    {
        "title": "The Grapes of Death",
        "description": "Empty hut still standing, corpse-fruit growing on the unmarked grave. Eating it and drinking deep of dead memory can grant visions of path ahead: the corpse walked here in life.",
        tags: ["haven"],
        length: "short",
        author: "Basil"
    },
    {
        "title": "The Platform",
        "description": "The galvanic elevator seemed like a convenient route, but it continues to go down without remorse, the doors slammed shut. How will the delvers stop this endless descent?",
        tags: ["technology"],
        length: "short",
        author: "Basil"
    }
];