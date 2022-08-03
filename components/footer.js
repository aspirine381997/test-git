import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Footer() {
  return (
    <div>
      <section class="w-full bg-primary py-10">
        <div class="container lg:flex">
          <div class="lg:w-1/2">
            <img src="img/Logo.png" alt="" class="w-32" />
            <ul class="flex flex-row mt-9">
              <li class="mr-4 p-2 rounded-full bg-secondary-1 bg-opacity-10">
                <img src="img/Chevron.svg" alt="" />
              </li>
              <li class="mr-4 p-2 rounded-full bg-secondary-1 bg-opacity-10">
                <img src="img/Chevron.svg" alt="" />
              </li>
              <li class="mr-4 p-2 rounded-full bg-secondary-1 bg-opacity-10">
                <img src="img/Chevron.svg" alt="" />
              </li>
            </ul>
            <p class="hidden lg:block text-neutral-5 mt-6">
              Copyright © 2022 HBH Architects & Partners. All rights reserved
            </p>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/4">
            <h4 class="text-title-24-medium text-neutral-6 border-b-[1px] border-solid border-neutral-6 w-fit">
              Contact
            </h4>
            <ul class="mt-4">
              <li class="text-header-18-medium text-neutral-6 mt-2">
                +84 24 7307 6655
              </li>
              <li class="text-header-18-medium text-neutral-6 mt-2">
                office@hbharchitects.com
              </li>
            </ul>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/4">
            <h4 class="text-title-24-medium text-neutral-6 border-b-[1px] border-solid border-neutral-6 w-fit">
              Address
            </h4>
            <ul class="mt-4">
              <li class="text-header-18-medium text-neutral-6 mt-2">
                8th Floor. Block C- Central Point Building
              </li>
              <li class="text-header-18-medium text-neutral-6 mt-2">
                219 Trung Kính, Cầu Giấy, Hà Nội
              </li>
            </ul>
            <p class="lg:hidden text-neutral-5 mt-6">
              Copyright © 2022 HBH Architects & Partners. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
