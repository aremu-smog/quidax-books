import React, { useState } from "react";
import styled from "styled-components";
import { ArrowIcon, CloseIcon, SearchIcon } from "../../../../../icons";
import { qbOutlineGray, qbGray } from "../../../../../styles/colors";
import { HideOnPc } from "../../../../../styles/common";

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  width: 100%;
  padding: 0 30px;
  background-color: white;
  @media screen and (max-width: 568px) {
    display: ${(props) => (props.isOpenOnMobile ? "flex" : "none")};

    height: 70px;
    position: absolute;
    left: 0;
    z-index: 150;
    align-items: center;
  }
`;

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
`;
const StyledSubmit = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${qbOutlineGray};
  border-left: none;
  background-color: ${qbGray};
`;
const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openSearchOnMobile = () => setIsOpenOnMobile(true);
  const closeSearchOnMobile = () => setIsOpenOnMobile(false);

  const startSearching = () => {
    if (searchTerm !== "") {
      setIsSearching(true);
    } else {
      stopSearching();
    }
  };
  const stopSearching = () => {
    setSearchTerm("");
    setIsSearching(false);
  };
  return (
    <>
      <HideOnPc display="block">
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
          placeholder="Search books, genres, authors, etc."
          onKeyUp={startSearching}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StyledSubmit onClick={isSearching ? stopSearching : null}>
          {isSearching ? <CloseIcon /> : <SearchIcon />}
        </StyledSubmit>
      </Wrapper>
    </>
  );
};

export default Search;
