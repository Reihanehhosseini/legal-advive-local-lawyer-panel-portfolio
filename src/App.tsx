import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import ScrollTop from "./components/scrollTop/ScrollTop";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <ScrollTop />

      {router}
    </>
  );
}

export default App;
