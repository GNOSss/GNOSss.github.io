'use strict';

console.log('asdasd');
new TypeIt('.home__title--strong', { loop: true, speed: 100 }) // [SEUNGSOO]
  .pause(1000)
  .move(-11)
  .delete()
  .type('love 💻develop , 📈finance ') // Binary Digit
  .pause(1000)
  .move(null, { to: 'END' })
  .delete()
  .pause(1000)
  .go();
