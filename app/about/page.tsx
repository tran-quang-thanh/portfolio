import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between px-12 md:px-24 lg:px-50 py-24 md:py-36 lg:py-40 space-y-8">
        <h2>More Information about <span className="color-text">Me</span></h2>
        <div className="grid md:grid-cols-4 items-center">
          <div className="col-span-3 pr-8 pb-4">
            <p>
              My name is <span className="color-text">Tran Quang Thanh&nbsp;</span>
              and I'm from <span className="color-text">Hanoi, Vietnam</span>
            </p>
            <br />
            <p>
              In 2018, I moved to <span className="color-text">Singapore&nbsp;</span>
              to pursue my Bachelor Degree in Computer Engineering in <span className="color-text">National University of Singapore (NUS)</span>
            </p>
            <br />
            
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
        </div>
      </main>
    </>
  );
}