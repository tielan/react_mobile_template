import React from 'react';
import { Switch, Route } from "react-router-dom"
import asyncComponent from "@/util/asyncComponent"

const Index = asyncComponent(() => import("@/pages/Index/Index"))

function App() {
  return (
    <Switch>
      <Route path="/" component={Index}></Route>
    </Switch>
  );
}
export default App;
