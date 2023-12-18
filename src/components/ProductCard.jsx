import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import ProductImage from "../assets/images/coffee1.png"

const ProductCard = ({name, description, price}) => {
    return (
        <>
            <div className="flex-1 max-w-md relative">
                <div className="bg-black h-78 flex">
                    <img className="object-fill flex-1" src={ProductImage} alt="" />
                </div>
                
                <div className="flex-1 flex flex-col bg-white mx-2 absolute -mt-10 shadow-2xl">
                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>{name}</Link>
                    <p className="text-gray-600 my-3.5 mx-2 flex-1">{description}</p>
                    <div className="flex gap-3 mx-2">
                        <FaStar className="text-orange-500 text-xl" />
                        <FaStar className="text-orange-500 text-xl" />
                        <FaStar className="text-orange-500 text-xl" />
                        <FaStar className="text-orange-500 text-xl" />
                        <FaStar className="text-orange-500 text-xl" />
                        <span className="text-gray-600 text-xl">5.0</span>
                    </div>
                    <div className="my-3.5">
                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                        <span className="text-orange-500 text-md">IDR{price},-</span>
                    </div>
                    <div className="flex items-center mx-2 my-2 gap-4">
                        <div className="flex-1">
                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                        </div>
                        <div className="w-1/4">
                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="h-[320px]"></div>
            </div>
        </>
    )
}

export default ProductCard