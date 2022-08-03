import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div>
      <section class="w-full flex items-center h-28 bg-primary mb-[-112px] z-10 fixed">
        <div class="container flex">
          <div class="w-1/6 flex items-center">
            <img src="img/Logo.png" alt="" class="w-32" />
          </div>
          <div class="w-4/6 flex items-center justify-center">
            <ul class="hidden lg:flex">
              <li class="mx-7 text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300">
                Home
              </li>
              <li class="mx-7 text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300">
                Services
              </li>
              <li class="mx-7 text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300">
                Projects
              </li>
              <li class="mx-7 text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300">
                About
              </li>
              <li class="mx-7 text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300">
                Contact
              </li>
            </ul>
          </div>
          <div class="w-1/6 flex items-center justify-end">
            <a
              href="#"
              class="text-header-18-medium text-neutral-3 hover:text-neutral-6 duration-300 hidden lg:inline"
            >
              VI
            </a>
            <a href="" class="lg:hidden">
              <img src="img/Chevron.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
