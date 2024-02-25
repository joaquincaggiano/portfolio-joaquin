import Image from 'next/image'
import React from 'react'
import InfoCode from './info-code'
import LupaLogo from "@/public/icons/lupa.svg";
import ReactLogo from "@/public/icons/react.svg";

const Vsc = () => {
  return (
    <div
        className="flex flex-col w-full lg:max-w-[50%] rounded-md text-md bg-zinc-900 mb-10"
        style={{ borderWidth: 0.5 }}
      >
        {/* Barra de VSC */}
        <div
          className="w-full flex justify-between items-center gap-3 p-4"
          style={{ borderBottomWidth: 0.5 }}
        >
          <div className="flex gap-2">
            <div className="rounded-full bg-red-500 w-[10px] h-[10px]" />
            <div className="rounded-full bg-yellow-500 w-[10px] h-[10px]" />
            <div className="rounded-full bg-green-500 w-[10px] h-[10px]" />
          </div>

          <div className="rounded-md w-full max-w-[200px] p-2 flex items-center justify-center gap-2 text-xs lg:text-base bg-zinc-800">
            <Image
              src={LupaLogo}
              className="w-3 h-3 md:w-4 sm:h-4"
              alt="Lupa"
            />
            portfolio-joaquin
          </div>

          <div className="flex w-full max-w-[30px]" />
        </div>

        {/* Barra vertical y código */}
        <div className="flex">
          <div
            className="w-full max-w-[50px] flex flex-col items-center justify-between text-2xl"
            style={{ borderRightWidth: 0.5 }}
          >
            <div className="flex flex-col gap-4">
              <div className="mt-5">📂</div>
              <div>🔎</div>
            </div>

            <div className="mb-4">⚙️</div>
          </div>

          {/* Código */}
          <div className="flex flex-col w-full">
            <div>
              <div
                className="flex items-center gap-2 p-2 w-full max-w-[100px] md:max-w-[120px] text-xs md:text-base lg:text-lg"
                style={{ borderRightWidth: 0.5 }}
              >
                <Image
                  src={ReactLogo}
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  alt="React logo"
                />
                page.tsx
              </div>
              <div style={{ borderBottomWidth: 0.5 }} />
            </div>
            <InfoCode />
          </div>
        </div>
      </div>
  )
}

export default Vsc