import { render, screen, act } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import AsignInput from "./AsignInput";
import axios from "axios";

test("renders text", () => {
  render(<App />);
  const textElement = screen.getByTestId("App-text");
  expect(textElement).toBeInTheDocument();
});

test("renders input", async () => {
  const testText = "hello";
  render(<AsignInput />);

  const input = screen.getByTestId("text-input-asign");

  userEvent.type(input, testText);

  const textElement = await screen.findByText(testText);
  expect(textElement).toBeInTheDocument();
});
