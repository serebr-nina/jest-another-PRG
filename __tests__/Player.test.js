const Potion = require('../lib/Potion');
//console.log(new Potion().value);
jest.mock('../lib/Potion.js');
console.log(new Potion());

const Player = require('../lib/Player');
test('creates a player object', () => {
    const player = new Player('Dave');
    //const potion = new Potion();
    //expect(potion.name).toBe('health');
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});