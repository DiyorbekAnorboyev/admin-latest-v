import { useEffect, useState } from 'react'
import axios from "axios"
import AddDosage from '../dosage/AddDosage'
function Dosage() {

    const [data, setdata] = useState([])
    const [addDosage, setAddDosage] = useState(false)

    const token = window.localStorage.getItem("token")

    useEffect(() => {
        axios.get("https://admin.xaridor.com/api/Dosage/List?Limit=10&Offset=0", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => setdata(res.data.data.items))
            .catch(err => console.log(err))
    }, [setdata])

    const handleDelete = (e) => {
        axios.delete(`https://admin.xaridor.com/api/Dosage/${e}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const onDosage = () => {
        setAddDosage(!addDosage ? true : false)
    }

    const CloseModal = (a) => {
        return a(false);
    };

    return (
        <div>
            <div className='all-markets'>

                {token ? '' : <h4 className='bg-danger'>Aka login qiling <a href='/'>Login uchun</a></h4>}

                <div className="d-flex justify-content-between ">
                    <div>
                        <AddDosage activeT={addDosage} close={() => CloseModal(setAddDosage)} />
                    </div>

                    <h5>Miqdor</h5>
                    <div className='d-flex  gap-3 '>
                        <button className="btn btn-primary mt-1" onClick={onDosage}>Miqdor qo'shish</button>
                    </div>

                </div>
                <div className='tabl mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">O'lchov birligi</th>
                                <th scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, idx) =>
                                <tr key={idx} className='table-secondary'>
                                    <th scope="row ">{e.id}</th>
                                    <td>{e.name}</td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            <button className='btn btn-outline-danger' onClick={() => handleDelete(e.id)}>delete</button>
                                            <button className='btn btn-outline-success' onClick={onDosage}>edit</button>
                                        </div>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dosage