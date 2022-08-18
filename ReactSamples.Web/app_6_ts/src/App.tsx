import * as React from 'react';

import './App.css';
import Todos from './components/Todos';


function App() {
    return <Todos items={["Apples", "Pears", "Stairs"]} />
}

export default App;
