// Header.tsx
import { AppLogo, HeaderContainer, LeftContainer } from "./styles";
import PokemonLogo from "../../../PokemonLogo.png";
import Button from "../Button/Button";
import { ButtonSize, ButtonVariant } from "../../types";
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate();
  return(
    <HeaderContainer>
    <LeftContainer>
      <AppLogo src={PokemonLogo} alt="Pokemon logo" />
      <Button
        variant={ButtonVariant.TERTIARY}
        size={ButtonSize.SMALL}
        onClick={() => {
          navigate("/all-pokemons");
        }}
      >
        All Pokemons
      </Button>
      <Button
        variant={ButtonVariant.TERTIARY}
        size={ButtonSize.SMALL}
        onClick={() => {
          navigate("/my-pokemons");
        }}
      >
        My Pokemons
      </Button>
    </LeftContainer>
    <Button
      variant={ButtonVariant.PRIMARY}
      size={ButtonSize.SMALL}
      onClick={() => {
        navigate("/fighting-arena");
      }}
    >
      Start a Fight
    </Button>
  </HeaderContainer>
  )
}


export default Header;
