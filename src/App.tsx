import { Route, Switch } from "wouter"
import Design1 from "./pages/Design1/Design1"
import Home from "./pages/Home"
import Pulse from "./pages/Pulse"
import PulseMinimal from "./pages/PulseMinimal/PulseMinimal"
import PulseVibrant from "./pages/PulseVibrant"
import MobilePoker from "./pages/MobilePoker"
import PlayingCards from "./pages/PlayingCards/PlayingCards"
import HostDeviceUI from "./pages/HostDeviceUI/HostDeviceUI"
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
      <Route path="/mobile-poker">
        <MobilePoker />
      </Route>
      <Route path="/playing-cards">
        <PlayingCards />
      </Route>
      <Route path="/host-device-ui">
        <HostDeviceUI />
      </Route>
      <NotFoundPage />
    </Switch>
  )
}

export default App
