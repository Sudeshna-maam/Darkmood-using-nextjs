import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { color } from "framer-motion";
import Darkbtn from "./Darkbtn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Product", "Features", "Marketplace", "Company"];
  return (
    <div>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <img
              className="h-10 w-10 inline"
              src="tailwind-logo.png"
              alt="logo"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 me-60" justify="center">
          <NavbarBrand>
            <img
              className="h-10 w-10 inline"
              src="tailwind-logo.png"
              alt="logo"
            />
          </NavbarBrand>
          <NavbarItem>
            <Link className="font-semibold text-xl" color="foreground" href="/">
              Product
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-semibold text-xl" href="/" color="foreground">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-semibold text-xl" color="foreground" href="/">
              Marketplace
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="font-semibold text-xl"
              color="foreground"
              href="#"
              aria-current="page"
            >
              Company
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex ">
            <Darkbtn />
          </NavbarItem>
          <NavbarItem className="hidden  lg:flex">
            <Button
              className=" text-white  bg-blue-400 text-lg"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={"${item}-${index}"}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
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
    </div>
  );
};

export default Nav;
