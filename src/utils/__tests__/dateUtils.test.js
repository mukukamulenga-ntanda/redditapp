import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { formatDistanceToNow } from '../dateUtils'

describe('dateUtils', () => {
  describe('formatDistanceToNow', () => {
    beforeEach(() => {
      // Mock Date.now() to return a fixed timestamp
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2024-01-01T12:00:00Z'))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should return "just now" for times less than 60 seconds ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 30 // 30 seconds ago
      expect(formatDistanceToNow(timestamp)).toBe('just now')
    })

    it('should return minutes for times less than an hour ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 300 // 5 minutes ago
      expect(formatDistanceToNow(timestamp)).toBe('5 minutes ago')
    })

    it('should return single minute for 1 minute ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 60 // 1 minute ago
      expect(formatDistanceToNow(timestamp)).toBe('1 minute ago')
    })

    it('should return hours for times less than a day ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 7200 // 2 hours ago
      expect(formatDistanceToNow(timestamp)).toBe('2 hours ago')
    })

    it('should return days for times less than a month ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 172800 // 2 days ago
      expect(formatDistanceToNow(timestamp)).toBe('2 days ago')
    })

    it('should return months for times less than a year ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 5184000 // ~2 months ago
      expect(formatDistanceToNow(timestamp)).toBe('2 months ago')
    })

    it('should return years for times over a year ago', () => {
      const timestamp = Math.floor(Date.now() / 1000) - 63072000 // ~2 years ago
      expect(formatDistanceToNow(timestamp)).toBe('2 years ago')
    })
  })
})

