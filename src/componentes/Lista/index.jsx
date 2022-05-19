import './style.scss'

function Lista(){
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '00:30:00'
        }
    ]
    return(
        <aside className="listaTarefa">
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className='item'>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
export default Lista;