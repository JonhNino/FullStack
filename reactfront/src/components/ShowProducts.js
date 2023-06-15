import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
  const [ products, setProducts ] = useState( [] )

  useEffect ( ()=> {
      getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
    //console.log(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    getAllProducts()
  }
  return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Link</th>
                        <th>Marca</th>
                        <th>Description</th>
                        <th>Color</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    { products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name_product}</td>
                            <td>{product.price_product}</td>
                            <td>{product.link_product}</td>
                            <td>{product.marca}</td>
                            <td>{product.description_product}</td>
                            <td>{product.color_product}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>edit</Link>
                                <button onClick={( )=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts
