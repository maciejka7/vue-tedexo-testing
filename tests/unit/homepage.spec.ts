import {render, fireEvent} from '@testing-library/vue'
import Home from '../../src/views/Home.vue';

describe('homepage test', () => {
  test('product from are displayed', async () => {
    const {findByText, debug} = render(Home);

    const  productTitle = await findByText('Karta Podarunkowa');
    console.log(productTitle);

    debug()

  })
});
