import ProjectCard from "@/components/ProjectCard";
import { ReactNode } from "react";
import { DiNodejs } from "react-icons/di";
import { FaAngular, FaHtml5, FaPython } from "react-icons/fa";
import { SiFlask, SiPandas, SiPostgresql, SiTensorflow } from "react-icons/si";

export default function Project() {
  return (
    <main className="flex flex-col justify-between py-24 md:py-36 lg:py-40 px-12 md:px-24 lg:px-50 space-y-8 items-center">
      <div className="text-center">
        <h1>My recent works</h1>
        <p>Here are some projects that I have worked on</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 2xl:px-28">

        <ProjectCard 
          title="Food delivery system"
          description="Food delivery system backend similar to Grab Food developed with Python Flask and PostgreSQL database.
          Supported functions for end-users to register, browse restaurant's menu, place and track order;
          and for restaurants to manage menu and promotion"
          url="https://github.com/cs2102-project-group28/backend"
        >
          <div className="flex gap-3">
            <ProjectTools>
              <SiFlask />
            </ProjectTools>
            <ProjectTools>
              <SiPostgresql />
            </ProjectTools>
          </div>
        </ProjectCard>

        <ProjectCard 
          title="IoT Edge Processing"
          description="A research program to collect sensors data that are attached on different objects, and analyse to detect motion.
          Applied data analytics and machine learning algorithm to classify objects based on motion with accelerometer and gyroscope data"
          url="https://docs.google.com/document/d/1nnawXdHsu6P2HIHQKTW6tSPsl86NQPlM/edit?usp=sharing&ouid=114704910466068916437&rtpof=true&sd=true"
          isGithub={false}
          isDocument={true}
        >
          <div className="flex gap-3">
            <ProjectTools>
              <FaPython />
            </ProjectTools>
            <ProjectTools>
              <SiPandas />
            </ProjectTools>
            <ProjectTools>
              <SiTensorflow />
            </ProjectTools>
          </div>
        </ProjectCard>

        <ProjectCard 
          title="Vessel Analysis"
          description="A data analytics program using Python to that helped clean vessel data, visualise vessels' path and compare CO2 emission between points.
          Reports are generated in HTML with Python Flask backend"
          url="https://github.com/tran-quang-thanh/ais_vis"
        >
          <div className="flex gap-3">
            <ProjectTools>
              <SiFlask />
            </ProjectTools>
            <ProjectTools>
              <FaHtml5 />
            </ProjectTools>
            <ProjectTools>
              <SiPandas />
            </ProjectTools>
          </div>
        </ProjectCard>

        <ProjectCard 
          title="To-do App"
          description="A simple To-do app that allows adding, deleting, and editing task list. Developed using Angular for frontend and NodeJS for backend"
          url="https://github.com/tran-quang-thanh/todo-app"
        >
          <div className="flex gap-3">
            <ProjectTools>
              <FaAngular />
            </ProjectTools>
            <ProjectTools>
              <DiNodejs />
            </ProjectTools>
          </div>
        </ProjectCard>

        <ProjectCard 
          title="IBM Quantum Challenge 2021"
          description="Self-learned quantum computing and Python Qskit to attend IBM Quantum Challenge. Ranked top 70% with advanced badge for solving all problems"
          url="https://github.com/tran-quang-thanh/ibm-quantum-2021/tree/main/solutions%20by%20participants"
        >
          <div className="flex gap-3">
            <ProjectTools>
              <FaPython />
            </ProjectTools>
          </div>
        </ProjectCard>
      </div>
    </main>
  );
}

function ProjectTools({ children } : { children: ReactNode }) {
  return (
    <div
      className="color-text p-2 rounded-full border border-transparent bg-gray-200 text-2xl"
    >
      {children}
    </div>
  );
}