import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="w-72 h-screen flex flex-col p-4 bg-gray-700 text-white">
      <MenuItem name="Next SSR Sample" pathname="/" className="mb-6 text-3xl" />
      <MenuItem name="User List" pathname="/users" />
      <MenuItem name="Post List" pathname="/posts" />
      <MenuItem
        name="Post Detail #1"
        pathname="/posts/[id]"
        query={{ id: 1 }}
      />
    </div>
  );
};

export default Menu;
