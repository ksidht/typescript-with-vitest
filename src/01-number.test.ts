import {expect, it} from "vitest";

export const addToNumbers = (a: number, b: number) => {
  return a + b;
}

it('Sum to numbers', () => {
  expect(addToNumbers(2, 2)).toEqual(4);
  expect(addToNumbers(12, 2)).toEqual(14);
})






/* 
* 
  vitest
  export
  arrow functions
*
*/