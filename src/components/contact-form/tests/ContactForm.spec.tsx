import { fireEvent, render, screen } from "@testing-library/react";
import { ContactForm, MAX_MESSAGE_LENGTH } from "../ContactForm";
describe("ContactForm", () => {
  beforeEach(() => {
    render(<ContactForm />);
  });
  describe("when typing a message", () => {
    it("should show the character count correctly", () => {
      const text = "some text";
      const messageInput = screen.getByTestId("message-input");
      fireEvent.change(messageInput, { target: { value: text } });
      expect(
        screen.getByText(`${text.length} / ${MAX_MESSAGE_LENGTH} characters`)
      ).toBeInTheDocument();
    });
  });
});
