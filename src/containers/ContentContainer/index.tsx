import React from "react";

const ContentContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen p-4" style={{ flex: 1, overflow: "auto" }}>
      {children}
    </div>
  );
};

export default ContentContainer;
