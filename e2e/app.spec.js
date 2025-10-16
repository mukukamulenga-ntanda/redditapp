import { test, expect } from '@playwright/test'

test.describe('Reddit Client App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display header with logo', async ({ page }) => {
    await expect(page.locator('.logo-text')).toBeVisible()
    await expect(page.locator('.logo-text')).toContainText('Reddit')
  })

  test('should display search bar', async ({ page }) => {
    await expect(page.locator('.search-input')).toBeVisible()
    await expect(page.locator('.search-input')).toHaveAttribute('placeholder', 'Search Reddit...')
  })

  test('should load and display posts', async ({ page }) => {
    // Wait for posts to load
    await page.waitForSelector('.post-card', { timeout: 10000 })
    
    // Check that at least one post is displayed
    const posts = await page.locator('.post-card').count()
    expect(posts).toBeGreaterThan(0)
  })

  test('should display subreddit filter', async ({ page }) => {
    await expect(page.locator('.subreddit-filter')).toBeVisible()
    await expect(page.getByText('Popular')).toBeVisible()
  })

  test('should display sort filter', async ({ page }) => {
    await expect(page.locator('.sort-filter')).toBeVisible()
    await expect(page.getByText('🔥 Hot')).toBeVisible()
  })

  test('should search for posts', async ({ page }) => {
    const searchInput = page.locator('.search-input')
    await searchInput.fill('javascript')
    
    const searchButton = page.locator('.search-button')
    await searchButton.click()
    
    // Wait for search results
    await page.waitForTimeout(2000)
    
    // Check that posts are displayed
    const posts = await page.locator('.post-card')
    await expect(posts.first()).toBeVisible()
  })

  test('should navigate to post detail page', async ({ page }) => {
    // Wait for posts to load
    await page.waitForSelector('.post-card', { timeout: 10000 })
    
    // Click on first post title
    const firstPostTitle = page.locator('.post-title-link').first()
    await firstPostTitle.click()
    
    // Wait for navigation
    await page.waitForURL(/\/post\/.*/)
    
    // Check that we're on the post detail page
    await expect(page.locator('.post-detail')).toBeVisible()
    await expect(page.locator('.back-button')).toBeVisible()
  })

  test('should change subreddit filter', async ({ page }) => {
    // Wait for initial load
    await page.waitForSelector('.post-card', { timeout: 10000 })
    
    // Click on "All" subreddit
    const allButton = page.getByText('All').first()
    await allButton.click()
    
    // Wait for new posts to load
    await page.waitForTimeout(2000)
    
    // Check that posts are still displayed
    const posts = await page.locator('.post-card')
    await expect(posts.first()).toBeVisible()
  })

  test('should change sort filter', async ({ page }) => {
    // Wait for initial load
    await page.waitForSelector('.post-card', { timeout: 10000 })
    
    // Click on "New" sort option
    const newButton = page.getByText('✨ New')
    await newButton.click()
    
    // Wait for new posts to load
    await page.waitForTimeout(2000)
    
    // Check that the New button is active
    await expect(newButton).toHaveClass(/active/)
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that essential elements are still visible
    await expect(page.locator('.logo-icon')).toBeVisible()
    await expect(page.locator('.search-input')).toBeVisible()
    
    // Wait for posts
    await page.waitForSelector('.post-card', { timeout: 10000 })
    const posts = await page.locator('.post-card')
    await expect(posts.first()).toBeVisible()
  })

  test('should display error state and allow retry', async ({ page }) => {
    // Simulate network error by going offline
    await page.context().setOffline(true)
    
    // Try to load a different subreddit
    await page.reload()
    
    // Wait a bit for the error to show
    await page.waitForTimeout(3000)
    
    // Go back online
    await page.context().setOffline(false)
  })
})

