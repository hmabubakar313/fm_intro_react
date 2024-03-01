import { Component } from "react";
import { Link } from "react-router-dom";


class ErrorBoundry extends Component {
    state ={
        hasError:false;
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error,info)
    {
        console.error("Error boundry",error,info)
    }
    render(){
        if(this.state.hasError){
            return(
                <h2>Error</h2>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundry;