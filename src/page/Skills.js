import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px] pb-10">
      <h1 className="flex justify-center drop-shadow-lg ">My Skills</h1>
      <div className="flex hp:flex-col tablet:flex-row laptop:flex-row bg-[#f0f0f0] w-auto  mt-5 rounded-lg drop-shadow-xl gap-10 text-lg p-20 -z-10 ">
        <div>
          <h2 className=" font-bold">Electronic Enginering Skills</h2>
          <ul className="list-disc">
            <li>Circuit Design</li>
            <li>Microcontroler Programing</li>
            <li>Embedded System</li>
            <li>Automation</li>
            <li>IoT Development</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Web Development</h2>
          <ul className="list-disc">
            <li>
              Language: <br />
              HTML,CSS,Js,PHP,dan Golang
            </li>
            <li>Framework: Tailwind dan Bootstrap</li>
            <li>Design: Figma dan Canva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
