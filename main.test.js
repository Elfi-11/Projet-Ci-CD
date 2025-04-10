import { expect, test } from 'vitest'
import { add } from './main.js'

//test('adds "1,2,3" to equal 6', () => {
    //expect(add("1,2,3")).toBe(6)
//});

test('empty string = 0', () => {
    expect(add("")).toBe(0)
})

test('"1" == 1 ', () => {
    expect(add("1")).toBe(1)
})

test('"1,2" == 3', () => {
    expect(add("1,2")).toBe(3)
})

test('"1,2,3"', () =>{
    expect(add("1,2,3")).toBe(6)
});


