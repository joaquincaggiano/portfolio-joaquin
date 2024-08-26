"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GmailLogo from "@/public/icons/gmail.svg";
import LinkedinLogo from "@/public/icons/linkedin.svg";
// import PhoneLogo from "@/public/icons//wpp.svg";

const Contact = () => {
  const t = useTranslations();

  return (
    <div className="flex justify-center items-center mt-20">
      {/* Bloque contacto */}
      <div className="flex flex-col items-center gap-5 w-full">
        <h1 className="text-4xl text-center">
          {t("Contact.title1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff58cd] to-[#00a8ef]">
            {t("Contact.title2")}
          </span>{" "}
          ?
        </h1>

        <div className="text-xl text-center mb-20 w-full max-w-[700px]">
          {t("Contact.description")}
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10">
          {/* GMAIL */}
          <a
            href="mailto:joaquincaggiano@gmail.com"
            className="w-full max-w-[200px] flex flex-col justify-center items-center gap-2.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DB4437] hover:text-[#DB4437]"
          >
            <Image src={GmailLogo} width={60} height={60} alt="gmail" />
            <span className=" font-semibold text-base">
              {t("Contact.sendEmail")}
            </span>
          </a>

          {/* WPP */}
          {/* <a
            href="https://wa.me/+5493416957516"
            target="_blank"
            className="w-full max-w-[200px] flex flex-col justify-center items-center gap-2.5 text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-white hover:text-[#25D366]"
          >
            <Image src={PhoneLogo} width={60} height={60} alt="phone" />
            <span className="font-semibold text-base">
              {t("Contact.sendMessage")}
            </span>
          </a> */}

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/joaquin-caggiano-dev"
            target="_blank"
            className="w-full max-w-[200px] flex flex-col justify-center items-center gap-2.5 text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0E76A8] hover:text-[#00D4FF]"
          >
            <Image src={LinkedinLogo} width={60} height={60} alt="linkedin" />
            <span className=" font-semibold text-base">
              {t("Contact.visitProfile")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
