import React from "react";

const Banner = () => {
  return (
    <div>
      <section class="w-full h-80 lg:h-screen bg-[url('/img/top.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-end">
        <div class="container">
          <div>
            <h1 class="mb-7 text-title-18-bold lg:text-title-80-bold text-neutral-6">
              Welcome to<br></br>HBH Architects
            </h1>
          </div>
          <div class="hidden lg:mt-16 mb-5 lg:mb-10 lg:flex flex-col items-center">
            <a href="#" class="text-body-14-medium text-neutral-6">
              Scroll down
            </a>
            <img src="img/Chevron.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
