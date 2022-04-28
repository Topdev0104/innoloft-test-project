import Navbar from "./components/layout/Navbar";
import Navigation from "./components/layout/Navigation";
import ProductView from './components/product';

import { Provider } from "react-redux"
import store from "./redux/store";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import tw from "tailwind-styled-components"

function App() {
  const LandPage = tw.div`
  flex
  sm:p-6
  md:p-0
  h-5/6
  `
  const MainPageContent = tw.p`
    text-center
    text-5xl
    w-3/4
  `
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <LandPage >
          <Navigation />
          <Routes>
            <Route exact path="/" element={<MainPageContent>Main Page</MainPageContent>} />
            <Route path="/product" element={<ProductView />} />
          </Routes>
        </LandPage>
      </Router>
    </Provider>
  );
}

export default App;
