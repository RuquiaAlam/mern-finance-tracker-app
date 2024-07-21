
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/dashboard/index"
import {Auth} from "./pages/auth/index"
import { FinancialRecordsProvider } from "./contexts/financial-records-context";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
