import { App } from "./App";
// import { render } from "react-dom";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Unable to find root element')
const root = createRoot(rootElement)
root.render(<App/>)