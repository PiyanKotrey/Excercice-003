
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const App = () => {
    return <ProductList />;
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  return (
    <div>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
