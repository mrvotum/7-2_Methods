import Character from '../src/js/character';

test('Health 10', () => {
  const input = new Character('Rick', 10);

  const expected = { // ожидает
    name: 'Rick',
    level: 2,
    health: 100,
    attack: 36,
    defence: 12,
  };

  input.levelUp(); // получает
  expect(input).toEqual(expected); // сравнивает
});

test('Health level = 0', () => {
  const input = new Character('Rick', 0);

  const received = () => input.levelUp(); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});
