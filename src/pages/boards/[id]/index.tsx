import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUser } from "../../../api";
import Menu from "../../../components/Menu";
import PageContainer from "../../../containers/PageContainer";
import { User } from "../../../types/User";

const BoardDetail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const user: User = data.user;

  return (
    <PageContainer>
      <Menu />
      <div className="font-bold text-3xl">User Detail</div>
      <div>Usear Detail: {user.name}</div>
    </PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  if (!id || typeof id !== "string") return { props: { data: { user: null } } };

  const response = await getUser(Number(id));

  return { props: { data: { user: response } } };
};

export default BoardDetail;
