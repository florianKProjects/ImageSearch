import { render, within } from "@testing-library/react";
import ImagesCards from "./ImagesCards";

test("input text", () => {
  render(<ImagesCards />);
  const { getByText } = within(screen.getByTestId("search-bar"));
  expect(getByText("dog")).toBeInTheDocument();
});
