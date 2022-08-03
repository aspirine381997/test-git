import React from "react";

const News = () => {
  return (
    <section class="mt-24 mb-32">
      <div class="container">
        <div class="text-center">
          <h2 class="text-title-18-bold lg:text-title-24-bold lg:text-title-36-bold text-primary">
            Lastest News
          </h2>
          <p class="text-title-16-medium lg:text-title-24-medium text-secondary-1 mt-4">
            Always update new information
          </p>
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
            View all News
          </a>
          <img src="img/Arrow - Right.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default News;
