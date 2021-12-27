import {Component} from 'react';
import '../App.css'
import Upload from './upload';
class Card2 extends Component {
  render() {
    return (

      <div class="w-auto h-1/2 hover:min-w-0 rounded overflow-hidden shadow-lg">
  <img class="w-1/3" src={this.props.path} alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{this.props.title}</div>
    <p class="text-gray-700 text-base">
     {this.props.desc}
    </p>
    <Upload />
  </div>

  
  <div class=" content-end px-6 pt-4 pb-2">
  
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Upload
</button>
  </div>
</div>
          
    );
  }
}

export default Card2;


