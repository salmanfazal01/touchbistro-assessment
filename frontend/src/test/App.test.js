import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders h1 title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Prime Median Finder/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders input field", () => {
  render(<App />);
  expect(screen.getByTestId("add-number-input")).toBeInTheDocument();
});

test("Displays correct results for 10", async () => {
  render(<App />);
  const input = screen.getByTestId("add-number-input");

  fireEvent.change(input, { target: { value: 10 } });
  await new Promise((r) => setTimeout(r, 3000));
  const linkElement = screen.getByText(/3, 5/i);
  expect(linkElement).toBeInTheDocument();
});

test("Displays correct results for 18", async () => {
  render(<App />);
  const input = screen.getByTestId("add-number-input");

  fireEvent.change(input, { target: { value: 18 } });
  await new Promise((r) => setTimeout(r, 4000));
  const linkElement2 = screen.getByText(/7/i);
  expect(linkElement2).toBeInTheDocument();
});
