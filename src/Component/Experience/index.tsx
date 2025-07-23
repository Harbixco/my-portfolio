import { experience } from "./data";

export default function Index() {
  return (
    <div
      className="px-4 md:px-20"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="pb-2 pl-5 font-bold text-[#1D6EC2] md:text-3xl">
        PROFESSIONAL EXPERIENCES
      </div>

      <div>
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-5  rounded-lg border bg-[#f5f5f5] py-3 md:grid md:grid-cols-[30%_70%] md:py-5"
            >
              <div className=" pl-2 text-[14px] font-semibold text-[#77797a] md:pl-[20px] md:text-[15px]">
                <div>{experience.year}</div>
                <div>{experience.name}</div>
                <div>{experience.site}</div>
              </div>

              <div className="px-3 md:pl-10">
                <div className="py-2 font-bold md:py-0 md:pb-2 md:text-xl">
                  {experience.company}
                </div>
                <ul className="list-disc pl-2 text-xs  text-[#56585a] md:text-sm">
                  <li>{experience.first}</li>
                  <li>{experience.second}</li>
                  <li>{experience.third}</li>
                  <li>{experience.fourth}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
