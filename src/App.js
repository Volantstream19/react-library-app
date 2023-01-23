import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <h2>I see that you have made it to my catalog</h2>
      <h3>Click the link below to browse the catalog</h3>
      <Switch>
        <Route path="/books/:id">
          <BookDetail />
        </Route>

        <Route path="/books">
          <Link exact to="/">
            Home
          </Link>
          <BookList />
        </Route>

        <Route path="/">
          <Link to="/books">Books</Link>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
