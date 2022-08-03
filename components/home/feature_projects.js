import React from "react";

const FeatureProjects = () => {
  return (
    <section className="mt-10 lg:mt-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-title-24-bold lg:text-title-36-bold text-primary">
            Featured Projects
          </h2>
          <p className="text-title-16-medium lg:text-title-24-medium text-secondary-1 mt-4">
            Bringing Innovation, Quality and Control to your projects
          </p>
        </div>
        <div className="lg:flex gap-10 mt-14">
          <a href="#" className="lg:w-7/12 group">
            <div>
              <img
                src="img/top.png"
                alt=""
                className="w-full h-[188px] lg:h-[720px] object-cover group-hover:drop-shadow-1 duration-300"
              />
              <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Woodenist House Lumberjack
              </h3>
              <p className="mt-3 text-header-18-medium text-secondary-1">
                Architecture / Vietnam
              </p>
            </div>
          </a>
          <a href="#" className="lg:w-5/12 group">
            <div>
              <div className="mt-10 lg:mt-0">
                <img
                  src="img/top.png"
                  alt=""
                  className="w-full h-[188px] lg:h-[292px] object-cover group-hover:drop-shadow-1 duration-300"
                />
                <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                  Woodenist House Lumberjack
                </h3>
                <p className="mt-3 text-header-18-medium text-secondary-1">
                  Architecture / Vietnam
                </p>
              </div>
              <div className="mt-10">
                <img
                  src="img/top.png"
                  alt=""
                  className="w-full h-[188px] lg:h-[292px] object-cover group-hover:drop-shadow-1 duration-300"
                />
                <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                  Woodenist House Lumberjack
                </h3>
                <p className="mt-3 text-header-18-medium text-secondary-1">
                  Architecture / Vietnam
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="lg:flex gap-10 mt-10 lg:mt-14">
          <a href="#" className="lg:w-5/12 group">
            <div>
              <div>
                <img
                  src="img/top.png"
                  alt=""
                  className="w-full h-[188px] lg:h-[292px] object-cover group-hover:drop-shadow-1 duration-300"
                />
                <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                  Woodenist House Lumberjack
                </h3>
                <p className="mt-3 text-header-18-medium text-secondary-1">
                  Architecture / Vietnam
                </p>
              </div>
              <div className="mt-10">
                <img
                  src="img/top.png"
                  alt=""
                  className="w-full h-[188px] lg:h-[292px] object-cover group-hover:drop-shadow-1 duration-300"
                />
                <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                  Woodenist House Lumberjack
                </h3>
                <p className="mt-3 text-header-18-medium text-secondary-1">
                  Architecture / Vietnam
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="lg:w-7/12 group">
            <div className="mt-10 lg:mt-0">
              <img
                src="img/top.png"
                alt=""
                className="w-full h-[188px] lg:h-[720px] object-cover group-hover:drop-shadow-1 duration-300"
              />
              <h3 className="mt-6 text-title-18-bold lg:text-title-24-bold text-primary group-hover:text-secondary-2 duration-300">
                Woodenist House Lumberjack
              </h3>
              <p className="mt-3 text-header-18-medium text-secondary-1">
                Architecture / Vietnam
              </p>
            </div>
          </a>
        </div>
        <div className="mt-8 lg:mt-14 flex flex-row justify-start lg:justify-end">
          <a
            href="#"
            className="text-header-18-medium text-neutral-2 hover:text-secondary-2 duration-300"
          >
            View all Projects
          </a>
          <img src="img/Arrow - Right.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
