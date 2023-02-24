import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import ClientOnboarding from './Pages/clientOnboarding';
import ClientOnboarding2 from './Pages/ClientOnboarding2';
import AuditLogs from './Pages/AuditLogs';
import TableGroup from './Pages/TableGroup';
import BalanceSheetTable from './Pages/BalanceSheetTable';
import TopLogo from './Common/TopLogo';
import Main from './Pages/Main';
import PrepareCFS from './Pages/PrepareCFS';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        {/* <TopLogo /> */}

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/PrepareCFS" element={<PrepareCFS />}></Route>
          <Route
            path="/clientOnboarding"
            element={<ClientOnboarding />}
          ></Route>
          <Route
            path="/ClientOnboarding2"
            element={<ClientOnboarding2 />}
          ></Route>
          <Route path="/AuditLogs" element={<AuditLogs />}></Route>
          <Route
            path="/BalanceSheetTable"
            element={<BalanceSheetTable />}
          ></Route>
          <Route path="/TableGroup" element={<TableGroup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
