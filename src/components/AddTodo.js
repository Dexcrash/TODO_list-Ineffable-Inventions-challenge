import React, { Component } from 'react';

export class AddTodo extends Component {
    state = { show: false };

    showModal = () => {
        document.getElementById("inputModal").style.display = "block";
    };
    
    hideModal = () => {
        document.getElementById("inputModal").style.display = "none";
    };

    error = () => {
        document.getElementById("inputModal").style.display = "none";
    };

    add = () => {
        var input = document.getElementById("inputValue").value;
        if(input === ""){
            alert("The todo can't be empty.");
        }else{
            this.props.addTodo(input);
        }
        this.hideModal();
    };

    render() {
        return (
            <div className="center">            
                <button className="button center" type="button" onClick={this.showModal}>
                New TODO
                </button>
                <div id="inputModal" className="modal">
                    <div className="modal-content center">
                        <div>
                            <span onClick={this.hideModal} id="closeModal" className="close" style={{textAlign:'right'}}>&times;</span>
                            <h4>Insert the new todo</h4>
                        </div>
                        <input type="text" id="inputValue"></input>
                        <button onClick={this.add} 
                        className="button button-todo" style={{backgroundColor:'#4CAF50'}}>
                        Create
                        </button>                        
                    </div>
                </div>
            </div>          
        );
    }
}
    

export default AddTodo
