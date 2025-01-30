import beach_3 from '../assets/beach_3.jpg'
import { IoIosArrowForward } from "react-icons/io";


const WholeFamily = () => {
    return (
        <div className=' h-[450px] '>
            <h1 className='uppercase mb-4 tracking-wide'>Bring The Whole Family</h1>
            <div>
                <img className='mb-4 w-full h-[300px]' src={beach_3} alt="beach" />
                <h1 className=' font-semibold text-[17px]'>Beaches Resorts by Sandals</h1>
                <p className='text-[14px]'>Share the Luxury Included® vacation experience with your family at Beaches Resorts. Enjoy more inclusions, more choices and more ways to spend your time together on the Caribbean’s best beaches.</p>
            </div>
            <div className='flex items-center mt-2'>
                <a href="#" className='text-sm font-semibold'>BEACHES.COM </a>
                <IoIosArrowForward className='text-blue-600 '/>

            </div>
        </div>
    )
}

export default WholeFamily