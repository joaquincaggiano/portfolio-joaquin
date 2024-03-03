"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";
import SpainFlag from "@/public/icons/esp-flag.svg";
import EeuuFlag from "@/public/icons/usa-flag.svg";
import AppButton from "../buttons/AppButton";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

const LocaleSwitcher = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    // const nextLocale = e.target.value;
    // console.log("nextLocale: ", nextLocale);
    startTransition(() => {
      router.replace(`/${pathname}`, { locale: nextLocale });
    });
  };

  return (
    <>
      <AppButton
        variant="bordered"
        className="border-0"
        // className="border-blue-light border-1"
        title={localActive.toUpperCase()}
        onPress={() => setOpenModal(!openModal)}
        width={22}
        height={22}
        icon={
          localActive === "es"
            ? SpainFlag
            : EeuuFlag
        }
      />

      {openModal && (
        <Card className="absolute top-14 w-full max-w-[100px] bg-gradient-to-r from-blue-dark to-blue-light">
          <CardBody className="flex flex-col">
            <button disabled={isPending} className="flex justify-between w-full mb-3" onClick={() => onSelectChange("es")}>
              ES
              <Image
                src={SpainFlag}
                width={22}
                height={22}
                alt="Bandera de españa"
              />
            </button>
            <button disabled={isPending} className="flex justify-between w-full" onClick={() => onSelectChange("en")}>
              EN
              <Image
                src={EeuuFlag}
                width={22}
                height={22}
                alt="Bandera de EEUU"
              />
            </button>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default LocaleSwitcher;
