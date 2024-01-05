import Spinner from "@/components/ui/Spinner";
import React from "react";

const Loading = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center mb-10 h-96">
      <Spinner scale={1.5} />
    </main>
  );
};

export default Loading;
