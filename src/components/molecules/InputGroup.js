import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
const InputGroup = ({ iconBefore, iconAfter, children }) => {
    const backgroundColor = useColorModeValue('gray.950', 'white');
    return (_jsxs(Flex, { display: 'flex', flexDirection: 'row', alignItems: "center", gap: 10, w: '100%', padding: '10px 15px', borderRadius: 100, overflow: "hidden", backgroundColor: backgroundColor, mt: 15, children: [_jsx(Box, { pl: 3, color: "gray.500", children: iconBefore }), children, _jsx(Box, { pl: 3, color: "gray.500", children: iconAfter })] }));
};
export default InputGroup;
