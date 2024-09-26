import { Card, CardHeader } from "@nextui-org/react";

export default function DailyRate({ data, type }) {
  return (
      <Card shadow="none" className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex items-start justify-center lg:justify-start gap-4">
          <div className="flex flex-wrap lg:flex-col w-full justify-center lg:justify-start">
            <div className="w-full flex gap-2 justify-center lg:justify-start w-full items-center mb-3">
              <h4 className="font-normal text-3xl text-white size-14 bg-warning rounded-full flex justify-center items-center">{type}</h4>
              <h4 className="font-bold text-3xl">{data}</h4>
            </div>
            <small className="text-default-500">Son güncellenme: 26.09.2024 17:14</small>
          </div>
          <div className="size-36 lg:size-48 bg-warning/10 rounded-full absolute right-[-50px] bottom-[-55px]"></div>
        </CardHeader>
      </Card>
  ); 
}