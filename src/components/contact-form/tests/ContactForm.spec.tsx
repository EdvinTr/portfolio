import { render, screen } from "@testing-library/react";
import { ContactForm } from "../ContactForm";

describe("ContactForm", () => {
  it("should render correctly", () => {
    render(<ContactForm />);
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });
    expect(heading);
  });
});
