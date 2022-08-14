import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUsers } from "../../api";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";
import { User } from "../../types/User";

const BoardsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const users: User[] = data.users;

  return (
    <div className={styles.container}>
      <Header />
      <div>Boards Page</div>
      <div>
        {users.map((it) => (
          <div key={it.id}>{it.name}</div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getUsers();
  console.log("TEST", response);

  return { props: { data: { users: response } } };
};

export default BoardsPage;
