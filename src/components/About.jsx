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
          As a UI/UX designer, I'm passionate about creating visually appealing
          and user-friendly web pages and applications. I believe that a
          seamless and intuitive user experience is crucial in ensuring the
          success of any digital product. Through my expertise in user research,
          wireframing, prototyping, and visual design, I strive to create
          engaging and accessible interfaces that delight users.
        </p>

        <br />

        <p className="text-xl">
          With my combined expertise in UI/UX design and front-end development,
          I am dedicated to creating exceptional digital experiences that not
          only meet business objectives, but also bring joy and value to users.
          I am always eager to stay updated with the latest industry trends and
          technologies, and I am excited to continue honing my skills to create
          innovative and user-centric web solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
