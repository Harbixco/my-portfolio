import { images } from "./data";

export default function Index() {
  return (
    <div className="px-4 md:px-20">
      <div className="mb-5 font-bold md:text-3xl">Selected Projects</div>
      <div className="justify-between md:flex">
        <div>
          <div className="mb-5 bg-[#f5f5f5] p-4 md:mb-0">
            <img
              src={images.first}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pt-2">
            <div>
              <div className="text-[18px] font-bold">
                Language Translator System
              </div>
              <div className="text-[#575A5C]">Website Development</div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a href="" className="rounded-md border p-2 ">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="ml-4 bg-[#f5f5f5] p-4 md:mb-0">
            {" "}
            <img
              src={images.second}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pl-4 pt-2">
            <div>
              <div className="text-[18px] font-bold">
                Language Translator System
              </div>
              <div className="text-[#575A5C]">Website Development</div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a href="" className="rounded-md border p-2 ">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 grid justify-items-center md:my-10">
        <div>
          <img
            src={images.fifth}
            alt="image"
            className="h-[400px] w-[500px] rounded-lg"
          />
        </div>
        <div className="flex justify-between pl-4 pt-2">
          <div>
            <div className="text-[18px] font-bold">Online Bookshop System</div>
            <div className="text-[#575A5C]">Website Development</div>
          </div>
          <div className="pt-3 text-[#575A5C]">
            <a href="" className="rounded-md border p-2 ">
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
          <div className="flex justify-between pl-4 pt-2">
            <div>
              <div className="text-[18px] font-bold">Car Rental System</div>
              <div className="text-[#575A5C]">Website Development</div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a href="" className="rounded-md border p-2 ">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img
              src={images.fourth}
              alt="image"
              className="h-[200px] w-[500px] md:h-[400px]"
            />
          </div>
          <div className="flex justify-between pl-4 pt-2">
            <div>
              <div className="text-[18px] font-bold">My Portfolio</div>
              <div className="text-[#575A5C]">Website Development</div>
            </div>
            <div className="pt-3 text-[#575A5C]">
              <a href="" className="rounded-md border p-2 ">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
