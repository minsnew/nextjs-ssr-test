const ContentTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="font-bold text-3xl mb-3 border-b-2 border-gray-700 leading-[1.6]">
      {children}
    </div>
  );
};

export default ContentTitle;
