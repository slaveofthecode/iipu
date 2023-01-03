import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ILIST_URL } from '@/interfaces';
import { getListImagesService } from '@/services/app';
import { getLoading } from '@/store/app/actions';

type Props = {
  test: string
}

const LoadImage = ({ test }: Props) => {

  const dispatch = useDispatch<any>();

  const [listUrl, setListUrl] = useState<ILIST_URL[]>([]);

  useEffect(() => {

    const getListImages = async () => {
      const listImages = await getListImagesService();
      setListUrl(listImages);
    };

    getListImages();

  }, []);

  const handleOnChangeSelectImage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedOptions } = e.target;
    const text = selectedOptions[0].text;

    console.log('Ejecuto el store App -> ', text, value);
    dispatch(getLoading());
  }

  return (
    <div className='d-flex justify-content-between align-items-center gap-4 w-75 fs-1'>

      <div className='w-100'>
        <select className='form-select w-100 py-5 px-3 fs-1' placeholder='Select an image...' onChange={handleOnChangeSelectImage} defaultValue={-1} >
          <option disabled value={-1} > -- select an option -- </option>
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