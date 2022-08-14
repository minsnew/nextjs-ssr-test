import { useRouter } from "next/router";
import Header from "../../../components/Header";
import styles from "../../../styles/Home.module.css";

const GuideDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <Header />
      <div>Guide : {id}</div>
    </div>
  );
};

export default GuideDetail;
