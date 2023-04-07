import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './router/Router';
function App() {
    return (
        <div className="w-screen h-screen m-0 p-0 overflow-x-hidden flex flex-row">
            <BrowserRouter>
                <Header></Header>
                <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
                    <Router></Router>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
