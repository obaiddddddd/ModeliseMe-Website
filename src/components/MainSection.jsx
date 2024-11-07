import Header from "./Header";
import AppleBadge from "../assets/AppleBadge.png";
import GoogleBadge from "../assets/GoogleBadge.png";
import HumanMesh from "../assets/HumanMesh.png";
import AIPowered from "../assets/AIPowered.png";
import Checklist from "../assets/Checklist.png";
import Customisation from "../assets/Customisation.png";
import ShareModel from "../assets/ShareModel.png";
import AIBackground from "../assets/AIBackground.png";

export const MainSection = () => {
  return (
    <div className="bg-[#0D1117]">
      <Header />
      <div className="bgframe w-auto h-auto mx-[calc(0.5em+8vw)] min-[1680px]:mx-[calc(0.5em+16vw)] mt-[1rem] flex flex-col md:flex-row items-center ">
        <div className="text-white flex flex-row md:flex-col justify-between md:justify-normal">
          <div className="flex-col">
            <div className="font-mulish text-[calc(0.5em+3vw)] xl:text-[calc(0.5em+2.25vw)] font-[900]">
              Shop smarter.
            </div>
            <div className="font-mulish text-[calc(0.5em+3vw)] xl:text-[calc(0.5em+2.25vw)] font-[900]">
              Try virtually.
            </div>
            <div className="font-mulish text-[calc(0.5em+3vw)] xl:text-[calc(0.5em+2.25vw)] font-[400]">
              with Modelise Me
            </div>
          </div>
          <div className="flex md:mt-[3rem] flex-col lg:flex-row">
            <img
              src={GoogleBadge}
              className="w-[144px] md:w-[206px] h-auto m-3"
            />
            <img
              src={AppleBadge}
              className="w-[128px] md:w-[183px] h-auto m-3"
            />
          </div>
        </div>
        <div className="relative flex-auto">
          <img src={AIBackground} className="absolute 2xl:top-[-80px]" />
          <img src={HumanMesh} className="relative mx-auto" />
          <img
            src={ShareModel}
            className="absolute top-[100px] w-[105px] left-[-30px] sm:w-auto sm:left-[1vw] xl:left-[5vw]"
          />
          <img
            src={Customisation}
            className="absolute top-[150px] sm:top-[200px] right-[-30px] md:right-[-7vw] min-w[1000px]:right-[0px] w-[109px] sm:w-auto xl:right-[2vw]"
          />
          <img
            src={AIPowered}
            className="absolute top-[400px] w-[95px] left-[-30px] sm:w-auto sm:left-[1vw] xl:left-[5vw]"
          />
          <img
            src={Checklist}
            className="absolute top-[420px] right-[-15px] w-[65px] sm:w-auto xl:right-[3.5vw]"
          />
        </div>
      </div>
    </div>
  );
};
