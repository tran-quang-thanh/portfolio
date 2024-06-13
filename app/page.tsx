"use client"
import HomeSocial from "@/components/HomeSocial";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { LiaLinkedinIn } from "react-icons/lia";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between py-24 px-12 md:px-24">
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <h1>I'M <strong className="color-text">TRAN QUANG THANH</strong></h1>
            <br/>
            <span className="text-2xl font-bold">
              <Typewriter
                words={["Software Engineer", "Data Analyst", "Technology Enthusiast"]}
                loop={0}
              />
            </span>
          </div>
          <div>
            <Image
              src="/home.svg"
              alt="Home Logo"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div>
          <h1>About me</h1>
          <p className="py-8">
            I am passionate about technologies and creating values through my ability in 
            <span className="color-text"> Software Engineer</span> and <span className="color-text">Data Analytics</span>
          </p>
          <p>
            I have experience in classics like <span className="color-text">Python, Java, C++, and JavaScript</span>
            <br />
            and others like <span className="color-text">Kotlin and Swift</span>
          </p>
        </div>
        <div className="text-center pt-32">
          <h1>Find me on</h1>
          <p className="py-4">Feel free to <span className="color-text">connect</span> with me</p>
          <div className="flex space-x-8 place-content-center">
            <HomeSocial url="https://github.com/tran-quang-thanh">
              <AiFillGithub />
            </HomeSocial>
            <HomeSocial url="https://www.linkedin.com/in/thanh-tran-492019179/">
              <LiaLinkedinIn />
            </HomeSocial>
          </div>
        </div>
      </main>
    </>
  );
}
