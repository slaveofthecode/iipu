import ImageRendering from './components/ImageRendering'
import LoadImage from './components/LoadImage'
import MenuOptions from './components/MenuOptions'
import UrlGenerated from './components/UrlGenerated'

import './styles/layout.scss';

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <header>
        <LoadImage />
      </header>

      <main className='d-flex m-2'>
        <MenuOptions />
        <ImageRendering />
      </main>


      <footer>
        <UrlGenerated />
      </footer>
    </>
  )
}

export default App