/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Url from '../../../routes/generators/url.svelte';
import { render } from '@testing-library/svelte';

describe('Url input route works', () => {
  test('Render default', () => {
    const { getByLabelText } = render(Url);
    expect(getByLabelText(/Please enter your url/)).toBeInTheDocument();
  });
});
