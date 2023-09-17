import React from "react";
import FicraImg from "../img/About/ficra.png";
import RectangleSvg from "../img/About/Rectangle 1.svg";

const About = () => {
  return (
    <>
      <img className="absolute right-0 h-full -z-10" src={RectangleSvg}/>
      <div className=" pt-[80px] pb-10">
        <h1 className="flex justify-center">About Me</h1>
        <div className="flex justify-center hp:flex-col tablet:flex-col laptop:flex-row hp:px-12 tablet:px-20 laptop:px-[10px] mt-12">
          <div className="flex flex-col laptop:mr-20 laptop:w-[610px] ">
            <p>
              Saya Hayatul Fikra Lulusan D3 Teknik Elektronika Politeknik Negeri
              Padang, Saya mempunyai background Elektronika mempunyai skill
              perancangan sistem elektronika tertanam serta mampu membangun
              sebuah project berkonsep IoT. Mempunyai ketertarikan didunia
              programing khususnya fullstack developer.
            </p>

            <p className="mt-5">
              Saya telah menggunakan berbagaimacam bahasa pemograman seperti
              bahasa pemograman asembbly ,bahas C, bahasa Basic, Bahasa pascal,
              python, arduino, PHP,Javascript, Golang dan Kotlin itu semua
              digunakan untuk mendukung project tertentu. namun untuk saat ini
              saya memperdalam bahasa Javacript karena mempunyai masa depan yang
              cerah kedepannya.
            </p>
          </div>
          <div className=" flex justify-center hp:pt-5 tablet:pt-0 laptop:pt-0">
            <img className="w-[230px] mb-10 hp:mt-10 tablet:mt-10 laptop:mt-0 drop-shadow-2xl  rounded-lg" src={FicraImg} alt="/blank" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
