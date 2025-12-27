import { Route, Switch } from "wouter"
import Design1 from "./pages/Design1"
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="design1">
        <Design1 />
      </Route>
      <NotFoundPage />
    </Switch>
  )
}

export default App
