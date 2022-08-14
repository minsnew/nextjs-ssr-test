import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Header from "../../../components/Header";
import styles from "../../../styles/Home.module.css";

const BoardDetail = ({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { id } = query;
  return (
    <div className={styles.container}>
      <Header />
      <div>Board Detail: {id}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { query: context.query } };
};

export default BoardDetail;
