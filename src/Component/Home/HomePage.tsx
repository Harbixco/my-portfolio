/* eslint-disable tailwindcss/no-custom-classname */
import smallPicture from "/Images/smallPicture.png";
import { value } from "./data";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";
import Countup from "../Countup";

export default function HomePage() {
  return (
    <div className="bg-[url('/Images/backgroundNet.png')] bg-cover bg-center py-10">
      <div className="mx-4 grid justify-items-center rounded-lg bg-gradient-to-t from-[#edf5fd] pt-10 dark:bg-gradient-to-t dark:from-black md:mx-20 md:pt-20">
        <div className="flex rounded-full bg-[#f2f2f2] px-5 py-0.5">
          <div className="pr-2 pt-1 text-[18px] font-bold text-[#575a5c]">
            Hi, I'm Kayode
          </div>
          <div>
            <img src={smallPicture} alt="image" />
          </div>
        </div>
        <div className="pt-2 md:pt-0">
          <div className=" text-[26px] font-bold dark:text-[#f5f5f5] md:pl-8 md:text-[53px]">
            Passionate and innovative
          </div>
          <div className="ml-[60px] pb-4 text-5xl font-extrabold italic text-[#1D6EC2] dark:text-black md:ml-[200px] md:pb-5 md:text-[55px] md:font-bold">
            <div>front-end</div>
            <div>developer</div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="pl-5 dark:text-[#f5f5f5]">
            I'm a passionate developer specializing in creating cutting-edge web
            and mobile
          </div>
          <div className="dark:text-[#f5f5f5]">
            applications. With a keen eye for design and a commitment to
            excellence, I bring ideas to
          </div>
          <div className="pl-5 dark:text-[#f5f5f5]">
            life through code. Explore my projects to see how I blend creativity
            with technology.
          </div>
        </div>

        <div className="px-4 text-justify text-sm md:hidden">
          {" "}
          I'm a passionate developer specializing in creating cutting-edge web
          and mobile applications. With a keen eye for design and a commitment
          to excellence, I bring ideas to life through code. Explore my projects
          to see how I blend creativity with technology.
        </div>

        <div className="flex pt-8">
          <div className="pr-3">
            <a
              href="/#Footer"
              className="rounded-md bg-[#1c6ec1] px-3 py-2 font-medium text-white"
            >
              Reach Out
            </a>
          </div>

          <div>
            <a
              href={resume}
              className="rounded-md bg-black px-3 py-2 font-medium text-white"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex px-3 pt-4 md:px-0">
          <div>
            <div className="pb-3 pt-4">
              <hr />
            </div>
            <div className=" text-[12px] font-bold text-[#575A5C] dark:text-[#f5f5f5]">
              YEARS OF EXPERIENCE
            </div>
            <div className="text-[28px] font-bold dark:text-[#1D6EC2]">
              <Countup end={value.years} />+
            </div>
          </div>

          <div className="px-10">
            <div className="pb-3 pt-4">
              <hr />
            </div>
            <div className="text-[12px] font-bold text-[#575A5C] dark:text-[#f5f5f5]">
              CLIENT SATISFACTION
            </div>
            <div className="text-[28px] font-bold dark:text-[#1D6EC2]">
              {" "}
              <Countup end={value.client} />%
            </div>
          </div>

          <div>
            <div className="pb-3 pt-4">
              <hr />
            </div>
            <div className="text-[12px] font-bold text-[#575A5C] dark:text-[#f5f5f5]">
              PROJECTS DONE
            </div>
            <div className="text-[28px] font-bold dark:text-[#1D6EC2]">
              <Countup end={value.project} /> +
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="darK:text-[#f5f5f5] grid justify-items-center pt-5">
          <div>
            Proficient in HTML, CSS, JavaScript, and frameworks such as React
            and Typescript for building
          </div>
          <div className="text-center">
            dynamic and responsive user interfaces.
          </div>
        </div>
      </div>

      <div className="pt-4 text-sm md:hidden">
        <div className="px-8 text-justify text-[12px]">
          Proficient in HTML, CSS, JavaScript, and frameworks such as React and
          Typescript for building dynamic and responsive user interfaces.
        </div>
      </div>
    </div>
  );
}
