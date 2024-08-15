import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import "react-chat-elements/dist/main.css";
import { useUserStoreHook } from "./store/useUserStore.js";

function App() {
  const isLoggedIn = useUserStoreHook.useIsLoggedIn();
  const router = createRouter({ routeTree });

  return <RouterProvider router={router} context={{ isLoggedIn }} />;
}

export default App;
