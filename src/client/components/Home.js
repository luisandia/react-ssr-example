import React from 'react';
import { AsyncUsersList } from './AsyncUsersList';

const Home = () => {
    return (
        <div>
            <div>I'm the home component</div>
            <button onClick={()=>console.log('Hi there')}>Click me</button>
        </div>
    )
}
export default Home;