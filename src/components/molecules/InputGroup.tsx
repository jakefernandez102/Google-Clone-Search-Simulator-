import {Box, Flex} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {useColorModeValue} from '../ui/color-mode';
interface InputGroupProps {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  children: ReactNode;
}
const InputGroup = ({iconBefore,iconAfter,children}:InputGroupProps) => {

    const backgroundColor = useColorModeValue( 'gray.950','white');
  return (
    <Flex
      display={'flex'}
      flexDirection={'row'}
      alignItems="center"
      gap={10}
      w={'100%'}
      padding={'10px 15px'}
      borderRadius={100}
      overflow="hidden"
      backgroundColor={backgroundColor}
      mt={15}
    >
      <Box pl={3} color="gray.500">
        {iconBefore}
      </Box>
      {children}
      <Box pl={3} color="gray.500">
        {iconAfter}
      </Box>
    </Flex>
  );
}

export default InputGroup