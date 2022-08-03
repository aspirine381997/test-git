import React from "react";

const Services = () => {
  return (
    <section class="mt-24">
      <div class="container">
        <div class="text-center">
          <h2 class="text-title-24-bold lg:text-title-36-bold text-primary">
            Services
          </h2>
          <p class="text-title-16-medium lg:text-title-24-medium text-secondary-1 mt-4">
            What we do, We provide quality services
          </p>
        </div>
        <div class="lg:flex gap-10 mt-14 text-center">
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Urban Planning
              </p>
            </div>
          </a>
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Architectural Design
              </p>
            </div>
          </a>
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Landscape Design
              </p>
            </div>
          </a>
        </div>
        <div class="lg:flex gap-10 lg:mt-14 text-center">
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Interior Design
              </p>
            </div>
          </a>
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Technical Resources
              </p>
            </div>
          </a>
          <a href="#" class="group lg:w-1/3">
            <div class="mb-8 lg:mb-0 py-20 border border-solid border-neutral-5 group-hover:bg-accent-1 duration-300">
              <p class="text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                3D Visualiztion
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
