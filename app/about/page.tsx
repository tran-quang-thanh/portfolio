import Techstack from "@/components/Techstack";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col justify-between py-24 md:py-36 lg:py-40 space-y-8">
      <div className="px-12 md:px-24 lg:px-50 space-y-8">
        <h2>More Information about <span className="color-text">Me</span></h2>
        <div className="grid md:grid-cols-4 items-center">
          <div className="col-span-3 pr-8 pb-4">
            <p>
              My name is <span className="color-text">Tran Quang Thanh&nbsp;</span>
              and I&apos;m from <span className="color-text">Hanoi, Vietnam</span>
            </p>
            <br />
            <p>
              In 2018, I moved to <span className="color-text">Singapore&nbsp;</span>
              to pursue my Bachelor Degree in Computer Engineering in <span className="color-text">National University of Singapore (NUS)</span>
            </p>
            <br />
            <p>
              I have gained experience as a <span className="color-text">Mobile Developer&nbsp;</span>
              in a Tech Start-up, an <span className="color-text">Automation Engineer&nbsp;</span>
              in a Semiconductor leader, and though other projects and internships
            </p>
            <br />
            <p>
              During my free time, I also enjoy other activities:
            </p>
            <ul className="list-disc pl-8">
              <li>Playing sports: Soccer, Tennis</li>
              <li>Reading books/newsletters</li>
              <li>Playing video games</li>
            </ul>
          </div>
          <div className="col-span-3 md:col-span-1">
            <Image
              src="/about.svg"
              alt="About Logo"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", maxWidth: "300px" }}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      
      <Techstack />
    </main>
  );
}