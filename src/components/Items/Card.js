import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

export default function Cardd({ item }) {
  return (
    <Link href="#">
      <Card shadow="none" className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex items-start gap-4">
          <Image
            alt="Card background"
            width={180}
            className="object-cover rounded-xl max-w-sm"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />

          <div className="flex flex-col">
            <small className="text-default-500">26.09.2024</small>
            <h4 className="font-bold text-large">{item.title}</h4>
            <p className="text-sm">{item.description}</p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}