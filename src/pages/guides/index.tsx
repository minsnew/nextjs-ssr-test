import ContentTitle from "../../components/ContentTitle";
import Menu from "../../components/Menu";
import ContentContainer from "../../containers/ContentContainer";
import PageContainer from "../../containers/PageContainer";

const GuidesPage = () => {
  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>Guides Page</ContentTitle>
      </ContentContainer>
    </PageContainer>
  );
};

export default GuidesPage;
