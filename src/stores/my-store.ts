import { createStore } from '@stencil/store';

export default createStore<{ something: number[] }>({
  something: [],
});
