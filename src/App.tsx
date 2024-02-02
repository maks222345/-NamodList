import "./App.css";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { YupForm } from "./components/YupForm";
import { LoginForm } from "./components/LoginForm";
import  Home  from "./Pages/Home/Home";
import { Profile } from "../src/Pages/ProfilePage/Profile"; // Import the Profile component
import { configureStore } from '@reduxjs/toolkit'; 
import { Provider } from 'react-redux';
import { countriesApi } from './Api/countries';



const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});


const App = () => {
const RouterConfig = createBrowserRouter(
[{
  path:"/",
  element: <LoginForm />
},

{
  path:"/yupform",
  element: < YupForm/>
},

{
  path:"/home",
  element: <Home />
},

{
  path:"/profile",
  element: <Profile /> // Use the imported Profile component
},

{
  path:"/profile",
  element: <Profile />
}

]);


  return (
    <Provider store={store}>
      <div>
      <RouterProvider router={RouterConfig}></RouterProvider>
      </div>
</Provider>
  );
}

export default App;
