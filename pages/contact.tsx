import type { NextPage } from "next";
import { MyContainer } from "../components/MyContainer";

const ContactPage: NextPage = () => {
  return (
    <MyContainer className="py-4">
      <h2 data-cy="page-heading">Contact Me</h2>
    </MyContainer>
  );
};

export default ContactPage;
