"use client";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { InitialStateContact, sendEmailToMe } from "./action-contact";

const initialState: InitialStateContact = { message: null, errors: {} };

const Contact = () => {
  const t = useTranslations();
  const router = useRouter();

  const [state, formAction] = useFormState(sendEmailToMe, initialState);

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
      <form
        action={formAction}
        className="w-full max-w-[550px] flex flex-col gap-5"
      >
        {/* Name */}
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

        {/* Email */}
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

        {/* Phone */}
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

        {/* Message */}
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
      </form>
    </div>
  );
};

export default Contact;
