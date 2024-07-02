"use client";
// import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useFormState } from "react-dom";
// import { InitialStateContact, sendEmailToMe } from "./action-contact";
import GmailLogo from "@/public/icons/gmail.svg";
import LinkedinLogo from "@/public/icons/linkedin.svg";
import PhoneLogo from "@/public/icons//wpp.svg";
import ContactCard from "@/components/cards/contact-card";

// const initialState: InitialStateContact = { message: null, errors: {} };

const Contact = () => {
  const t = useTranslations();
  const router = useRouter();

  // const [state, formAction] = useFormState(sendEmailToMe, initialState);

  return (
    <div className="flex justify-center items-center">
      {/* Bloque contacto */}
      <div className="flex flex-col items-center gap-5 w-full">
        <h1 className="text-4xl ">
          {t("Contact.title1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff58cd] to-[#00a8ef]">
            {t("Contact.title2")}
          </span>{" "}
          ?
        </h1>

        <div className="text-xl text-center mb-10 w-full max-w-[700px]">
          {t("Contact.description")}
        </div>

        {/* Cards */}
        <div className="w-full flex justify-center items-center gap-20">
          {/* GMAIL */}
          <ContactCard
            icon={<Image src={GmailLogo} width={60} height={60} alt="gmail" />}
            borderBackColor="border-[#DB4437]"
          >
            <div className="flex flex-col justify-center items-center gap-5 p-5">
              <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DB4437]">
                joaquincaggiano@gmail.com
              </span>

              <a
                href="mailto:joaquincaggiano@gmail.com"
                className=" font-semibold text-xl hover:text-[#DB4437]"
              >
                Enviar email
              </a>
            </div>
          </ContactCard>

          {/* WPP */}
          <ContactCard
            icon={<Image src={PhoneLogo} width={60} height={60} alt="phone" />}
            borderBackColor="border-[#25D366]"
          >
            <div className="flex flex-col justify-center items-center gap-5 p-5">
              <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-white">
                +34 624-750-408 / 📞
              </span>

              <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-white">
                +54 9 341-6957-516 / wpp
              </span>

              <a
                href="https://wa.me/+5493416957516"
                target="_blank"
                className="font-semibold text-xl hover:text-[#25D366] cursor-pointer"
              >
                Enviar mensaje
              </a>
            </div>
          </ContactCard>

          {/* LIINKEDIN */}
          <ContactCard
            icon={
              <Image src={LinkedinLogo} width={60} height={60} alt="linkedin" />
            }
            borderBackColor="border-[#0E76A8]"
          >
            <div className="flex flex-col justify-center items-center gap-5 p-5">
              <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0E76A8]">
                joaquin-caggiano-dev
              </span>

              <a
                href="https://www.linkedin.com/in/joaquin-caggiano-dev"
                target="_blank"
                className=" font-semibold text-xl hover:text-[#00D4FF]"
              >
                Visitar perfil
              </a>
            </div>
          </ContactCard>
        </div>
      </div>

      {/* <form
        action={formAction}
        className="w-full max-w-[550px] flex flex-col gap-5"
      >
        <div>
          <h3>{t("Contact.name")}</h3>
          <Input
            name="name"
            type="text"
            placeholder={t("Contact.placeholderName")}
            aria-describedby="name-error"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-danger" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <h3>{t("Contact.email")}</h3>
          <Input
            name="email"
            type="email"
            placeholder={t("Contact.placeholderEmail")}
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-danger" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <h3>{t("Contact.phone")}</h3>
          <Input
            name="phone"
            type="text"
            placeholder={t("Contact.placeholderPhone")}
            aria-describedby="phone-error"
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.phone &&
              state.errors.phone.map((error: string) => (
                <p className="mt-2 text-sm text-danger" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <h3>{t("Contact.message")}</h3>
          <Input
            name="message"
            type="text"
            placeholder={t("Contact.placeholderMessage")}
            aria-describedby="message-error"
          />
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.message &&
              state.errors.message.map((error: string) => (
                <p className="mt-2 text-sm text-danger" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <Button type="submit">Enviar</Button>
      </form> */}
    </div>
  );
};

export default Contact;
