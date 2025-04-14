import { describe, expect, it, vi } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";

import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";
describe("Dropdown of Navbar component", () => {
  it("initial render of navbar dropdown box", () => {
    render(<Navbar />);
    expect(screen.getByRole("combobox").value).toMatch(/option0/i);
  });
  it("simulating user interaction", async () => {
    render(<Navbar />);
    const selectElement = screen.getByRole("combobox");
    userEvent.selectOptions(selectElement, "option3");
    await waitFor(() => {
      expect(selectElement).toHaveDisplayValue(/Hoodies/i);
    });
  });
});

describe("icon click on the navbar", () => {
  it("profile icon", async() => {
    const mockAlert = vi.fn();
    window.alert = mockAlert;
    render(<Navbar />);
    const icon = screen.getByTestId("profile-icon");
    await userEvent.click(icon);
    expect(mockAlert).toHaveBeenCalledWith("clicked");
  });
  it("cart icon working", async() => {
    // const mockAlert = vi.fn();
    // window.alert = mockAlert;
    render(<Navbar />);
    const icon = screen.getByTestId("cart-icon");
    await userEvent.click(icon);
    expect(screen.getByRole("heading", { name: /Your Cart Items/i })).toBeInTheDocument();

  })
});
