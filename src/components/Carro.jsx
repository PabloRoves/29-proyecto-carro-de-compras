import { Component } from 'react';
import BubbleAlert from './BubbleAlert.jsx';
import DetallesCarro from './DetallesCarro.jsx';

const styles = {
    carro:{
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component{
    render(){
        const { carro } = this.props;
        const cantidad = carro.reduce((acumulado, producto) => acumulado + producto.cantidad, 0);
            
        //console.log(cantidad);
        return(
            <div>
            <span style={styles.bubble}>
                {
                    cantidad !== 0 
                    ? <BubbleAlert value={cantidad} />
                    : null  
                }    
            </span>
            <button style={styles.carro}>
                Carro
            </button>
            <DetallesCarro carro={carro}/>
            </div>
        )
    }
}

export default Carro;