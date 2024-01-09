import React from "react"
import axios from "axios"
import { useEffect } from "react"
import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Karakter1 from "../assets/images/karakter1.png"
import Karakter2 from "../assets/images/karakter2.png"
import ProductCard from "../components/ProductCard"
import PlacaHolderImage from "../assets/images/img-placeholder.jpeg" // untuk backup jika dari database tidak ada gambar

const Product = () => {
    const [products, setProducts] = React.useState([])// [7- 12]
    const [pages, setPages] = React.useState(1)
    const [pagesArr, setPagesArr] = React.useState([]) // [1,2,3,4,....,9] isi nya nanti
    const [totalPages, setTotalPages] = React.useState(1)

    const [isRecomended, setIsRecomended] = React.useState(false) // filter Best Seller

    const getProduct = async() => { // get pertama saat buka page
        const { data } = await axios.get("http://localhost:8000/products?sortby=createdAt&order=desc")
        // console.log(isRecomended)
        setProducts(data.results)
        setPages(data.pageInfo.currentPage)
        let page = [] // [1,2,3,4,....,9] // Untuk looping total pages
        for(let i = 1; i <= data.pageInfo.totalPage; i++){
            page.push(i)
        }
        setPagesArr(page)
        setTotalPages(data.pageInfo.totalPage)
    }

    const filterData = async(e) => { // filter data
        if(e){
            e.preventDefault()
        }
        const {value: search} = e ? e.target.search : ''

        const { data } = await axios.get("http://localhost:8000/products?sortby=createdAt&order=desc", {
            params: {
                filter: search,
                best_seller: isRecomended
            }
        })
        setProducts(data.results)
        setPages(data.pageInfo.currentPage)
    }

    const changePages = async(e) => { // next page
        const { data } = await axios.get(`http://localhost:8000/products?sortby=createdAt&order=desc?page=${e}`)
        setProducts(data.results)
        setPages(data.pageInfo.currentPage)
    }

    useEffect(() => {
        getProduct()
        filterData()
        // console.log('apa aja')
    }, [])

    return (
        <>
            <div>
                {/* Untuk navbar */}
                <div className="bg-black">
                    <Navbar />
                </div>
                
                {/* Untuk konten */}
                <header className="hidden md:block">
                    <div className="px-32 h-[305px] bg-[url('../assets/images/product-header.png')] bg-cover bg-no-repeat flex justify-start items-center">
                        <h1 className="text-white text-4xl">
                            We Provide Good Coffee and Healthy <br /> Meals
                        </h1>
                    </div>
                </header>

                {/* Section promo */}
                <div className="my-10 flex flex-col gap-8">
                    {/* Bagian atas */}
                    <div className="flex-1 px-4 md:px-32 flex">
                        <div className="flex-1">
                            <h1 className="text-5xl">Today <span className="text-yellow-800">Promo</span></h1>
                        </div>
                        <div className="flex-1 hidden md:block">
                            <div className="flex justify-end">
                                <ul className="flex gap-5 items-center">
                                    <li>
                                        <button className="px-3 py-3 bg-[#E8E8E8] rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowLeft className="text-xl" /></button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-3 bg-orange-500 border border-orange-500 rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowRight className="text-xl" /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bagian tengah */}
                    <div className="flex-1 flex gap-12 justify-between">
                        <div className="bg-[#88B788] flex rounded-r-3xl px-2">
                            <img className="ml-4" src={Karakter2} alt="" />
                            <div className="flex flex-col gap-0.5 justify-center">
                                <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                                <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                                <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-[#88B788] flex rounded-3xl px-6">
                                <img className="ml-4" src={Karakter2} alt="" />
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                                    <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                                    <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-[#88B788] flex rounded-3xl px-6">
                                <img className="ml-4" src={Karakter2} alt="" />
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                                    <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                                    <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-[#F5C361] flex rounded-l-3xl">
                                <img className="ml-4" src={Karakter1} alt="" />
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <h3 className="text-md font-bold">Get a cup of coffee for free on sunday morning</h3>
                                    <Link className="text-xs" to={"/product"}>Only at 7 to 9 AM</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian bawah */}
                    <div className="px-32">
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="9" viewBox="0 0 76 9" fill="none">
                            <circle cx="38" cy="4" r="4" fill="#DDE0E4"/>
                            <circle cx="55" cy="4" r="4" fill="#DDE0E4"/>
                            <circle cx="72" cy="4" r="4" fill="#DDE0E4"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z" fill="#FF8906"/>
                        </svg>
                    </div>
                </div>

                {/* Section product */}
                <div className="px-4 md:px-32 flex flex-col gap-12">
                    {/* Bagian atas */}
                    <div>
                        <h1 className="text-5xl">Our <span className="text-yellow-800">Product</span></h1>
                    </div>

                    {/* Bagian bawah */}
                    <div className="flex gap-4">
                        {/* Bagian filter */}
                        <form onSubmit={filterData} className="w-1/4 h-screen bg-black text-white rounded-xl hidden md:block">
                            {/* Sebelumnya form */}
                            <div className="mx-3 flex flex-col gap-6 my-6">
                                <div className="flex gap-4">
                                    <span className="flex-1">Filter</span>
                                    <button onClick={getProduct} className="flex-1" type="reset">Reset Filter</button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="search">Search</label>
                                    <input className="h-11 border pl-5 rounded-md text-black" type="search" name="search" placeholder="Search Your Product" id="search" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Category</span>
                                    <div className="flex justify-start items-center gap-2">
                                        <input onChange={()=>setIsRecomended(!isRecomended)} className="h-11" type="checkbox" name="favorite" id="favorite" />
                                        <label htmlFor="favorite">Favorite Product</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="favorite" id="coffee" />
                                        <label htmlFor="coffee">Coffee</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="favorite" id="non-coffee" />
                                        <label htmlFor="non-coffee">Non Coffee</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="favorite" id="foods" />
                                        <label htmlFor="foods">Foods</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="favorite" id="add-on" />
                                        <label htmlFor="add-on">Add-On</label>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span>Sort By</span>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="buy-get" id="buy-get" />
                                        <label htmlFor="buy-get">Buy 1 get 1</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="flash-sale" id="flash-sale" />
                                        <label htmlFor="flash-sale">Flash sale</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="birthday" id="birthday" />
                                        <label htmlFor="birthday">Birthday Package</label>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11" type="checkbox" name="chep" id="cheap" />
                                        <label htmlFor="cheap">Cheap</label>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span>Range Price</span>
                                    <div className="flex justify-start items-center gap-2">
                                        <input className="h-11 w-full" type="range" name="favorite" id="buy-get" />
                                    </div>
                                </div>
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black transition duration-300 ease-in-out hover:scale-110" >Apply Filter</button>
                            </div>
                        </form>

                        {/* Bagian product */}
                        <div className="flex-1 flex flex-col">
                            {/* Products */}
                            <div className="grid grid-cols-2 gap-4">
                                {products?.map((data, i) => {
                                    let images = data.image ? `http://localhost:8000/uploads/products/${data.image}` : null
                                    return (
                                        <ProductCard key={i} image={images || PlacaHolderImage} ShowCardButton={true} name={data.name} discount={data.price} price={data.price - data.discount} description={data.description} id={data.id} />
                                    )
                                })}
                            </div>

                            {/* Pagination */}
                            <div className="my-10 flex-1 flex justify-center">
                                <ul className="flex gap-5 items-center">
                                    {/* Previous data */}
                                    {1 !== pages && 
                                        <li>
                                            <button onClick={()=>changePages(pages - 1)} className="px-3 py-3 bg-orange-500 border border-orange-500 rounded-full"><FaArrowLeft className="text-xl text-white" /></button>
                                        </li>
                                    }

                                    {/* Pagination 1, 2, 3 dan seterusnya */}
                                    {pagesArr?.map((data,i)=>{ // [1,2,3,4.....,9]
                                        let isShow =  data >= pages - 2 && data <= pages + 2
                                        // data = 1
                                        // page = 1
                                        // 1 >= -1 && 1 <= 3
                                        // console.log(data)
                                        // console.log(isShow)
                                        return(
                                            isShow && 
                                            <li key={i}>
                                                <button onClick={()=>changePages(data)} className={`px-5 py-3 ${data == pages ? 'bg-orange-500 border-orange-500':'text-[#A0A3BD] bg-[#E8E8E8]'} border rounded-full`}>{data}</button>
                                            </li>
                                        )
                                    })}

                                    {/* Next data */}
                                    {totalPages !== pages && 
                                        <li>
                                            <button onClick={()=>changePages(pages + 1)} className="px-3 py-3 bg-orange-500 border border-orange-500 rounded-full"><FaArrowRight className="text-xl text-white" /></button>
                                        </li>
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Untuk footer */}
                <Footer />

                {/* Untuk chat */}
                <ChatBox />
            </div>
        </>
    )
}

export default Product