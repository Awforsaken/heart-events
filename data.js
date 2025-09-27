// Available tags for the system
const availableTags = [
    'religion', 'haven', 'technology', 'warren', 'occult', 'commerce', 
    'cursed', 'natural', 'danger', 'transport', 'academic', 'industrial',
    'luxury', 'decay', 'violence', 'community', 'isolation', 'ancient',
    'modern', 'toxic', 'sacred', 'forbidden', 'medical', 'military',
    'artistic', 'criminal', 'noble', 'mechanical', 'biological', 'mystical'
];

// Event database with tags for filtering
const transitionEvents = [
    {
        title: "Sacred Machinery",
        description: "Ancient religious iconography becomes intertwined with corroded pipes and flickering data-screens. The boundary between faith and technology blurs as servo-skulls chant binary hymns.",
        tags: ["religion", "technology", "ancient"],
        length: "short"
    },
    {
        title: "Digital Hymns",
        description: "You hear the distant sound of hymns, but they're distorted through old speakers and mixed with the hum of machinery. Monks in robes tend to server banks like altars, their faces illuminated by the cold glow of monitors.",
        tags: ["religion", "technology", "community"],
        length: "medium"
    },
    {
        title: "The Narrowing Path",
        description: "The corridor ahead splits into dozens of smaller tunnels, each barely wide enough for a single person. Water drips from above, and you can hear scurrying in the walls - both rats and things that used to be rats.",
        tags: ["haven", "warren", "danger"],
        length: "short"
    },
    {
        title: "Abandoned Shrine",
        description: "A small shrine sits in an alcove, its candles long since melted to wax puddles. Strange electrical burns mar the stone around it, and a faint blue glow emanates from within. Something whispers prayers in a language that predates the Heart.",
        tags: ["religion", "technology", "occult", "ancient"],
        length: "medium"
    },
    {
        title: "Pest Control",
        description: "You encounter maintenance workers in hazmat suits spraying something into the walls. They nod silently and continue their work. The smell is acrid and makes your eyes water. In the distance, you can hear the chittering of whatever they're trying to eliminate - and it's getting closer.",
        tags: ["warren", "technology", "danger", "toxic"],
        length: "long"
    },
    {
        title: "The Congregation of Wires",
        description: "A group of the faithful has gathered around a massive junction box, treating it as an altar. They chant in binary, their voices creating an eerie harmony with the electrical humming. Their eyes have been replaced with blinking LED displays.",
        tags: ["religion", "technology", "community", "mystical"],
        length: "medium"
    },
    {
        title: "Flooded Passage",
        description: "The path ahead is flooded with murky water that reaches your knees. Small things move beneath the surface, and the walls are covered in a phosphorescent moss that provides dim light. The water tastes of copper and forgotten dreams.",
        tags: ["natural", "danger", "warren", "mystical"],
        length: "medium"
    },
    {
        title: "Market Whispers",
        description: "Voices drift from ahead - haggling, bargaining, the clink of coin. But as you approach, the voices fade and you find only empty stalls and scattered goods. The air still smells of exotic spices and desperation.",
        tags: ["commerce", "cursed", "community"],
        length: "short"
    },
    {
        title: "Academic Graffiti",
        description: "The walls are covered in equations, diagrams, and scholarly notes written in various hands. Some appear to be corrections or arguments with previous writers. The mathematics seem to bend reality around them.",
        tags: ["academic", "community", "mystical"],
        length: "short"
    },
    {
        title: "Industrial Decay",
        description: "Massive rusted gears and conveyor belts fill this chamber. Everything is still now, but oil stains and worn grooves suggest this place once thundered with activity. The silence feels oppressive, like held breath.",
        tags: ["industrial", "decay", "ancient", "mechanical"],
        length: "medium"
    },
    {
        title: "Luxury Forgotten",
        description: "Ornate furniture sits draped in dust and cobwebs. Crystal chandeliers hang askew, and faded tapestries tell stories of a more opulent time in the Heart's history. Gold leaf flakes from the walls like autumn leaves.",
        tags: ["luxury", "decay", "ancient", "noble"],
        length: "medium"
    },
    {
        title: "The Isolation Chamber",
        description: "A heavy door stands slightly ajar, revealing a small padded room beyond. Something has been scratching at the walls from the inside - long, desperate gouges in the padding. The scratches spell out words in a dozen languages, all meaning 'help'.",
        tags: ["isolation", "danger", "medical", "cursed"],
        length: "medium"
    },
    {
        title: "Toxic Garden",
        description: "Strange plants grow here in impossible colors, fed by chemicals leaking from corroded pipes above. The air shimmers with vapors that make your vision blur at the edges. Some of the flowers turn to watch you pass.",
        tags: ["natural", "toxic", "danger", "biological"],
        length: "medium"
    },
    {
        title: "Forbidden Archives",
        description: "Shelves of books stretch into darkness, but many volumes are chained shut or bear warning symbols. A few lie open, their pages burned or torn out by previous visitors. The remaining text writhes and changes when you're not looking directly at it.",
        tags: ["academic", "forbidden", "occult", "ancient"],
        length: "long"
    },
    {
        title: "Military Remnants",
        description: "Barricades and sandbags create a maze through this area. Bullet holes pockmark the walls, and spent shell casings crunch underfoot. Whatever battle was fought here, it ended long ago - but the ghosts of soldiers still march their patrol routes.",
        tags: ["military", "violence", "ancient", "cursed"],
        length: "medium"
    },
    {
        title: "The Artist's Madness",
        description: "Murals cover every surface, painted in pigments that seem to glow with their own light. The artwork tells a story of the Heart's transformation, but the narrative becomes increasingly abstract and disturbing toward the end.",
        tags: ["artistic", "mystical", "ancient", "cursed"],
        length: "medium"
    },
    {
        title: "Criminal Enterprise",
        description: "You stumble upon what appears to be an abandoned smuggling operation. Crates are stacked high, some broken open to reveal their contents - weapons, drugs, stranger things. Fresh footprints in the dust suggest this place isn't as abandoned as it seems.",
        tags: ["criminal", "commerce", "danger", "modern"],
        length: "long"
    },
    {
        title: "Noble Ruins",
        description: "The remnants of a grand estate lie in ruins. Portraits line the walls, their painted eyes seeming to track your movement. A family crest is carved into the floor, its symbols pulsing faintly with eldritch energy.",
        tags: ["noble", "decay", "ancient", "occult"],
        length: "medium"
    },
    {
        title: "Mechanical Symphony",
        description: "A vast chamber filled with clockwork mechanisms, all ticking in perfect unison. The sound is hypnotic, almost musical. Gears the size of wagon wheels turn slowly, their purpose lost to time but their rhythm eternal.",
        tags: ["mechanical", "ancient", "mystical", "industrial"],
        length: "medium"
    },
    {
        title: "Biological Nightmare",
        description: "The walls here pulse with a life of their own. Veins and arteries run through the stone like a circulatory system. The air is warm and humid, and you can hear something that might be a heartbeat echoing from deeper chambers.",
        tags: ["biological", "danger", "cursed", "mystical"],
        length: "long"
    },
    {
        title: "Transport Hub",
        description: "Old rail tracks emerge from the walls and disappear again, following impossible geometries. A single train car sits on a section of track, its doors standing open. Inside, the seats are arranged to face inward, as if for some forgotten ritual.",
        tags: ["transport", "ancient", "mystical", "technology"],
        length: "medium"
    },
    {
        title: "Sacred Commerce",
        description: "A marketplace where the faithful trade in relics and blessings. Vendors hawk pieces of stained glass from destroyed cathedrals, and holy water that glows with inner light. The prices are paid not in coin, but in memories and dreams.",
        tags: ["religion", "commerce", "sacred", "mystical"],
        length: "long"
    },
    {
        title: "Cursed Laboratory",
        description: "Scientific equipment lies scattered across laboratory benches, some still bubbling with unknown compounds. Charts on the walls show anatomical diagrams of things that shouldn't exist. The air tastes of ozone and regret.",
        tags: ["medical", "cursed", "academic", "toxic"],
        length: "medium"
    },
    {
        title: "The Modern Intrusion",
        description: "Sleek steel and glass cut through the ancient stone like a knife. LED strips provide harsh white light, and the hum of air conditioning disrupts the Heart's natural rhythms. This place feels wrong, too clean, too new.",
        tags: ["modern", "technology", "artificial"],
        length: "short"
    },
    {
        title: "Community Garden",
        description: "Despite the dangers, someone has cultivated a small garden here. Vegetables grow in carefully tended plots, and a simple shrine marks the center. Notes left by gardeners form a network of communication and mutual aid.",
        tags: ["community", "natural", "haven", "sacred"],
        length: "medium"
    }
];