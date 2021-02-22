import helmet_1 from './helmets/1.js' // 1000 - 1005
import boots_1 from './boots/1.js' // 2000 - 2005
import belts_1 from './belts/1.js' // 3000 - 3004
import rings_1 from './rings/1.js' // 4000 - 4005
import stones_regular from './stones/regular.js' // 5000 - 5006
import armor_1 from './armor/1.js' // 6000 - 6002
import earrings_2 from './earrings/2.js' // 7000 - 7005
import necklace_2 from './necklace/2.js' // 8000 - 8005
import gloves_2 from './gloves/2.js' // 9000 - 9005
import shield_1 from './shields/1.js' // 10000 - 10005
import dubina_1 from './weapon/dubina/1.js' // 11000 - 11002
import bracelets_1 from './bracelets/1.js' // 12000 - 12004

export const usersItems = {
  '9d25fcc91': { prototype: 1000, durability: 24 },
  'fd4671480': { prototype: 1001, durability: 24 },
  '1dd1e64bd': { prototype: 2000, durability: 20 },
  '4e296a910': { prototype: 3000, durability: 20 },
  '83fd36c63': { prototype: 4000, durability: 20 },
  '549fd6c44': { prototype: 5000, durability: 9 },

  '718927374': { prototype: 6000, durability: 9 },
  '9a8f46c04': { prototype: 7000, durability: 9 },
  '30fa7d31b': { prototype: 8000, durability: 9 },
  'da633c992': { prototype: 9000, durability: 9 },
  '3f3605816': { prototype: 10000, durability: 9 },
  'cd8c2814a': { prototype: 11000, durability: 9 },
  '649aaf74f': { prototype: 12000, durability: 9 },

}

export const prototypes = {
  ...helmet_1,
  ...boots_1,
  ...belts_1,
  ...rings_1,
  ...stones_regular,
  ...armor_1,
  ...shield_1,
  ...bracelets_1,

  ...dubina_1,

  ...earrings_2,
  ...necklace_2,
  ...gloves_2,
}

export const getItemById = (id) => {
  return {
    ...usersItems[id],
    ...prototypes[usersItems[id].prototype],
  }
}
