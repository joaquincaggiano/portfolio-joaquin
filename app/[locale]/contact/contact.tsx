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
          <div className="flex flex-col items-center gap-3 w-full max-w-[200px]">
            <a
              href="mailto:joaquincaggiano@gmail.com"
              className="flex justify-center items-center w-full max-w-[200px] rounded-[10px] p-5 border-2 border-[#DB4437] hover:bg-gradient-to-r from-[#DB4437] to-white cursor-pointer"
            >
              <Image src={GmailLogo} width={45} height={45} alt="gmail" />
            </a>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DB4437]">
              joaquincaggiano@gmail.com
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full max-w-[200px]">
            <div
            onClick={() => router.push("https://wa.me/+5493416957516")}
              className="flex justify-center items-center w-full max-w-[200px] rounded-[10px] p-5 border-2 border-[#25D366] hover:bg-gradient-to-r from-[#16813a] to-[#25D366] cursor-pointer"
            >
              <Image src={PhoneLogo} width={45} height={45} alt="phone" />
            </div>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#16813a]">
              +34 624-750-408
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full max-w-[200px]">
            <div
              onClick={() =>
                router.push("https://www.linkedin.com/in/joaquin-caggiano-dev/")
              }
              className="flex justify-center items-center w-full max-w-[200px] rounded-[10px] p-5 border-2 border-[#0E76A8] hover:bg-gradient-to-r from-[#0E76A8] to-[#00D4FF] cursor-pointer"
            >
              <Image src={LinkedinLogo} width={45} height={45} alt="linkedin" />
            </div>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0E76A8]">
              joaquin-caggiano-dev
            </span>
          </div>
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
