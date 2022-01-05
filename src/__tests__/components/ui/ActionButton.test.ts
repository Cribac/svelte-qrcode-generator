/**
 * @jest-environment jsdom
 */

import ActionButton from '../../../components/ui/ActionButton.svelte';
import { render } from '@testing-library/svelte';

test('Button exists', () => {
		const buttonProps = {
			action: () => { return true; },
			buttonText: 'Action Button'
		};
		const { getByRole}  = render(ActionButton, buttonProps);
		const button = getByRole('button');
		expect(button).toBeVisible();
	}
);
