import level1 from '../Images/Levels/level-1-small.jpg'
import level2 from '../Images/Levels/level-2-small.jpg'
import level3 from '../Images/Levels/level-3-small.jpg'
import level4 from '../Images/Levels/level-4-small.jpg'
import level5 from '../Images/Levels/level-5-small.jpg'
import level6 from '../Images/Levels/level-6-small.jpg'

export const levelData = [
    {  
      number: 1,
      img: level1,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 2, img: level2, characters: { waldo: true } },
    {
      number: 3,
      img: level3,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 4, img: level4, characters: { waldo: true, odlaw: true } },
    {
      number: 5,
      img: level5,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 6, img: level6, characters: { waldo: true } },
  ];