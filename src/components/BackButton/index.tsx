import { useRouter } from "next/router";
import { BiLeftArrowAlt } from "react-icons/bi";

const BackButton = ({ url }: { url: string }) => {
  const router = useRouter();

  return (
    <button
      className="hover:bg-blue-400 hover:text-white rounded-lg w-8 h-8 mr-2"
      onClick={() => router.push({ pathname: url })}
    >
      <BiLeftArrowAlt />
    </button>
  );
};
export default BackButton;
