import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import NewsDetail from "./pages/NewsDetail/index";
import Home from "./pages/Home/index";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/newsdetail" element={<NewsDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>

  );
}

export default App;
