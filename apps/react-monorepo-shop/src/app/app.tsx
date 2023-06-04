import React from "react";
import { sumTwoNumbers } from "../../../../libs/utils/src";
import Shop_list from "./shop-list/shop_list";

export function App() {
  console.log(sumTwoNumbers(4, 5))

  return (
    <div className='react-app-wrapper'>
      <div className='header'>React App</div>
      <a href="http://localhost:4200">move to angular app</a>
      <Shop_list/>
    </div>
  );
}

export default App;
