import {Button, Container, Image, Input, Text} from '@chakra-ui/react'
import InputGroup from './InputGroup'
import {GoogleMicroIcon, GoogleSearchIcon} from '../../../public/icons/icons'

type LogoPosition = 'centered' | 'right'

interface LogoAndSearchProps {
  search: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchSuggestions: string[],
  logoPosition?: LogoPosition,
  onLogoClick?: () => void
}

const LogoAndSearch = ({search,onSubmit,onInputChange,searchSuggestions,logoPosition,onLogoClick}:LogoAndSearchProps) => {
  return (
    <Container
        display="flex"
        flexDirection={logoPosition === 'right' ? 'row' : 'column'}
        justifyContent="center"
        alignItems="center"
        position="relative"
        gap={10}
      >
        <Image
          onClick={onLogoClick}
          src="/img/GoogleIcon.png"
          alt="Google search"
          w={logoPosition === 'right' ? '30%' : {
            base: "95%", // Default for all screens
            sm: "90%", // 480px and above
            md: "80%", // 768px and above
            lg: "70%", // 1024px and above
          }}
          cursor={onLogoClick ? 'pointer' : 'default'}
        />
        <form onSubmit={onSubmit} className='form'>
          <InputGroup iconBefore={GoogleSearchIcon} iconAfter={GoogleMicroIcon}>
            <Input
              type="text"
              placeholder={`Nike...`}
              w="100%"
              h="100%"
              p={'10px 15px'}
              fontSize={20}
              border="none"
              borderRadius={100}
              _focusVisible={{ outline: "none" }}
              value={search}
              onChange={onInputChange}
            />
          </InputGroup>
          <Button type={'submit'} height={0} opacity={0}></Button>
        <Container
          position={'absolute'}
          bottom={-70}
          backgroundColor="gray.800"
          w={'100%'}
          padding="10px 25px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          className={search.length ? "" : "search-suggestions"}
        >
          {search.startsWith("ni") ? (
            searchSuggestions.map((suggestion, index) => (
              <Text
                key={index}
                as="p"
                w="100%"
                _hover={{ backgroundColor: "gray.400", cursor: "pointer" }}
              >
                <b>{suggestion}</b>
              </Text>
            ))
          ) : (
            <Text as="p" padding="5px 10px" w="100%">
              Oops something went wrong, our search engine is working with only the word{" "}
              <b>Nike</b>
            </Text>
          )}
        </Container>
        </form>
      </Container>
  )
}

export default LogoAndSearch