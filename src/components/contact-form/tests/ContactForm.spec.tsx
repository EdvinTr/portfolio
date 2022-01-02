import { render, screen } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
describe("ContactForm", () => {
  it("should render correctly", () => {
    render(<ContactForm />);
    const nameInput = screen.getByTestId("name-input");
    expect(nameInput).toBeInTheDocument();
  });
});
