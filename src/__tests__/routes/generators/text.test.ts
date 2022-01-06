/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Text from '../../../routes/generators/text.svelte';
import { render } from '@testing-library/svelte';

describe('Textinput route works', () => {
  test('Render default', () => {
    const { getByLabelText } = render(Text);
    expect(getByLabelText(/Please input your text/)).toBeInTheDocument();
  });
});
