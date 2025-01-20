import { Box, Container, Text} from '@chakra-ui/react'
import React, {ReactNode} from 'react'

interface PostResultSuggestionsProps {
  headerText?: string,
  descriptionText?: string,
  elements?: ReactNode[]
}
const PostResultSuggestions = ({headerText,descriptionText,elements}:PostResultSuggestionsProps) => {
  return (
    <Container display={'flex'} alignItems={'center'} gap={15} bg={'gray.800'} padding={'30px 0px'} overflowY={'scroll'}>
      <Box display={'flex'} flexDirection={'column'}>
        <Text as={'h4'} fontWeight={'bold'} padding={0}>{headerText}</Text>
        <Text as={'p'} padding={0}>{descriptionText}</Text>
      </Box>
      {
        elements?.map((element, index) => {
          return (
            <Box key={index} display={'flex'} alignItems={'center'} >
              {element}
            </Box>
          )
        })
      }
      
    </Container>
  )
}

export default PostResultSuggestions