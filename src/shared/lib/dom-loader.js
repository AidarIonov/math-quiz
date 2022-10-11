
const renderElement = (htmlTemplate) => {
    const domParser = new DOMParser();
    return domParser.parseFromString(htmlTemplate, "text/html");
};


const addElement = (node) => {
    const appContainer = document.getElementById("root");
    return appContainer.appendChild(node);
};

const setElement = (node) => {
    const appContainer = document.getElementById("root");
    while (appContainer.lastChild) {
        appContainer.removeChild(appContainer.lastChild);
    }

    appContainer.appendChild(node);
};


export const DomLoader = {
    renderElement,
    addElement,
    setElement
};