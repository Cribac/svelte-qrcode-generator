/**
 * @jest-environment jsdom
 */

import DownloadButton from '$lib/components/ui/DownloadButton.svelte';
import { render } from '@testing-library/svelte';

test('Button render default', () => {
    const buttonProps = {
      data: 'data:image/png;base64,fooo',
      buttonText: 'Download me!',
      fileName: 'download.png',
    };
    const { getByRole}  = render(DownloadButton, buttonProps);
    const button = getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveTextContent('Download me!');
    expect(button).toHaveAttribute('href', 'data:image/png;base64,fooo');
    expect(button).toHaveAttribute('download', 'download.png');
    expect(button).toHaveClass('bg-tundra hover:bg-greyish text-snow');
  }
);

test('Button render custom', () => {
    const buttonProps = {
      data: 'data:image/png;base64,bar',
      buttonText: 'Download me!',
      fileName: 'foo.png',
      colorStyles: 'ugly-green',
    };
    const { getByRole}  = render(DownloadButton, buttonProps);
    const button = getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveTextContent('Download me!');
    expect(button).toHaveAttribute('href', 'data:image/png;base64,bar');
    expect(button).toHaveAttribute('download', 'foo.png');
    expect(button).toHaveClass('ugly-green');
  }
);
