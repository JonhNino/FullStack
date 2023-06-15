import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/products'

const CreateProduct = () => {
    const [name_product, setNameProduct] = useState('')
    const [price_product, setPriceProduct] = useState(0)
    const [link_product, setLinkProduct] = useState(0)
    const [marca, setMarca] = useState(0)
    const [description_product, setDescriptionProduct] = useState(0)
    const [color_product, setColorProduct] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name_product: name_product, price_product: price_product, link_product: link_product,marca:marca,description_product:description_product,color_product:color_product})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
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

export default CreateProduct