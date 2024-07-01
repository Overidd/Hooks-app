// import React from 'react'

// import CaounterApp from "./01-useState/CaounterApp";
// import CounterCustomHook from "./01-useState/CounterCustomHook";
// import SimgleForm from "./02-useEffect/SimgleForm";
// import MultipleCustomHook from "./03-examples/MultipleCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import CallbackHook from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { MemoHooks } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// import { LayoutLoading } from "./05-useLayoutEffect/LayoutLoading";

// import './08-useReducer/intro-reduces'
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from 'react-router-dom'

export default function HooksApp() {
  return (
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
  )
}
