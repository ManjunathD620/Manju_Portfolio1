import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
            <p>
                I'm Manjunath D, a full-stack developer skilled in JavaScript, Node.js, and React.  
                I build scalable,  <span className="font-bold text-white">cloud-native applications across AWS, Azure, and GCP. </span> 
                My focus is on performance, clean architecture, and developer-first solutions.  
                I love solving real-world problems and continuously improving my craft.
              </p>

              <p>
              My focus on creating real impact for customers through seamless digital experiences.  
              Specialized in building robust backend systems with JavaScript, Node.js, and modern cloud technologies.  
              Driven by clean code, scalability, and a passion for solving real-world problems.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  🚀 I'm a passionate engineer and lifelong learner dedicated to building impactful software and sharing knowledge with the tech community. From scalable backend systems to intuitive frontends, I thrive on creating solutions that inspire and empower developers.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Manjunath D
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
