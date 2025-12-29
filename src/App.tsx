import { Route, Switch } from "wouter"
import Design1 from "./pages/Design1/Design1"
import Home from "./pages/Home"
import Pulse from "./pages/Pulse"
import PulseMinimal from "./pages/PulseMinimal/PulseMinimal"
import PulseVibrant from "./pages/PulseVibrant"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/design1">
        <Design1 />
      </Route>
      <Route path="/pulse/:rest*">
        <Pulse />
      </Route>
      <Route path="/pulse-minimal">
        <PulseMinimal />
      </Route>
      <Route path="/pulse-vibrant">
        <PulseVibrant />
      </Route>
      <NotFoundPage />
    </Switch>
  )
}

export default App
