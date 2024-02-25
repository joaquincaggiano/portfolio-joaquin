"use client";

import { pallete } from "@/styles/pallete";
import { useTranslations } from "next-intl";

const InfoCode = () => {
  const t = useTranslations("Home");

  return (
    <div className="p-4 text-xs md:text-base xl:text-xl">
      <span style={{ color: pallete.blueLight }}>const</span>{" "}
      {t("nameFunction")} <span>=</span>{" "}
      <span style={{ color: pallete.blueLight }}>{"()"}</span>{" "}
      <span>{"=>"}</span> <span style={{ color: pallete.violet }}>{"{"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight }}>const</span> {t("aboutMe")}{" "}
      <span>=</span> <span style={{ color: pallete.violet }}>{"{"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("name")}:</span>{" "}
      <span className="text-orange-400">'Joaquin'</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("lastName")}:</span>{" "}
      <span className="text-orange-400">'S. Caggiano'</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("age")}:</span>{" "}
      <span className="text-orange-400">'25'</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("languages")}:</span>{" "}
      <span style={{ color: pallete.violet }}>{"["} </span>
      <span className="text-orange-400">'{t("spanish")}'</span>,
      <span className="text-orange-400"> '{t("english")}'</span>
      <span style={{ color: pallete.violet }}> {"]"}</span>,<br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>
        {t("currentCountry")}:
      </span>{" "}
      <span className="text-orange-400">'{t("spain")}'</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>
        {t("nationality")}:
      </span>{" "}
      <span style={{ color: pallete.violet }}>{"["} </span>
      <span className="text-orange-400">'{t("argentina")}'</span>,
      <span className="text-orange-400"> '{t("italian")}'</span>
      <span style={{ color: pallete.violet }}> {"]"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.violet }}>{"}"}</span>
      <br />
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.violet }}>return</span>{" "}
      <span>{t("aboutMe")}</span>
      <br />
      <span style={{ color: pallete.violet }}>{"}"}</span>
      <br />
      <br />
      <span>{t("nameFunction")}</span>
      <span style={{ color: pallete.blueLight }}>{"()"}</span>;
    </div>
  );
};

export default InfoCode;
