import { experience } from "./data";

export default function Index() {
  return (
    <div className="px-20 py-10">
      <div className="text-3xl font-bold">Experience</div>

      <div>
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-5 flex rounded-lg border bg-[#f5f5f5] py-5"
            >
              <div className="pl-[50px] pr-20 text-[##77797a]">
                {experience.year}
              </div>
              <div className="pl-10">
                <div className="text-xl font-bold">{experience.company}</div>
                <ul className="list-disc text-[14px] text-[#56585a]">
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
