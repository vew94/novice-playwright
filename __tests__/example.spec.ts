import { test as base } from '@playwright/test';
import {
  locatorFixtures as fixtures,
  LocatorFixtures as TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture';
const test = base.extend<TestingLibraryFixtures>(fixtures);
const { expect } = test;

test.describe('AAA', () => {
  test('BBB', async () => {});
  test('CCC', async () => {});
});
