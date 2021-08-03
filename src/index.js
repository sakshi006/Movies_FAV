import React, { createContext } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./Components/App";
import rootReducer from "./reducers";

//  functionn logger(obj,next,action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      // console.log("ACTION_TYPE=", action.type);
    }
    next(action);
  };

// middlewares
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("STORE IS HERE", store);
// console.log(store.getState(), "before");

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log(store.getState(), "after");

// export const storeContext = createContext();
// console.log("storeContext", storeContext);
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//     );
//   }
// }

// const connectedComponent = connect(callback)(App)
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <storeContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </storeContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
