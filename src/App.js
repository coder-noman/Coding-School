import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Courses from './components/courses/Courses'
import NotFound from './components/notFound/NotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './components/blog/Blog';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/about">
          <About></About>
          </Route>
          <Route exact path="/courses">
          <Courses></Courses>
          </Route>
          <Route exact path="/blog">
          <Blog></Blog>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
</div>
  );
}

export default App;
