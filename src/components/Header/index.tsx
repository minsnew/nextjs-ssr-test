import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderBottom: "1px solid gray",
        marginBottom: "8px",
        padding: "12px",
      }}
    >
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
