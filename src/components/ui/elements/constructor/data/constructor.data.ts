import { EnumShirtCollar } from '@/shared/enums/shirt-collar/shirt-collar.enum'
import { EnumShirtSleeve } from '@/shared/enums/shirt-collar/shirt-sleeve.enum'
import { EnumShirtFont } from '@/shared/enums/shirt-font/shirt-font.enum'
import { EnumSize } from '@/shared/enums/size/size.enum'
import type { ISelectItem } from '@/shared/interfaces/elements/select/select.interface'

export const CONSTRUCTOR_COLORS: ISelectItem[] = [
	{
		label: 'Белый',
		key: '#FFFFFF',
	},
	{
		label: 'Темно-синий',
		key: '#282c69',
	},
	{
		label: 'Темно-красный',
		key: '#961819',
	},
	{
		label: 'Черный',
		key: '#000000',
	},
	{
		label: 'Темно-зеленый',
		key: '#005048',
	},
	{
		label: 'Светло-серый',
		key: '#d3d3d3',
	},
	{
		label: 'Синий',
		key: '#2f3999',
	},
	{
		label: 'Оливковый',
		key: '#899011',
	},
	{
		label: 'Красный',
		key: '#e4181a',
	},
	{
		label: 'Желтый',
		key: '#fff343',
	},
	{
		label: 'Бирюзовый',
		key: '#009b9f',
	},
	{
		label: 'Темно-бордовый',
		key: '#af2218',
	},
	{
		label: 'Зеленый',
		key: '#147935',
	},
	{
		label: 'Голубой',
		key: '#00789f',
	},
	{
		label: 'Фиолетовый',
		key: '#652a8a',
	},
	{
		label: 'Темно-серый',
		key: '#3c3e47',
	},
	{
		label: 'Серый',
		key: '#939393',
	},
	{
		label: 'Бордовый',
		key: '#56000f',
	},
	{
		label: 'Голубовато-синий',
		key: '#6ca9d5',
	},
	{
		label: 'Золотисто-желтый',
		key: '#d7cf1a',
	},
	{
		label: 'Оранжево-красный',
		key: '#f95a3d',
	},
	{
		label: 'Темно-голубой',
		key: '#2b628b',
	},
]

export const CONSTRUCTOR_SHIRT_COLLARS: ISelectItem<EnumShirtCollar>[] = [
	{
		label: 'Обычный',
		key: EnumShirtCollar.REGULAR,
	},
	{
		label: 'V-Образный',
		key: EnumShirtCollar.V,
	},
	{
		label: 'Воротник-Поло ',
		key: EnumShirtCollar.POLO,
	},
]

export const CONSTRUCTOR_SHIRT_SLEEVE: ISelectItem[] = [
	{
		label: 'Короткий',
		key: EnumShirtSleeve.SHORT,
	},
	{
		label: 'Длинный',
		key: EnumShirtSleeve.LONG,
	},
]

export const CONSTRUCTOR_SHIRT_FONTS: ISelectItem[] = [
	{
		label: 'Шрифт 1',
		key: EnumShirtFont.FONT_1,
	},
	{
		label: 'Шрифт 2',
		key: EnumShirtFont.FONT_2,
	},
	{
		label: 'Шрифт 3',
		key: EnumShirtFont.FONT_3,
	},
	{
		label: 'Шрифт 4',
		key: EnumShirtFont.FONT_4,
	},
	{
		label: 'Шрифт 5',
		key: EnumShirtFont.FONT_5,
	},
	{
		label: 'Шрифт 6',
		key: EnumShirtFont.FONT_6,
	},
	{
		label: 'Шрифт 7',
		key: EnumShirtFont.FONT_7,
	},
	{
		label: 'Шрифт 8',
		key: EnumShirtFont.FONT_8,
	},
	{
		label: 'Шрифт 9',
		key: EnumShirtFont.FONT_9,
	},
]

export const CONSTRUCTOR_SIZES: ISelectItem[] = [
	{
		label: 'YXS',
		key: EnumSize.YXS,
	},
	{
		label: 'YS',
		key: EnumSize.YS,
	},
	{
		label: 'YM',
		key: EnumSize.YM,
	},
	{
		label: 'YL',
		key: EnumSize.YL,
	},
	{
		label: 'YXL',
		key: EnumSize.YXL,
	},
	{
		label: 'XS',
		key: EnumSize.XS,
	},
	{
		label: 'S',
		key: EnumSize.S,
	},
	{
		label: 'M',
		key: EnumSize.M,
	},
	{
		label: 'L',
		key: EnumSize.L,
	},
	{
		label: 'XL',
		key: EnumSize.XL,
	},
	{
		label: 'XXL',
		key: EnumSize.XXL,
	},
	{
		label: 'XXXL',
		key: EnumSize.XXXL,
	},
]
