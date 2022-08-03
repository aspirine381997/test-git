import React from "react";

const Welcome = () => {
  return (
    <div>
      <section class="mt-8 lg:mt-32">
        <div class="container lg:flex gap-5 lg:gap-10 items-center">
          <div class="lg:w-7/12">
            <img src="img/Group 625982.png" alt="" />
          </div>
          <div class="mt-7 lg:mt-0 lg:w-5/12 flex flex-col justify-center">
            <p class="text-title-24-medium text-secondary-1">#welcome</p>
            <h2 class="text-title-24-bold lg:text-title-40-bold text-primary mt-2 lg:mt-6">
              LET YOUR HOME BE UNIQUE AND STYLISH
            </h2>
            <div class="h-1 w-14 bg-secondary-2 mt-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
