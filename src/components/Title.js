import { Component } from 'react';

const styles={
    title:{
        color: '#0040ff',
    }
    
}
class Title extends Component {

    render() { 
        return (
            <h1 style={styles.title}>Tienda</h1>
        );
    }
}
 
export default Title;