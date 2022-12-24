
import './styles/layout.scss';
import LoadImage from '@/components/LoadImage';
import ImageRendering from '@/components/ImageRendering';
import UrlGenerated from '@/components/UrlGenerated';
import ActionsApplyImage from '@/components/ActionsApplyImage';


type Props = {}

const App = (props: Props) => {
  return (
    <>
      <header>
        <LoadImage />
      </header>

      <main className='d-flex m-2'>
        <ImageRendering />
      </main>

      <footer>
        <UrlGenerated />
        <ActionsApplyImage />
      </footer>
    </>
  )
}

export default App