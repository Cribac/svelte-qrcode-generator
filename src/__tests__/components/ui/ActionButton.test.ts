/**
 * @jest-environment jsdom
 */

import ActionButton from '$lib/components/ui/ActionButton.svelte';
import { render, fireEvent } from '@testing-library/svelte';

test('Button render default', () => {
		const buttonProps = {
			action: () => { return true; },
			buttonText: 'Action Button',
		};
		const { getByRole} = render(ActionButton, buttonProps);
		const button = getByRole('button');
		expect(button).toBeVisible();
		expect(button).toHaveTextContent('Action Button');
		expect(button).toHaveClass('bg-tundra hover:bg-greyish text-snow');
	}
);

test('Action is fired on button click', async () => {
		let rnd = 5;
		function mutRnd() {
			rnd = 10;
		}
		const buttonProps = {
			action: mutRnd,
			buttonText: 'Action Button',
		};
		const { getByRole} = render(ActionButton, buttonProps);
		const button = getByRole('button');
		expect(button).toBeVisible();
		expect(button).toHaveTextContent('Action Button');
		expect(rnd).toBe(5);
		await fireEvent.click(button);
		expect(rnd).toBe(10);
	}
);
