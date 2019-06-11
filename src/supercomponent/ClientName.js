import React,{Component} from 'react';

class ClientName extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Pedido de: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="clientName">
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre Cliente:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="ingresar" />
        </form>
        </div>
      );
    }
  }

  export default ClientName;