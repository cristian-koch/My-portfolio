// import styled
import './App.scss';

// import components styles
import { PageContainer } from './components/components.styles.jsx';

// import components
import Header from './pages/header/Header.jsx';
import Profile from './pages/profile/Profile.jsx';
import Learning from './pages/learning/Learning.jsx';
import Projects from './pages/projects/Projects.jsx';
import About from './pages/about/About.jsx';


function App() {
  return (
    <div className="App">
      <PageContainer>
        <Header />
        <Profile />
        <Learning />
        <Projects />
        <About />
      </PageContainer>
    </div>
  );
}

export default App;
