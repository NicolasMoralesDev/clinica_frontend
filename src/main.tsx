import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ConfigProvider } from "antd"
import esES from "antd/lib/locale/es_ES"
import RoutingLogin from "./routes/RoutingLogin.tsx"
import { QueryClient, QueryClientProvider } from "react-query"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={ esES }>
    <QueryClientProvider client={ queryClient }>
      <RoutingLogin>
        <App />
      </RoutingLogin>
    </QueryClientProvider>
  </ConfigProvider>
);
