import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./components/MyComponent.jsx";
import GetOtpButton from "./components/GetOtpButton.jsx";

const CLASS_TO_RENDER = "react-root";
// Danh sách các component React
const components = {
    MyComponent,
    GetOtpButton,
};

document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll("." + CLASS_TO_RENDER);
    nodes.forEach((node) => {
        const ComponentName = node.getAttribute("data-component");
        const Component = components[ComponentName];
        if (Component) {
            ReactDOM.render(<Component />, node);
        }
    });
});
