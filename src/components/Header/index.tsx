import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col mb-2 p-3 font-bold border-b border-blue-500">
      <Link href={{ pathname: "/" }}>
        <a>Main 가기</a>
      </Link>
      <Link href={{ pathname: "/boards" }}>
        <a>Board 가기</a>
      </Link>
      <Link href={{ pathname: "/boards/[id]", query: { id: "a" } }}>
        <a>Board 상세 1</a>
      </Link>
      <Link href={{ pathname: "/guides" }}>
        <a>Guide 가기</a>
      </Link>
      <Link href={{ pathname: "/guides/[id]", query: { id: "a" } }}>
        <a>Guide 상세 1</a>
      </Link>
    </div>
  );
};

export default Header;
