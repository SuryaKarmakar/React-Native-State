# React Native State

## Class Component : 
<p>We can define <b>state</b> into a constructor or a directly in class component</p>

```js
constructor(props){
    super(props);
    this.state = {
        value : 0
    }
}
```
<p>Now accessing the state variable use <b>this.state</b> and updating the state value use <b>this.setState()</b></p>

```js
<Text>{this.state.value}</Text>
<Button
    onPress={() => this.setState({
    value : this.state.value + 1
    })}
    title='Update State'
    color='#841584'
/>
```
## Function Component : 
<p>You can add state to a component by calling React’s <b>useState</b> Hook.First, you will want to import useState from React like so:</p>

```js
import React, { useState } from 'react';
```
<p>Then you declare the component’s state by calling useState inside its function. In this example, useState creates an <b>count</b> state variable.we can set default value on our state variable into <b>useState(0)</b></p>

```js
const [count, setCount] = useState(0);
```
<p>Now updating the state value use <b>setCount()</b></p>

```js
<Text>{count}</Text>
<Button
    onPress={()=> setCount(count + 1)}
    title="Update State"
    color='#841584'
/>
```
## Usage
```
 $ git clone https://github.com/SuryaKarmakar/React-Native-State.git
 $ cd React-Native-State
 $ npm install 
 $ npm run [web, android, ios]
```
## Run with Expo 
```
 $ expo start --[web, android, ios]
```

