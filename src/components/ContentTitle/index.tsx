const ContentTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="font-bold text-3xl mb-3">{children}</div>;
};

export default ContentTitle;
