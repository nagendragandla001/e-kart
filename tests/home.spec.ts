import { test, expect } from "@playwright/test";

test("Home Component Navbars", async ({ page }) => {
  page.goto("http://localhost:3000");

  await expect(page.locator('[data-testid="loading"]')).toBeVisible();

  await expect(page.getByRole("heading", { name: "E Kart" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Cars" })).toBeVisible();
  await page.getByRole("link", { name: "Cars" }).click();

  await expect(page).toHaveURL(/\/cars/);
});
