import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import App from './App';
const config = defineConfig({
    ...defaultConfig,
    utilities: {
        ...defaultConfig.utilities,
    },
    conditions: {
        ...defaultConfig.conditions,
    },
    cssVarsRoot: defaultConfig.cssVarsRoot,
    cssVarsPrefix: defaultConfig.cssVarsPrefix,
    disableLayers: defaultConfig.disableLayers,
    globalCss: {
        ...defaultConfig.globalCss,
    },
    layers: {
        ...defaultConfig.layers,
    },
    preflight: defaultConfig.preflight,
    theme: {
        ...defaultConfig.theme,
        breakpoints: {
            ...defaultConfig.theme.breakpoints,
        },
        tokens: {
            ...defaultConfig.theme.tokens,
            colors: {
                ...defaultConfig.theme.tokens.colors,
            },
        },
        layerStyles: {
            ...defaultConfig.theme.layerStyles,
            searchSuggestions: {
                display: 'none',
            },
        },
    },
});
const system = createSystem(config);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(ChakraProvider, { value: system, children: _jsx(App, {}) }) }));
