/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { FilterComponent } from "../FilterComponent";

describe("Testing of filter component and it's functions", () => {
  it("Input field displayed", () => {
    render(<FilterComponent />);
    const inputField = screen.getByTestId("query-field");
    expect(inputField).toBeInTheDocument();
    expect(inputField.value).toBe("");
  });

  it("Tests if input is updated correctly", async () => {
    const user = userEvent.setup();
    render(<FilterComponent />);
    const inputField = screen.getByTestId("query-field");
    await user.type(inputField, "Morty");
    expect(inputField.value).toBe("Morty");
  });

  it("Tests if reset button is called", async () => {
    const user = userEvent.setup();
    const mockReset = jest.fn();
    render(<FilterComponent resetFilter={mockReset} />);
    const resetButton = screen.getByRole("button", { name: /Reset/i });

    await user.click(resetButton);

    expect(mockReset).toHaveBeenCalled();
  });

  it("Tests if search button is called", async () => {
    const user = userEvent.setup();
    const mockReset = jest.fn();
    render(<FilterComponent applyFilter={mockReset} />);
    const resetButton = screen.getByRole("button", { name: /Search/i });

    await user.click(resetButton);

    expect(mockReset).toHaveBeenCalled();
  });
});
