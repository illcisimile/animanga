import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import BreakpointIndicator from './components/BreakpointIndicator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SeasonalAnimeList from './components/SeasonalAnimeList';
import TopAnimeList from './components/TopAnimeList';
import TopMangaList from './components/TopMangaList';

const App = () => {
  return (
    <Layout>
      <BreakpointIndicator />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seasonal' element={<SeasonalAnimeList />} />
        <Route path='/top-anime' element={<TopAnimeList />} />
        <Route path='/top-manga' element={<TopMangaList />} />
      </Routes>
    </Layout>
  );
};

export default App;
