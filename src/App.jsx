import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import "react-chat-elements/dist/main.css";

function App() {
  const router = createRouter({ routeTree });

  return <RouterProvider router={router} />;
}

export default App;
