import { Component } from "react";
const styles={
    button:{
        backgroundColor:'#ffaa4c',
        border:'none',
        padding:'10px 15px',
        borderRadius:'5px',
        cursor:'pointer',
        color:'#fff'
    }
}
class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button

