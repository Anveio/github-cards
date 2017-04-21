import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppState { counter: number;}
class App extends React.Component<undefined, AppState> {
  state = { counter: 0 }
  
  incrementCounter = (incrementValue: number) => {
    this.setState((prevState: AppState) => ({
      counter: prevState.counter + incrementValue
    }));
  }
  
  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    )
  }
}

interface ButtonProps { incrementValue: number; onClickFunction(incrementValue: number): void; }
class Button extends React.Component<ButtonProps, undefined> {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  
  render(){
    return (
      <button 
        onClick={this.handleClick}>+{this.props.incrementValue}
      </button>
    )
  }
}

interface ResultProps { counter: number; }
const Result = (props: ResultProps) => {
  return (
    <div>{props.counter}</div>
  )
}


ReactDOM.render(<App/>, document.getElementById('app'))