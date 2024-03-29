import { Component } from "react";

const styles={
    layout:{
        backgroundColor:'#fdfdfd',
        color:'#404040',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    container:{
        maxWidth:'1200px'
    }
    
}
class Layout extends Component{

    render(){
        return(
            <div  style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout