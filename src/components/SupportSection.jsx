import ContactCardDesign from "../assets/ContactCardDesign.png";
import { LogoCard } from "./Cards/LogoCard";
import ContactLogo from "../assets/ContactLogo.png";
import EmailLogo from "../assets/EmailLogo.png";
import LocationLogo from "../assets/LocationLogo.png";
import { TwitterLogo } from "./Cards/TwitterLogo";
import { FacebookLogo } from "./Cards/FacebookLogo";
import { LinkedInLogo } from "./Cards/LinkedInLogo";
import { DribbbleLogo } from "./Cards/DribbbleLogo";
import { InstagramLogo } from "./Cards/InstagramLogo";
const SupportSection = () => {
  return (
    <div className="gap-[80px] bgbodysection flex flex-col pt-[80px]">
      <div className="flex flex-col font-mulish items-center text-center gap-[32px]">
        <div className="font-[500] text-[56px] w-[872px]">
          We are here to help you out!
        </div>
        <div className="font-[400] text-[20px] w-[722px]">
          We’d love to hear from you! Whether you have questions, feedback, or
          need assistance, fill out the form below, and our team will get back
          to you shortly
        </div>
      </div>
      <div className="font-mulish flex justify-center drop-shadow-2xl mx-[48px] ">
        <div className=" bg-[#0A51BF] text-white sm:w-[300px] lg:w-[496px] rounded-l-[24px] relative">
          <img
            src={ContactCardDesign}
            className="absolute w-[280px] top-[-60px] right-[-90px]"
          />
          <div>
            <div className="my-[72px] ml-[72px] gap-[40px] text-[32px]">
              <div>Get in touch</div>
              <div className="flex flex-col gap-[24px] mt-[32px]">
                <LogoCard
                  logo={ContactLogo}
                  title={"EMAIL US"}
                  desc1={"info@golio.com"}
                />
                <LogoCard
                  logo={EmailLogo}
                  title={"PHONE NUMBER"}
                  desc1={"+1-202-555-0138"}
                />
                <LogoCard
                  logo={LocationLogo}
                  desc1={`901 N Pitt Str., Suite`}
                  desc2={`170 Alexandria, VA 22314, USA`}
                />
              </div>
            </div>
            <div className="my-[72px] ml-[72px]">
              <div className="flex items-center">
                <div>
                  <svg
                    width="34"
                    height="2"
                    viewBox="0 0 34 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H33"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-[16px] font-[500]">
                  Connect with us:
                </div>
              </div>
              <div className="flex flex-row gap-[10px] mt-[12px] flex-wrap">
                <FacebookLogo color={"white"} hoverColor={"#0B63E5"} />
                <TwitterLogo color={"white"} hoverColor={"#0B63E5"} />
                <LinkedInLogo color={"white"} hoverColor={"#0B63E5"} />
                <InstagramLogo color={"white"} hoverColor={"#0B63E5"} />
                <DribbbleLogo color={"white"} hoverColor={"#0B63E5"} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-[744px] rounded-r-[24px]">
          <div className="m-[72px] gap-[20px] flex flex-col">
            <div className="gap-[6px] flex flex-row">
              <div className="w-1/2">
                <div className="text-[14px] font-[400]">Name</div>
                <input
                  className="border-[#E6E8EC] border-[1px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-1/2">
                <div className="text-[14px] font-[400]">Email</div>
                <input
                  className="border-[#E6E8EC] border-[1px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Subjects</div>
              <input
                className="border-[#E6E8EC] border-[1px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                placeholder="Subject"
              />
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Company Name</div>
              <input
                className="border-[#E6E8EC] border-[1px] h-[48px] rounded-[5px] pl-[18px] w-[100%]"
                placeholder="Brand/Company/Product Name"
              />
            </div>
            <div className="gap-[6px]">
              <div className="text-[14px] font-[400]">Message</div>
              <textarea
                className="border-[#E6E8EC] border-[1px] max-h-[106px] rounded-[5px] pl-[18px] w-[100%]"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="bg-[#0B63E5]  hover:bg-[#210be5] flex flex-row w-[203px] h-[48px] gap-[12px] rounded-[7px] justify-center items-center text-white">
              <button>Send Message</button>
              <div className="relative transition ease-in-out duration-300 hover:translate-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.39941 12H20.8994"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1494 5.25L20.8994 12L14.1494 18.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
