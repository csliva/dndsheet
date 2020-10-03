// stats
const stats = {
  general: {
    name: String(),
    alignment: String(),
    inspiration: Boolean()
  },
  classes: [],
  race: {
    name: String(),
    subrace: String(),
    speed: String(),
    size: String()
  },
  abilities: {
    str: {
      name: String(),
      shortname: String(),
      score: Number(),
      effects: [],
      save: {
        prof: Boolean(),
        effects: []
      },
      skills: {
        athletics: {
          prof: Boolean(),
          effects: []
        }
      }
    }
  },
  combat: {
    init: {
      effects: []
    },
    ac: {
      base: Number(),
      shield: Number(),
      effects: []
    },
    attacks: [],
    hitPoints: {
      total: Number(),
      current: Number(),
      temp: Number()
    },
    deathSaves: {
      success: Number(),
      fail: Number()
    }
  },
  spells: {
    // tbd
  },
  features: {
    cats: [],
    items: []
  },
  gear: {
    cats: [],
    items: []
  },
  notes: {
    // tbd
  }
}
