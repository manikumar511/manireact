
const parent = 
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1"),React.createElement("h1",{},"I am h1")]);
    console.log(parent);
const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello!!"
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
