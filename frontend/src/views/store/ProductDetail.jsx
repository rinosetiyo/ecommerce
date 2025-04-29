import React, { use } from 'react'
import { useEffect, useState } from 'react'

function ProductDetail() {
    const [product, setProduct] = useState([])
    const [specifications, setSpecifications] = useState([])
    const [gallery, setGallery] = useState([])
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const [qtyValue, setQtyValue] = useState(1)

    const [colorValue, setColorValue] = useState('No Color')

    const param = useParams()

    const handleColorButtonClick = (e) => {
        const colorNameInput = e.target.value.closest('.color_button').parentNode.querySelector('.color_name')
        setColorValue(colorNameInput.value)
    }
    const handleSizeButtonClick = (e) => {
        const sizeNameInput = e.target.value.closest('.size_button').parentNode.querySelector('.size_name')
        setSizeValue(sizeNameInput.value)
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
