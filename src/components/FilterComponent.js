import { FilterWrapper, InnerWrapper, TextInputField, ControlsWrapper, FilterButton } from "./styled/FilterComponent.styled"

export const FilterComponent = ({searchField, applyFilter, resetFilter, handleInput}) => {

    return(
        <FilterWrapper>
            <InnerWrapper>
                <TextInputField type={"text"} value={searchField} onChange={handleInput}/>
                <ControlsWrapper>
                    <FilterButton onClick={applyFilter}> Search </FilterButton>
                    <FilterButton onClick={resetFilter}> Reset </FilterButton>
                </ControlsWrapper>
            </InnerWrapper>
        </FilterWrapper>
    )
}