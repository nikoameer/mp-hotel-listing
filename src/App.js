import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import About from './pages/About.js'
import Hotels from './pages/Hotels.js';
import Layout from './components/Layout.js';

/*
**  Using Router to bulit in nested route and swtich between two paths Hotels & About component.
*/
function App () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Hotels />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
