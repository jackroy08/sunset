import React from "react";
import { render } from "@testing-library/react";
import ForcastItem from "./ForcastItem";

describe("ForcastItem tests", () => {
  it("should render", () => {
    expect(render(<ForcastItem />)).toBeTruthy();
  });
});
