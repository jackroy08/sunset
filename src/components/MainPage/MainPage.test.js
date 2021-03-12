import React from "react";
import { render } from "@testing-library/react";
import MainPage from "./MainPage";

describe("MainPage tests", () => {
  it("should render", () => {
    expect(render(<MainPage />)).toBeTruthy();
  });
});
