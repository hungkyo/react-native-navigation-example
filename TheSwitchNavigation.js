import ScreenNumberThree from "./ScreenNumberThree";
import { createSwitchNavigator } from "react-navigation";
import ScreenNumberOne from "./ScreenNumberOne";
import ScreenNumberTwo from "./ScreenNumberTwo";

export default createSwitchNavigator({
  screenOne: {
    screen: ScreenNumberOne
  },
  screenTwo: {
    screen: ScreenNumberTwo
  },
  screenThree: {
    screen: ScreenNumberThree
  },
}, {
  initialRouteName: "screenOne",
  headerMode: "screen",
});