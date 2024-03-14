import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'
const style={
    carro:{
        backgroundColor:'#2b4125',
        border:'none',
        borderRadius:'5px',
        color:'#fff',
        cursor:'pointer',
        padding:'10px 15px',
    },
    bubble:{
        left:'12px',
        top:'20px',
        position:'relative',
    }
}
class Carro extends Component {
    render() { 
        const {carro,esCarroVisible,mostarCarro}=this.props
        const cantidad =carro.reduce((acc,el)=>acc+el.cantidad,0)
        return (
            <div>
                <span style={style.bubble}>
                    {cantidad!==0
                    ? <BubbleAlert value={cantidad}/>
                    :null    
                }
                </span>
                <button onClick={mostarCarro} style={style.carro}>
                    carro
                </button>
                {esCarroVisible
                  ? <DetallesCarro carro={carro}/>
                  : null
                }
            </div>
        );
    }
}
 
export default Carro;