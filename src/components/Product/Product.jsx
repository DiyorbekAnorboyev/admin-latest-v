import { useEffect, useState } from 'react'
import Addproduct from '../addproduct/Addproduct'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Product = () => {

    const [data, setdata] = useState([])
    const [addShow, setAddShow] = useState(false)

    const navigate = useNavigate()

    // const [token, settoken] = useState('')

    // const dataUser = {
    //     userName: "string",
    //     password: "Mirzayev_020"
    // }

    const token = window.localStorage.getItem("token")

    useEffect(() => {
        axios.get("https://admin.xaridor.com/api/Product/List?Limit=10&Offset=0", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => setdata(res.data.data.items))
            .catch(err => console.log(err))
    }, [])

    console.log(data)

    // try {
    //     axios.get("https://admin.xaridor.com/api/Product/List?Limit=10&Offset=10", { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then(res => console.log(res.data.data.items))
    //     .catch(err => console.log(err))
    //   } catch (error) {
    //     console.error("API Error:", error);
    //   }


    const onAdd = () => {
        setAddShow(!addShow ? true : false)
    }

    const CloseModal = (a) => {
        return a(false);
    };
    return (
        <div>
            {!token ? navigate('/') : <div className='all-markets'>

                <div className="d-flex justify-content-between ">
                    <Addproduct activeT={addShow} close={() => CloseModal(setAddShow)} />
                    <h5>Mahsulotlar</h5><button className="btn btn-primary mt-1" onClick={onAdd}>Mahsulotlar qo'shish</button></div>
                <div className='tabl mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Mahsulot turi</th>
                                <th scope="col">Mahsulot Nomi</th>
                                <th scope="col">Shtrix</th>
                                <th scope="col">O'lchov birligi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, idx) =>
                                <tr key={idx} className='table-secondary'>
                                    <th scope="row ">{e.id.slice(0, 3)}<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                    <td>{e.categoryName}</td>
                                    <td>{e.productName}</td>
                                    <td>{e.code}</td>
                                    <td>{e.dosageName}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>}
        </div>



    )
}

export default Product