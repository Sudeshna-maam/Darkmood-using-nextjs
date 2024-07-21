import { ChartPieIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

const Template = () => {
  return (
    <>
      <div className="sm:h-screen md:h-screen lg:h-screen bg-purple-50  dark:bg-black   w-full ">
        <div className=" grid  sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 place-items-center  px-7   ">
          <div className="">
            <div className="w-72 h-8 bg-blue-950 flex items-center rounded-3xl gap-5 p-2">
              <button className="w-28 h-7 text-white bg-indigo-700 items-center  rounded-3xl">
                We're hiring
              </button>
              <div className="flex items-center text-white gap-2">
                visit our page
                <ChevronRightIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="  font-bold text-6xl">
              Data to enrich your <br /> online business
            </div>
            <p className=" text-lg   py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur saepe aut dolorem at! Sed sequi neque similique quam,
              aliquid, veniam veritatis totam quisquam eligendi cupiditate
              consequatur. Voluptatem, commodi. Quidem, vero?
            </p>
            <h3 className=" font-medium text-lg">Used by</h3>
            <div className=" flex gap-20  font-semibold text-lg py-3">
              <div className="flex items-center gap-1">
                <ChartPieIcon className="w-6 h-6" />
                TUPLE
              </div>
              <div className="flex items-center gap-1">
                <ChartPieIcon className="w-6 h-6" />
                Workcation
              </div>
              <div className="flex items-center gap-1">
                <ChartPieIcon className="w-6 h-6" />
                StaticKit
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-xl w-96 shadow mt-7">
            <form action="" className="flex flex-col space-y-4 m-7">
              <div className="font-bold dark:text-black">Sign in with</div>
              <div className="flex justify-between dark:text-black ">
                <button className="w-24 h-10 border-2 rounded-md ps-8">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="w-24 h-10 border-2 rounded-md ps-8">
                  <Twitter className="w-6 h-6" />
                </button>
                <button className="w-24 h-10 border-2 rounded-md ps-8">
                  <Github className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center justify-between dark:text-black">
                <hr className="w-36" />
                <div className=" ">Or</div>
                <hr className="w-36" />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 py-2 px-2 rounded-md w-full"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Mobile no Or Email"
                  className="border border-gray-300 py-2 px-2 rounded-md w-full"
                />
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 py-2 px-2 rounded-md w-full"
                />
              </div>
              <div className="mt-2">
                <button className="bg-indigo-700 text-white w-full h-9 rounded-md">
                  Create your account
                </button>
              </div>
              <hr className="w-full m-2" />
              <span className="text-slate-500">
                By signing up, you agree to our{" "}
                <span className="text-black">Term Data Policy</span> and{" "}
                <span className="text-blck">Cookies Policy</span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
