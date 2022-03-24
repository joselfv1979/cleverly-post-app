import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Contact from "./views/Contact";
import PostList from "./views/PostListView";
import PostEditView from "./views/PostEditView";
import Message from "./components/Message";
import LoginView from "./views/LoginView";
import "./App.scss";

function App() {  

  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Message />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<PostList />}></Route>
            <Route path="/post-edit/:id" element={<PostEditView />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
