import React, { Component } from 'react'
interface a{
    userName:string,
}
export default class B1 extends Component<{},a> {
    constructor(props:a) {
        super(props);
        this.state = {
          userName: "Nguyễn Văn A"
        };
      }
    
    render() {
        return (
            <div>
            <p>User Name: {this.state.userName}</p>
            </div>
        );
    }
    
}