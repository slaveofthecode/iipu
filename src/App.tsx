/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import LoadImage from '@/components/LoadImage';
import ImageRendering from '@/components/ImageRendering';
import UrlGenerated from '@/components/UrlGenerated';
import ActionsApplyImage from '@/components/ActionsApplyImage';
import withModal from './HOC/withModal';
import { useApp } from '@/store/app';

import './styles/layout.scss';


type Props = {}

const App = (props: Props) => {


  const { loadImage } = useApp();

  useEffect(() => {    
    console.log('init', loadImage);
  }, []);

  useEffect(() => {
    console.log('changed .data', loadImage);
  }, [loadImage.data]);

  const LoadImageModal = withModal(LoadImage);

  return (
    <>
      {/* <header>
        <LoadImage />
      </header> */}

      {
        loadImage.isLoading
          ? <span>Loadiing...</span>
          : <span>{JSON.stringify(loadImage.data)}</span>
      }

      <main className='d-flex m-2'>
        <ImageRendering />
      </main>

      <footer className='d-flex flex-column m-2'>
        <UrlGenerated />
        <ActionsApplyImage />
      </footer>

      {
        !loadImage.data && <LoadImageModal test='jeje' />
      }

    </>
  )
}

export default App