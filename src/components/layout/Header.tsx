import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Image
        src="/images/minetreasuretext.png"
        width={225}
        height={275}
        alt={"Mine treasure logo"}
        className="inline-block align-middle"
      ></Image>
      <nav className="px-4 md:pl-0 block md:inline-block md:float-right h-full">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-3 h-full">
          <li className="h-full flex items-center">
            <Link
              className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200  align-middle"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200"
              href="/loot"
            >
              Treasure
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200"
              href="http://discord.hcraid.net"
              passHref
            >
              <FontAwesomeIcon
                height={20}
                className="mr-1 inline-block"
                icon={faDiscord as any}
              />
              Discord
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
