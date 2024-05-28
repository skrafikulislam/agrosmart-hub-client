import React from "react";

const About = () => {
  return (
    <div>
      <div class="sm:flex items-center max-w-screen-xl m-auto mt-5">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About {" "}
              <span class="text-green-800 border-b-2 uppercase border-green-600">
                Our Company
              </span>
            </h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              fugit recusandae pariatur, ex perspiciatis corporis eaque optio ad
              tempora nam voluptate soluta cupiditate quisquam aspernatur in
              eveniet amet eius aliquid non! Eaque consequatur asperiores
              dignissimos nulla! Odit, distinctio iusto ea a ab maxime? Eum,
              vel. Sapiente ratione quia vero architecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
