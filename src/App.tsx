/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import LoadImage from '@/components/LoadImage';
import ImageRendering from '@/components/ImageRendering';
import UrlGenerated from '@/components/UrlGenerated';
import ActionsApplyImage from '@/components/ActionsApplyImage';
import withModal from './HOC/withModal';

import './styles/layout.scss';


type Props = {}

const App = (props: Props) => {

  const { getLoading } = useSelector((state: any) => state.app);

  useEffect(() => {
    console.log('init -> getLoading', { getLoading });
  }, []);

  useEffect(() => {
    console.log('.data', getLoading.data);
  }, [getLoading.data]);

  useEffect(() => {
    console.log('.isLoading', getLoading.isLoading);
  }, [getLoading.isLoading]);

  useEffect(() => {
    console.log('.error', getLoading.error);
  }, [getLoading.error]);

  const LoadImageModal = withModal(LoadImage);

  // TODO - re-structure all this code
  return (
    <>
      {/* <header>
        <LoadImage />
      </header> */}

      {
        getLoading.isLoading && <span>Loading...</span>
      }

      <span>{JSON.stringify(getLoading, null, 4)}</span>

      <main className='d-flex m-2'>
        <ImageRendering />
      </main>

      <footer className='d-flex flex-column m-2'>
        <UrlGenerated />
        <ActionsApplyImage />
      </footer>

      {
        !getLoading.data && <LoadImageModal test='here possible data to pass...' />
      }

    </>
  )
}

export default App