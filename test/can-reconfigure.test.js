import { expect, it, describe } from 'vitest'
import { canReConfigure } from '../src/katas-factory-reconfigure'

describe('can reconfigure', () => {
  it('should be a function', () => {
    expect(canReConfigure).toBeTypeOf('function')
  })
  it('should throw error is first parameter is missing', () => {
    expect(() => canReConfigure()).toThrow()
  })
  it('should throw error is first parameter is not a string', () => {
    expect(() => canReConfigure(2)).toThrow()
  })

  it('should throw error is second parameter is not a string', () => {
    expect(() => canReConfigure('a', 2)).toThrow()
  })
  it('should return a boolean', () => {
    expect(canReConfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return a false if strigs provided have difference length', () => {
    expect(canReConfigure('abc', 'b')).toBe(false)
  })
  it('should return a false if strigs provided have same numbers of unique letters', () => {
    expect(canReConfigure('abc', 'ab')).toBe(false)
  })
  it('should return a false if strigs provided have difference numbers of unique letters', () => {
    expect(canReConfigure('abc', 'ddd')).toBe(false)
  })

  it('should return a false if strigs provided have difference numbers of unique letters', () => {
    expect(canReConfigure('xbox', 'xxbo')).toBe(false)
  })
})
