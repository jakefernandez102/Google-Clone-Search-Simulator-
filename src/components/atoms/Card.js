import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Container, Heading, Image } from '@chakra-ui/react';
const CardSmall = ({ image, headerText, bodyText }) => {
    return (_jsxs(Card.Root, { size: "sm", h: '10%', minW: '290px', maxW: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray.900', color: 'white', border: 'none', rounded: '2xl', padding: '5px', children: [_jsx(Image, { src: image, w: '60px', alt: "card image" }), _jsxs(Container, { display: 'flex', flexDirection: 'column', children: [_jsx(Card.Header, { padding: 0, children: _jsx(Heading, { padding: '0', size: "md", children: headerText }) }), _jsx(Card.Body, { padding: '0', color: "fg.subtle", children: bodyText })] })] }));
};
export default CardSmall;
