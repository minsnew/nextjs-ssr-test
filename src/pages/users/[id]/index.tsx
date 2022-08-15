import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUser } from "../../../api";
import ContentTitle from "../../../components/ContentTitle";
import Menu from "../../../components/Menu";
import ContentContainer from "../../../containers/ContentContainer";
import PageContainer from "../../../containers/PageContainer";
import { User } from "../../../types/User";

const UserDetail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const user: User = data.user;

  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>User Detail</ContentTitle>
        <div></div>
        <div>Usear Detail: {user.name}</div>
      </ContentContainer>
    </PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  if (!id || typeof id !== "string") return { props: { data: { user: null } } };

  const response = await getUser(Number(id));

  return { props: { data: { user: response } } };
};

export default UserDetail;
