import { test, expect } from "@playwright/test";

test("Has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.locator('[data-testid="loading"]')).toBeVisible();

  await expect(page.locator('[data-testid="title"]')).toHaveText(
    "Login Component"
  );

  await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();

  const input = page.locator('[data-testid="username"]');
  const password = page.locator('[data-testid="password"]');

  const submit = page.getByRole("button", { name: "Submit" });

  await input.fill("Nagendra");
  await password.fill("Arjun");
  await expect(submit).toBeEnabled();

  await submit.click();

  await expect(page).toHaveURL(/\/home/);

  await expect(page.locator('[data-testid="title"]')).toHaveText(
    "Home Component"
  );
});
