import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <Header />
      <div>Main</div>
    </div>
  );
};

export default Home;
