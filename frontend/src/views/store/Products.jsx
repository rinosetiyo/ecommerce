import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import apiInstance from '../../utils/axios'

function Products() {
    // const [featuredProducts, setFeaturedProducts] = useState([])
    // const [products, setProducts] = useState([])
    // const [category, setCategory] = useState([])
    // const [brand, setBrand] = useState([])

    // let [isAddingToCart, setIsAddingToCart] = useState("Add To Cart")
    // const [loadingStates, setLoadingStates] = useState({})
    // let [loading, setLoading] = useState(true)

    // const axios = apiInstance
    // const addon = Addon()
    // const currentAddress = GetCurrentAddress()
    // const userData = UserData()
    // let cart_id = CartID()

    // const [selectedProduct, setSelectedProduct] = useState(null)
    // const [selectedColors, setSelectedColors] = useState({})
    // const [selectedSize, setSelectedSize] = useState({})
    // const [colorImage, setColorImage] = useState("")
    // const [colorValue, setColorValue] = useState("No Color")
    // const [sizeValue, setSizeValue] = useState("No Size")
    // const [qtyValue, setQtyValue] = useState(1)
    // let [cartCount, setCartCount] = useContext(CartContext);

    // const itemsPerPage = 6;
    // const [currentPage, setCurrentPage] = useState(1);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    // const totalPages = Math.ceil(products.length / itemsPerPage);
    // const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    // useEffect(() => {
    //     apiInstance.get('products/')
    //         .then((response) => {
    //             setProducts(response.data)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching products:', error)
    //         })
    // })
return (
    <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product Name" />
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$0.00</p>
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product Name" />
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$0.00</p>
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product Name" />
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$0.00</p>
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item active">
                        <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link">3</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
)
}

export default Products
