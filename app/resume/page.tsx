import ExperienceItem from "@/components/ExperienceItem";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-between py-24 md:py-36 lg:py-40 px-12 md:px-24 lg:px-50 space-y-12">
      <h1>My experience</h1>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <ExperienceItem
            title="Tempest"
            position="Software Engineer"
            description={
              <div>
                Developed UI for 2 mobile apps 
                <a 
                  href="https://phonerapp.com/" 
                  className="text-white"
                  target="_blank"
			            rel="noopener noreferrer"
                >
                  &nbsp;Phoner
                </a> &#45; second phone number, and 
                <a 
                  href="https://vpn.appsverse.com/" 
                  className="text-white" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;VPN Vault
                </a>
              </div>
            }
            time="Mar 2022 &#45; Feb 2024"
            experiences={["Android", "Kotlin", "ViewBinding", "iOS", "Swift", "AsyncDisplayKit (Texture)", "MVVM"]}
          />

          <ExperienceItem
            title="Infineon Technology Asia Pacific"
            position="Automation Engineer Intern"
            description={
              <div>
                Researched and conducted experiements to build chip testing validation
              </div>
            }
            time="Jan 2021 &#45; Jul 2021"
            experiences={["Machine Learning", "Python", "PyCaret", "Tensorflow", "Pandas"]}
          />

          <ExperienceItem
            title="Smartguppy"
            position="Frontend Engineer Intern"
            description={
              <div>
                Main contributor to UI development of
                <a 
                  href="https://www.smartguppy.com/" 
                  className="text-white" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;Smartguppy&nbsp;
                </a>
                - a Singaporean education resource sharing platform
              </div>
            }
            time="Jun 2019 &#45; Dec 2020"
            experiences={["ReactJS", "HTML", "CSS"]}
          />
      </div>

      <Button 
        href="/resume-Tran-Quang-Thanh-public.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7]"
      >
        <>
          <FaDownload />
          <div>Download Full Resume</div>
        </>
      </Button>
    </main>
  );
}