import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoIosStar } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { reviewsCarouselItems } from "@/constants/constants";
function Reviews() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" max-w-[95%] md:max-w-[80%] mx-auto "
      >
        <CarouselContent>
          {reviewsCarouselItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="">
                      <h1 className="text-2xl font-bold">{item.hotelName}</h1>
                      <p className="text-gray-600 uppercase text-sm">
                        {item.location}
                      </p>
                      <div className="my-2 flex items-center gap-2">
                        {[...Array(item.rating)].map((_, index) => (
                          <IoIosStar key={index} className="text-blue-700" />
                        ))}
                        <p className="font-semibold">{item.rating}</p>
                      </div>
                      <p className="text-gray-800 text-md font-semibold my-3">
                        {item.description}
                      </p>
                      <p className="text-gray-800 text-[14px]">
                        <span className="text-blue-600 inline-block -mb-2 mr-2">
                          <FaUserCircle size={24} />
                        </span>
                        {item.review}
                      </p>
                      <h1 className="text-[11px] mt-3">{item.timeAgo}</h1>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="">
          {/* <div className="hidden md:block"> */}
          <CarouselPrevious className="border-none mx-10 md:mx-0" />
          <CarouselNext className="border-none mx-10 md:mx-0" />
        </div>
      </Carousel>
    </div>
  );
}

export default Reviews;
