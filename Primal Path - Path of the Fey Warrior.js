var iFileName = "Primal Path - Path of the Fey Warrior.js";

RequiredSheetVersion(13)

SourceList["CA:H"] = {
    name: "Custom Additions: Homebrew",
    abbreviation: "CA:H",
    group: "Homebrew",
    date: "12/16/2024"
};

AddSubClass("barbarian", "fey warrior", {
    regExpSearch : /fey warrior/i,
	subname : "Path of the Fey Warrior",
	source : ["CA:H", 1],
    features : {
		// Would be very nice to have a [...] thing next to the feature names in their respective box to track the damage bonuses and DCs if any, like what Rage has (Rage (Barbarian 1, PHB 48) [+2 melee damage, 4× per long rest]). No need for the source if it is optional."
		"subclassfeature3" : {
			// The range of this ability increases at later levels. I would love for this effective range, along with the damage bonus from the charisma mod to be present in the feature name as well like [+<CHA MOD>, 30ft] (the range and cha mod would change based on the level and the sheet ability scores respectively).
			name : "Blink Strike",
			source : ["CA:H", 1],
			minlevel : 3,
			description : desc([
				"As part of the bonus action used to enter a Rage or by using a bonus action while raging on the following turns you can teleport to a place you can see within 30 ft. This distance increases to 40 ft when you reach 6th level You can then make one weapon attack as part of that same bonus action. If this attack hits you deal additional damage equal to your Charisma modifier.",
			]),
			// I would like to have the calculation for the CHA modifier added to the attack here in the action name like "Blink Strike [+ 2]" (4 would be the CHA mod)
			action : ["bonus", ""]
			// At level 6, I need this to be replaced by the ability "Greater Blink Strike"
		},
		"subclassfeature3.1" : {
			// I would like the critical success and critical fail ranges to be present next to the ability name like [success 19-20, fail 1-2]. This range would increase at later levels.
			name : "Feywild Gambit",
			source : ["CA:H", 1],
			minlevel : 3,
			description : desc([
				"When you make your first attack on your turn, you can decide to embrace the unpredictability of the feywild and attack with reckless abandon. Doing so increases the critical success range of your weapon attack rolls to 19-20, but also increases the critical fail range to 1-2 until the beginning of your next turn. When you reach level 6 in this class the critical success range increases to 18-20 and the critical fail range to 1-3. At level 10 increases to 17-20 for successes and 1-4 for fails. Finally, at level 14, it increases to 16-20 for successes and 1-5 for fails. If you critically fail while attacking in this manner the attack backfires, roll damage for the attack and apply it to yourself. This feature cannot be combined with reckless attack."
			])
		},
		"subclassfeature6" : {
			name : "Fey Resilience",
			source : ["CA:H", 1],
			minlevel : 6,
			description : desc([
				"You have advantage on saving throws against being charmed and frightened, and magic can't put you to sleep. If you are raging you can add your Rage Damage Bonus to your saving throws against being charmed and frightened."
			]),
			savetxt : { text : ["Adv. on saves against being charmed and frightened, and magic can't put you to sleep. In Rage, + Rage Damage Bonus to saves against charmed and frightened"] }
		},
		"subclassfeature6.1" : {
			// I need this ability to replace Blink Strike.
			name : "Greater Blink Strike",
			source : ["CA:H", 1],
			minlevel : 6,
			description : desc([
				"Also, when you hit your Blink Strike attack you can force the target to make a Wisdom saving throw against a DC of 8 + your Proficiency Bonus + your Charisma Modifier + you Rage Damage Bonus or be charmed by you or frightened of you, your choice, until the end of your next turn or until it takes damage."
			]),
			// I need the modifier thing form blink strike here too, but i also need the DC calculation which is 8 + your Proficiency Bonus + your Charisma Modifier + you Rage Damage Bonus. I'd like the name to look like this "G. Blink Strike [+2, DC15] ".
			action : ["bonus", "G. Blink Strike"]
		},
		"subclassfeature10" : {
			// I need the text here to replace the text from the regular fey resilience.
			name : "Greater Fey Resilience",
			source : ["CA:H", 1],
			minlevel : 10,
			description : desc([
				"You are immune to being charmed and frightened. When another creature attempts to charm or frighten you, you can use your reaction to attempt to turn it back on that creature. The creature must succeed on a Wisdom saving throw against a DC of 8 + your Proficiency Bonus + your Charisma modifier or be charmed by you or frightened of you, your choice, for 1 minute. If you are raging you can add your Rage Damage Bonus to the DC of this ability."]),
			// Similar to the Greater blink strike, I would like the DC to be in the name. The slight difference here being the rage bonus not being added to the DC all the time. So, I'd like the name to be like "G. Fey Resil [DC13(+3)] (considering the rage bonus is +3 at lvl 10)"
			action : ["reaction", "G. Fey Resil"]
		},
		"subclassfeature10.1" : {
			// Please just add the number of created mirages next to the ability name.
			name : "Fey Mirages",
			source : ["CA:H", 1],
			minlevel : 10,
			description : desc([
				"Whenever you enter a rage a number of illusory duplicates equal to one plus your charisma modifier appear in your space, as per the Mirror Image spell. Treat having more than three duplicates as if you had three. Any remaining duplicates disappear when your rage ends."
			])
		},
		"subclassfeature14" : {
			// I have no idea where to write this, but I guess just have something like [#<CHA MOD> dice +<CHA MOD>] next to the feature name.
			name : "Harvest the Enchanted",
			source : ["CA:H", 1],
			minlevel : 14,
			description : desc([
				"You learn how to capitalize on enemies that are enchanted. One per turn, after you hit a creature that is frightened or charmed with a weapon attack, you can spend a number of Hit Die up to your charisma modifier, roll them, and deal additional psychic damage equal to the sum of the rolled dice plus your charisma modifier to that creature."
			])
		},
		"subclassfeature14.1" : {
			// No need for any additions/alterations here here.
			name : "Wings of the Fey",
			source : ["CA:H", 1],
			minlevel : 14,
			description : desc([
				"You can use a bonus action to manifest a pair of spectral fairy wings from your back. While the wings are present, you have a flying speed equal to your walking speed. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action."
			]),
			action : ["bonus", " - Extend/Retract"]
		}
	}
});