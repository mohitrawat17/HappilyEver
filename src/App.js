import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import Bot from "./components/Bot";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/bot',
          element:<Bot/>
        }
      ]
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
export default App;
