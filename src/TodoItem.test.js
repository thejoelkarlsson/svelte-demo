import { render, fireEvent } from "@testing-library/svelte";

import TodoItem from "./TodoItem.svelte";

describe("Todo items", () => {
  it("successfully renders", async () => {
    const text = "Finish CTS demo";
    const { getByText } = render(TodoItem, {
      todo: { done: false, text },
    });
    const todo = getByText(text);

    expect(todo.textContent).toBe(text);
  });

  it("has the same done value as the checkbox", async () => {
    const { getByRole } = render(TodoItem, {
      todo: { done: true, text: "Test" },
    });
    const checkbox = getByRole("checkbox");

    expect(checkbox.checked).toBe(true);
  });
});
