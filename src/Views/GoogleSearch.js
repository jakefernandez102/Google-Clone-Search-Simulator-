import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LogoAndSearch from "@/components/molecules/LogoAndSearch";
import { Button, Center, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
const GoogleSearch = ({ onClick }) => {
    const [search, setSearch] = useState("");
    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearch(value.toLowerCase());
    };
    const matches = ["nike", "nike jordan dunk", "nike sb"];
    const filteredSuggestions = matches.filter((match) => match.includes(search));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search === "")
            return;
        if (filteredSuggestions.length === 0)
            return;
        onClick();
    };
    return (_jsxs(Center, { w: {
            base: "95%", // Default for all screens
            sm: "90%", // 480px and above
            md: "80%", // 768px and above
            lg: "70%", // 1024px and above
        }, h: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", children: [_jsx(LogoAndSearch, { search: search, onSubmit: handleSubmit, onInputChange: handleChangeSearch, searchSuggestions: filteredSuggestions, logoPosition: 'centered' }), _jsxs(Container, { mt: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 10, children: [_jsx(Button, { children: "Find with Google" }), _jsx(Button, { children: "I will be lucky" })] }), _jsxs(Text, { as: "p", mt: 20, children: ["Google offered in: ", _jsx(Text, { as: "a", color: "blue.500", children: "English" })] })] }));
};
export default GoogleSearch;
