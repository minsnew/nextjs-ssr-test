import { useRouter } from "next/router";
import ContentTitle from "../../../components/ContentTitle";
import Menu from "../../../components/Menu";
import ContentContainer from "../../../containers/ContentContainer";
import PageContainer from "../../../containers/PageContainer";

const GuideDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>Guide Detail</ContentTitle>
        <div>Guide : {id}</div>
      </ContentContainer>
    </PageContainer>
  );
};

export default GuideDetail;
