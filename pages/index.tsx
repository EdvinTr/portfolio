import type { NextPage } from "next";
import { MyContainer } from "../components/MyContainer";

const Home: NextPage = () => {
  return (
    <MyContainer className="py-4">
      <h1>Home page</h1>
    </MyContainer>
  );
};

export default Home;
