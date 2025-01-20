import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Image, Text, Link } from '@chakra-ui/react';
const PageResult = ({ imageUrl, httpUrl, metaTitle, metaDescription, image = false }) => {
    return (_jsx(Container, { padding: 0, children: _jsxs(Box, { w: 'full', mt: 10, padding: 0, children: [_jsxs(Box, { display: 'flex', alignItems: 'center', gap: 5, children: [_jsx(Image, { w: 30, h: 30, backgroundColor: 'white', rounded: 'full', src: imageUrl }), _jsxs(Box, { display: 'flex', flexDirection: 'column', children: [_jsx(Text, { as: 'span', children: metaTitle }), _jsx(Text, { as: 'span', children: httpUrl })] })] }), _jsxs(Box, { display: 'flex', children: [_jsxs(Box, { children: [_jsx(Link, { href: '#', textDecor: 'underline', color: 'blue.400', fontSize: 20, children: metaTitle }), _jsx(Text, { as: 'p', WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", style: {
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                    }, children: metaDescription })] }), image &&
                            _jsx(Image, { w: '20%', src: 'https://via.assets.so/shoe.png?id=27&q=95&w=360&h=360&fit=fill', alt: 'shoes' })] })] }) }));
};
export default PageResult;
