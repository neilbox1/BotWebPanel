import {Component} from 'react';
import '../App.css'
class Card3 extends Component {
  render() {
    return (

      <div class="w-auto h-1/2 hover:min-w-0 rounded overflow-hidden shadow-lg">
  <img class="w-1/3" src={this.props.path} alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{this.props.title}</div>
    <p class="text-gray-700 text-base">
     {this.props.desc}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
          
    );
  }
}

export default Card3;


