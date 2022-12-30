/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import LoadImage from '@/components/LoadImage';
import ImageRendering from '@/components/ImageRendering';
import UrlGenerated from '@/components/UrlGenerated';
import ActionsApplyImage from '@/components/ActionsApplyImage';
import withModal from './HOC/withModal';

import { useSelector } from 'react-redux'

import './styles/layout.scss';


type Props = {}

const App = (props: Props) => {

  const storeApp = useSelector((state: any) => state);
  const { isLoading, data, error } = storeApp.app;

  useEffect(() => {
    console.log('init - ', { isLoading, data, error });
  }, []);

  useEffect(() => {
    console.log('.data', data);
  }, [data]);

  useEffect(() => {
    console.log('.isLoading', isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log('.error', error);
  }, [error]);



  const LoadImageModal = withModal(LoadImage);

  return (
    <>
      {/* <header>
        <LoadImage />
      </header> */}

      {
        isLoading && <span>Loadiing...</span>
      }

      <span>{JSON.stringify(storeApp)}</span>

      <main className='d-flex m-2'>
        <ImageRendering />
      </main>

      <footer className='d-flex flex-column m-2'>
        <UrlGenerated />
        <ActionsApplyImage />
      </footer>

      {
        !data && <LoadImageModal test='jeje' />
      }

    </>
  )
}

export default App