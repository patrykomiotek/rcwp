import { rest } from 'msw'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Products  } from './Products';
import { apiConfig } from 'services/config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Poligon/Products',
  component: Products,
} as ComponentMeta<typeof Products>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Products> = () => <Products />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// export const Products = () => <ProductsComponent />;
Default.parameters = {
  msw: [
    rest.get(apiConfig.fetchProducts, (_req, res, ctx) => {
      return res(
        ctx.json({
          records: [{
            id: "1",
            fields: {
              name: 'Laptop',
              price: 123
            }
          }]
        })
      )
    }),
  ],
}

