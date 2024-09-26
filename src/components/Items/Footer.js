import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import AcmeLogo from "./AcmeLogo";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

export default function Footer() {
    return (
        <div className="bg-white w-full relative py-6 app_footer mt-10">
            <div className="container mx-auto">
                <Card shadow="none" radius="none">
                    <CardHeader className="flex gap-3">
                        <AcmeLogo className="max-w-[130px]" />
                        <div className="flex flex-col font-sans">
                            <p className="text-md">PintegB2B</p>
                            <p className="text-small text-default-500">pintegb2b.com</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="justify-between flex-row flex flex-wrap gap-10 lg:gap-0  items-stretch py-10">
                         
                       
                        <div className="relative box_items flex flex-row flex-wrap px-5 gap-4 justify-center items-start">
                            <div className="box_content">
                                <h4 className="font-semibold text-black w-full mb-4">Hızlı Linkler</h4>
                                <div className="box_items_content flex flex-col flex-wrap gap-4">
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Anasayfa
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Ürünler
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Siparişlerim
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Kargom Nerede?
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Ödeme Yap
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Hesabım
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Ayarlar
                                    </Link>
                                </div>
                            </div>
                        </div>
                       
                        <div className="relative box_items flex flex-row flex-wrap px-5 gap-4 justify-center items-start">
                            <div className="box_content">
                                <h4 className="font-semibold text-black w-full mb-4">Yasal</h4>
                                <div className="box_items_content flex flex-col flex-wrap gap-4">
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Gizlilik Sözleşmesi
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Sevkiyat Politikası
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Kullanım Şartları
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        Tüketici Yasası
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        İade Koşulları
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative box_items flex flex-row flex-wrap px-5 gap-4 justify-center items-start">
                            <div className="box_content">
                                <h4 className="font-semibold text-black w-full mb-4">Kurumsal</h4>
                                <div className="box_items_content flex flex-col flex-wrap gap-4">
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        PintegB2B™
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        info@pintegb2b.com
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        0312 577 25 55
                                    </Link>
                                    <Link href="#" className="footer_link text-gray-500 font-sans">
                                        mustafa kemal mahallesi,  <br /> mahall ankara dumlupınar bulvarı <br /> e-blok no: 59 çankaya / ankara
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative box_items flex flex-row flex-wrap px-5 gap-4 justify-center items-start">
                            <div className="box_content">
                                <h4 className="font-semibold text-black w-full mb-4">Bizi Takip Edin</h4>
                                <div className="box_items_content flex flex-row flex-wrap gap-4">
                                    <Link href="#" className="footer_social_link text-white rounded-full size-10 flex justify-center items-center  bg-[#1877F2]">
                                        <Facebook />
                                    </Link>
                                    <Link href="#" className="footer_social_link text-white rounded-full size-10 flex justify-center items-center  bg-[#E4405F]">
                                        <Instagram />
                                    </Link>
                                    <Link href="#" className="footer_social_link text-white rounded-full size-10 flex justify-center items-center  bg-[#1DA1F2]">
                                        <Twitter />
                                    </Link>
                                    <Link href="#" className="footer_social_link text-white rounded-full size-10 flex justify-center items-center  bg-[#CD201F]">
                                        <Youtube />
                                    </Link>
                                    <Link href="#" className="footer_social_link text-white rounded-full size-10 flex justify-center items-center  bg-[#0A66C2]">
                                        <Linkedin />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="justify-center lg:justify-between">
                        <div className="hidden lg:flex gap-10 items-center">
                            <Link
                                isExternal
                                showAnchorIcon
                                className="footer_link text-sm font-sans"
                                href="#"
                            >
                                Geliştiriciler için
                            </Link>
                            <Link
                                isExternal
                                className="footer_link text-sm font-sans"
                                href="#"
                            >
                                Hakkında
                            </Link>
                            <Link
                                isExternal
                                className="footer_link text-sm font-sans"
                                href="#"
                            >
                                Yardım & İletişim
                            </Link>
                        </div>
                        <div className="text-sm text-gray-500 font-sans">
                            © 2024 PintegB2B™ Tüm hakları saklıdır.
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}