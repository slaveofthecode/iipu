import React, { useEffect, useState } from 'react'
import { ILIST_URL } from '@/interfaces';
import { getUrlListImages } from '@/utils';

type Props = {
  test: string
}

const LoadImage = ({ test }: Props) => {

  const [listUrl, setListUrl] = useState<ILIST_URL[]>([]);
  const [imageSelected, setImageSelected] = useState();

  useEffect(() => {
    const url = getUrlListImages();
    fetch(url)
      .then(res =>
        res.json().then(data => {
          setListUrl(data);
        }));

  }, []);

  const handleOnChangeSelectImage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedOptions } = e.target;

    const text = selectedOptions[0].text;

    console.log('e.target.value', text);
    console.log('e.target.value', value);
  }

  return (
    <div className='d-flex justify-content-between align-items-center gap-4 w-75 fs-1'>

      <div className='w-100'>
        <select className='form-select w-100 py-5 px-3 fs-1' placeholder='Select an image...' onChange={handleOnChangeSelectImage} >
          <option disabled selected value={-1} > -- select an option -- </option>
          {
            listUrl.map((item, index) => {
              return <option key={index} value={item.url} >{item.name}
              </option>;
            })
          }
        </select>
      </div>
      <span> or </span>
      <div className='w-auto'>
        <button className='btn btn-primary w-100 p-5' title='Upload a new file' >
          <i className="bi bi-upload fs-1"></i>
        </button>
      </div>

    </div>
  );
}

export default LoadImage