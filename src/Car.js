import React from 'react';

class Car extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{borderColor: this.props.color ,borderWidth:'1',borderStyle: 'solid'}}>
                <img src={this.props.src} alt='car' width={200}/>
                <p>discription: {this.props.discription}</p>
                <p>color: {this.props.color}</p>
                <p>brand: {this.props.brand}</p>
            </div>
        );
    }
}

export default Car;