import { ReactNode } from "react";

export default function HomeSocial({ children, url } : {children: ReactNode, url: string}) {
  return (
    <a
      href={url}
      className="group color-text p-3 rounded-full border border-transparent bg-gray-200 transition-colors hover:border-[#cd5ff8] hover:bg-white text-2xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}