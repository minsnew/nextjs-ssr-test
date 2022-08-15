import { useRouter } from "next/router";
import Menu from "../../../components/Menu";
import PageContainer from "../../../containers/PageContainer";

const GuideDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageContainer>
      <Menu />
      <div>Guide : {id}</div>
    </PageContainer>
  );
};

export default GuideDetail;
