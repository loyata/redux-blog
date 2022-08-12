import './App.css';
import Posts from "./components/Posts/Posts";
import AddPostForm from "./components/Posts/AddPostForm";

function App() {
  return (
    <div className="App">
        <AddPostForm/>
        <Posts/>
    </div>
  );
}

export default App;
