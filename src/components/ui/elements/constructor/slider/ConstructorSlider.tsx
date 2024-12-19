import { SHIRTS, SHORTS } from '@/base/base.data'
import type { IConstructorSlider } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { type FC } from 'react'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ConstructorSliderBuilder from './builder/ConstructorSliderBuilder'
import styles from './ConstructorSlider.module.scss'
import ConstructorSliderExample from './example/ConstructorSliderExample'
import ConstructorSliderNavigation from './navigation/ConstructorSliderNavigation'
import ConstructorSliderShare from './share/ConstructorSliderBuilderShare'

const ConstructorSlider: FC<IConstructorSlider> = ({
	index,
	exampleIndex,
	sliderRef,
	isConstructor,
	state,
	setState,
	setShirt,
	setShorts,
	settings,
	examples,
	shirt,
	shorts,
	goTo,
}) => {
	return (
		<div className={styles.wrapper}>
			<ConstructorSliderNavigation
				index={index}
				examples={examples}
				goTo={goTo}
				shirt={shirt}
				shorts={shorts}
				state={state}
				setState={setState}
			/>
			<div
				className={formatClassName(
					styles.fill,
					isConstructor ? styles.construct : styles.example
				)}
			>
				<div
					className={formatClassName(
						styles.slider,
						isConstructor ? styles.custom : undefined
					)}
				>
					<SlickSlider className={styles.swiper} {...settings} ref={sliderRef}>
						<ConstructorSliderBuilder
							shirt={shirt}
							shorts={shorts}
							state={state}
							setState={setState}
						/>
						{examples.map((example, index) => (
							<ConstructorSliderExample key={index} example={example} />
						))}
					</SlickSlider>
				</div>
				{isConstructor ? (
					<ConstructorSliderShare />
				) : (
					<button
						className={styles.use}
						onClick={() => {
							const shirt = SHIRTS.find(
								(s) => s.id === examples[exampleIndex - 1].shirtId
							)!
							const shorts = SHORTS.find(
								(s) => s.id === examples[exampleIndex - 1].shortsId
							)!
							setShirt(shirt)
							setShorts(shorts)

							goTo(0)
						}}
					>
						Использовать
					</button>
				)}
			</div>
		</div>
	)
}

export default ConstructorSlider
