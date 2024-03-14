import { Component } from 'react';
import Logo from './logo';
import Carro from './Carro'
const style={
    navbar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'100px',
        justifyContent:'space-between',
        position:'relative',
        padding:'0 50px',
        boxShadow:'0 2px 3px rgb(0 0 0 / 11%)',
    }
}

class Navbar extends Component {
    render() { 
        const {carro,esCarroVisible,mostarCarro}=this.props
        return (
            <header>
                <nav style={style.navbar}>
                    <Logo/>
                    <Carro 
                        carro={carro}
                        esCarroVisible={esCarroVisible} 
                        mostarCarro={mostarCarro} />
                </nav>
            </header>
        );
    }
}
 
export default Navbar;