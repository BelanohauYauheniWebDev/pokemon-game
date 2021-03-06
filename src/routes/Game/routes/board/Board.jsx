import { useContext } from "react/cjs/react.development";
import PokemonCard from "../../../../components/pokemonCard/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./Board.module.css";

const BoardPage = () => {
	const { pokemons } = useContext(PokemonContext);
	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				{Object.values(pokemons).map(
					({ id, name, img, type, values }) => (
						<PokemonCard
							className={s.card}
							//prettier-ignore
							isRotate={true}
							key={id}
							name={name}
							id={id}
							type={type}
							img={img}
							values={values}
							minimize
						/>
					)
				)}
			</div>
			<div className={s.board}>
				<div className={s.boardPlate}>1</div>
				<div className={s.boardPlate}>2</div>
				<div className={s.boardPlate}>3</div>
				<div className={s.boardPlate}>4</div>
				<div className={s.boardPlate}>5</div>
				<div className={s.boardPlate}>6</div>
				<div className={s.boardPlate}>7</div>
				<div className={s.boardPlate}>8</div>
				<div className={s.boardPlate}>9</div>
			</div>
		</div>
	);
};

export default BoardPage;
