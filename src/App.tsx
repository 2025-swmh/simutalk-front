import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Chat, Home, Report, ReportDetail } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/report/:id" element={<ReportDetail />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
