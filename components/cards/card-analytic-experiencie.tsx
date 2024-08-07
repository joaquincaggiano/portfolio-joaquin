"use client";

import { Card, CardBody } from "@nextui-org/react";

interface Props {
    title: string;
  data: string;
}

const CardAnalyticExperiencie = ({ data, title }: Props) => {
  return (
    <Card className="w-[250px] border-gray-700 border-1">
      <CardBody>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="text-6xl">{data}</div>
          <span className="text-xs">{title}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardAnalyticExperiencie;
