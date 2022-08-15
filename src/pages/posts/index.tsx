import { InferGetStaticPropsType } from "next";
import { getPosts } from "../../api";
import ContentTitle from "../../components/ContentTitle";
import Menu from "../../components/Menu";
import ContentContainer from "../../containers/ContentContainer";
import PageContainer from "../../containers/PageContainer";
import { Post } from "../../types/Post";

const PostsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts: Post[] = data.posts;

  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <ContentTitle>Posts Page</ContentTitle>
        <div className="space-y-4">
          {posts.map((it) => (
            <div
              key={it.id}
              className="bg-gray-100 p-4 rounded-lg hover:cursor-pointer hover:bg-gray-300"
            >
              <div className="flex flex-row mb-1 text-xl font-bold">
                {it.title}
              </div>
              <div className="text-xs">{it.body}</div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const response = await getPosts();

  return { props: { data: { posts: response } } };
}

export default PostsPage;
