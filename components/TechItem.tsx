import { ReactNode } from "react";

export default function TechItem({ children } : {children: ReactNode}) {
  return (
    <div className="flex flex-col place-items-center grow-0 m-2 py-3 md:py-6 lg:py-9 lg:text-6xl text-4xl w-[160px] md:w-[180px] lg:w-[250px] border-1 rounded border-[#745587] hover:border-[#cd5ff8] hover:scale-105 text-gray-300 hover:text-white transition duration-500">
      {children}
    </div>
  );
}