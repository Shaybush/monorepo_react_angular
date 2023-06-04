import { sumTwoNumbers } from '@angular-monorepo-todo/utils';

export function App() {
  console.log(sumTwoNumbers(4, 5))
  return (
    <div className='react-app-wrapper'>
      <div className='header'>React App</div>
      <a href="http://localhost:4200">move to angular app</a>
    </div>
  );
}

export default App;
