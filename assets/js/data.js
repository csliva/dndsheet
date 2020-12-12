export const characters = [
  // Zaill
  {
    general: {
      name: 'Zaill',
      title: 'The Myst Wanderer',
      race: 'Dwarf',
      subrace: 'Mountain',
      classes: [
        { name: 'Warlock', sub: 'Pact of the Old One', level: 8 },
        { name: 'Barbarian', sub: 'Totem Warrior', level: 4 }
      ],
      inspiration: 0
    },
    abilities: {
      str: {score: 12, save: false},
      dex: {score:16, save: false},
      con: {score: 8, save: true},
      int: {score: 12, save: false},
      wis: {score: 11, save: false},
      cha: {score: 15, save: true}
    }
  },
  // Lurg
  {
    general: {
      name: 'Lurgos',
      title: 'Scribe of Kameura',
      race: 'Firbolg',
      subrace: false,
      classes: [
        { name: 'Bard', sub: 'Skald', level: 15 }
      ],
      inspiration: 1
    },
    abilities: {
      str: {score: 14, save: false},
      dex: {score:12, save: true},
      con: {score: 16, save: false},
      int: {score: 10, save: false},
      wis: {score: 8, save: false},
      cha: {score: 15, save: true}
    }
  },
  // Krosk
  {
    general: {
      name: 'Krosk',
      title: 'Champion of Turgos',
      race: 'Aasimar',
      subrace: false,
      classes: [
        { name: 'Paladin', sub: 'Agenger', level: 2 }
      ],
      inspiration: 0
    },
    abilities: {
      str: {score: 16, save: true},
      dex: {score: 8, save: false},
      con: {score: 14, save: false},
      int: {score: 12, save: false},
      wis: {score: 15, save: true},
      cha: {score: 12, save: false}
    }
  }
]
