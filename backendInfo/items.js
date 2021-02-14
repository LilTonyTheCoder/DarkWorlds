import helmet_1 from './helmets/1.js' // 1000 - 1005
import boots_1 from './boots/1.js' // 2000 - 2005
import belts_1 from './belts/1.js' // 3000 - 3004
import rings_1 from './rings/1.js' // 4000 - 4005
import stones_regular from './stones/regular.js' // 5000 - 5006

export const usersItems = {
  '9d25fcc91': { prototype: 1000, durability: 24 },
  'fd4671480': { prototype: 1001, durability: 24 },
  '1dd1e64bd': { prototype: 2000, durability: 20 },
  '4e296a910': { prototype: 3000, durability: 20 },
  '83fd36c63': { prototype: 4000, durability: 20 },

  '549fd6c44': { prototype: 5000, durability: 9 },
  '765fc2410': { prototype: 5001, durability: 9 },
}

export const prototypes = {
  ...helmet_1,
  ...boots_1,
  ...belts_1,
  ...rings_1,
  ...stones_regular,
}

export const getItemById = (id) => {
  return {
    ...usersItems[id],
    ...prototypes[usersItems[id].prototype],
  }
}
