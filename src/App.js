import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import GoogleSearch from "./Views/GoogleSearch";
import Results from "./Views/Results";
const PageDictionary = {
    googleSearch: GoogleSearch,
    nikeResults: Results
};
function App() {
    const [page, setPage] = useState('googleSearch');
    const Component = PageDictionary[page];
    const onNextPage = useCallback(() => {
        const newPage = page === 'googleSearch' ? 'nikeResults' : 'googleSearch';
        setPage(newPage);
    }, [page, setPage]);
    return (_jsx(_Fragment, { children: _jsx(Component, { page: page, onClick: onNextPage }) }));
}
export default App;
