import { Component } from 'react';

const style={
    logo:{
        fontSize: '2rem',
        fontWeight: '700'
    }
}

class Logo extends Component {
    
    render() { 
        return (
            <div style={style.logo}>Shop</div>
        );
    }
}
 
export default Logo;