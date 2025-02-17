import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import { awardsCarouselData } from "@/constants/constants";
function Awards() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[70%] md:max-w-[90%] mx-auto "
      >
        <CarouselContent>
          {awardsCarouselData.map((awardItem, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="">
                      <div key={index} className="md:w-[350px]">
                        <div className="flex justify-center items-end -mb-4 mr-6 ">
                          <img
                            src={awardItem.logo}
                            alt="award_logo_1"
                            className=" w-[80px] md:w-[100px] h-[80px] md:h-[100px]"
                          />
                        </div>
                        <div
                          className="max-w-[75%] md:max-w-[90%] mx-auto"
                          style={{
                            backgroundImage: `url(${awardItem.background})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",                                                                                 
                            width: "350px",
                          }}
                        >
                          <div className="text-center text-[12px] md:text-[16px] p-[20px]">
                            {awardItem.title.map((line, i) => (
                              <h1 key={i}>{line}</h1>
                            ))}
                            <p className=" text-[10px] md:text-[11px]">{awardItem.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
        {/* <div className="hidden md:block"> */}
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </div>
      </Carousel>
      <div className="flex justify-center">
        <button className="bg-black    text-white px-6 py-1 text-[11px] font-bold uppercase">
          View All Awards
        </button>
      </div>
    </div>
  );
}

export default Awards;
