"use client";
import { Divider } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  date: string;
  image: ReactNode;
  title: string;
  description: string;
  role: string;
}

const CardDataExperience = ({
  date,
  image,
  title,
  description,
  role,
}: Props) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-5">
        {/* Fecha */}
        <div className="w-[20%] text-gray-500 font-normal text-sm">{date}</div>

        {/* Imagen, titulo y descripción */}
        <div className="w-[60%] flex gap-5">
          {/* Imagen */}
          {image}

          {/* Título y descripción */}
          <div className="w-full max-w-[400px] flex flex-col gap-5">
            <h3 className="text-xl font-medium">{title}</h3>

            <p className="text-base font-normal">{description}</p>
          </div>
        </div>

        {/* Rol */}
        <div className="w-[20%] font-normal text-base">{role}</div>
      </div>

      <Divider />
    </div>
  );
};

export default CardDataExperience;
