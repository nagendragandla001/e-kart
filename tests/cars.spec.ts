import { test, expect } from "@playwright/test";

test("Render Cars page if it is authenticated", async ({ page }) => {
  page.addInitScript(() => {
    window.localStorage.setItem("token", new Date().toString());
  });

  await page.goto("http://localhost:3000/cars");

  await expect(page.getByText("Cars Component")).toBeVisible();
});
