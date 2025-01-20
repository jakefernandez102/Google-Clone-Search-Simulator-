import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardSmall from "@/components/atoms/Card";
import Carousel from "@/components/molecules/Carousel";
import LogoAndSearch from "@/components/molecules/LogoAndSearch";
import PostResultSuggestions from "@/components/molecules/PostResultSuggestions";
import ResultsType from "@/components/molecules/ResultsType";
import PageResult from "@/components/templates/PageResult";
import { Tag } from "@/components/ui/tag";
import { Container } from "@chakra-ui/react";
const PAGES_RESULT = [
    {
        metaTitle: 'Nike',
        metaDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates libero quia tempore dolorum consectetur at, aspernatur perferendis quod vel. Debitis temporibus odit repellat illum vero odio libero suscipit modi.',
        imageUrl: '/img/nike-logo.png',
        httpUrl: 'https://www.nike.com/',
        image: false
    },
    {
        metaTitle: 'Nike',
        metaDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates libero quia tempore dolorum consectetur at, aspernatur perferendis quod vel. Debitis temporibus odit repellat illum vero odio libero suscipit modi.',
        imageUrl: '/img/nike-logo.png',
        httpUrl: 'https://www.nike.com/',
        image: true
    },
];
const IMAGES = [
    'https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill',
    'https://via.assets.so/shoe.png?id=18&q=95&w=500&h=500&fit=fill',
    'https://via.assets.so/shoe.png?id=2&q=95&w=500&h=500&fit=fill',
    'https://via.assets.so/shoe.png?id=22&q=95&w=500&h=500&fit=fill',
    'https://via.assets.so/shoe.png?id=30&q=95&w=500&h=500&fit=fill',
    'https://via.assets.so/shoe.png?id=34&q=95&w=500&h=500&fit=fill',
];
const elementsToShow = [
    _jsx(CardSmall, { image: "https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill", headerText: "Nike", bodyText: "Shop Nike shoes" }),
    _jsx(CardSmall, { image: "https://via.assets.so/shoe.png?id=16&q=95&w=500&h=500&fit=fill", headerText: "Nike", bodyText: "Shop Nike shoes" })
];
const tagStyles = {
    padding: '15px 10px',
    borderRadius: '20px',
    backgroundColor: '#782e00',
    color: '#fff',
};
const elementsToShow2 = [
    _jsx(Tag, { style: { ...tagStyles }, _hover: { cursor: 'pointer' }, children: "Overview" }),
    _jsx(Tag, { style: { ...tagStyles }, _hover: { cursor: 'pointer' }, children: "Videos" }),
    _jsx(Tag, { style: { ...tagStyles }, _hover: { cursor: 'pointer' }, children: "New Sneakers" }),
    _jsx(Tag, { style: { ...tagStyles }, _hover: { cursor: 'pointer' }, children: "Sport Sneakers" }),
    _jsx(Tag, { style: { ...tagStyles }, _hover: { cursor: 'pointer' }, children: "Sport wear" }),
];
const Results = ({ onClick }) => {
    return (_jsxs(Container, { w: {
            base: "95%", // Default for all screens
            sm: "90%", // 480px and above
            md: "80%", // 768px and above
            lg: "70%", // 1024px and above
            xl: "80%", // 1280px and above
        }, m: '0 auto', padding: '20px 0', children: [_jsx(LogoAndSearch, { search: "", onLogoClick: onClick, onInputChange: () => { }, searchSuggestions: [], logoPosition: 'right' }), _jsx(ResultsType, {}), _jsx(PostResultSuggestions, { descriptionText: 'People also ask:', elements: elementsToShow }), _jsx(PostResultSuggestions, { headerText: 'Nike', descriptionText: 'Trending sneakers', elements: elementsToShow2 }), PAGES_RESULT.map((page, index) => (_jsx(PageResult, { imageUrl: page.imageUrl, httpUrl: page.httpUrl, metaTitle: page.metaTitle, metaDescription: page.metaDescription, image: page.image }, index))), _jsx(Carousel, { images: IMAGES })] }));
};
export default Results;
