import React from 'react'
import './Adminpage.css'
import icon from '../../components/constants/admin.svg'
import menu from '../../components/constants/admin.svg'
import Markets from '../markets/Markets'
// import haridor from '../../components/constant/haridor.jpg'
import { DokonIcon } from '../constants/dokonIcon'
import { useLocation } from 'react-router-dom'

const Adminpage = ({activePage}) => {
    const location = useLocation()
    return (
        <div className=''>
            <div className='over-s'>
                <div className='d-flex gap-2 over'>
                    <div>
                        <img src={icon} alt="" width='50' />
                    </div>
                    <div className='search-s '>
                        <input className='form-control' type="Type in to search" name="" id="" placeholder='Qidirish' />
                    </div>
                    <button className='btn btn-outline-primary h-50'>Qidiruv</button>
                    <p className='m-0 mx-5 date-now'></p>
                </div>
                <div className='admin-p justify-content-start'>
                    <div className='d-flex'>
                        <h5>Admin</h5>
                        <img src={icon} alt="" width='25' />
                    </div>
                </div>
            </div>
            <div className='d-flex w-100'>
                <div className='side'>
                <a href='/adminpage/markets'>
                            <div className={location.pathname === '/adminpage/markets' ? 'active-nav mt-1 pt-1 ' : 'hovers mt-1  pt-1'}>
                                <DokonIcon fill={location.pathname === '/adminpage/markets' ? 'blue' : 'grey'} />
                                <p>Do'konlar</p>
                            </div>
                        </a>
                        <a href='/adminpage/products'>
                            <div className={location.pathname === '/adminpage/products' ? 'active-nav mt-1 pt-1 ' : 'hovers mt-1  pt-1'}>
                                <DokonIcon fill={location.pathname === '/adminpage/products' ? 'blue' : 'grey'} />
                                <p>Mahsulotlar</p>
                            </div>
                        </a>   <a href='/adminpage'>
                            <div className={location.pathname === '/adminpage' ? 'active-nav mt-1 pt-1 ' : 'hovers mt-1  pt-1'}>
                                <DokonIcon fill={location.pathname === '/adminpage' ? 'blue' : 'grey'} />
                                <p>Ruxsat berish</p>
                            </div>
                        </a> 
                          <a href='/adminpag'>
                            <div className={location.pathname === '/adminpag' ? 'active-nav mt-1 pt-1 ' : 'hovers mt-1  pt-1'}>
                                <DokonIcon fill={location.pathname === '/adminpag' ? 'blue' : 'grey'} />
                                <p>Hisbot</p>
                            </div>
                        </a>
                </div>
                <div className='w-100'>
                   {activePage}
                </div>
            </div>
        </div>
    )
}

export default Adminpage