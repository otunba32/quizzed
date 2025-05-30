import Main from "./assets/main";
import Header from "./Header";
import React, { act, useEffect, useReducer } from 'react';

const initialState = {
  questions: [], 

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
}

function reducer(state, action) {
  switch(action.type) {
    case "dataRecieved":
    return {
      ...state,
      questions: action.payload,
      status: "ready"
    };
    case 'dataFailed': 
    return{
      ...state,
      status: "error",
    };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer( reducer, initialState )

  useEffect(function () {
    fetch("http://localhost:8000/questions")
    .then((res) => res.json())
    .then((data) => dispatch({type: "dataRecieved", payload: data }))
    .catch((err) => dispatch({type: "dataFailed"}));
  }, []);


  return (
    <div>
      <div className="app">
        <Header />

      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
      </div>
    </div>
  );
}
