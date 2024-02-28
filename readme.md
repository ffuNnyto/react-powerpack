
# react-powerpack

react-powerpack useful components & hooks


## Installation


## Documentation

[Documentation](https://react-powerpack-docs.pages.dev/)

---


Install react-powerpack with npm

```bash
  npm install react-powerpack
```

---
    
## Usage/Examples

#### <Show,Each/>

```typescript
import { Show, Each } from 'react-powerpack';



function App() {

  const [visible,setVisible] = useState(false)
  const [nums,setNums] = useState([0,1,2,3,4,5])

  return (
    <Show>
      <Show.When isTrue={visible}>
        <Each of={nums} render={(num, index) => 
          <div>
           render {num}
          </div>
         
        } />
      </Show.When>
      <Show.Else>
        visible is false
      </Show.Else>
    </Show>
  )
}
```

#### <ClickOutsideComponent/>

```typescript
import { ClickOutsideComponent } from 'react-powerpack';



function App() {



  return (
    <div>
      <ClickOutsideComponent onClickOutside={() => console.log("CLICK OUTSIDE")}>
          <div onClick={() => console.log("CLICK INSIDE")} style={{ border: '2px solid black', width: 200, height: 50 }}>hello</div>
      </ClickOutsideComponent>
    </div>
  )
}
```

#### useApi

```typescript
export function App() {
  let { request, data} = useApi('https://randomuser.me/api/', 'get')
  //let { request, data, error } = useApi('https://randomuser.me/api/', 'get')
  //let { request, data, error } = useApi('https://randomuser.me/api/', 'get', { useCredentials: true, authorization: { scheme: 'Bearer', token: 'YOUR_TOKEN' } })    
  return (
    <Show>
      <Show.When isTrue={data !== null}>
        {JSON.stringify(data, null, 2)}
      </Show.When>
      <Show.Else>
        <div>request error</div>
      </Show.Else>
    </Show>
      )
  }

```
#### useAsync

```typescript

import {useAsync} from 'react-powerpack';

const UserComponent = () => {
 
  const fetchUserData = async () => {
   
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return response.json();
  };

 
  const { isLoading, error, result } = useAsync(fetchUserData, []);

  return (
    <div>
      {isLoading && <p>Loading user data...</p>}
      {error && <p>Error: {error.message}</p>}
      {userData && (
        <div>
          {result}
        </div>
      )}
    </div>
  );
};

```
#### useLastCallback

```typescript


import {useLastCallback} from 'react-powerpack';
export function App() {

  const [count, setCount] = useState(0);
  
  const increment = () => {
          setCount(prevCount => prevCount + 1);
  }
  
  const lastIncrement = useLastCallback(increment);
  
  return (
          <div className='p-5 items-center border-2 rounded-xl flex'>
              <p >Count: {count}</p>
              <button variant='secondary' onClick={increment}>Increment</button>
              <button variant='secondary' onClick={lastIncrement}>Last Increment</button>
          </div>
                
    )
}


export default SearchBar;

```
#### useTimeout
```typescript

import {useTimeout} from 'react-powerpack';

const MessageComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

 
  const showMessageAfterDelay = () => {
    setShowMessage(true);
  };

  // Use useTimeout to show the message after 3 seconds
  useTimeout(showMessageAfterDelay, 3000);

  return (
    <div>
      {showMessage && <p>Message displayed after 3 seconds!</p>}
    </div>
  );
};

export default MessageComponent;

```

#### useDisclosure,useToggle
```typescript

import {useToggle,useDisclosure} from 'react-powerpack';

const [isToggled, toggle] = useToggle(false);

const { isOpen, open, close, toggle } = useDisclosure();



  return (
    <div>

     useToggle ->
          <button onClick={toggle}>Toggle</button>
          {isToggled ? <div>Toggle is ON</div> : <div>Toggle is OFF</div>} 

      useDisclosure - >

          <div>
            <button onClick={open}>Open Modal</button>
            <button onClick={close}>Close Modal</button>
            <button onClick={toggle}>Toggle Modal</button>
            {isOpen && (
              <div style={{ border: '1px solid black', padding: '10px' }}>
                Modal content
              </div>
            )}
          </div>

    </div>
  );
};

export default MessageComponent;

```






## List components

component  | description
------------- | -------------
Show  | Conditional Renderer
Each  | Dynamic List Renderer
ClickOutsideComponent | Component for handling external clicks
TextFit | AutoResizable custom text
More... | Documentation
## List hooks

hook  | description
------------- | -------------
useApi  | Custom Axios Hook
useAsync  |  Handles asynchronous operations
useLastCallback  |  Remembers the last callback function
useTimeout  |  Executes a function after a delay
useClickOutside | Hook for detecting clicks outside
useDisclosure | Manage modal or panel visibility
useToggle | Toggle boolean state
useLocalStorage | Manage localStorage events
More... | Documentation
