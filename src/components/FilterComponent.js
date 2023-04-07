import {
  FilterWrapper,
  InnerWrapper,
  TextInputField,
  ControlsWrapper,
} from "./styled/FilterComponent.styled";
import { SearchFilter, ResetFilter } from "./Buttons";
import rick_and_morty_banner from "../images/rick_and_morty_banner.jpeg";

export const FilterComponent = ({
  searchField,
  applyFilter,
  resetFilter,
  handleInput,
}) => {
  return (
    <FilterWrapper
      style={{
        backgroundImage: `url(${rick_and_morty_banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <InnerWrapper>
        <TextInputField
          type={"text"}
          value={searchField}
          onChange={handleInput}
          data-testid="query-field"
        />
        <ControlsWrapper>
          <SearchFilter onClick={applyFilter}> Search </SearchFilter>
          <ResetFilter onClick={resetFilter}> Reset </ResetFilter>
        </ControlsWrapper>
      </InnerWrapper>
    </FilterWrapper>
  );
};
