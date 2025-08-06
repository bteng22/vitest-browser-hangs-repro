import { cleanup } from "@testing-library/react";
import "vitest-browser-react";

import "@testing-library/jest-dom/vitest";
import "@testing-library/react/dont-cleanup-after-each";
import { afterEach, beforeEach } from "vitest";

beforeEach(() => {
  cleanup();
});

afterEach(() => {
  return;
});
