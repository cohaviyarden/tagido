import "./App.css";
import InitCartPage from "./pages/InitCartPage/InitCartPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import VotingPage from "./pages/VotingPage/VotingPage";
import { Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/initCartPage" />} />
      <Route path="/initCartPage" element={<InitCartPage />} />
      <Route path="/resultsPage" element={<ResultsPage />} />
      <Route path="/votingPage" element={<VotingPage />} />
    </Routes>
  );
}

export default App;
