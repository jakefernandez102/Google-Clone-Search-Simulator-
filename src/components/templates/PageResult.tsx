import {Box, Container, Image, Text,Link} from '@chakra-ui/react'
 

interface PageResultProps {
  imageUrl: string,
  httpUrl: string,
  metaTitle: string,
  metaDescription: string
  image?:boolean
}

const PageResult = ({imageUrl,httpUrl,metaTitle,metaDescription,image=false}:PageResultProps) => {
  return (
    <Container padding={0}>
      <Box w='full' mt={10} padding={0}>
      <Box display={'flex'} alignItems={'center'} gap={5} >
        <Image w={30} h={30} backgroundColor={'white'} rounded={'full'} src={imageUrl}/>
        <Box display={'flex'} flexDirection={'column'}>
          <Text as={'span'}>{metaTitle}</Text>
          <Text as={'span'}>{httpUrl}</Text>
        </Box>
      </Box>
        <Box display={'flex'}>
          <Box>
            <Link href={'#'} textDecor={'underline'} color={'blue.400'} fontSize={20}>{metaTitle}</Link>
            <Text as={'p'}  
              WebkitLineClamp={3}
              overflow="hidden" 
              textOverflow="ellipsis" 
              display="-webkit-box" 
              style={{
                WebkitLineClamp: 3, 
                WebkitBoxOrient: 'vertical',
              }}>
                {metaDescription}
            </Text>
          </Box>
          {
            image &&
            <Image w={'20%'} src={'https://via.assets.so/shoe.png?id=27&q=95&w=360&h=360&fit=fill'} alt={'shoes'} />
          }
        </Box>
      </Box>
    </Container>
  )
}

export default PageResult