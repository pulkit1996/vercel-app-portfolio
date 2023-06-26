import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        {/* <p className="text-xl mt-20">
          As a front-end developer, I enjoy bringing designs to life by coding
          interactive and responsive web pages and applications. My proficiency
          in HTML, CSS, JavaScript, and other front-end technologies allows me
          to develop efficient and effective solutions that align with the
          design vision. I work closely with UI/UX designers to ensure that the
          user interface is not only visually appealing, but also optimized for
          performance and usability across different devices and browsers. I pay
          careful attention to detail in crafting clean and modular code,
          adhering to best practices and industry standards.
        </p> */}

        <br />

        <p className="text-xl">
          Hello there! I'm a passionate software developer dedicated to crafting
          elegant and efficient solutions. With a deep love for coding and
          problem-solving, I thrive on the excitement of turning complex
          challenges into innovative software solutions. My journey in the world
          of programming began years ago, and since then, I've honed my skills
          in various languages and frameworks.
        </p>

        <br />

        <p className="text-xl">
          An IT professional with MSc in Information Systems Management from
          NUIG with 3 years of professional experience as a front-end developer
          with exceptional skills in API Software Development and Agile
          Methodology. Highly skilled and motivated software engineer with a
          passion for experimenting with the latest technologies.
        </p>

        <br />

        <p className="text-xl">
          I'm passionate about creating visually appealing and user-friendly web
          pages and applications. I believe that a seamless and intuitive user
          experience is crucial in ensuring the success of any digital product.
          Through my expertise in user research, wireframing, prototyping, and
          visual design, I strive to create engaging and accessible interfaces
          that delight users.
        </p>

        <br />

        <p className="text-xl">
          I am excited about the endless possibilities that software development
          offers, and I look forward to collaborating on challenging projects,
          pushing boundaries, and making a positive impact through technology.
        </p>
      </div>
    </div>
  );
};

export default About;
