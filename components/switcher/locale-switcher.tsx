"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import EspFlagSvg from "@/components/icons/esp-flag-svg";
import UsaFlagSvg from "@/components/icons/usa-flag-svg";
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

  const onSelectChange = (nextLocale: "es" | "en" | undefined) => {
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
        startContent={
          localActive === "es"
            ? <EspFlagSvg />
            : <UsaFlagSvg />
        }
      />

      {openModal && (
        <Card className="absolute top-14 w-full max-w-[100px] bg-gradient-to-r from-blue-dark to-blue-light">
          <CardBody className="flex flex-col">
            <AppButton
              disabled={isPending}
              onPress={() => onSelectChange("es")}
              title="ES"
              endContent={<EspFlagSvg />}
              variant="light"
              className="text-base"
            />
            <AppButton
              disabled={isPending}
              onPress={() => onSelectChange("en")}
              title="EN"
              endContent={<UsaFlagSvg />}
              variant="light"
              className="text-base"
            />
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default LocaleSwitcher;
