import beaches from '../assets/beaches.avif'
import { IoIosArrowForward } from "react-icons/io";


const WholeFamily = () => {
    return (
        <div className=' h-[520px] '>
            <h1 className='uppercase mb-4 tracking-wide'>Bring The Whole Family</h1>
            <div>
                <img className='mb-4 w-full h-[330px]' src={beaches} alt="beach" />
                <h1 className=' font-semibold text-[20px]'>Beaches Resorts by Sandals</h1>
                <p className='text-[16px]'>Share the Luxury Included® vacation experience with your family at Beaches Resorts. Enjoy more inclusions, more choices and more ways to spend your time together on the Caribbean’s best beaches.</p>
            </div>
            <div className='flex items-center mt-2'>
                <a href="#" className='text-sm font-bold'>BEACHES.COM </a>
                <IoIosArrowForward className='text-blue-600 '/>

            </div>
        </div>
    )
}

export default WholeFamily