import { images } from "./data";

export default function Index() {
  return (
    <div className="px-4 md:px-20">
      <div className="mb-5 font-bold md:text-3xl">Selected Projects</div>
      <div className="justify-between md:flex">
        <div>
          <div className="bg-[#f5f5f5] p-4">
            <img
              src={images.first}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="mb-5 flex justify-between pt-2">
            <div>
              <div className="text-[13px] font-bold md:text-[18px]">
                Language Translator System
              </div>
              <div className="text-[13px] text-[#575A5C] md:text-[18px]">
                Website Development
              </div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a
                href=""
                className="rounded-md border p-2 text-[13px] md:text-[18px]"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#f5f5f5] p-4 md:mb-0 md:ml-4">
            {" "}
            <img
              src={images.second}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pl-4 pt-2">
            <div>
              <div className="text-[13px] font-bold md:text-[18px]">
                Xperience
              </div>
              <div className="text-[13px] text-[#575A5C] md:text-[18px]">
                Website Development
              </div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a
                href="http://gainxperience.com/auth"
                className="rounded-md border p-2 text-[13px] md:text-[18px]"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5  md:my-10">
        <div className="grid justify-items-center bg-[#f5f5f5] p-4">
          <img
            src={images.fifth}
            alt="image"
            className="h-[400px] w-[500px] rounded-lg"
          />
        </div>
        <div className="flex justify-between pl-4 pt-2">
          <div>
            <div className="text-[13px] font-bold md:text-[18px]">
              Online Bookshop System
            </div>
            <div className="text-[13px] text-[#575A5C] md:text-[18px]">
              Website Development
            </div>
          </div>
          <div className="pt-3 text-[#575A5C]">
            <a
              href="https://online-bookshop-system.vercel.app/"
              className="rounded-md border p-2 text-[13px] md:text-[18px]"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <div className="justify-between md:flex">
        <div>
          <div>
            <img
              src={images.third}
              alt="image"
              className="h-[200px] w-[500px] rounded-lg md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pt-2 md:pl-4">
            <div>
              <div className="text-[13px] font-bold md:text-[18px]">
                Car Rental System
              </div>
              <div className="mb-5 text-[13px] text-[#575A5C] md:text-[18px]">
                Website Development
              </div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a
                href="https://cars-rental-system.vercel.app/"
                className="rounded-md border p-2 text-[13px] md:text-[18px]"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2">
            <img
              src={images.fourth}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pt-2 md:pl-4">
            <div>
              <div className="text-[13px] font-bold md:text-[18px]">
                My Portfolio
              </div>
              <div className="text-[13px] text-[#575A5C] md:text-[18px]">
                Website Development
              </div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a
                href="#"
                className="rounded-md border p-2 text-[13px] md:text-[18px]"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
