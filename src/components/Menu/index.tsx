import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="w-72 h-full flex flex-col p-4 bg-gray-700 text-white">
      <MenuItem name="Next SSR Sample" pathname="/" className="mb-6 text-3xl" />
      <MenuItem name="User List" pathname="/boards" />
      <MenuItem
        name="User Detail #1"
        pathname="/boards/[id]"
        query={{ id: 1 }}
      />
      <MenuItem name="Guide List" pathname="/guides" />
      <MenuItem
        name="Guide Detail #1"
        pathname="/guides/[id]"
        query={{ id: 1 }}
      />
    </div>
  );
};

export default Menu;
