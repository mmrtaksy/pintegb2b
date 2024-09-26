"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, User, Tooltip } from "@nextui-org/react";

import AcmeLogo from "./AcmeLogo.jsx";
import { ArrowDown, Bell, Box, CreditCard, FileText, Home, List, ShoppingCart } from "react-feather";
import { MenuItem } from "../Elements/MenuItem.js";

export default function NavbarWrapper() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Anasayfa",
    "Ürünler",
    "Sepetim",
    "Siparişler",
    "Cari Hesap",
    "Ödeme Yap",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo className="h-10" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-16" justify="center">
        <NavbarBrand>
          <AcmeLogo className="h-14" />
        </NavbarBrand>


        <NavbarItem isActive>
          <MenuItem
            link="/"
            istooltip={false}
            isArrow={false}
            icon={Home}
            tooltipText="Anasayfa"
            isActive={true}
          />
        </NavbarItem>

        <NavbarItem>
          <MenuItem
            link="/"
            istooltip={false}
            isArrow={false}
            icon={Box}
            tooltipText="Ürünler"
            isActive={false}
          />
        </NavbarItem>




        <NavbarItem>
          <Dropdown placement="bottom-end" key="order">
            <DropdownTrigger>
              <div className="flex items-center gap-2 cursor-pointer">

                <MenuItem
                  link="/"
                  istooltip={false}
                  isArrow={true}
                  icon={List}
                  tooltipText="Siparişler"
                  isActive={false}
                />

              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem textValue="settings" key="orders">Siparişlerim</DropdownItem>
              <DropdownItem textValue="settings" key="order_balance">Bakiye Siparişlerim</DropdownItem>
              <DropdownItem textValue="settings" key="where_cargo">Kargo Nerede?</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end" key="cari">
            <DropdownTrigger>

              <div className="flex items-center gap-2 cursor-pointer">

                <MenuItem
                  link="/"
                  istooltip={false}
                  isArrow={true}
                  icon={FileText}
                  tooltipText="Cari Hesap"
                  isActive={false}
                />

              </div>

            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem textValue="settings" key="tax">Faturalar</DropdownItem>
              <DropdownItem textValue="settings" key="open_tax">Kapanmamış Faturalar</DropdownItem>
              <DropdownItem textValue="settings" key="debt_statu">Borç Durumu</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>

          <MenuItem
            link="/"
            istooltip={false}
            isArrow={false}
            icon={CreditCard}
            tooltipText="Ödeme Yap"
            isActive={false}
          />

        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-10" justify="end">
        <NavbarItem className="hidden lg:flex">


          <MenuItem
            link="/"
            istooltip={false}
            isArrow={false}
            icon={ShoppingCart}
            tooltipText="Sepetim"
            isActive={false}
          />

        </NavbarItem>
        <NavbarItem className="hidden lg:flex">


          <MenuItem
            link="/"
            istooltip={false}
            isArrow={false}
            icon={Bell}
            tooltipText="Bildirimler"
            isActive={false}
          />

        </NavbarItem>

        <Dropdown placement="bottom-end" key="settings">
          <DropdownTrigger>

          <div className="flex items-center gap-2 cursor-pointer">
            <User
              name="FERHAT USTA"
              description="905323906694"
              avatarProps={{
                src: "https://i.pravatar.cc/150?img=8",
                isBordered: true,
                as: "button",
                color: "warning",
                className: "transition-transform"
              }}
            />
            </div>

          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem textValue="profile" key="profile">
              <p className="font-semibold">Profilim</p>
            </DropdownItem>
            <DropdownItem textValue="settings" key="settings">Ayarlar</DropdownItem>
            <DropdownItem textValue="help_and_feedback" key="help_and_feedback">Yardım & Geri bildirim</DropdownItem>
            <DropdownItem textValue="logout" key="logout" color="danger">
              Güvenli Çıkış
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
