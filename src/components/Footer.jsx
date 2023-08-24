import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-20 back-footer  sm:h-[100%] relative'>
            <div className='background-overlay2'></div>
            <div className="relative text-white p-4 flex flex-col justify-between h-[100%] max-w-6xl m-auto xs:w-[90%]">
                <div className='sm:flex sm:justify-around sm:m-auto'>
                    <div className='sm:w-[45%] lg:w-[50%]'>
                        <h2 className='font-semibold uppercase text-lg mb-4 text-center text-primary sm:text-start lg:text-center'>Quick Contact</h2>
                        <div className='lg:flex lg:justify-around'>
                            <div>
                                <h3 className='font-semibold uppercase my-2'>Adress:</h3>
                                <p className='text-sm'>43 rue du petit bois</p>
                                <p className='text-sm'>60200, Compiegne</p>
                            </div>
                            <div>
                                <h3 className='font-semibold uppercase my-2'>Phone:</h3>
                                <p className='text-sm'>+3334584684</p>
                                <p className='text-sm'>+3357886484</p>
                            </div>
                            <div>
                                <h3 className='font-semibold uppercase my-2'>E-mail:</h3>
                                <p className='text-sm'>email@gmail.com</p>
                                <p className='text-sm'>email@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[45%] lg:w-[35%] flex flex-col sm:justify-between'>
                        <h2 className='font-semibold uppercase text-lg my-4 text-center text-primary sm:my-0 lg:mb-7'>About ECV</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ipsum laborum illum aliquam inventore. Similique enim nulla asperiores voluptates quia.</p>
                        <div className='flex justify-around mt-6 sm:mb-10'>
                            <a href='' className='border rotate-45 p-2 hover:bg-primary'><FaFacebookF className='text-md no-rotate '/></a>
                            <a href='' className='border rotate-45 p-2 hover:bg-primary'><FaInstagram className='text-md no-rotate'/></a>
                            <a href='' className='border rotate-45 p-2 hover:bg-primary'><FaTwitter className='text-md no-rotate'/></a>
                        </div>
                    </div>
                </div>
                <div className='relative text-white mt-4 text-center'>
                    <div className='border-b border-gray-200/50 w-[80%] m-auto max-w-6xl relative'/>
                    <p className='mt-2 italic text-xs'>Copyright©ECV ALL Right Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;