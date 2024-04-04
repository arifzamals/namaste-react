/**
 *<div id"parent>
 *
 *</div>
 *
 *
 *
 *
 */

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "as" }, "first h1 tag"),
    React.createElement("h1", { key: "asv" }, "second h1 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
