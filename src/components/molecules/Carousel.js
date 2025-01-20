import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Image, Text } from '@chakra-ui/react';
const Carousel = ({ images }) => {
    return (_jsxs(Container, { mt: 5, children: [_jsx(Text, { as: 'h4', fontSize: 30, fontWeight: 'bold', children: "Images" }), _jsx(Box, { display: 'flex', overflowX: 'scroll', children: images.map((image, index) => {
                    return (_jsx(Image, { w: '30%', h: '30%', padding: 0, src: image, alt: 'page image' }, index));
                }) })] }));
};
export default Carousel;
