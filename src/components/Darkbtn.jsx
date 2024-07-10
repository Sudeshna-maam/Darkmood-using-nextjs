import { darkAtom } from "@/utils/atoms";
import { Switch } from "@headlessui/react";
import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Darkbtn = () => {
  // const [dark, setDark] = useState(false);
  const [dark, setDark] = useAtom(darkAtom);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <div className="flex gap-2">
        <Sun size={28} />
        <Switch
          checked={dark}
          onChange={setDark}
          className={`${
            dark ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              dark ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-all ease-in-out duration-300`}
          />
        </Switch>
        <Moon size={28} />
      </div>
    </>
  );
};

export default Darkbtn;
