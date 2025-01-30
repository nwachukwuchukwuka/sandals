import beach_3 from '../assets/beach_3.jpg'


const WholeFamily = () => {
    return (
        <div className=' h-[450px] w-[280px]'>
            <h1 className='uppercase mb-4'>Bring The Whole Family</h1>
            <div>
                <img className='mb-4 w-full h-[300px]' src={beach_3} alt="beach" />
                <h1 className=' font-semibold text-[15px]'>Beaches Resorts by Sandals</h1>
                <p className='text-[12px]'>Share the Luxury Included® vacation experience with your family at Beaches Resorts. Enjoy more inclusions, more choices and more ways to spend your time together on the Caribbean’s best beaches.</p>
            </div>
            <a href="#" className='text-sm font-semibold'>BEACHES.COM </a>
        </div>
    )
}

export default WholeFamily