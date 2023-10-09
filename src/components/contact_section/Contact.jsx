import {BsGithub, BsLinkedin, BsFillEnvelopeAtFill} from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <div  data-aos = "fade-up" data-aos-delay="1000" className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacto
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-start flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF]">
              Estoy interesado en una posicion como desarrollador, aunque si tienes alguna consulta distinta no dudes en contactarme.
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Enviame un mensaje!
              </h2>
              {/* get in touch */}
              <div className="">
                {/* links */}
                <a href="https://www.linkedin.com/in/tomasriera" className="flex gap-1 items-center">
                  <BsLinkedin color="white" size='1.5rem'/>
                  <span className="text-[#ABB2BF]">in/tomasriera</span>
                </a>
                <a href="contact" className="flex gap-1 items-center">
                  <BsFillEnvelopeAtFill color="white" size='1.5rem'/>
                  <span className="text-[#ABB2BF]">tomasriera2@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
