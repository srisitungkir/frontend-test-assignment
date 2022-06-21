import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomInput from "./CustomInput";

// exercise: fix this test
test("renders text", async () => {
  const testText = "hehe";
  const resultText = "Hehe";
  render(<CustomInput />);

  // cari elemen input
  const input = screen.getByTestId("text-input");

  // elemen input ketik "hehe"
  userEvent.type(input, testText);

  // pastiin elemen dengan text "hehe" ada di dokumen
  const textElement = await screen.findByText(resultText);
  expect(textElement).toBeInTheDocument();
});

// bonus
// sama seperti test sebelumnya
test.todo("renders result text capitalized");

// todo
test.todo("renders input text non-capitalized", () => {
  const testText = "hehe";
  render(<CustomInput />);

  // cari elemen input
  const input = screen.getByTestId("text-input");

  // elemen input ketik "hehe"
  userEvent.type(input, testText);

  // pastiin elemen dengan text "hehe" ada di dokumen
  // const newInput = await screen.findByTestId("text-input");
  // screen.debug();
  expect(input).toHaveValue(testText);
});
