import {Component} from 'react';
import {render} from 'react-dom';

class Test extends Component {
  render() {
    return (
      <div>テスト</div>
    )
  }
}

const elem = document.querySelector('#app');
render(<Test />, elem)
