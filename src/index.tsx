import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from './providers/index'
import Home from "./pages/Home";
// import 'antd/dist/antd.css'

const App = () => (
    <ApolloProvider>
        <Home />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.querySelector('#root'));

