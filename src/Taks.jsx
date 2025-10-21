import './Taks.css'

export function TaksCard({ready}){

    const cardStyle = {
        background: "#202020",
        color: '#fff',
        padding: '20px',
    }

    const titleStyle = {
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    }

    const parrafo = {
        color: 'white',
    }

    return <div className='card'>
        <h1 className='title'>My first workshop</h1>
        <p style={parrafo}>
            <span style={ready ? {background: 'green'} : {background:'red'}}>{ready ? 'Tarea realizada': 'Tarea Pendiente'}</span>
            
        </p>
        <p>
            <span className={ready ? 'bg-green': 'bg-red'}>
                {ready ? 'Tarea realizada': 'Tarea Pendiente'}
            </span>
        </p>
    </div>
}