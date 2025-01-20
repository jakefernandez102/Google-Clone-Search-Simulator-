import { Tabs, Text } from "@chakra-ui/react"

const ResultsTypes = () => {
  return (
    <Tabs.Root defaultValue="All" variant={'line'} >
      <Tabs.List borderBottom={'1px solid gray'}>
        <Tabs.Trigger value="All" color={'gray.400'}  backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          All
        </Tabs.Trigger>
        <Tabs.Trigger value="Images" color={'gray.400'} backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          Images
        </Tabs.Trigger>
        <Tabs.Trigger value="Videos" color={'gray.400'} backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          Videos
        </Tabs.Trigger>
        <Tabs.Trigger value="Shopping" color={'gray.400'} backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          Shopping
        </Tabs.Trigger>
        <Tabs.Trigger value="News" color={'gray.400'} backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          News
        </Tabs.Trigger>
        <Tabs.Trigger value="More" color={'gray.400'} backgroundColor={'transparent'} _hover={{border:'none'}} _before={{height:'0'}} _focus={{outline:'0', borderBottom:'2px solid white'}} _focusVisible={{outline:'0',borderBottom:'2px solid white'}}>
          <Text rotate={'90deg'}>...</Text>
          <Text>More</Text>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="All" >All</Tabs.Content>
      <Tabs.Content value="Images">Images</Tabs.Content>
      <Tabs.Content value="Videos">
        Videos
      </Tabs.Content>
      <Tabs.Content value="Shopping">
        Shopping
      </Tabs.Content>
      <Tabs.Content value="News">
        News
      </Tabs.Content>
      <Tabs.Content value="News">
        more
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default ResultsTypes