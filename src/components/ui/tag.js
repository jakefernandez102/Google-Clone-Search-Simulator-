import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tag as ChakraTag } from "@chakra-ui/react";
import * as React from "react";
export const Tag = React.forwardRef(function Tag(props, ref) {
    const { startElement, endElement, onClose, closable = !!onClose, children, ...rest } = props;
    return (_jsxs(ChakraTag.Root, { ref: ref, ...rest, children: [startElement && (_jsx(ChakraTag.StartElement, { children: startElement })), _jsx(ChakraTag.Label, { children: children }), endElement && (_jsx(ChakraTag.EndElement, { children: endElement })), closable && (_jsx(ChakraTag.EndElement, { children: _jsx(ChakraTag.CloseTrigger, { onClick: onClose }) }))] }));
});
