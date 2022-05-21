import { useState } from 'react';
import Cronometro from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAteriores => tarefasAteriores.map(tarefa => ({
      ...tarefa ,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
