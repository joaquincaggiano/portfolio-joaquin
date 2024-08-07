"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface Props {
  name: string;
  icon: string;
  description: string;
}

const CardSkill = ({ name, icon, description }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const t = useTranslations();

  return (
    <>
      <div
        className="flex flex-col justify-between items-center p-2 mb-3 cursor-pointer transform hover:scale-125 transition duration-300"
        onClick={() => setOpenModal(true)}
      >
        <Image src={icon} width={80} height={80} alt={name} />

        <h4 className="mt-3 text-base">{name}</h4>
      </div>

      <Modal
        isOpen={openModal}
        onOpenChange={setOpenModal}
        backdrop="blur"
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {name}
              </ModalHeader>
              <ModalBody>
                <p className="text-sm sm:text-base lg:text-lg font-normal">
                  {description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  className="border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light font-medium hover:border-0"
                  onPress={onClose}
                >
                  {t("common.close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardSkill;
