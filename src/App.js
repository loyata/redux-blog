import './App.css';
import Posts from "./components/Posts/Posts";
import AddPostForm from "./components/Posts/AddPostForm";
import {Link, Routes, Route} from "react-router-dom";
import Layout from "./components/Posts/Layout";
import SinglePost from "./components/Posts/SinglePost";
import Header from "./components/Header/Header";
import EditPostForm from "./components/Posts/EditPostForm";





function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Posts/>}/>
                <Route path="posts">
                    <Route path="new" element={<AddPostForm/>}/>
                    <Route path=":id" element={<SinglePost/>}/>
                    <Route path=":id/edit" element={<EditPostForm/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
