import { sandals_vacation_images } from "@/constants/constants";

const SandalsVacationIncludes = () => {
    return (
        <div className="p-6 pb-[80px]">

            <div className='md:max-w-[50%] mx-auto text-center text-sm mt-8'>
                <h1 className='text-[18px] md:text-[30px] font-semibold mb-4 md:mb-6 uppercase'>Every Sandals Vacation Includes</h1>
                <p className='text-gray-900'>Enjoy all-inclusive luxury vacations at Sandals Caribbean resorts and see for yourself why we offer the most romantic getaways with more quality inclusions than any other luxury beach resort. With gorgeous white-sand beaches, savory dining experiences, opulent accommodations, unlimited refreshing beverages, exciting water sports and more, it’s no wonder why so many choose Sandals as their tropical escape.</p>
            </div>

            <div>
                <div className="flex md:flex-wrap justify-center md:max-w-[65%] mx-auto mt-6 gap-5 overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

                    {sandals_vacation_images.map((item) => (
                        <div className="w-[150px]md:w-[120px]">
                            <img src={item.image} alt="" />
                            <p className="text-[13px] text-center">{item.content}</p>
                        </div>
                    ))}

                </div>

                <button className="px-6 py-1 bg-black text-white mt-6 text-sm">VIEW ALL INCLUSIONS</button>

            </div>
        </div>
    )
}

export default SandalsVacationIncludes