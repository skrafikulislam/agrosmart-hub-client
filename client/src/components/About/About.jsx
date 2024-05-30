 

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
              About{" "}
              <span class="text-green-800 border-b-2 uppercase border-green-600">
                Our Company
              </span>
            </h2>
            <p class="text-gray-700">
              AgroSmart Hub revolutionizes farming with advanced technology. It
              offers real-time monitoring, predictive analytics, and automated
              solutions. Connect with experts and optimize crop yields for
              sustainable agriculture. Experience precision farming like never
              before with AgroSmart Hub. Maximize efficiency and success on your
              farm today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
