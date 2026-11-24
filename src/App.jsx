import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import appStore from "./store/appStore";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      // Children goes where the outlet is
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <RouterProvider router={appRouter}></RouterProvider>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
