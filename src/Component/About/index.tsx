import bigPicture from "/Images/bigPicture.png";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";

export default function Index() {
  return (
    <div className="bg-gradient-to-t from-[#edf5fd] px-5 pb-8 md:px-20">
      {/* Name */}
      <div className="pt-4 font-bold text-[#1D6EC2] md:text-3xl">
        AGBAJE ABIODUN KAYODE
      </div>

      {/* Main Section */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          {/* Image */}
          <img
            src={bigPicture}
            alt="profile"
            className="h-[260px] w-full rounded-2xl object-cover shadow-md md:h-[360px]"
          />

          {/* Desktop Text */}
          <div className="mt-4 hidden text-sm leading-relaxed text-gray-700 md:block">
            I'm a passionate front-end developer driven by the thrill of turning
            ideas into interactive digital experiences. My motivation stems from
            a belief in the power of technology to transform lives. I adhere to
            high work ethics, emphasizing quality, collaboration, and continuous
            learning. Outside of coding, I enjoy exploring new technologies,
            hiking, and painting. These hobbies fuel my creativity and
            problem-solving skills, ensuring I bring a fresh perspective to
            every project.
          </div>

          {/* Mobile Text */}
          <div className="mt-3 text-justify text-xs text-gray-700 md:hidden">
            I'm a passionate front-end developer driven by the thrill of turning
            ideas into interactive digital experiences. My motivation stems from
            a belief in the power of technology to transform lives.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full flex-col justify-center md:w-1/2 md:items-start md:pl-20 md:pt-20">
          {/* Title */}
          <h1 className="text-center text-3xl font-bold leading-tight text-black md:text-right md:text-5xl">
            FRONT-END <br /> DEVELOPER
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-3 md:justify-end">
            <a
             href="https://wa.me/+2349039415354?text=Hello,+I+want+to+give+you+a+project."
              className="rounded-md bg-[#1e6cc3] px-4 py-2 text-sm font-medium text-white hover:opacity-90 md:text-base"
            >
             Hire me
            </a>

            <a
              href={resume}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 md:text-base"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
