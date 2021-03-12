import React from "react";
import { render } from "@testing-library/react";
import search from "./search";

describe("search tests", () => {
  it("should render", () => {
    expect(render(<search />)).toBeTruthy();
  });
});
