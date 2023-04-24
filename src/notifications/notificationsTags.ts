import OneSignal from "react-native-onesignal";

export function tagLogin() {
  OneSignal.sendTag("login_tag", "1");
}

export function tagDeleteLogin() {
  OneSignal.deleteTag("login_tag");
}
