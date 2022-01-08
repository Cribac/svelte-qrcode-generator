/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Text from '../../../routes/generators/text.svelte';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'

describe('QRCode generation for plain text works', () => {
  test('Render default', () => {
    const { getByLabelText, getByRole } = render(Text);
    expect(getByLabelText('Please enter your text')).toBeInTheDocument();
    const area = getByRole('textbox');
    expect(area).toBeVisible();
  });

  test('Text input displays a generate button', async () => {
    const { getByRole, findByRole } = render(Text);
    const area = getByRole('textbox');
    userEvent.type(area, 'Run you fools!');
    const button = await findByRole('button');
    expect(button).toHaveTextContent('Generate QRCode');
  });
});
