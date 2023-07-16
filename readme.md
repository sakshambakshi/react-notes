- [React Topic](#react-topic)
  - [React State Management](#react-state-management)
  - [Props Type Validation Example](#props-type-validation-example)
  - [React Strict Mode](#react-strict-mode)
  - [React Pure And Impure Componenet](#react-pure-and-impure-componenet)
  - [React Ref](#react-ref)
    - [React Foward Ref](#react-foward-ref)
  - [React Hooks](#react-hooks)
  - [React Hook flow](#react-hook-flow)
  - [React Portal](#react-portal)
  - [React Lifecycle](#react-lifecycle)
  - [Hooks lifecycle](#hooks-lifecycle)
  - [React Context Api](#react-context-api)
  - [React Design Pattern](#react-design-pattern)
  - [React Error Handling](#react-error-handling)
- [React Router](#react-router)
  - [Introduction and BrowserRouter](#introduction-and-browserrouter)
  - [Immer js](#immer-js)
  - [Types of Router](#types-of-router)
  - [Route](#route)
  - [Routes](#routes)
  - [Type of Router](#type-of-router)
  - [Outlet](#outlet)
  - [useSearchParams()](#usesearchparams)
  - [Navigate](#navigate)
  - [useNavigate()](#usenavigate)
  - [useRoutes()](#useroutes)
  - [Learn about Nested Routes](#learn-about-nested-routes)
  - [Learn about Recursion Routes](#learn-about-recursion-routes)
- [Redux](#redux)
  - [Redux Saga](#redux-saga)
  - [Redux Toolkit](#redux-toolkit)
  - [Redux Helmet](#redux-helmet)
  - [Redux Thunk](#redux-thunk)
- [React query](#react-query)
    - [Some common pratices](#some-common-pratices)


---
## React Topic

### React State Management
state-colocation https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster

### Props Type Validation Example

```js
function Message({message}){
    return (
        <div className="message">{message}</div>
    )
}

Message.propTypes = {
    message(props , prop , componentName){

    }
} 
// prop-types
Message.propTypes = {
    message: PropTypes.string 
}
```

### React Strict Mode 

The React library provides us with the <StrictMode></StrictMode> component it does give you extra warning on the common bugs.

In the **dev env** ~~not in **production env**~~ it adds these kind of behaviour:

- It re-renders a component with extra time so that to detect impure rendering . 
- It runs a **useEffect** with extra time to find out the whether you are cleaning up the component.
- It will be check and warn whether you are using the depricated API'S .

### React Pure And Impure Componenet

### React Ref
#### React Foward Ref

Just consider if you want Componnet areound Text input element and suddenly you find the task or case in which from its parent element you want to controll input element lets just say you want to focus it so with the help of fowardRef a Custom component can take a ref and tag it on that DOM Element and you can controll you element (Input element in this case)  thinking it like you are fowarding your **REF** to nested componnet and contoll its html element from your parent.

### React Hooks


### React Hook flow
https://egghead.io/lessons/react-understand-the-react-hook-flow


### React Portal








### React Lifecycle

### Hooks lifecycle 

### React Context Api
### React Design Pattern

### React Error Handling
## React Router


### Introduction and BrowserRouter
This notes cover **v6** version and its


The whole philosphy of react router library  is to give you a nice **declartive and composable API around navigation history**  . So its need to be **aware and control of apps location** .

Under the hood it uses both **history library and the context library** working together  , The History library keeps track of the history and context service provides all the history (all the history data ) of  anywhere in the react application which is  nested  under the **BrowserRouter** (it's common pratice to be named and used as **Router**).

It is imported from the `react-router-dom`

Kindly visit [Docs](https://reactrouter.com/en/main/router-components/browser-router "Docs")
 
```js

import * as React from "react"

import {BrowserRouter as Router} from "react-router-dom";



export default function (){

    return (
        <Router> {/*This is the browser router whoc all application is wrap around it*/}
            <div></div>
        </Router>
    )

}

```
---
### Immer js

[Docs](https://immerjs.github.io/immer/)

### Types of Router 


Kindly visit [Docs](https://reactrouter.com/en/main/routers/picking-a-router "Docs")
 

There are various kind of routers like :
- BrowserRouter: It uses built-in browser support API's and its build for browser envuironment only.  [Click](https://reactrouter.com/en/main/router-components/browser-router) 
- HashRouter : It is used in cases where url is not to be sended to the server (We strongly recommend you do not use HashRouter unless you absolutely have to.) [Click](https://reactrouter.com/en/main/router-components/hash-router),
- Native Router  [Click](https://reactrouter.com/en/main/router-components/native-router)
- Memory Router : It stores internally and dont need browser history api and maintains in memeory usefuk for testing and where you dont want to share something[Click](https://reactrouter.com/en/main/router-components/memory-router)
- Static Router : Used in node js  [Click](https://reactrouter.com/en/main/router-components/static-router)



The new Data Apis are also supported 
 - createBrowserRouter
 - createMemoryRouter
 - createHashRouter
 - createStaticRouter

### Route
It is imported from the `react-router-dom`

Kindly visit [Docs](https://reactrouter.com/en/main/route/route "Docs")

Its one of the most impotant part in navigation as it deals with the coupling of the **"url segment" ==> COMPOnent** (in english it means that its  maps or create realtion between url segment and  the  component will be opened/ rendered) and more provide with **data loading** and **data  mutation**.

They can now be passes as an object with a method called **createBrowserRouter** [Docs](https://reactrouter.com/en/main/routers/create-browser-router)



```js
interface RouteObject {
  path?: string; // url segment 
  index?: boolean; // if a particular route is and index
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;// If a particular route needs to display data it can be fetched and access using useLoaderData(); 
  action?: ActionFunction;  
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"]; // read about useMatch its really helpful in case like breadcumb where parent wants to see child
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>; // it is really helpful for optimatization and cod-splilliting
}
```


### Routes
These used to group the Route 
### Type of Router
### Outlet

```jsx
// just an easy shortcut
<Route
    element={
        <div>
            <h1>Layout</h1>
            <Outlet />
        </div>
    }
>
<Route path="/" element={<h2>Home</h2>} /> 
<Route path="/about" element={<h2>About</h2>} /> 


</Route>
```

### useSearchParams() 

This will get you the search params  from the URL like /?q=1&b=2

```js
const [searchParams , setSearchParams] = useSearchParams();
const [q , b] = [searchParams.get('q') ,searchParams.get('b') ,  ]
// searchParams => get search parameter using get method
// setSearchParams => update search parameter
console.log({q , b})

```
--- 
### Navigate 
This below is the way to navigate via declartive way
```js
 <Navigate to='newPath'/> 
 ```
  helps you navigate via declartive way

---
### useNavigate()
This is used to programitically navigate to a different page

---

### useRoutes()



### Learn about Nested Routes
---

### Learn about Recursion Routes 

---
## Redux

### Redux Saga
[Docs](https://redux-saga.js.org/)

Its a library which basically deals with the side effect like async action and its redux middleware
The redux saga uses the concept of js called generator function. [Click](https://github.com/sakshambakshi/js-topic/blob/main/readme.md#generator-in-js)

- The main use cases of redux saga is to handle side effects and its a complete sperate thread that handle all these things 


- The redux saga uses generator to make the async part of your code looks write sync

- At the end of the day its just redux middleware rememeber that 


The sagas are distrubeuted code is structured into two types 
- Watcher:It tracks all the action dispatch if a action comes which the saga is told to handle it gives it to work saga 
- Worker: handles it


```js
export function* watchGetProducts(){
    yield takeEvery('GET_ALL_PRODUCT' , getAllProduct)
}


export function* getAllProduct(){
    const proucts = yield call(API_URL_TO_GET_PRODUCTS)
    yield put(action.recieveProducts(products))
}



```



### Redux Toolkit

### Redux Helmet


### Redux Thunk


## React query
#### Some common pratices

- https://kentcdodds.com/blog/stop-using-isloading-booleans
- https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching
- Error ErrorBoundary
Production deploy

You might notice that with the changes we've added, we now cannot recover from an error. For example:

Type an incorrect pokemon
Notice the error
Type a correct pokemon
Notice it doesn't show that new pokemon's information
The reason this is happening is because the error that's stored in the internal state of the ErrorBoundary component isn't getting reset, so it's not rendering the children we're passing to it.

So what we need to do is reset the ErrorBoundary's error state to null so it will re-render. But how do we access the internal state of our ErrorBoundary to reset it? Well, there are a few ways we could do this by modifying the ErrorBoundary, but one thing you can do when you want to reset the state of a component, is by providing it a key prop which can be used to unmount and re-mount a component.

- reset error boundary
- https://kentcdodds.com/blog/dont-sync-state-derive-it
- https://github.com/reactwg/react-18/discussions/21
- https://kentcdodds.com/blog/inversion-of-control
- https://www.youtube.com/watch?v=XNT5BozA9HA
- https://www.youtube.com/watch?v=MSq_DCRxOxw
---

