"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";
import SpainFlag from "@/public/icons/esp-flag.svg";
import EeuuFlag from "@/public/icons/usa-flag.svg";
import AppButton from "../buttons/AppButton";
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const LocaleSwitcher = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    // const nextLocale = e.target.value;
    console.log("nextLocale: ", nextLocale);
    startTransition(() => {
      router.replace(`/${pathname}`, { locale: nextLocale });
    });
  };

  // <Image
  //           src={EeuuFlag}
  //           width={20}
  //           height={20}
  //           alt="Bandera eeuu"
  //         />

  // <Image
  //           src={SpainFlag}
  //           width={20}
  //           height={20}
  //           alt="Bandera esp"
  //         />

  return (
    // <Dropdown>
    //   <DropdownTrigger>
    //     <Button className="bg-transparent" variant="bordered" >
    //       {localActive.toUpperCase()}
    //       <Image
    //         src={SpainFlag}
    //         width={26}
    //         height={26}
    //         alt="Bandera de españa"
    //       />
    //     </Button>
    //   </DropdownTrigger>
    //   <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
    //     <DropdownItem
    //       key="es"
    //       startContent={<SpainFlag />}
    //     >
    //       ES
    //     </DropdownItem>
    //     <DropdownItem
    //       key="en"
    //       startContent={<EeuuFlag />}
    //     >
    //       EN
    //     </DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>

    <>
      <AppButton
        variant="bordered"
        title={localActive.toUpperCase()}
        onPress={() => setOpenModal(!openModal)}
        width={localActive === "es" ? 24 : 22}
        height={localActive === "es" ? 24 : 22}
        icon={
          localActive === "es"
            ? SpainFlag
            : EeuuFlag
        }
      />

      {openModal && (
        <Card className="absolute top-16 w-full max-w-[100px]">
          <CardBody className="flex flex-col">
            <button className="flex justify-between w-full mb-3" onClick={() => onSelectChange("es")}>
              ES
              <Image
                src={SpainFlag}
                width={26}
                height={26}
                alt="Bandera de españa"
              />
            </button>
            <button className="flex justify-between w-full" onClick={() => onSelectChange("en")}>
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

    // <label className="border-2 rounded">
    //   <p className="sr-only">change language</p>
    //   <select
    //     defaultValue={localActive}
    //     className="py-1 px-2"
    //     onChange={onSelectChange}
    //     disabled={isPending}
    //   >
    //     <option value="en">

    //       EN
    //     </option>
    //     <option value="es">
    //       ES
    //     </option>
    //   </select>
    // </label>
  );
};

export default LocaleSwitcher;
