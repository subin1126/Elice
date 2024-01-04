// cloneArray를 테스트하는 코드를 작성하세요.
const CloneArray = require('./cloneArray');

test('clones array successfully', () => {
    const array = [1, 2, 3];

    expect(CloneArray(array)).toEqual(array);
})