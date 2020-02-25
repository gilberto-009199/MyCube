import React, { Component } from 'react';
import './janela.css';
 
class window extends Component{
   
    render(){
        return (
            <div className="window">
                <div className="window-header">
                    <div className="window-header-logo">  Logo e nome do sistema</div>
                    <div className="window-header-controllers">
                        <div className="window-header-controllers-item">_</div> 
                        <div className="window-header-controllers-item close">X</div>
                    </div>
                </div>
                <div className="window-body">
                     {this.props.children}
                </div>
                <div className="window-footer">
                </div>
            </div>
        )
    }

}
export default window;