/* eslint-disable tailwindcss/no-custom-classname */
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerlogo from "/Images/footerlogo.png";

export default function Index() {
  return (
    <div className="bg-[#010507]">
      <div className="bg-[url('/Images/thirdBackground.png')] bg-cover bg-center px-3 py-4 md:px-[250px] md:py-10">
        <div className="rounded-lg bg-white">
          <div className="bg-[url('/Images/secondBackground.png')] bg-cover bg-center">
            <div className="grid justify-items-center py-6 text-sm text-black md:text-base">
              <div>Ready to bring your ideas to life? Let's</div>
              <div>connect and create something amazing </div>
              <div>together. Reach out today!</div>

              <div className="pt-7">
                <a
                  href="https://agbajeabiodunkay@gmail.com"
                  className="bg- rounded-md bg-black px-3 py-2 font-medium text-white"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-items-center pt-8">
          <div className="flex gap-8 text-[20px] text-white">
            <div>
              <a href="https://agbajeabiodunkay@gmail.com">
                <CgMail />
              </a>
            </div>

            <div>
              <a href="https://github.com/Harbixco">
                <FaGithub />
              </a>
            </div>

            <div>
              <a href="https://x.com/">
                <FaXTwitter />
              </a>
            </div>

            <div>
              <a href="https://wa.me/+2349039415354?text=Hello,+I+want+to+give+you+a+project.">
                <FaWhatsapp />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/agbaje-abiodun/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-5 pt-6 md:pt-12">
          <hr />
        </div>

        <div className="hidden md:block">
          <div className="justify-between text-xs text-white md:flex">
            <div className="flex gap-1">
              <div className="pt-0.5">
                <img src={footerlogo} alt="images" className="w-3" />
              </div>
              <div>2024</div>
              <div>All rights reserved</div>
            </div>
            <div className="flex gap-1">
              <div>Designed by</div>
              <div className="text-[#1e6cc3]">
                <a href="https://pamilerin.framer.website/" className="italic">
                  Pamilerin
                </a>
              </div>
            </div>

            <div>
              <div className="flex gap-1">
                <div className="text-lg">
                  {" "}
                  <CgMail />
                </div>
                <div className="text-[#1e6cc3]">
                  {" "}
                  <a href="https://agbajeabiodunkay@gmail.com">
                    agbajeabiodunkay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="justify-between text-xs text-white md:flex">
            <div className="flex justify-between px-4">
              <div className="flex gap-1">
                <div className="pt-0.5">
                  <img src={footerlogo} alt="images" className="w-3" />
                </div>
                <div>2024</div>
                <div>All rights reserved</div>
              </div>
              <div className="flex gap-1">
                <div>Designed by</div>
                <div className="text-[#1e6cc3]">
                  <a
                    href="https://pamilerin.framer.website/"
                    className="italic"
                  >
                    Pamilerin
                  </a>
                </div>
              </div>
            </div>

            <div className="grid justify-items-center pt-5">
              <div className="flex gap-1">
                <div className="text-lg">
                  {" "}
                  <CgMail />
                </div>
                <div className="text-[#1e6cc3]">
                  {" "}
                  <a href="https://agbajeabiodunkay@gmail.com">
                    agbajeabiodunkay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
