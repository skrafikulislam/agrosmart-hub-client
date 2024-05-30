import Rafikul from "../../assets/rafikul.jpeg";

const Team = () => {
  return (
    <>
      <div className="text-center mt-20 text-5xl font-bold text-gray-700">
        Project Team Members
      </div>
      <div className="flex justify-center items-center mt-40">
        <div className="flex flex-col sm:flex-row  justify-center items-center gap-10">
          {/* main Picture with content below */}
          <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
            <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
              <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
                <img
                  src="https://www.tailwindtap.com/assets/components/animation/user.png"
                  alt=""
                  className="w-full h-full rounded-full object-cover object-right"
                />
              </div>
              <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
                <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <h1 className="text-xl text-white font-medium">
                    Dharam Nath Jha
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
            <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
              <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
                <img
                  src="https://www.tailwindtap.com/assets/components/animation/user.png"
                  alt=""
                  className="w-full h-full rounded-full object-cover object-right"
                />
              </div>
              <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
                <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <h1 className="text-xl text-white font-medium">
                    Debmalya Biswas
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
            <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
              <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
                <img
                  src={Rafikul}
                  // src="https://www.tailwindtap.com/assets/components/animation/user.png"
                  alt=""
                  className="w-full h-full rounded-full object-cover object-right"
                />
              </div>
              <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
                <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <h1 className="text-xl text-white font-medium">
                    Sk Rafikul Islam
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
            <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
              <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
                <img
                  src="https://www.tailwindtap.com/assets/components/animation/user.png"
                  alt=""
                  className="w-full h-full rounded-full object-cover object-right"
                />
              </div>
              <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
                <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <h1 className="text-xl text-white font-medium">
                    Sujit Maity
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
            <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
              <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
                <img
                  src="https://www.tailwindtap.com/assets/components/animation/user.png"
                  alt=""
                  className="w-full h-full rounded-full object-cover object-right"
                />
              </div>
              <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
                <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <h1 className="text-xl text-white font-medium">
                    Subhadip Manna
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* main Picture with content Up */}
        </div>
      </div>
    </>
  );
};
export default Team;
