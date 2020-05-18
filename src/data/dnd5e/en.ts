// data lovingly stolen from from https://github.com/crobi/dnd5e-quickref
export const combatActions = {
  actions: [
    {
      title: "Attack",
      subtitle: "Melee or ranged attack",
      description: "Perform a melee or ranged attack with your weapon",
      special: true,
      bullets: [
        "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
        "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
        "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
        "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
        "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers.",
      ],
    },
    {
      title: "Grapple",
      subtitle: "Special melee attack",
      description: "Attempt to grab a creature or wrestle with it",
      bullets: [
        "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
        "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
        "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
        "If you succeed, you subject the target to the grappled condition (its speed is set to 0).",
      ],
    },
    {
      title: "Shove",
      subtitle: "Special melee attack",
      description:
        "Shove a creature, either to knock it prone or push it away from you",
      bullets: [
        "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
        "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
        "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
        "If you win the contest, you either knock the target prone or push it 5 feet away from you.",
      ],
    },
    {
      title: "Cast a spell",
      subtitle: "Cast time of 1 action",
      description: "Cast a spell with a casting time of 1 action",
      special: true,
      bullets: [
        "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
        "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
        "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
        "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher.",
      ],
    },
    {
      title: "Dash",
      subtitle: "Double movement speed",
      description: "Gain extra movement for the current turn",
      bullets: [
        "The increase equals your speed, after applying any modifiers.",
      ],
    },
    {
      title: "Disengage",
      subtitle: "Prevent opportunity attacks",
      description:
        "Your movement doesn't provoke opportunity attacks for the rest of the turn",
      bullets: [],
    },
    {
      title: "Dodge",
      subtitle: "Increase defenses",
      description: "Focus entirely on avoiding attacks",
      bullets: [
        "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
        "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0.",
      ],
    },
    {
      title: "Escape",
      subtitle: "Escape a grapple",
      description: "Escape a grapple",
      bullets: [
        "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
        "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition.",
      ],
    },
    {
      title: "Help",
      subtitle: "Grant an ally advantage",
      description: "Grant an ally advantage on an ability check or attack",
      bullets: [
        "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
        "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
        "The advantage lasts until the start of your next turn.",
      ],
    },
    {
      title: "Use Object",
      subtitle: "Interact, use special abilities",
      description:
        "Interact with a second object or use special object abilities",
      bullets: [
        "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
        "When an object requires your action for its use, you also take this action.",
      ],
    },
    {
      title: "Use shield",
      subtitle: "Equip or unequip a shield",
      description: "Equip or unequip a shield",
      bullets: [
        "A shield always takes an action to equip or unequip.",
        "Armor takes several minutes to equip or unequip.",
      ],
    },
    {
      title: "Change Weapons",
      subtitle: "Equip or unequip an available weapon",
      description: "Equip or unequip an available weapon",
      bullets: ["Weapons take an action to equip or unequip."],
    },
    {
      title: "Hide",
      subtitle: "",
      description: "Attempt to hide",
      bullets: [
        "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
        "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
        "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
        "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
        "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard.",
      ],
    },
    {
      title: "Search",
      subtitle: "",
      description: "Devote your attention to finding something",
      bullets: [
        "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.",
      ],
    },
    {
      title: "Ready",
      subtitle: "Choose trigger and action",
      description: "Choose a trigger and a response reaction",
      bullets: [
        "First, you decide what perceivable circumstance will trigger your reaction.",
        "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
        "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
        "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration",
      ],
    },
    {
      title: "Use class/race/background feature",
      subtitle: "Some features use actions",
      description:
        "Use a racial, background, or class feature that uses an action",
      special: ["availableFeatures"],
      bullets: [],
    },
    {
      title: "Stabilize a creature",
      subtitle: "Administer first aid to a dying creature",
      description:
        "Stop a dying creature from needing to make death saving throws",
      bullets: [
        "Make a Wisdom (Medicine) check with DC 10",
        "On a success, the creature is stable and no longer needs to make death saving throws",
        "A stable creature regains 1 hit point after 1d4 hours",
      ],
    },
    {
      title: "Improvise",
      subtitle: "Any action not on this list",
      description: "Perform any action you can imagine",
      bullets: [
        "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure.",
      ],
    },
  ],
  bonusActions: [
    {
      title: "Offhand Attack",
      subtitle: "Use with the Attack action",
      description: "Attack with your off hand",
      bullets: [
        "Only usable if you take the <i>Attack</i> action and attack with a light melee weapon that you're holding in one hand.",
        "Perform a single attack with a different light melee weapon that you're holding in the other hand.",
        "You don't add your ability modifier to the damage of the bonus attack, unless that modifier is negative.",
        "If either weapon has the thrown property, you can throw the weapon, instead of making a melee attack with it.",
      ],
    },
    {
      title: "Cast a spell",
      subtitle: "Cast time of 1 bonus action",
      description: "Cast a spell with a casting time of 1 bonus action",
      special: true,
      bullets: [
        "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
        "For further details, see the <i>Cast a spell</i> action.",
      ],
    },
    {
      title: "Use class feature",
      subtitle: "Some features use bonus actions",
      description: "Use a racial or class feature that uses a bonus action",
      bullets: [],
    },
  ],
  movements: [
    {
      title: "Move",
      subtitle: "Cost: 5ft per 5ft",
      description: "Movement cost: 5ft per 5ft moved",
      bullets: [
        "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
        "You can move through a nonhostile creature's space.",
        "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
        "Another creature's space is difficult terrain for you.",
        "Whether a creature is a friend or an enemy, you can't willingly end your move in its space.",
      ],
    },
    {
      title: "Climb",
      subtitle: "Cost: 10ft per 5ft",
      description: "Movement cost: 10ft per 5ft climbed",
      bullets: [
        "May involve a Strength (Athletics) check if the climb is difficult",
      ],
    },
    {
      title: "Swim",
      subtitle: "Cost: 10ft per 5ft",
      description: "Movement cost: 10ft per 5ft swum",
      bullets: [
        "May involve a Strength (Athletics) check if the swim is difficult",
      ],
    },
    {
      title: "Drop prone",
      subtitle: "Cost: 0ft",
      description: "Movement cost: 0ft (free)",
      bullets: [
        "You can drop prone without using any of your speed",
        "To move while prone, you must crawl or use magic such as teleportation",
        "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)",
      ],
    },
    {
      title: "Crawl",
      subtitle: "Cost: 10ft per 5ft",
      description: "Movement cost: 10ft per 5ft crawled",
      bullets: [],
    },
    {
      title: "Stand up",
      subtitle: "Cost: half movement speed",
      description: "Movement cost: half of your speed",
      bullets: [
        "You can't stand up if you don't have enough movement left or if your speed is 0",
      ],
    },
    {
      title: "High jump",
      subtitle: "Cost: 5ft per 5ft",
      description: "Movement cost: 5ft per 5ft jumped",

      bullets: [
        "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
        "When you make a standing high jump, you can jump only half that distance.",
        "You can extend your arms half your height above yourself during the jump.",
        "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can.",
      ],
    },
    {
      title: "Long jump",
      subtitle: "Cost: 5ft per 5ft",
      description: "Movement cost: 5ft per 5ft jumped",
      bullets: [
        "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
        "When you make a standing long jump, you can leap only half that distance",
        "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
        "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check.",
      ],
    },
    {
      title: "Improvise",
      subtitle: "Any stunt not on this list",
      description: "Perform any movement or stunt you can imagine",
      bullets: [
        "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure.",
      ],
    },
    {
      title: "Difficult terrain",
      subtitle: "Cost modifier: +5ft per 5ft",
      description:
        "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
      bullets: [],
    },
    {
      title: "Grapple move",
      subtitle: "Modifier: speed halved",
      description: "Drag or carry the grappled creature with you",
      bullets: [
        "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
        "See the attack action for how to grapple a creature.",
      ],
    },
  ],
  reactions: [
    {
      title: "Opportunity attack",
      subtitle: "Enemy leaves your reach",
      description:
        "You can rarely move heedlessly past your foes without putting yourself in danger",
      bullets: [
        "Trigger: enemy creature you can see leaves your reach.",
        "Make one melee attack against the provoking creature.",
        "The attack interrupts the provoking creature's movement, occurring right before the creature leaves your reach.",
        "Creatures don't provoke an opportunity attack when they teleport or when someone or something moves them without using their movement, action, or reaction.",
      ],
    },
    {
      title: "Readied action",
      subtitle: "Part of your Ready action",
      description: "Execute the reaction specified by your Ready action",
      bullets: ["Trigger: specified by your <i>Ready</i> action."],
    },
    {
      title: "Cast a spell",
      subtitle: "Cast time of 1 reaction",
      description: "Cast a spell with a casting time of 1 reaction",
      bullets: [
        "Trigger: specified by the spell.",
        "For further details, see the <i>Cast a spell</i> action.",
      ],
    },
  ],
} as const;
