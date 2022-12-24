import React, { useEffect, useState } from 'react'
import { ILIST_URL } from '@/interfaces';
import { getUrlListImages } from '../../utils/index';

type Props = {}

const LoadImage = (props: Props) => {

  const [listUrl, setListUrl] = useState<ILIST_URL[]>([]);

  useEffect(() => {
    const url = getUrlListImages();
    fetch(url)
      .then(res =>
        res.json().then(data => {
          setListUrl(data);
        }));

  }, []);

  return (
    <div className='d-flex justify-content-between m-2 bg-light'>
      <div className='w-100'>
        <input list="listImages" name="listImages" className='form-control w-100' placeholder='select image to load...' />
        <datalist id='listImages'>
          {
            listUrl.map((item, index) => {
              return <option key={index} value={item.url} >{item.name}</option>
            })
          }
        </datalist>
      </div>
      <div className='w-auto ms-2'>
        <button className='btn btn-primary w-100'>
          <i className="bi bi-upload"></i>
        </button>
      </div>
    </div>
  );
}

export default LoadImage