// import styled
import './App.scss';

// import components styles
import { PageContainer } from './components/components.styles.jsx';

// import components
import Header from './components/header/header';
import Profile from './components/profile/profile.jsx'



function App() {
  return (
    <div className="App">
      <PageContainer>
        <Header />
        <Profile />
      </PageContainer>
    </div>
  );
}

export default App;
