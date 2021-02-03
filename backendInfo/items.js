import helmet_1 from './helmets/1.js'

export const usersItems = {
  '9d25fcc91': { prototype: 1000, durability: 24 },
  'fd4671480': { prototype: 1001, durability: 24 },
  '594f42d05': { prototype: 1002, durability: 10 },
  'd3c092b2a': { prototype: 1003, durability: 24 },
}

export const prototypes = {
  ...helmet_1,
}

export const getItemById = (id) => {
  return {
    ...usersItems[id],
    ...prototypes[usersItems[id].prototype],
  }
}
