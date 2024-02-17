import { animated, easings, useSpring } from '@react-spring/web';
import { Game } from '../utility/fetchGameData';

function CardAnim({
	game,
	setShowCard,
	winningHorse,
	setWinningHorse,
}: {
	game: Game;
	setShowCard: (val: boolean) => void;
	winningHorse: string | undefined;
	setWinningHorse: (val: string | undefined) => void;
}) {
	const springs = useSpring({
		from: { rotate: 90, opacity: 1 },
		to: async next => {
			await next({ rotate: 0 });
			await new Promise(resolve => setTimeout(resolve, 400)); // Wait 400ms
			await next({ opacity: 0 });
			setShowCard(false);
			setWinningHorse(undefined);
		},
		loop: false,
		config: {
			duration: 300,
			easing: easings.easeOutBack,
		},
		onRest: () => {
			// When animation is finished
			setShowCard(false);
		},
	});

	return (
		<div className="absolute flex h-screen items-center justify-center">
			<animated.div
				style={{
					transform: springs.rotate.to(
						rotate => `perspective(600px) rotateX(${rotate}deg)`
					),
					opacity: springs.opacity,
				}}
				className="absolute flex aspect-square w-64 items-center justify-center rounded-lg bg-white shadow-lg"
			>
				<div className="flex items-center justify-center text-center">
					{game.movement?.horse_id !== 0 ? (
						!winningHorse ? (
							<h1 className="text-xl font-bold text-[#C34629]">
								Hest {game.movement?.horse_id}{' '}
								{game.movement?.direction}
							</h1>
						) : (
							<h1 className="text-xl font-bold text-[#C34629]">
								Hest {winningHorse} er kommet i mål!
							</h1>
						)
					) : null}
				</div>
			</animated.div>
		</div>
	);
}

export default CardAnim;
