/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Url from '../../../routes/generators/url.svelte';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'

describe('Url input route works', () => {
  test('Render default', () => {
    const { getByLabelText, getByPlaceholderText } = render(Url);
    expect(getByLabelText(/Please enter your url/)).toBeInTheDocument();
    expect(getByPlaceholderText('http://www.example.com')).toBeInTheDocument();
  });

  test('Restart button is displayed on invalid text input', async () => {
    const { getByPlaceholderText, findByRole } = render(Url);
    const input = getByPlaceholderText('http://www.example.com');
    userEvent.type(input, 'fooo');
    const button = await findByRole('button');
    expect(button).toHaveTextContent('Restart');
  });

  test('A warning is displayed on invalid text input', async () => {
    const { getByPlaceholderText, findByRole } = render(Url);
    const input = getByPlaceholderText('http://www.example.com');
    userEvent.type(input, 'fooo');
    const warning = await findByRole('alert');
    expect(warning).toHaveTextContent('Warning! This is not a valid url!');
  });
});
