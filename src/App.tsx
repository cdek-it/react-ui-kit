import './App.scss'
import { Button } from 'primereact/button';
import {InputText} from "primereact/inputtext";
import {Header} from "./Header.tsx";

function App() {
  return (
    <>
      <Header />

      <div className="list">
        <Button>Test</Button>
        <InputText />
      </div>
    </>
  )
}

export default App
