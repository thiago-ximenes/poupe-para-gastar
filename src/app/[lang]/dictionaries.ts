import 'server-only'

const dictionaries = {
	"pt-br": () => import('@/dictionaries/pt-br.json').then((module) => module.default),
}

export type LocaleType = keyof typeof dictionaries

export const getDictionary = async (locale: LocaleType) => dictionaries[locale]()