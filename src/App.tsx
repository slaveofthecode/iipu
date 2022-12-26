
import { useEffect, useState } from 'react';
import LoadImage from '@/components/LoadImage';
import ImageRendering from '@/components/ImageRendering';
import UrlGenerated from '@/components/UrlGenerated';
import ActionsApplyImage from '@/components/ActionsApplyImage';
import withModal from './HOC/withModal';

import './styles/layout.scss';


type Props = {}

const App = (props: Props) => {

  const [showLoadImage, setShowLoadImage] = useState(false);

  useEffect(() => {
    setShowLoadImage(true);
  }, [])

  const LoadImageModal = withModal(LoadImage);

  return (
    <>
      {/* <header>
        <LoadImage />
      </header> */}

      <main className='d-flex m-2'>
        <ImageRendering />
      </main>

      <footer className='d-flex flex-column m-2'>
        <UrlGenerated />
        <ActionsApplyImage />
      </footer>

      {
        showLoadImage && <LoadImageModal test='jeje' />
      }

    </>
  )
}

export default App