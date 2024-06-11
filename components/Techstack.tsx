import { FaAndroid, FaGitAlt, FaJava, FaPython, FaReact, FaSwift } from "react-icons/fa";
import TechItem from "./TechItem";
import { SiCplusplus, SiFlask, SiIos, SiJupyter, SiKotlin, SiMongodb, SiMqtt, SiPandas, SiPostgresql, SiTensorflow } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";

export default function Techstack() {
  return (
    <>
      <h1 className="self-center pt-20">
        Programming Languages
      </h1>

      <div className="flex flex-wrap justify-center md:px-12 lg:px-50 xl:px-60">
        <TechItem>
          <SiKotlin />
          <h2>Kotlin</h2>
        </TechItem>

        <TechItem>
          <FaSwift />
          <h2>Swift</h2>
        </TechItem>

        <TechItem>
          <FaPython />
          <h2>Python</h2>
        </TechItem>

        <TechItem>
          <FaJava />
          <h2>Java</h2>
        </TechItem>

        <TechItem>
          <AiOutlineJavaScript />
          <h2>Javascript</h2>
        </TechItem>

        <TechItem>
          <SiCplusplus />
          <h2>C++</h2>
        </TechItem>

        <TechItem>
          <SiPostgresql />
          <h2>SQL</h2>
        </TechItem>
      </div>

      <h1 className="self-center pt-20">
        <span className="color-text">Technologies</span> I use
      </h1>

      <div className="flex flex-wrap justify-center md:px-12 lg:px-50 xl:px-60">
        <TechItem>
          <FaAndroid />
          <h2>Android</h2>
        </TechItem>

        <TechItem>
          <SiIos />
          <h2>iOS</h2>
        </TechItem>

        <TechItem>
          <SiJupyter />
          <h2>Jupyter</h2>
        </TechItem>

        <TechItem>
          <FaReact />
          <h2>React</h2>
        </TechItem>

        <TechItem>
          <SiFlask />
          <h2>Flask</h2>
        </TechItem>

        <TechItem>
          <DiNodejs />
          <h2>NodeJS</h2>
        </TechItem>

        <TechItem>
          <SiMongodb />
          <h2>MongoDB</h2>
        </TechItem>

        <TechItem>
          <SiPandas />
          <h2>Pandas</h2>
        </TechItem>

        <TechItem>
          <SiTensorflow />
          <h2>Tensorflow</h2>
        </TechItem>

        <TechItem>
          <FaGitAlt />
          <h2>Git</h2>
        </TechItem>

        <TechItem>
          <SiMqtt />
          <h2>MQTT</h2>
        </TechItem>
      </div>
    </>
  );
}