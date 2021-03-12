import React from "react";
import { render } from "@testing-library/react";
import SecondPage from "./SecondPage";

describe("SecondPage tests", () => {
  it("should render", () => {
    expect(render(<SecondPage />)).toBeTruthy();
  });
});
