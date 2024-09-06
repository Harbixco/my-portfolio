/* eslint-disable tailwindcss/no-custom-classname */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/Images/logo.png";
// import { DarkThemeToggle } from "flowbite-react";

const navigation = [
  {
    name: "Home",
    href: "/#top",
    current: true,
  },
  {
    name: (
      <div className="rounded-md px-3 py-2 font-medium text-[#3B3F41] hover:bg-gray-700 hover:text-white dark:text-[#f5f5f5] dark:hover:bg-[#f5f5f5] dark:hover:text-black">
        About
      </div>
    ),
    href: "/#About",
    current: false,
  },
  {
    name: (
      <div className="rounded-md px-3 py-2 font-medium text-[#3B3F41] hover:bg-gray-700 hover:text-white dark:text-[#f5f5f5] dark:hover:bg-[#f5f5f5] dark:hover:text-black">
        Projects
      </div>
    ),
    href: "/#Project",
    current: false,
  },
  {
    name: (
      <div className="rounded-md px-3 py-2 font-medium text-[#3B3F41] hover:bg-gray-700 hover:text-white dark:text-[#f5f5f5] dark:hover:bg-[#f5f5f5] dark:hover:text-black">
        Experience
      </div>
    ),
    href: "/#Experience",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <div>
            <div className="fixed w-full dark:bg-black">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className=" relative mr-5 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block size-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block size-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className=" flex md:justify-start">
                  <div className="pt-1 md:ml-10 md:mr-20 md:pt-4 xl:ml-[75px] xl:mr-[240px]">
                    <a href="/#top">
                      <img
                        className="h-8 w-auto pl-5 pr-20 md:pr-4"
                        src={logo}
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex pt-2">
                      <div className="flex rounded-lg border bg-[#f2f2f2] px-2 py-1 dark:bg-black md:space-x-4 xl:space-x-8">
                        {navigation.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "rounded-lg bg-gray-900 px-3 py-2 font-medium text-white dark:bg-[#f5f5f5] dark:text-black"
                                : "",
                              "",
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>

                      <div className="pt-3">
                        <a
                          href="/#Footer"
                          className="rounded-md bg-[#1c6ec1] px-3 py-2 font-medium text-white md:ml-20 xl:ml-[130px]"
                        >
                          Reach Out
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="pl-10 pt-2">
                    <DarkThemeToggle />
                  </div> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-10">
                {navigation.map((item, index) => (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium",
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
