const { test, expect } = require('@playwright/test');

test.describe('CYBERSTRIKE 2099 Game Suite Tests', () => {

  test('Main menu and player input render correctly', async ({ page }) => {
    await page.goto('file://' + __dirname + '/../index.html');

    // Verify Title
    await expect(page.locator('h1')).toContainText('CYBERSTRIKE 2099');

    // Verify Player Name Input Field
    const nameInput = page.locator('#player-name-input');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveValue('CyberWarrior');

    // Test changing callsign
    await nameInput.fill('NeonHunter');
    await expect(nameInput).toHaveValue('NeonHunter');
  });

  test('Game canvas initializes correctly', async ({ page }) => {
    await page.goto('file://' + __dirname + '/../index.html');

    // Check canvas element existence
    const canvasContainer = page.locator('#canvas-container canvas');
    await expect(canvasContainer).toBeAttached();
  });

  test('HUD elements remain hidden on initial menu load', async ({ page }) => {
    await page.goto('file://' + __dirname + '/../index.html');

    const hud = page.locator('#hud');
    await expect(hud).toHaveClass(/hidden/);
  });
});