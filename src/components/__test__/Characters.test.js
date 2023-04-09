/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { Characters } from "../../pages/Characters";
import { filterCharacters } from "../../scripts/api_calls";

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

const MockCharactersComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    </ThemeProvider>
  );
};

jest.mock("../../scripts/api_calls");

describe("Test request and filter feature", () => {
  beforeEach(() => {
    filterCharacters.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
        },
        location: {
          name: "Citadel of Ricks",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Renders characters on first load", async () => {
    render(<MockCharactersComponent />);
    screen.debug();
    expect(filterCharacters).toHaveBeenCalled();
  });
});
