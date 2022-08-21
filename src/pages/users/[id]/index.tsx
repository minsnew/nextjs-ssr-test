import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUser } from "../../../api";
import AlbumList from "../../../components/AlbumList";
import BackButton from "../../../components/BackButton";
import ContentTitle from "../../../components/ContentTitle";
import Menu from "../../../components/Menu";
import ContentContainer from "../../../containers/ContentContainer";
import PageContainer from "../../../containers/PageContainer";
import { User } from "../../../types/User";

const UserDetail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const user: User = data.user;
  test;

  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>
          <BackButton url="/users" />
          User Detail
        </ContentTitle>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2">{user.name}</div>
          <div className="italic text-gray-600">{user.email}</div>
          <div className="italic text-gray-600">{user.phone}</div>
          <div>{`${user.address.suite} ${user.address.street} ${user.address.city} (${user.address.zipcode})`}</div>
          <AlbumList userId={user.id} />
        </div>
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
