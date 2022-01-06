/**
 * @jest-environment jsdom
 */

import Alert from '../../components/Alert.svelte';
import { render } from '@testing-library/svelte';

test('Alert for error type', () => {
    const alertProps = {
      alertType: 'error',
      message: 'Something bad happened!',
    };
    const { getByRole} = render(Alert, alertProps);
    const alert = getByRole('alert');
    expect(alert).toBeVisible();
    expect(alert).toHaveClass('bg-error-background border-error-border');
    expect(alert).toHaveTextContent('Something bad happened!');
  }
);

test('Alert for warning type', () => {
    const alertProps = {
      alertType: 'warning',
      message: 'Be warned!',
    };
    const { getByRole} = render(Alert, alertProps);
    const alert = getByRole('alert');
    expect(alert).toBeVisible();
    expect(alert).toHaveClass('bg-warning-background border-warning-border');
  expect(alert).toHaveTextContent('Be warned!');
  }
);

test('Alert for info type', () => {
    const alertProps = {
      alertType: 'info',
      message: 'FYI!',
    };
    const { getByRole} = render(Alert, alertProps);
    const alert = getByRole('alert');
    expect(alert).toBeVisible();
    expect(alert).toHaveClass('bg-info-background border-info-border');
    expect(alert).toHaveTextContent('FYI!');
  }
);
