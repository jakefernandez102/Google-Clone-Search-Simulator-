import {Box, Container, Image, Text} from '@chakra-ui/react'
interface CarouselProps {
  images: string[]
}
const Carousel = ({images}:CarouselProps) => {
  return (
    <Container mt={5}>
      <Text as={'h4'} fontSize={30} fontWeight={'bold'}>Images</Text>
      <Box display={'flex'} overflowX={'scroll'}>
        {

          images.map((image, index) => {
            return (
              <Image w={'30%'} h={'30%'} padding={0} src={image} alt={'page image'} key={index} />
            )
          })
        }
      </Box>
    </Container>
  )
}

export default Carousel