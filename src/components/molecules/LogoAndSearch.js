import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Container, Image, Input, Text } from '@chakra-ui/react';
import InputGroup from './InputGroup';
import { GoogleMicroIcon, GoogleSearchIcon } from '../../../public/icons/icons';
const LogoAndSearch = ({ search, onSubmit, onInputChange, searchSuggestions, logoPosition, onLogoClick }) => {
    return (_jsxs(Container, { display: "flex", flexDirection: logoPosition === 'right' ? 'row' : 'column', justifyContent: "center", alignItems: "center", position: "relative", gap: 10, children: [_jsx(Image, { onClick: onLogoClick, src: "/img/GoogleIcon.png", alt: "Google search", w: logoPosition === 'right' ? '30%' : {
                    base: "95%", // Default for all screens
                    sm: "90%", // 480px and above
                    md: "80%", // 768px and above
                    lg: "70%", // 1024px and above
                }, cursor: onLogoClick ? 'pointer' : 'default' }), _jsxs("form", { onSubmit: onSubmit, className: 'form', children: [_jsx(InputGroup, { iconBefore: GoogleSearchIcon, iconAfter: GoogleMicroIcon, children: _jsx(Input, { type: "text", placeholder: `Nike...`, w: "100%", h: "100%", p: '10px 15px', fontSize: 20, border: "none", borderRadius: 100, _focusVisible: { outline: "none" }, value: search, onChange: onInputChange }) }), _jsx(Button, { type: 'submit', height: 0, opacity: 0 }), _jsx(Container, { position: 'absolute', bottom: -70, backgroundColor: "gray.800", w: '100%', padding: "10px 25px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", className: search.length ? "" : "search-suggestions", children: search.startsWith("ni") ? (searchSuggestions.map((suggestion, index) => (_jsx(Text, { as: "p", w: "100%", _hover: { backgroundColor: "gray.400", cursor: "pointer" }, children: _jsx("b", { children: suggestion }) }, index)))) : (_jsxs(Text, { as: "p", padding: "5px 10px", w: "100%", children: ["Oops something went wrong, our search engine is working with only the word", " ", _jsx("b", { children: "Nike" })] })) })] })] }));
};
export default LogoAndSearch;
