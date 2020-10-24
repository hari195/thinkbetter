var React = require("react");

// Hack, to reorder the helmet components as first in <head> tag
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    
    const headComponents = getHeadComponents();

    headComponents.sort((a, b) => {
        if (a.props && a.props["data-react-helmet"]) {
            return 0;
        }
        return 1;
    });
    replaceHeadComponents(headComponents);
};