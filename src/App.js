import logo from './logo.svg';
import './App.css';
import CadastroDespesa from './componentes/CadastroDespesa'
import ResumoDespesasMes from './componentes/ResumoDespesasMes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Novo Despesas</h1>
      </header>
      <ResumoDespesasMes></ResumoDespesasMes>
      <hr/>
      <CadastroDespesa></CadastroDespesa>
    </div>
  );
}

export default App;
