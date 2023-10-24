import { useState } from 'react'
import './Markets.css'

import Addmarkets from '../addmarkets/Addmarkets'

const Markets = () => {

  const [addShow, setAddShow] = useState(false)

  const onAdd = () => {
    setAddShow(!addShow ? true : false)
  }

  const CloseModal = (a) => {
    return a(false);
  };


  return (
    <div className='all-markets'>
      <div class="d-flex justify-content-between ">
        <Addmarkets activeT={addShow} close={() => CloseModal(setAddShow)} />
        <h5>Do'konlar</h5><button class="btn btn-primary " onClick={onAdd}>Do'kon qo'shish</button></div>
      <div className='tabl '>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Korxona Nomi</th>
              <th scope="col">Korxona Egasi</th>
              <th scope="col">Ism Familiya</th>
              <th scope="col">Telefon Raqam</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-secondary'>
              <th scope="row ">1 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
              <td>Haridor</td>
              <td>Hasanboy</td>
              <td>Aliyev Vali</td>
              <td>+998949300234</td>
            </tr>
            <tr className='table-secondary'>
              <th scope="row ">2 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
              <td>Haridor</td>
              <td>Hasanboy</td>
              <td>Aliyev Vali</td>
              <td>+998949300234</td>
            </tr>
            <tr className='table-secondary'>
              <th scope="row ">3 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
              <td>Haridor</td>
              <td>Hasanboy</td>
              <td>Aliyev Vali</td>
              <td>+998949300234</td>
            </tr>
            <tr className='table-secondary'>
              <th scope="row ">1 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
              <td>Haridor</td>
              <td>Hasanboy</td>
              <td>Aliyev Vali</td>
              <td>+998949300234</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Markets