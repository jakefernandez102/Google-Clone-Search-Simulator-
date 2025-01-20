import { FC, useCallback, useState} from "react";
import GoogleSearch from "./Views/GoogleSearch";
import Results from "./Views/Results";


type Page= 'googleSearch' | 'nikeResults';
const PageDictionary:{[key in Page]:FC<PageProps>} = {
  googleSearch: GoogleSearch,
  nikeResults: Results
}
export type PageProps ={
  page:Page;
  onClick:()=>void;
}

function App() {
  const [page, setPage] = useState('googleSearch' as Page)

  const Component = PageDictionary[page]

  const onNextPage = useCallback(()=>{
      const newPage = page === 'googleSearch' ? 'nikeResults' : 'googleSearch'
      setPage(newPage)
  },[page,setPage]) 

  return (
    <>
      <Component page={page} onClick={onNextPage}/>
    </>
  )
}

export default App
