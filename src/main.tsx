import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.tsx'
import AuthProvider from './components/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
    </React.StrictMode>,
)
