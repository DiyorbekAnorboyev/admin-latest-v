import React from 'react'
import './Addmarkets.css'
import axios from "axios"

const Addmarkets = ({ activeT, close }) => {

    

    return (
        <div>
            <div className={activeT ? "showProduct" : "hideProduct"}>
                <div className='credit '>
                    <div className='d-flex justify-content-between'>
                        <h4>Do'kon qo'shish</h4>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className='w-100'>
                            <div className="inputs col">
                                <label>Do'kon nomi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Do'kon nomi"

                                />
                            </div>

                            <div className="inputs mt-3 col">
                                <label>Telefon raqami</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='+998 94 123 45 64'
                                />
                            </div>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="inputs mt-2 col">
                            <label>Do'kon egasi F.I.SH</label>
                            <input
                                type="Text"
                                className="form-control"
                                placeholder="Ismi va familiya"
                            />
                        </div>
                    </div>

                    <div className='inputs mt-2'>
                        <label>Do'kon manzili</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nurafshon ko'chasi 57 uy"
                        />
                    </div>
                    <div className='d-flex justify-content-between mt-3 gap-3'>
                        <button onClick={close} type='submit' className='w-50 btn btn-outline-primary btn-modal'>BEKOR QILISH </button>
                        <button className='w-50 btn btn-primary btn-modal'>QO'SHISH</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Addmarkets