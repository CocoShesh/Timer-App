import React, { useEffect, useState } from "react";
import { RiRestartFill } from "react-icons/ri";
import { MdPauseCircle, MdOutlinePlayCircleFilled } from "react-icons/md";
import "../index.css";
const Timer = () => {
  const [start, setStart] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    const id = setInterval(() => {
      setStart(prevTime => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handlePause = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    setStart(0);
    clearInterval(intervalId);
    setStartCount(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const second = start % 60;
  const minutes = Math.floor(start / 60);
  const hours = Math.floor(minutes / 60);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(second).padStart(2, "0");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className="w-full max-h-screen b ">
        <section className="flex flex-col h-screen items-center justify-center">
          <h1 className="uppercase font-style text-7xl tracking-[1rem] text-[#414e51]">
            {" "}
            Timer
          </h1>
          <section className="flex items-center justify-center  font-bold text-[#142625]  font-style mt-10 max-sm:w-full max-sm:px-5 ">
            <div className="max-w-xs p-10  h-52 bg-[#233030]  text-[#a2ada5] mr-2 flex flex-col items-center justify-center rounded-lg  shadow-xl max-sm:max-w-xs max-sm:h-36 max-sm:px-2 ">
              <span className="text-8xl  max-sm:text-5xl ">
                {formattedHours}{" "}
              </span>
              <p className=" font-mono uppercase  tracking-[0.5rem] mt-7  name">
                {" "}
                Hours
              </p>
            </div>
            <span className="text-5xl"> :</span>
            <div className="max-w-xs p-10 h-52 bg-[#233030]  text-[#a2ada5] text-center  mx-2  flex flex-col items-center justify-center rounded-lg max-sm:max-w-xs max-sm:h-36  max-sm:px-2  ">
              <span className="text-8xl  max-sm:text-5xl">
                {" "}
                {formattedMinutes}
              </span>
              <p className=" font-mono uppercase  tracking-[0.5rem] mt-7  name">
                {" "}
                Minutes
              </p>
            </div>
            <span className="text-5xl"> :</span>
            <div className="max-w-xs p-10 h-52 bg-[#233030]  text-[#a2ada5] text-center  ml-2 flex flex-col items-center justify-center rounded-lg max-sm:max-w-xs  max-sm:h-36  max-sm:px-2 ">
              <span className="text-8xl  max-sm:text-5xl">
                {" "}
                {formattedSeconds}{" "}
              </span>
              <p className=" font-mono uppercase  tracking-[0.5rem] mt-7  name">
                {" "}
                Seconds{" "}
              </p>
            </div>
          </section>
          <div onClick={handleOpen}> x</div>
          {isOpen ? (
            <div className="h-20 w-1/2 bg-black text-white "> hello world</div>
          ) : null}
          <section className="gap-10 flex mt-10 text-7xl  ">
            <MdPauseCircle
              className="cursor-pointer   fill-[#171717] hover:fill-black"
              onClick={handlePause}
            />
            <MdOutlinePlayCircleFilled
              className=" fill-[#171717] scale-150 cursor-pointer hover:scale-125 hover:fill-red-500"
              onClick={handleStart}
            />
            <RiRestartFill
              className="cursor-pointer fill-[#171717] hover:fill-black   "
              onClick={handleReset}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Timer;
