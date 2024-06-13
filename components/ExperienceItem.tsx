import { ReactElement } from "react";

export default function ExperienceItem({ title, position, description, time, experiences }: { title: string, position: string, description: ReactElement, time: string, experiences: string[] }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#623686] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] space-y-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 p-4 rounded border-1 border-[#cd5ff8] hover:shadow-lg hover:shadow-[#8148908f] transition duration-500">
          <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold">{title}</div>
              <time className="text-[#cd5ff8] text-base">{time}</time>
          </div>
          <div>{position}</div>
          <div className="text-gray-400">{description}</div>
          <div className="flex flex-wrap gap-2 px-2">
            { experiences.map((e) => <ExperienceCard description={e} key={e}/>) }
          </div>
      </div>
    </div>
  )
}

function ExperienceCard({ description }: { description: string }) {
  return (
    <div className="text-sm rounded-full bg-[#4d3058] p-2 text-[#eccff8]">
      {description}
    </div>
  )
}