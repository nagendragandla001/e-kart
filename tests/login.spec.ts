import { test, expect } from "@playwright/test";

test("Page should navigate to Home Page after Successful Login", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  await expect(page.locator('[data-testid="loading"]')).toBeVisible();

  await expect(page.locator('[data-testid="title"]')).toHaveText(
    "Login Component"
  );

  await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();

  const username = page.getByTestId("username");
  const password = page.getByTestId("password");
  const submitBtn = page.getByRole("button", { name: "Submit" });

  await username.fill("Nagendra");
  await password.fill("password");

  await expect(submitBtn).toBeEnabled();

  await submitBtn.click();

  await expect(page).toHaveURL(/\/home/);

  await expect(page).toHaveTitle("Home Component");
});
