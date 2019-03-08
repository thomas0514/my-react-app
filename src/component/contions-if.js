import React, { Component } from 'react';
function ShowBox (props){
    if(!props.warn){
        return null
    }
    return (
       <div>
            你的电脑被黑了
        </div> 
    )
}
class Page extends Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    
    handleToggleClick() {
        this.setState(prevState => ({
          showWarning: !prevState.showWarning
        }));
      }
    render() {
        return (
            <div>
                <ShowBox warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning?"显示":"隐藏"}
                </button>
            </div>
        )
    }
    
}
export default Page;

