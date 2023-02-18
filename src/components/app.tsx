import { h } from "preact";
import Router, { Route } from "preact-router";

import Banner from "@/components/banner";
import Hero from "@/pages/hero";

const App = () => {
  return (
    <>
      <Banner />
      <div class="wrapper">
        <Router>
          <Route path="/" component={Hero} />
        </Router>
      </div>
    </>
  );
};

export default App;
