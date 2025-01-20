import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Text } from '@chakra-ui/react';
const PostResultSuggestions = ({ headerText, descriptionText, elements }) => {
    return (_jsxs(Container, { display: 'flex', alignItems: 'center', gap: 15, bg: 'gray.800', padding: '30px 0px', overflowY: 'scroll', children: [_jsxs(Box, { display: 'flex', flexDirection: 'column', children: [_jsx(Text, { as: 'h4', fontWeight: 'bold', padding: 0, children: headerText }), _jsx(Text, { as: 'p', padding: 0, children: descriptionText })] }), elements?.map((element, index) => {
                return (_jsx(Box, { display: 'flex', alignItems: 'center', children: element }, index));
            })] }));
};
export default PostResultSuggestions;
