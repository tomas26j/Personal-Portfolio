import {BsGithub, BsLinkedin, BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      {/* line */}
      <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Tomás</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">tomasriera2@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Desarrollador Fullstack radicado en buenos aires, argentina</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">RR. SS.</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/tomasriera/">
                <BsLinkedin color="gray" size="1.5rem"/>
              </a>
              <a href="https://github.com/tomas26j">
                <BsGithub color="gray" size="1.5rem"/>
              </a>
              <a href="https://www.youtube.com/@tomasrieradev">
                <BsYoutube color="gray" size="1.5rem"/>
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2024. Made by Tomás Riera
        </div>
      </div>
    </>
  );
};

export default Footer;
