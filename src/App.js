import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ]);
  return (
    // <div className="bg-red-600">
    // <h1>Hello</h1>
    // </div>
    <>
    <Header/>
    <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
