// const head = document.createElement("h1");
// head.innerHTML = "JS";
// const root = document.getElementById("root");
// root.appendChild(head);

const heading = React.createElement("h1", { id: "bg", xyz: "abs" }, "React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);
