**Table of Contents**

[TOC]

## React Topic

### React Hooks

### React Lifecycle
### React Context Api
### React Design Pattern


## React Router

This notes cover **v6** version and its


The whole philosphy is to give you a nice **declartive and composable API around navigartion history**  . So its need to be **aware and control of apps location** .

Under the hood it uses both **history library and the context library** , The HIstory library keeps track of the history and context service provides all the history anywhere in the react application whic nested  under the **BrowserRouter** (it's common pratice to be named and used as **Router**).

It is imported from the `react-router-dom`

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



### Routes
### Route
### Type of Router
### Outlet



## Redux

### Redux Saga

### Redux Toolkit

### Redux Helmet


### Redux Thunk


## React query
