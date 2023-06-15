import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {

    const [name_product, setNameProduct] = useState('')
    const [price_product, setPriceProduct] = useState(0)
    const [link_product, setLinkProduct] = useState(0)
    const [marca, setMarca] = useState(0)
    const [description_product, setDescriptionProduct] = useState(0)
    const [color_product, setColorProduct] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name_product: name_product,
            price_product: price_product,
            link_product: link_product,
            marca: marca,
            description_product: description_product,
            color_product: color_product
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNameProduct(response.data.name_product)
            setPriceProduct(response.data.price_product)
            setLinkProduct(response.data.link_product)
            setMarca(response.data.marca)
            setDescriptionProduct(response.data.description_product)
            setColorProduct(response.data.color_product)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h3>EDIT Product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Name Product</label>
                    <input 
                        value={name_product}
                        onChange={ (e)=> setNameProduct(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input 
                        value={price_product}
                        onChange={ (e)=> setPriceProduct(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Link</label>
                    <input 
                        value={link_product}
                        onChange={ (e)=> setLinkProduct(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Marca</label>
                    <input 
                        value={marca}
                        onChange={ (e)=> setMarca(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>DescriptionProduct</label>
                    <input 
                        value={description_product}
                        onChange={ (e)=> setDescriptionProduct(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>ColorProduct</label>
                    <input 
                        value={color_product}
                        onChange={ (e)=> setColorProduct(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
      )
}

export default EditProduct
