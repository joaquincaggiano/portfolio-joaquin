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
      <span className="text-orange-400">&#39;Joaquin&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("lastName")}:</span>{" "}
      <span className="text-orange-400">&#39;S. Caggiano&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("age")}:</span>{" "}
      <span className="text-orange-400">&#39;25&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>{t("languages")}:</span>{" "}
      <span style={{ color: pallete.violet }}>{"["} </span>
      <span className="text-orange-400">&#39;{t("spanish")}&#39;</span>,
      <span className="text-orange-400"> &#39;{t("english")}&#39;</span>
      <span style={{ color: pallete.violet }}> {"]"}</span>,<br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>
        {t("currentCountry")}:
      </span>{" "}
      <span className="text-orange-400">&#39;{t("spain")}&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span style={{ color: pallete.blueLight1 }}>
        {t("nationality")}:
      </span>{" "}
      <span style={{ color: pallete.violet }}>{"["} </span>
      <span className="text-orange-400">&#39;{t("argentina")}&#39;</span>,
      <span className="text-orange-400"> &#39;{t("italian")}&#39;</span>
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
