import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import esES from "antd/lib/locale/es_ES"
import RoutingLogin from './routes/RoutingLogin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      locale={ esES }
    >
      <RoutingLogin>
         <App />
      </RoutingLogin>
    </ConfigProvider>
  </StrictMode>,
)
