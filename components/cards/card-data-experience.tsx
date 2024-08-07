"use client";

import { Divider } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  date: string;
  url: string;
  image: ReactNode;
  title: string;
  description: string;
  role: string;
}

const CardDataExperience = ({
  date,
  url,
  image,
  title,
  description,
  role,
}: Props) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-between mb-5">
        {/* Fecha */}
        <div className="w-full lg:w-[20%] text-gray-500 font-normal text-sm">
          {date}
        </div>

        {/* Imagen, titulo y descripción */}
        <div className="w-full lg:w-[60%] flex gap-5">
          {/* Imagen */}
          <a
            href={url}
            target="_blank"
            className="rounded-lg overflow-hidden"
          >
            {image}
          </a>

          {/* Título y descripción */}
          <div className="w-full max-w-[400px] flex flex-col gap-5">
            <h3 className="text-xl font-medium">{title}</h3>

            <p className="text-base font-normal">{description}</p>
          </div>
        </div>

        {/* Rol */}
        <div className="w-full lg:w-[20%] font-normal text-base">{role}</div>
      </div>

      <Divider />
    </div>
  );
};

export default CardDataExperience;
