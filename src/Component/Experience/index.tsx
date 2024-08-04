import { experience } from "./data";

export default function Index() {
  return (
    <div className="px-4 md:px-20">
      <div className="text-3xl font-bold">Experience</div>

      <div>
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-5 rounded-lg border bg-[#f5f5f5] py-3 md:flex md:py-5"
            >
              <div className="pl-1 pr-20 text-[17px] font-semibold text-[#77797a] md:pl-[50px] md:text-base">
                {experience.year}
              </div>
              <div className="px-3 md:pl-10">
                <div className="py-2 font-bold md:py-0 md:text-xl">
                  {experience.company}
                </div>
                <ul className="list-disc text-xs text-[#56585a]  md:text-sm ">
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
