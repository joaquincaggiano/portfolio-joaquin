"use client";
import { Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Contact = () => {
  const t = useTranslations();
  const router = useRouter();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [message, setMessage] = useState<string>();

  return (
    <div className="flex justify-between">
      {/* Bloque contacto */}
      <div className="flex flex-col gap-5 w-full max-w-[400px]">
        <h1 className="text-4xl ">
          {t("Contact.title1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff58cd] to-[#00a8ef]">
            {t("Contact.title2")}
          </span>
          ?
        </h1>

        <p className="text-xl mb-10">{t("Contact.description")}</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image
              src={require("@/public/icons/email.svg")}
              width={24}
              height={24}
              alt="email"
            />

            <span className="hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff58cd] to-[#00a8ef]">
              <a href="mailto:joaquincaggiano@gmail.com">
                joaquincaggiano@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={require("@/public/icons/phone.svg")}
              width={24}
              height={24}
              alt="email"
            />

            <span>+34 624-750-408</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={require("@/public/icons/linkedin.svg")}
              width={24}
              height={24}
              alt="email"
            />

            <span
              onClick={() =>
                router.push("https://www.linkedin.com/in/joaquin-caggiano-dev/")
              }
              className="hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff58cd] to-[#00a8ef] cursor-pointer"
            >
              joaquin-caggiano-dev
            </span>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form className="w-full max-w-[550px] flex flex-col gap-5">
        {/* Name */}
        <div>
          <h3>{t("Contact.name")}</h3>
          <Input
            type="text"
            placeholder={t("Contact.placeholderName")}
            value={name}
            onValueChange={setName}
          />
          {/* <span className="text-danger">Error</span> */}
        </div>

        {/* Email */}
        <div>
          <h3>{t("Contact.email")}</h3>
          <Input
            type="email"
            placeholder={t("Contact.placeholderEmail")}
            value={email}
            onValueChange={setEmail}
          />
          {/* <span className="text-danger">Error</span> */}
        </div>

        {/* Phone */}
        <div>
          <h3>{t("Contact.phone")}</h3>
          <Input
            type="text"
            placeholder={t("Contact.placeholderPhone")}
            value={phone}
            onValueChange={setPhone}
          />
          {/* <span className="text-danger">Error</span> */}
        </div>

        {/* Message */}
        <div>
          <h3>{t("Contact.message")}</h3>
          <Input
            type="text"
            placeholder={t("Contact.placeholderMessage")}
            value={message}
            onValueChange={setMessage}
          />
          {/* <span className="text-danger">Error</span> */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
