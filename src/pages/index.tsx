import type { NextPage } from "next";
import Menu from "../components/Menu";
import ContentContainer from "../containers/ContentContainer";
import PageContainer from "../containers/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <div>Next.js에서 SSR 동작 확인을 위한 POC 진행</div>
        <div>해당 프로젝트에선 2가지 메인 페이지를 가지고 있음</div>
        <div>Users - Server Side Props를 사용한 Rendering 방식</div>
        <div>Posts - Static Props를 사용한 Rendering 방식</div>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
