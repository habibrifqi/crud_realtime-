import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/products",{
            name:name,
            price: parseInt(price) 
        });
        navigate("/")
    }
  return (
    <div className='max-w=lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={saveProduct} className='my-10'>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">
                        prodduct name
                    </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className='w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:border-slate-500 hover:shadow' placeholder='Product Name' />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">
                        prodduct PRice
                    </label>
                    <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)}  className='w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:border-slate-500 hover:shadow' placeholder='Product price' />
                </div>
                <button type="submit" className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default Addproduct