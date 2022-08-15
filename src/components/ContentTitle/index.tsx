const ContentTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex items-center font-bold text-3xl text-gray-600 mb-3 border-b-2 border-gray-600 leading-[1.6]">
      {children}
    </div>
  );
};

export default ContentTitle;
