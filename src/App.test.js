import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Login from "./pages/Login";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//dinesh

beforeEach(() => {
  render(<Login />);
});
test("renders login page", () => {
  const emailinput = screen.getByPlaceholderText("email");
  expect(emailinput).toBeInTheDocument();
  const passinput = screen.getByPlaceholderText("password");
  expect(passinput).toBeInTheDocument();
  const btn = screen.getByRole("button", { name: /sign in/i });
  expect(btn).toBeInTheDocument();
});
test("email should  be empty", () => {
  const emailinput = screen.getByPlaceholderText("email");
  expect(emailinput.value).toBe("");
});
test("password should  be empty", () => {
  const passinput = screen.getByPlaceholderText("password");
  expect(passinput.value).toBe("");
});
test("button should be disable", () => {
  const btn = screen.getByRole("button", { name: /sign in/i });
  expect(btn).toBeDisabled();
});
test("email should be change", () => {
  const emailinput = screen.getByPlaceholderText("email");
  const testvalue = "something";

  fireEvent.change(emailinput, { target: { value: testvalue } });
  expect(emailinput.value).toBe(testvalue);
});
test("password should be change", () => {
  const passinput = screen.getByPlaceholderText("password");
  const testvalue = "something";

  fireEvent.change(passinput, { target: { value: testvalue } });
  expect(passinput.value).toBe(testvalue);
});

test("button should not be disable when inputs exist", () => {
  const btn = screen.getByRole("button", { name: /sign in/i });

  const emailinput = screen.getByPlaceholderText("email");
  const passinput = screen.getByPlaceholderText("password");

  const testvalue = "something";
  fireEvent.change(emailinput, { target: { value: testvalue } });
  fireEvent.change(passinput, { target: { value: testvalue } });

  expect(btn).not.toBeDisabled();
});

test("email text should have type email", () => {
  const emailinput = screen.getByPlaceholderText("email");
  expect(emailinput).toHaveAttribute("type", "email");
});
test("password text should have type password", () => {
  const passwordinput = screen.getByPlaceholderText("password");
  expect(passwordinput).toHaveAttribute("type", "password");
});

test("should be able to submit form", () => {
  const emailinput = screen.getByPlaceholderText("email");
  const passwordinput = screen.getByPlaceholderText("password");
  const btn = screen.getByRole("button", { name: /sign in/i });

  userEvent.type(emailinput, "mayur@gmail.com");
  userEvent.type(passwordinput, "123456");

  userEvent.click(btn);
  const userInfo = screen.getByText(
    /User login Successfully with mayur@gmail.com/i
  );
  expect(userInfo).toBeInTheDocument();
});
