import React, { useEffect, useState } from 'react'
import './Addproduct.css'
import AddIcon from '../../components/constants/AddIcon.jpg'

import axios from "axios"

const Addproduct = ({ activeT, close }) => {

    const [name, setname] = useState('')
    const [file, setfile] = useState(null)
    const [code, setcode] = useState('')
    const [categoryId, setcategoryId] = useState('')
    const [dosageId, setdosageId] = useState('')

    const [dosage, setdosage] = useState([])
    const [category, setcategory] = useState([])

    const token = window.localStorage.getItem("token")

    // const dataProduct = {
    //     name,
    //     file: file,
    //     code,
    //     categoryId,
    //     dosageId,
    // }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', name)
    formData.append('code', code)
    formData.append('categoryId', categoryId)
    formData.append('dosageId', dosageId)

    const handleFileChange = (event) => {
        return setfile(event.target.files[0])
    }

    console.log(formData);

    useEffect(() => {
        axios.get("https://admin.xaridor.com/api/Dosage/List", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => setdosage(res.data.data.items))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("https://admin.xaridor.com/api/Category/List?Limit=10&Offset=0", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => setcategory(res.data.data.items))
            .then(res => console.log(res.data.data.items))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://admin.xaridor.com/api/Product", formData, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className={activeT ? "showProduct" : "hideProduct"}>
                <div className='credit '>
                    <div className='d-flex justify-content-between'>
                        <h5>Mahsulot qo'shish</h5>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div>
                            <div className='row d-flex justify-content-between '>
                                <div className="inputs  col">
                                    <label >Mahsulot turi</label>
                                    <select className="form-control" value={categoryId} onChange={(e) => setcategoryId(e.target.value)}>
                                        <option value={categoryId}>{categoryId}</option>
                                        {category.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="inputs  col">
                                    <label>Mahsulot nomi</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Mahsulot nomi'
                                        onChange={e => setname(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="inputs mt-2 col">
                            <label>O'lchov birligi</label>
                            <select className="form-control" value={dosageId} onChange={(e) => setdosageId(e.target.value)}>
                                <option value={dosageId}>{dosageId}</option>
                                {dosage.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="inputs mt-2 col">
                            <label>Mahsulot kodi</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder='123456'
                                onChange={e => setcode(e.target.value)}
                            />
                        </div>
                        <div className=''>
                            <label for="file-upload" className="w-100 rounded">
                                <h6>Rasmni yuklang</h6>
                                <img height={75} src={AddIcon} alt='file' />
                                <input className="d-none" id="file-upload" type="file" onChange={e => handleFileChange(e)} />
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3 gap-3'>
                        <button onClick={close} type='submit' className='w-50 btn btn-outline-primary btn-modal'>BEKOR QILISH </button>
                        <button className='w-50 btn btn-primary btn-modal' onClick={handleSubmit}>QO'SHISH</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Addproduct