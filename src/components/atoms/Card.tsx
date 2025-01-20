import {Card, Container, Heading, Image} from '@chakra-ui/react'
import React from 'react'

interface CardProps {
  image: string,
  headerText: string,
  bodyText: string
}

const CardSmall = ({image, headerText,bodyText}: CardProps) => {
  return (
    <Card.Root size="sm" h={'10%'} minW={'290px'} maxW={'50%'} display={'flex'} flexDirection={'row'} alignItems={'center'} backgroundColor={'gray.900'} color={'white'} border={'none'} rounded={'2xl'} padding={'5px'}>
        <Image src={image} w={'60px'} alt="card image" />
        <Container display={'flex'} flexDirection={'column'}>
          <Card.Header padding={0}>
            <Heading padding={'0'} size="md">{headerText}</Heading>
          </Card.Header>
          <Card.Body padding={'0'} color="fg.subtle">
            {bodyText}
          </Card.Body>
        </Container>
      </Card.Root>
  )
}

export default CardSmall