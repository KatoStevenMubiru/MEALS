import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Restaurantscreens } from "./scr/features/restaurants/screens/restaurants-screens";


export default function App() {
  return (
    <>
      <Restaurantscreens/>

      <ExpoStatusBar style="auto" />
    </>
  );
}

