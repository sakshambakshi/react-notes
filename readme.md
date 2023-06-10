**Table of Contents**

[TOC]

## React Topic

### React Hooks

### React Strict Mode 

This deal with the strict mode 

### React Lifecycle

### Hooks lifecycle 

### React Context Api
### React Design Pattern

### React Error Handling
## React Router


### Introduction and BrowserRouter
This notes cover **v6** version and its


The whole philosphy is to give you a nice **declartive and composable API around navigartion history**  . So its need to be **aware and control of apps location** .

Under the hood it uses both **history library and the context library** , The HIstory library keeps track of the history and context service provides all the history anywhere in the react application whic nested  under the **BrowserRouter** (it's common pratice to be named and used as **Router**).

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

### Types of Router 


Kindly visit [Docs](https://reactrouter.com/en/main/routers/picking-a-router "Docs")
 

There are vaarious kind of routers like :
- BrowserRouter: It uses builtin browser support.  [Click](https://reactrouter.com/en/main/router-components/browser-router) 
- HashRouter : It is usewd in cases where url is not to be sended to the server (We strongly recommend you do not use HashRouter unless you absolutely have to.) [Click](https://reactrouter.com/en/main/router-components/hash-router),
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

Its one of the most imporant part in navigation as deals with the coupling of the **url segment ==> COMPOnent** (in english it maps ofr what url what component will be opened) and more provide with **data loading** and **data  mutation**.

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

## Redux

### Redux Saga

### Redux Toolkit

### Redux Helmet


### Redux Thunk


## React query
