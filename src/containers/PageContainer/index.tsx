import React from "react";

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="w-screen h-screen flex flex-row">{children}</div>;
};

export default PageContainer;
