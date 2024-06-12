import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

export default function ProjectCard({ title, description, url, isGithub=true, isDocument=false, children  } : { title: string, description: string, url: string, isGithub?: boolean, isDocument?: boolean, children: ReactNode }) {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-transparent text-center rounded-lg shadow-md shadow-[#77358875] hover:shadow-lg hover:shadow-[#8148908f] hover:scale-105 transition duration-500">
      <h2>{title}</h2>
      <p className="text-base text-gray-400">{description}</p>
      { children }
      <Button 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7]"
      >
        { isGithub ? 
          <>
            <BsGithub />
            <div>Github</div> 
          </> : isDocument ?
          <>
            <IoDocumentText />
            <div>Report</div> 
          </> : 
          <></>
        }
      </Button>
    </div>
  )
}