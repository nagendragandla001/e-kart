import { test as baseTest } from "@playwright/test";

type CustomFixtures = {
  loginAsAdmin: () => Promise<void>;
};

export const test = baseTest.extend<CustomFixtures>({
  loginAsAdmin: async ({ page }, use) => {
    await page.goto("http://localhost:3000");

    await page.getByTestId("username").fill("nagendra");
    await page.getByTestId("password").fill("password");

    await page.getByRole("button", { name: "Submit" }).click();

    await use(async () => {});
  },
});

export { expect } from "@playwright/test";
