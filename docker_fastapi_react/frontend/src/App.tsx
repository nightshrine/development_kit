import { useState } from 'react';
import './App.css';
import { MessageService } from '@/services/GetHelloWorldService';

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const getMessage = async () => {
        // マスタ初期化APIを呼び出す
        const message: string = await MessageService.getMessage();
        setMessage(message);
    };

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => getMessage()}>Get Message</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                {message && <p>{message}</p>}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
