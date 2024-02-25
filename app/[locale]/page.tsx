import { pallete } from "@/styles/pallete";
import { useTranslations } from "next-intl";
import InfoCode from "@/components/home/info-code";
import LupaLogo from "@/public/icons/lupa.svg";
import ReactLogo from "@/public/icons/react.svg";
import Image from "next/image";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex gap-28">
      {/* Presentación */}
      <div className="w-full max-w-[50%] flex flex-col">
        <h1 className="text-5xl mb-5">
          {t("welcome")}{" "}
          <span style={{ color: pallete.blueLight }}>Joaquín</span> Frontend
          Developer 👨🏼‍💻
        </h1>
        <div className="text-lg">{t("presentation")}</div>
      </div>

      {/* Datos personales - VSC */}
      <div
        className="flex flex-col w-full max-w-[50%] rounded-md text-md bg-zinc-900"
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

          <div className="rounded-md w-full max-w-[200px] p-2 flex items-center justify-center gap-2 text-xs bg-zinc-800">
            <Image src={LupaLogo} width={10} height={10} alt="Lupa" />
            portfolio-joaquin
          </div>

          <div className="w-full max-w-[30px]" />
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
                className="flex items-center gap-2 p-2 w-full max-w-[120px]"
                style={{ borderRightWidth: 0.5 }}
              >
                <Image
                  src={ReactLogo}
                  width={16}
                  height={16}
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
    </div>
  );
};
export default Home;
