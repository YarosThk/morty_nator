/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { Home } from "../../pages/Home";

const theme = {
  colors: {
    fontColor: {
      lightText: "#808080",
    },
  },
  fontWeight: {
    bold: 600,
    medium: 400,
    thin: 200,
  },
  fontSize: {},
};

const MockHomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe("Testing of Episode components", () => {
  it("Should not show episodes on initial render", () => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<MockHomeComponent />);
    const episodes = screen.getAllByTestId("episode-component");
    episodes.forEach((ep) => {
      expect(ep).not.toBeVisible();
    });
  });

  it("Should find 20 episodes elements", () => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<MockHomeComponent />);
    const episodes = screen.getAllByTestId("episode-component");
    expect(episodes.length).toBe(20);
  });

  it("Tests visibility after scroll event", () => {});
});
