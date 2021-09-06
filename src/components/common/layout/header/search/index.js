import React, { useEffect } from "react"
import styled from "styled-components"
import { ArrowIcon, CloseIcon, SearchIcon } from "../../../../../icons"
import { qbOutlineGray, qbGray } from "../../../../../styles/colors"
import { HideOnPc } from "../../../../../styles/common"

import { useReactiveVar } from "@apollo/client"
import {
  searchVar,
  startSearchProgress,
  stopSearchProgress,
  openSearchOnMobile,
  closeSearchOnMobile,
  updateSearchValue
} from "../../../../../helpers/search"

import { useHistory, useLocation } from "react-router-dom"

const Search = () => {
  const { value: searchValue, inProgress, isOpenOnMobile } = useReactiveVar(searchVar)

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== "/search") {
      updateSearchValue("")
      stopSearchProgress()
    }
  }, [location.pathname])

  const startSearching = e => {
    if (searchValue === "" && !inProgress) {
      startSearchProgress()
      history.push("/search")
    }

    updateSearchValue(e.target.value)
  }

  const stopSearching = () => {
    stopSearchProgress()
    history.goBack()
    updateSearchValue("")
    closeSearchOnMobile()
  }

  return (
    <>
      <HideOnPc display='block'>
        <button onClick={openSearchOnMobile}>
          <SearchIcon />
        </button>
      </HideOnPc>

      <Wrapper isOpenOnMobile={isOpenOnMobile}>
        <HideOnPc>
          <button onClick={closeSearchOnMobile}>
            <ArrowIcon />
          </button>
        </HideOnPc>
        <StyledInput
          placeholder='Search books, genres, authors, etc.'
          value={searchValue}
          onChange={startSearching}
          autoFocus={inProgress}
        />
        <StyledSubmit onClick={searchValue ? stopSearching : null}>
          {searchValue ? <CloseIcon /> : <SearchIcon />}
        </StyledSubmit>
      </Wrapper>
    </>
  )
}

export default Search

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  width: 100%;
  padding: 0 30px;
  background-color: white;
  @media screen and (max-width: 568px) {
    display: ${props => (props.isOpenOnMobile ? "flex" : "none")};

    height: 70px;
    position: absolute;
    left: 0;
    z-index: 150;
    align-items: center;
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${qbOutlineGray};
  padding: 0px 18px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 568px) {
    margin-left: 16px;
  }
`
const StyledSubmit = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${qbOutlineGray};
  border-left: none;
  background-color: ${qbGray};
`
