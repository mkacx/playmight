import { test, expect } from "@playwright/test";

test("First tests", async ({ page }) => {
  await page.goto("https://mateuszkacalinski.pl");
  const siteTitle = await page.title();
  await expect(siteTitle).toContain("dark");

  await page.locator(".menu").click();

  await page.locator(".menu").click();
  await page.screenshot({ path: "screenshot.png", fullPage: true });
});

// test("Open Most Wanted category", async ({page}) => {

// })
