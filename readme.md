
# react-powerpack

react-powerpack useful components & hooks


## Installation

Install react-powerpack with npm

```bash
  npm install react-powerpack
```
    
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
    </Show>
  )
}
```

#### useApi

```typescript
import { useApi } from 'react-powerpack';

let customRequest = useApi('https://randomuser.me/api/', 'get', { useCredentials: true })

let { request, data, error } = useApi('https://randomuser.me/api/', 'get')

let { request, data, error } = useApi('https://randomuser.me/api/', 'get', { useCredentials: true, authorization: { scheme: 'Bearer', token: 'YOUR_TOKEN' } })

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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const search = async (term) => {
    
    console.log('Searching for:', term);
  };

  
  const debouncedSearch = useLastCallback(search);

 
  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

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



## List components

component  | description
------------- | -------------
Show  | Conditional Renderer
Each  | Dynamic List Renderer

## List hooks

hook  | description
------------- | -------------
useApi  | Custom Axios Hook
useAsync  |  Handles asynchronous operations
useLastCallback  |  Remembers the last callback function
useTimeout  |  Executes a function after a delay