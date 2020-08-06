import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("Renders w/o errors", () => {
  const wrapper = render(<ContactForm />);

  //test inputs

  const fName = screen.getByLabelText(/first name/i);
  const lName = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);
  const submit = screen.getByRole("button", { name: /submit/i });

  //fill out inputs

  //submit button

  act(() => {
    fireEvent.change(fName, { target: { value: "Sam" } });
    fireEvent.change(lName, { target: { value: "Brown" } });
    fireEvent.change(email, { target: { value: "sambrown0322@yahoo.com" } });
    fireEvent.change(message, { target: { value: "Hello World" } });
    fireEvent.click(submit);
  });
  //   fireEvent.click(submit);

  expect(screen.getByDisplayValue(/hello world/i)).toBeInTheDocument();
  wrapper.debug();
});
