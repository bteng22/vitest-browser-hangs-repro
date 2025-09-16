import React from "react";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

import HelloWorld from "./hello-world";

test("onClick link should not cause test to hang indefinitely?", async () => {
  const { getByText, getByRole } = render(<HelloWorld name="Vitest" />);

  await expect.element(getByText("Hello Vitest x1!")).toBeInTheDocument();
  console.log('Before click')
  await getByRole("link", { name: "Navigate somewhere" }).click();
  console.log('After click')
  await expect.element(getByText("Hello Vitest x1!")).toBeInTheDocument();
  console.log('After test complete')
});

test.only("Form submission without e.preventDefault() should not hang indefinitely?", async () => {
  // const handleSubmit = vi.fn((e) => e.preventDefault()); e.preventDefault() required or test hangs indefinitely
  const handleSubmit = vi.fn();
  const { getByRole } = render(<HelloWorld name="FormTest" onSubmit={handleSubmit} />);

  const submitButton = getByRole("button", { name: "Submit" });
  console.log('Before submit click')
  await submitButton.click();
  console.log('After submit click')
  expect(handleSubmit).toHaveBeenCalled();
  console.log('After test complete')
});