import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-72 h-screen flex flex-col p-4 bg-gray-700 text-white">
      <div className="mb-6 text-3xl">
        <Link href={{ pathname: "/" }}>Next SSR Sample</Link>
      </div>
      <Link href={{ pathname: "/boards" }}>
        <a>Board 가기</a>
      </Link>
      <Link href={{ pathname: "/boards/[id]", query: { id: 3 } }}>
        <a>Board 상세 1</a>
      </Link>
      <Link href={{ pathname: "/guides" }}>
        <a>Guide 가기</a>
      </Link>
      <Link href={{ pathname: "/guides/[id]", query: { id: 4 } }}>
        <a>Guide 상세 1</a>
      </Link>
    </div>
  );
};

export default Menu;
