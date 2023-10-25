import {useState} from 'react'
import axios from "axios" 

const AddDosage = ({activeT, close}) => {

    const [name, setname] = useState('')

    const token = window.localStorage.getItem("token")

    // const formData = new FormData()
    // formData.append('name', name)

    const formData1 = {
        name
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://admin.xaridor.com/api/Dosage", formData1, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => console.log(res.data))
            .then(() => close())
            .catch(err => console.log(err))
    }

  return (
    <div>
            <div className={activeT ? "showProduct" : "hideProduct"}>
                <div className='credit '>
                    <div className='d-flex justify-content-between'>
                        <h5>Miqdor qo'shish</h5>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div>
                            <div className='row d-flex justify-content-between'>
                                <div className="inputs  col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Miqdor nomi'
                                        onChange={e => setname(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3 gap-3'>
                        <button onClick={() => close()} type='submit' className='w-50 btn btn-outline-primary btn-modal'>BEKOR QILISH </button>
                        <button className='w-50 btn btn-primary btn-modal' onClick={handleSubmit}>QO'SHISH</button>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default AddDosage