import {Component} from 'react';
import '../App.css'


class Result extends Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    }
    render() {
      return (
        <div>
        {this.props.data}

        </div>
      );
    }
}

class Card1 extends Component {
  constructor(props){
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
      this.state = {
      data: null,
      showComponent: false
    }

  }
  
  
  componentDidMount() {
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express, show: true }))
        .catch(err => console.log(err));

  }

  callBackendAPI = async () => {
    const response = await fetch('/hand_move');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    else {
      
      return body;
    }
    
  }


  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }



  render() {
    return (

      <div class="w-auto h-80 hover:min-w-0 rounded overflow-hidden shadow-lg">
  <img class="w-1/3" src={this.props.path} alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{this.props.title}</div>
    <p class="text-gray-700 text-base">
     {this.props.desc}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
           <Result data={this.state.data} /> :
           null
        }
    
  
  </div>
</div>
          
    );
  }
}

export default Card1;


