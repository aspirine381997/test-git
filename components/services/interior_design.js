import React from "react";

const InteriorDesign = () => {
  return (
    <section class="pt-40 lg:pt-52">
      <div class="container lg:flex gap-10">
        <div class="lg:w-1/2 lg:flex flex-col justify-center">
          <h2 class="text-title-24-bold lg:text-title-60-bold text-primary">
            Interior Design
          </h2>
          <p class="mt-8 lg:mt-6 lg:text-header-18-medium text-neutral-2">
            Eleifend eget pellentesque a amet scelerisque. Nec viverra molestie
            et cursus morbi eget. Amet bibendum suspendisse vestibulum amet
            dignisasdasdassim in elementum. Vitae, ultrices enim commodo ut pretium
            feugiat tortor faucibus. Vel, nisl, quis nibh eget pretium libero,
            tortor eleifend sit. Porttitor nunc, suspendisse non pharetra
            venenatis eu. Vulputate blandit morbi non mollis. Id pulvinar non
            facilisis in at faucibus donec est. Eleifend eget pellentesque a
            amet scelerisque. Nec viverra molestie et cursus morbi eget. Amet
            bibendum suspendisse vestibulum amet dignissim in elementum. Vitae,
            ultrices enim commodo ut pretium feugiat tortor faucibus.{" "}
          </p>
          <div class="flex mt-4 lg:mt-14">
            <a href="#" class="text-header-18-medium text-neutral-2">
              Show more
            </a>
            <img src="img/Arrow - Right.svg" alt="" class="ml-1" />
          </div>
        </div>
        <div class="mb-7 lg:mb-0 lg:w-1/2">
          <img src="img/interior.jpg" alt="" />
        </div>
      </div>
      <div class="container mt-8 lg:mt-14">
        <div class="text-center">
          <h2 class="text-title-18-bold lg:text-title-24-bold lg:text-title-36-bold text-primary">
            Projects
          </h2>
        </div>
        <div class="lg:gap-10 lg:flex mt-14">
          <a href="#" class="group w-1/3">
            <div>
              <img
                src="img/top.png"
                alt=""
                class="w-full h-[264px] object-cover group-hover:drop-shadow-1 duration-300"
              />
              <h3 class="mt-4 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Twin Forestland Home
              </h3>
              <p class="mt-4 text-header-16-medium text-neutral-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                ei tempor incididunt ut labore et dolore magna aliqua. Ut enim
                mini veniam, quis nostrud.
              </p>
            </div>
          </a>
          <a href="#" class="group w-1/3">
            <div class="mt-8 lg:mt-0">
              <img
                src="img/top.png"
                alt=""
                class="w-full h-[264px] object-cover group-hover:drop-shadow-1 duration-300"
              />
              <h3 class="mt-4 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Twin Forestland Home
              </h3>
              <p class="mt-4 text-header-16-medium text-neutral-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                ei tempor incididunt ut labore et dolore magna aliqua. Ut enim
                mini veniam, quis nostrud.
              </p>
            </div>
          </a>
          <a href="#" class="group w-1/3">
            <div class="mt-8 lg:mt-0">
              <img
                src="img/top.png"
                alt=""
                class="w-full h-[264px] object-cover group-hover:drop-shadow-1 duration-300"
              />
              <h3 class="mt-4 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Twin Forestland Home
              </h3>
              <p class="mt-4 text-header-16-medium text-neutral-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                ei tempor incididunt ut labore et dolore magna aliqua. Ut enim
                mini veniam, quis nostrud.
              </p>
            </div>
          </a>
        </div>
        <div class="mt-14 flex flex-row justify-end">
          <a
            href="#"
            class="text-header-18-medium text-neutral-2 hover:text-secondary-2 duration-300"
          >
            View all Projects
          </a>
          <img src="img/Arrow - Right1.svg" alt="" class="ml-2" />
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;
