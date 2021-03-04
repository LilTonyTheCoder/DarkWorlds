export const keyNameMatch = {
  lvl: 'Уровень',
  str: 'Сила',
  dex: 'Ловкость',
  suc: 'Инстинкт',
  end: 'Жизнеспособность',
  int: 'Интеллект',
  free: 'Свободных статов',

  hp: 'Уровень жизни',
  pw: 'Уровень выносливости',
  crit: 'Критический удар',
  a_crit: 'Против критич-го удара',
  uvorot: 'Увертывание',
  a_uvorot: 'Против Увертывания',
  min_damage: 'Мин. урон',
  max_damage: 'Макс. урон',

  armor_head: 'Броня головы',
  armor_body: 'Броня корпуса',
  armor_waist: 'Броня пояса',
  armor_legs: 'Броня ног',

  maxWear: '', // TODO
}

export const armorNameMatch = {
  helmet: 'Шлем',
  weapon: 'Оружие',
  armor: 'Броня',

  earrings: 'Серьги',
  necklace: 'Ожерелье',
  gloves: 'Перчатки',
  bracelets: 'Наручи',
  ring: 'Кольцо',
  shield: 'Щит',
  boots: 'Ботинки',
  belt: 'Пояс',

  stone: 'Камень',
  rune: 'Руна',
}

export const getNameByKey = (key) => {
  return keyNameMatch[key] ? keyNameMatch[key] : key
}
