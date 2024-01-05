import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex flex-col items-center justify-center mb-10 min-h-[25rem]">
      {children}
    </main>
  );
};

export default layout;
