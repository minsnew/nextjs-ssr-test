import { useRouter } from "next/router";
import ContentTitle from "../../../components/ContentTitle";
import Menu from "../../../components/Menu";
import ContentContainer from "../../../containers/ContentContainer";
import PageContainer from "../../../containers/PageContainer";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>Post Detail</ContentTitle>
        <div>Post : {id}</div>
      </ContentContainer>
    </PageContainer>
  );
};

export default PostDetail;
