import { techStackData } from "./data";

export default function Skills() {
  return (
    <>
      <div className="px-4 md:px-20">
        <div className="pb-2 pl-5 font-bold text-[#1D6EC2] md:text-3xl">
          TECH STACKS
        </div>

        <div className="flex  flex-col items-center justify-center bg-gray-100 p-2">
          <main className="w-full grow">
            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="grid grid-cols-4 justify-items-center gap-2 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-6 lg:grid-cols-6"
            >
              {techStackData.map((tech) => (
                <div
                  key={tech.id}
                  className="flex w-full flex-col items-center rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl md:max-w-[150px] md:p-4"
                >
                  <p>
                    <img
                      className="w-10 cursor-pointer items-center p-2 transition-all duration-500 hover:scale-125 md:w-12"
                      src={tech.icon}
                      alt="image"
                    />
                  </p>
                  <p className="text-center text-sm font-medium leading-tight text-gray-800 sm:text-base md:mt-4">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
