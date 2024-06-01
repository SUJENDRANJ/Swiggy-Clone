const head = React.createElement(
  "div",
  { id: "bg" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "From H1 tag"),
    React.createElement("p", {}, "From p"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
