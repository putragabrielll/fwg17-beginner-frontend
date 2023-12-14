import LogoCoffee from '../assets/images/logo-coffee.png'
import { MdOutlineEmail } from 'react-icons/md'

const ForgotPassword = () => {
    return (
        <>
            <div>
                <div className="flex h-screen">
                    {/* Bagian kiri */}
                    <div className="bg-cover bg-no-repeat w-1/4 hidden md:block bg-[url('../assets/images/forgot.png')]"></div>

                    {/* Bagian kanan */}
                    <div className="flex flex-1 flex-col justify-center items-center my-10">
                        <section className='w-3/4 items-center justify-center'>
                            <div className='flex mb-7'>
                                <img src={LogoCoffee} alt="Logo Coffee" />
                                <p className="ml-2 text-xl text-yellow-800 font-link">Coffee Shop</p>
                            </div>
                            <h1 className="text-xl text-yellow-800 mb-7">Fill out the form correctly</h1>
                            <div className="mt-4 text-gray-600 mb-7">We will send new password to your email</div>
                            <form className="flex flex-col gap-4" action="">
                                <div className="flex flex-col mb-3">
                                    <label className="font-semibold my-2" htmlFor="email">Email</label>
                                    <input className="h-12 border rounded-md relative pl-9" type="email" name="email" placeholder="Enter Your Email" id="email" />
                                    <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md" type="submit">Submit</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword