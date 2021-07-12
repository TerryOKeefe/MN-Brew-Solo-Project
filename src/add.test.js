// add two integers
// add decimals
// add negative
// add string
// one Number?
// string 'ten'
import sum from './add.js';

// test or it to start test


test('Add 2 Integers', () => {
    expect(sum(1,2)).toBe(3);
})

test('Add Decimals', () => {
    expect(sum(1.2,3.14)).toBe(4.34);
})

test('Add Negatives', () => {
    expect(sum(-1,3)).toBe(2);
})

test('Add Strings', () => {
    expect(sum('1',3)).toBe(4);
})

test('Add ONE', () => {
    expect(sum(1)).toBe(1);
})

test(`Add String 'ten'`, () => {
    expect(sum('ten',1)).toBe(NaN);
})