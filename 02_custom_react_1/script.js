// Custom render function that mimics React's rendering behavior
// Converts a reactElement object into actual DOM nodes
function customRender(reactElement, mainContainer) {

    // Create a DOM element based on the type specified in reactElement
    // (e.g., 'a', 'div', 'h1', etc.)
    const domElement = document.createElement(
        reactElement.type
    );

    // Set the inner HTML content from the Children property
    domElement.innerHTML = reactElement.Children;

    // Iterate through all props and set them as DOM attributes
    // Skip 'Children' prop as it's already handled above
    for (prop in reactElement.props) {
        if(prop === 'Children') continue;
        // setAttribute(name, value) applies HTML attributes to the element
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the created DOM element to the target container
    mainContainer.appendChild(domElement);
}

// Get reference to the root DOM container where React elements will be rendered
const mainContainer = document.getElementById('root')

// Define a React-like element object structure
// type: HTML tag name
// props: object containing HTML attributes
// Children: text content inside the element
const reactElement = {
    type: "a",
    props: {
        href:"https://www.google.com",
        target:"_blank"
    },
    Children: "Click Me !"
}

// Render the reactElement into the DOM
customRender(reactElement, mainContainer)