import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import propTypes from "prop-types"

const ProductCard = ({image, name, description, discount, price, ShowCardButton, id}) => {
    return (
        <>
            <div className="flex-1 max-w-md">
                <div className="bg-white flex flex-col h-full">

                    <img className="object-cover flex-1 h-24" src={image} alt="Image Products" />

                    <div className="flex-1 flex flex-col bg-white mx-2 -mt-10 shadow-2xl">
                        <Link className="text-2xl my-3.5 mx-2" to={`/detail-product/${id}`}>{name}</Link>
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
                            <del className="text-red-600 text-xs mx-2">IDR {discount.toLocaleString('id')}</del>
                            <span className="text-orange-500 text-md">IDR. {price.toLocaleString('id')},-</span>
                        </div>
                        <div className="flex items-center mx-2 my-2 gap-4">
                            <div className="flex-1">
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                            </div>
                            {ShowCardButton && <div className="w-1/4">
                                <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                    <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>
                
                {/* <div className="h-[320px]"></div> */}
            </div>
        </>
    )
}

ProductCard.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    description: propTypes.string,
    discount: propTypes.number,
    price: propTypes.number,
    ShowCardButton: propTypes.bool,
    id: propTypes.number
}

export default ProductCard