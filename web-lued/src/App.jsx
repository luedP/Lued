import RoutesIndex from "./routes/RoutesIndex"
import Header from './layouts/header'
import { SearchProvider } from '../src/components/context/SearchContext';

function App() {
 

  return (
    <>
     <SearchProvider>
      <Header /> 
      <RoutesIndex />
     </SearchProvider>
    </>
  )
}

export default App
