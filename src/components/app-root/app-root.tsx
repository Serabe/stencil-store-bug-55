import { Component, h } from '@stencil/core';
import store from '../../stores/my-store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  addRandom = () => {
    store.state.something = [...store.state.something, Math.random()];
  }
  reset = () => {
    store.reset();
  }
  render() {
    return (
      <div>
        <button onClick={this.addRandom}>Add Random Number</button>
        <button onClick={this.reset}>Reset</button>
        <ul>
          {store.state.something.map(n => <li>{n}</li>)}
        </ul>
      </div>
    );
  }
}
