import { useRouter } from "next/router";
import Header from "../../../components/Header";

const GuideDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="p-3">
      <Header />
      <div>Guide : {id}</div>
    </div>
  );
};

export default GuideDetail;
