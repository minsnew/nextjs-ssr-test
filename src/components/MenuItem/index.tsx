import classNames from "classnames";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";

const MenuItem = ({
  name,
  pathname,
  query,
  className,
}: {
  name: string;
  pathname: string;
  query?: ParsedUrlQueryInput;
  className?: string;
}) => {
  return (
    <Link href={{ pathname, query }}>
      <a className={classNames("p-y-2 mb-2 hover:text-blue-500", className)}>
        {name}
      </a>
    </Link>
  );
};

export default MenuItem;
