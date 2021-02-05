import helmet_1 from './helmets/1.js'
import boots_1 from './boots/1.js'
import belts_1 from './belts/1.js'
import rings_1 from './rings/1.js'

export const usersItems = {
  '9d25fcc91': { prototype: 1000, durability: 24 },
  'fd4671480': { prototype: 1001, durability: 24 },
  '1dd1e64bd': { prototype: 2000, durability: 20 },
  '4e296a910': { prototype: 3000, durability: 20 },
  '83fd36c63': { prototype: 4000, durability: 20 },
}

export const prototypes = {
  ...helmet_1,
  ...boots_1,
  ...belts_1,
  ...rings_1,
}

export const getItemById = (id) => {
  return {
    ...usersItems[id],
    ...prototypes[usersItems[id].prototype],
  }
}
