import helmet_1 from './items/helmets/1.js' // 1000 - 1005

export const usersItems = {
  '9d25fcc91': { prototype: 1000, durability: 24 },
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
