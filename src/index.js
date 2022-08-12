import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import {store} from "./app/store.js"
import {Provider} from "react-redux";
import {fetchUsers} from "./components/Users/UsersSlice";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {fetchPosts} from "./components/Posts/postsSlice";

store.dispatch(fetchUsers())
store.dispatch(fetchPosts());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>

          <BrowserRouter>
              <Routes>
                  <Route path="/*" element={<App/>}/>
              </Routes>
          </BrowserRouter>

      </Provider>
  </React.StrictMode>
);


