import type { NextPage } from "next";
import Menu from "../components/Menu";
import PageContainer from "../containers/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Menu />
      <div className="p-3">Main</div>
    </PageContainer>
  );
};

export default Home;
