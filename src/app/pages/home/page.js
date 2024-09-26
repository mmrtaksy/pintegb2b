"use client"
import React from "react";
import { Input, Tabs, Tab, Card, CardBody, Select, SelectItem, Checkbox, Button, Link } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Slider from "@/components/Items/Slider";
import { Search } from "react-feather";
import ProductTable from "@/components/Items/Table";
import Cardd from "@/components/Items/Card";
import { list, carsGroup } from "@/app/data/search_data";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BankAccounts from "@/components/Items/BankAccounts";

export default function Home() {


  const images = [
    {
      title: "Haberler",
      src: "/items/c1.png",
    },
    {
      title: "Duyurular",
      src: "/items/c2.png",
    },
    {
      title: "Yeni Ürünler",
      src: "/items/c3.png",
    },
    {
      title: "Bugünün Ürünleri",
      src: "/items/c4.png",
    },
    {
      title: "Favori Ürünlerim",
      src: "/items/c5.png",
    },
  ]

  const images2 = [
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
  ]

  const banks = [
    {
      title: "Garanti",
    },
    {
      title: "Akbank",
    },
    {
      title: "Yapı Kredi",
    },
    {
      title: "Kuveyttürk",
    },
    {
      title: "Ziraat Bankası",
    },
    {
      title: "İş Bankası",
    },
  ]

  const cardList = [
    { title: 'Siz daha fazlasını istediniz, biz yaptık!', description: 'Bize hem buradan hem de yeni B2B platformumuzdan ulaşabilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit..', image: '/images/image1.jpg' },
    { title: 'PintegB2B Debriyaj Setlerinde 2000 TL İşçilik Garantisi!', description: 'İşçilik garantisi, 10000 km garantili PintegB2B debriyaj setleri. Pellentesque eget est auctor lacus imperdiet egestas accumsan..', image: '/images/image2.jpg' },
    { title: 'Kış Hazırlığını Şimdiden Yapın. Aracınız için En iyisi!', description: 'Good Year - Pro Defense ile hemen tıkla ve al. Ut ultricies consectetur diam, sed egestas libero feugiat et..', image: '/images/image3.jpg' },
    { title: 'Bu Fiyatlara Bakmadan Kızdırma Bujisi Almayın!', description: 'PintegB2B ile kızdırma bujilerinde yerli üretim. Curabitur et nibh varius, efficitur nibh sit amet, posuere metus..', image: '/images/image4.jpg' },
  ];

  return (

    <GuestLayout>

      <NavbarWrapper />


      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>

        <div className="w-full relative mt-10 bg-white p-3 rounded-xl shadow">


          <div className="relative">

            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" size="lg" color="warning">
                <Tab key="tab1" title="Tümünde Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >

                  <Input
                    classNames={{
                      base: "max-w-full h-14",
                      mainWrapper: "h-full",
                      input: "text-lg",
                      inputWrapper: "h-full font-semibold text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    size="lg"
                    placeholder="Ara..."
                    isClearable
                    startContent={<Search className="text-3xl text-default-400 pointer-events-none flex-shrink-0" />}
                    type="text"
                  />

                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka Seç"
                      className="max-w-xs"
                    >
                      {list.map((item) => (
                        <SelectItem key={item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      size="lg"
                      label="Araç Grubu Seç"
                      className="max-w-xs"
                    >
                      {carsGroup.map((item) => (
                        <SelectItem key={'x' + item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <div className="checks flex justify-start items-center gap-6">
                      <Checkbox size="lg" color="warning">Stoktakiler</Checkbox>
                      <Checkbox size="lg" color="warning">Üreticide Ara</Checkbox>
                    </div>
                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>


                </Tab>
                <Tab key="tab2" title="Araç Seçerek Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >


                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Model"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Kasa"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Yıl"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Motor Hacmi"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Beygir Gücü"
                      className="max-w-xs"
                    ></Select>

                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>


                </Tab>
              </Tabs>
            </div>



          </div>



        </div>


        <div className="w-full relative mt-10">
          <Slider images={images2} />
        </div>


        <div className="w-full flex flex-wrap relative mt-10">

          <div className="flex flex-wrap w-full lg:w-1/2 relative p-3">
            <div className="mb-4 flex flex-wrap justify-between items-center w-full">
              <span className="text-2xl text-gray-800 font-bold inline-block">Haberler</span>
              <Button
                href="#"
                as={Link}
                color="warning"
                className="font-semibold"
                variant="faded"
              >
                Tümünü gör
              </Button>
            </div>
            <div className="w-full relative bg-white rounded-xl shadow">
              <div className="flex flex-wrap">
                {
                  cardList.map((item, index) => {
                    return (
                      <div className="w-full" key={'c' + index}>
                        <Cardd item={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>


          <div className="flex flex-wrap w-full lg:w-1/2 relative p-3">
            <div className="mb-4 flex flex-wrap justify-between items-center w-full">
              <span className="text-2xl text-gray-800 font-bold inline-block">Duyurular</span>
              <Button
                href="#"
                as={Link}
                color="warning"
                className="font-semibold"
                variant="faded"
              >
                Tümünü gör
              </Button>
            </div>
            <div className="w-full relative bg-white rounded-xl shadow">
              <div className="flex flex-wrap">
                {
                  cardList.map((item, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <Cardd item={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-wrap relative mt-10">
          <div className="mb-4 flex flex-wrap justify-center items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Günlük Kur</span>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={34.15} type="$" key="dr1" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={38.21} type="€" key="dr2" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={45.77} type="£" key="dr3" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap relative mt-10 p-3">
          <div className="mb-4 flex flex-wrap justify-start items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Banka Hesaplarımız</span>
          </div>

          <div className="flex flex-wrap w-full mt-3 relative">
            <div className="w-full relative bg-white rounded-xl shadow p-3 overflow-x-auto whitespace-nowrap">


              <Table aria-label="bank accounts list table" shadow="none" className="w-full">
                <TableHeader>
                  <TableColumn>Banka</TableColumn>
                  <TableColumn>Şube</TableColumn>
                  <TableColumn>Şube Kodu</TableColumn>
                  <TableColumn>Hesap No</TableColumn>
                  <TableColumn>IBAN Numarası</TableColumn>
                </TableHeader>
                <TableBody>

                  {banks.map((item, key) => (

                    <TableRow key={key}>
                      <TableCell>	{ item.title } </TableCell>
                      <TableCell>	BEYKENT TİCARİ </TableCell>
                      <TableCell>	1604 </TableCell>
                      <TableCell>	6299877 </TableCell>
                      <TableCell>		TR30 0006 2001 6040 0006 2998 77 </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>


            </div>
          </div>

        </div>



      </div>
    </GuestLayout>

  );
}
