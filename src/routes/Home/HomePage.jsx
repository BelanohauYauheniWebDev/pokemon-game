import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Layout from "../../components/layout/Layout";
import POKEMONS from "../../mock/data";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import background from "../../assets/bg1.jpg";
import s from "./style.module.css";
import MenuHeader from "../../components/menuHeader/MenuHeader";

function HomePage({ onChangePage }) {
  const handlerClickButton = (page) => {
    onChangePage && onChangePage(page);
  };

  return (
    <div className="App">
      <MenuHeader />
      <Header
        title={"This is title"}
        description={"This is Description!"}
        onClickButton={handlerClickButton}
      />
      <Layout id={"rules"} title={"rules"} urlBg={background}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>

      <Layout id={"PokemonCards"} title={"Pokemon Cards"} colorBg={"red"}>
        <div className={s.flex}>
          {POKEMONS.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.type}
              img={pokemon.img}
              values={pokemon.values}
            />
          ))}
        </div>
      </Layout>

      <Layout id={"about"} title={"Full rules"} urlBg={background}>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{" "}
        </p>
      </Layout>
      <Footer />
    </div>
  );
}

export default HomePage;