
import './App.css'
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Dashboard from "./pages/dashboard/index"
import {Auth} from "./pages/auth/index"
import { FinancialRecordsProvider } from "./contexts/financial-records-context";
import { SignedIn, UserButton } from '@clerk/clerk-react';
import {dark} from "@clerk/themes"
function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton  showName appearance={{baseTheme:dark}}/>
          </SignedIn>
        </div>
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
      </div>
    </BrowserRouter>
  );
}

export default App
