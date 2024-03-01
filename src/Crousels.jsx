import { Component } from "react";


class Carousels extends Component {
     state = {
        active :0
     }

     static defaultProps = {
        images : ["http://pets-images.dev-api.com/pets/non.jpg"]
     }
     render(){
        const {active}= this.state
        const {images}= this.props
        return (
            <div className="carousel">
                <img src="{images[active]}" alt="animal image"/>
                <div 
            </div>
        )
     }
}