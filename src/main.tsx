import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import { router } from "./routes/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#ff4d4f",
            },
          }}
        >
          <RouterProvider router={router}></RouterProvider>
        </ConfigProvider>
      </PersistGate>
      <Toaster></Toaster>
    </Provider>
  </StrictMode>
);
