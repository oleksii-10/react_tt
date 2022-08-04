import { HashRouter, Route, Routes } from 'react-router-dom';
import { NotFound, UserDetails, Users } from './pages';
import { Layout } from './components';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Users />}/>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:login" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
