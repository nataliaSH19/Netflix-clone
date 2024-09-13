import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authUser.js"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import WatchPage from "./pages/home/WatchPage.jsx"
import SearchPage from "./pages/home/SearchPage.jsx"
import HistoryPage from "./pages/home/HistoryPage.jsx"
import NotFoundPage from "./pages/home/NotFoundPage.jsx"


function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();



  useEffect(() => {
    authCheck()
  }, [authCheck])
  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <Loader className="animate-spin text-red-600 size-10" />
      </div>
    )
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to={"/"} />} />
        <Route path="/watch/:id" element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
        <Route path="/search" element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
        <Route path="/history" element={user ? <HistoryPage /> : <Navigate to={"/login"} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>


      <Toaster />
    </>



  )
}

export default App
