/** @type {import('./$types').Actions} */

import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		// Get the form data
		const formData = await request.formData();

		const name = formData.get('name');
		const amount = formData.get('amount');
		const attending = formData.get('attending');

		const errors: Record<string, unknown> = {};

		if (!name) {
			errors.name = 'Name is required';
		}
		if (!amount) {
			errors.amount = 'Amount is required';
		}
		if (!attending) {
			errors.attending = 'Attending is required';
		}

		if (Object.keys(errors).length > 0) {
			const errorData = {
				data: Object.fromEntries(formData),
				errors
			};
			return fail(400, errorData);
		}

		const body = {
			name,
			amount,
			attending
		};
		const response = await fetch('https://nocodeform.io/f/65bd3ad5d330735cc318d9bf', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (!response.ok) {
			// Error
			console.error('Error:', response.statusText);
		}
		console.log(response);
		try {
			const result = await response.json();
			console.log('Result:', result);
		} catch (error) {
			console.error('Error:', error);
		}
		// const result = await response.json();
		// console.log('Result:', result);

		return {
			success: true
		};
	}
};
