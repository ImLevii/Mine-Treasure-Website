import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 mt-10">
      <span className="text-sm text-gray-500 sm:text-center">
        © {new Date().getFullYear()}{" "}
        <a href="https://hcraid.net" className="hover:underline">
          HcRaid
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
