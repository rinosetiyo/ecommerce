import React from 'react'
import { useEffect, useState } from 'react'
import apiInstance from '../../utils/axios'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        apiInstance.get('products/')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.error('Error fetching products:', error)
            })
    })
  return (
        <div>

        </div>
    )
}

export default Products
