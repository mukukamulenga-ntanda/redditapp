import { describe, it, expect } from 'vitest'
import { formatNumber } from '../numberUtils'

describe('numberUtils', () => {
  describe('formatNumber', () => {
    it('should return "0" for null or undefined', () => {
      expect(formatNumber(null)).toBe('0')
      expect(formatNumber(undefined)).toBe('0')
    })

    it('should return the number as string for numbers less than 1000', () => {
      expect(formatNumber(0)).toBe('0')
      expect(formatNumber(1)).toBe('1')
      expect(formatNumber(999)).toBe('999')
    })

    it('should format thousands with "k" suffix', () => {
      expect(formatNumber(1000)).toBe('1.0k')
      expect(formatNumber(1500)).toBe('1.5k')
      expect(formatNumber(12345)).toBe('12.3k')
      expect(formatNumber(999999)).toBe('1000.0k')
    })

    it('should format millions with "M" suffix', () => {
      expect(formatNumber(1000000)).toBe('1.0M')
      expect(formatNumber(1500000)).toBe('1.5M')
      expect(formatNumber(12345678)).toBe('12.3M')
    })

    it('should handle negative numbers', () => {
      expect(formatNumber(-1500)).toBe('-1.5k')
      expect(formatNumber(-1500000)).toBe('-1.5M')
    })
  })
})

