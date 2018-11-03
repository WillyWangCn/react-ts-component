import * as React from "react";
import { render } from "react-dom";
import Header from "../../src/components/Header";

const App = () => <Header />;
render(<App />, document.getElementById("root"));
