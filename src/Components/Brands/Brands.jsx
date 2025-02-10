import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function Brands() {
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  let { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getCategories,
    select: (data) => data.data.data,
  });

  return (
    <>
      <div className="container mt-14 p-4">
        <>
          {isLoading ? (
            <div className="flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 fixed justify-center items-center ">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="container mt-14 gap-4 flex flex-wrap justify-center">
              {data.map((brand, index) => (
                <div
                  key={index}
                  className="md:w-1/3 lg:w-1/5 border border-slate-300  hover:scale-[1.05] hover:border-main p-2 cursor-pointer"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full object-cover "
                  />
                  <h2 className="text-center text-main text-xl">
                    {brand.name}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </>
  );
}
