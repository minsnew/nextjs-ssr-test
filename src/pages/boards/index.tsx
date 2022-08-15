import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { getUsers } from "../../api";
import ContentTitle from "../../components/ContentTitle";
import Menu from "../../components/Menu";
import ContentContainer from "../../containers/ContentContainer";
import PageContainer from "../../containers/PageContainer";
import { User } from "../../types/User";

const BoardsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const users: User[] = data.users;

  const handleClick = (id: number) => {
    router.push({ pathname: "/boards/[id]", query: { id } });
  };

  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>User List</ContentTitle>
        <div className="space-y-4">
          {users.map((it) => (
            <div
              key={it.id}
              className="bg-gray-100 p-4 rounded-lg hover:cursor-pointer hover:bg-gray-300"
              onClick={() => handleClick(it.id)}
            >
              <div className="flex flex-row mb-1 text-xl text-end">
                <span className="font-bold">{it.name}</span>
                <span className="text-gray-500 ml-1">{`(${it.username})`}</span>
              </div>
              <div className="text-xs">
                <span className="text-teal-500">{it.phone}</span>
                <span className="italic block">{it.email}</span>
              </div>
              <div>{it.address.city}</div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getUsers();

  return { props: { data: { users: response } } };
};

export default BoardsPage;
