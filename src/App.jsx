import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import UploadVideo from "./pages/UploadVideo";
import VideoList from "./pages/VideoList";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Default route */}
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route
        path="/upload"
        element={token ? <UploadVideo /> : <Navigate to="/login" />}
      />
      <Route
        path="/videos"
        element={token ? <VideoList /> : <Navigate to="/login" />}
      />
      <Route
        path="/videos/:id"
        element={token ? <VideoPlayer /> : <Navigate to="/login" />}
      />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected route (placeholder for now) */}
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
