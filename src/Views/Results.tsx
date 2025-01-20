import {PageProps} from "@/App"
import CardSmall from "@/components/atoms/Card"
import Carousel from "@/components/molecules/Carousel"
import LogoAndSearch from "@/components/molecules/LogoAndSearch"
import PostResultSuggestions from "@/components/molecules/PostResultSuggestions"
import ResultsType from "@/components/molecules/ResultsType"
import PageResult from "@/components/templates/PageResult"
import {Tag} from "@/components/ui/tag"
import {Container} from "@chakra-ui/react"
import {ReactNode} from "react"

const PAGES_RESULT = [
  {
    metaTitle: 'Nike',
    metaDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates libero quia tempore dolorum consectetur at, aspernatur perferendis quod vel. Debitis temporibus odit repellat illum vero odio libero suscipit modi.',
    imageUrl: '/img/nike-logo.png',
    httpUrl: 'https://www.nike.com/',
    image:false
  },
  {
    metaTitle: 'Nike',
    metaDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates libero quia tempore dolorum consectetur at, aspernatur perferendis quod vel. Debitis temporibus odit repellat illum vero odio libero suscipit modi.',
    imageUrl: '/img/nike-logo.png',
    httpUrl: 'https://www.nike.com/',
    image:true
  },
]

const IMAGES =[
  'https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill',
  'https://via.assets.so/shoe.png?id=18&q=95&w=500&h=500&fit=fill',
  'https://via.assets.so/shoe.png?id=2&q=95&w=500&h=500&fit=fill',
  'https://via.assets.so/shoe.png?id=22&q=95&w=500&h=500&fit=fill',
  'https://via.assets.so/shoe.png?id=30&q=95&w=500&h=500&fit=fill',
  'https://via.assets.so/shoe.png?id=34&q=95&w=500&h=500&fit=fill',
]

const elementsToShow:ReactNode[] = [
  <CardSmall image="https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill" headerText="Nike" bodyText="Shop Nike shoes"/>,
  <CardSmall image="https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill" headerText="Nike" bodyText="Shop Nike shoes"/>
]
const tagStyles = {
  padding: '15px 10px',
  borderRadius: '20px',
  backgroundColor: '#782e00',
  color:'#fff',
}
const elementsToShow2:ReactNode[] = [
  <Tag style={{...tagStyles}} _hover={{cursor:'pointer'}}>Overview</Tag>,
  <Tag style={{...tagStyles}} _hover={{cursor:'pointer'}}>Videos</Tag>,
  <Tag style={{...tagStyles}} _hover={{cursor:'pointer'}}>New Sneakers</Tag>,
  <Tag style={{...tagStyles}} _hover={{cursor:'pointer'}}>Sport Sneakers</Tag>,
  <Tag style={{...tagStyles}} _hover={{cursor:'pointer'}}>Sport wear</Tag>,
]

const Results = ({onClick}:PageProps) => {
  return (
    <Container  
      w={{
        base: "95%", // Default for all screens
        sm: "90%", // 480px and above
        md: "80%", // 768px and above
        lg: "70%", // 1024px and above
        xl: "80%", // 1280px and above
      }}
      m={'0 auto'}
      padding={'20px 0'}
    >
      <LogoAndSearch
        search=""
        onLogoClick={onClick}
        onInputChange={()=>{}}
        searchSuggestions={[]}
        logoPosition={'right'}
      />
      <ResultsType/>
      <PostResultSuggestions
        descriptionText={'People also ask:'}
        elements={elementsToShow}
      />
      <PostResultSuggestions
        headerText={'Nike'}
        descriptionText={'Trending sneakers'}
        elements={elementsToShow2}
      />
      {
        PAGES_RESULT.map((page, index) => (
          <PageResult
            key={index}
            imageUrl={page.imageUrl}
            httpUrl={page.httpUrl}
            metaTitle={page.metaTitle}
            metaDescription={page.metaDescription}
            image={page.image}
          />
        ))
      }

      <Carousel
      images={IMAGES}
      />
    </Container>
  )
}

export default Results