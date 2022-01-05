/// <reference types="@sveltejs/kit" />

type Route = {
	path: string
	text: string
}

type SupportedTypesMap = {
	error: { label: string, class: string }
	warning: { label: string, class: string }
	info: { label: string, class: string }
}
