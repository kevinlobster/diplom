import { Login } from '././pages/login/login';
import { AppList } from './pages/app/appList';
import { LeadTable } from './pages/lead-table/leadTable';
import { Tasks } from './pages/tasks/tasks';
import { Discovery } from './pages/discovery/discovery';
import { Analizer } from './pages/analizer/analizer';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { PageLayout } from './componets/page-layout/pageLayout';
import { CreateLead } from './pages/create-lead/create-lead';
import { CreateScript } from './pages/create-script/create-script';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app-list" element={<AppList />} />
          <Route path="/lead-table" element={<LeadTable />} />
          <Route path="/create-lead" element={<CreateLead />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/create-script" element={<CreateScript />} />
          <Route path="/analizer" element={<Analizer />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App;
