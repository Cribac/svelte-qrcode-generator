/**
 * @jest-environment jsdom
 */

import ActionButton from '../../../components/ui/ActionButton.svelte';
import { render } from '@testing-library/svelte';

test('Button render default', () => {
		const buttonProps = {
			action: () => { return true; },
			buttonText: 'Action Button',
		};
		const { getByRole}  = render(ActionButton, buttonProps);
		const button = getByRole('button');
		expect(button).toBeVisible();
		expect(button).toHaveTextContent('Action Button');
		expect(button).toHaveClass('bg-tundra hover:bg-greyish text-snow');
	}
);
