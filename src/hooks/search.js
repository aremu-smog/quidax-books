import { makeVar } from "@apollo/client";

export const searchVar = makeVar({
  inProgress: false,
  value: "",
});

export const updateSearchValue = (term) => {
  searchVar().value = term;

  searchVar({ ...searchVar() });
};

export const stopSearchProgress = () => {
  searchVar().inProgress = false;
  searchVar({ ...searchVar() });
};

export const startSearchProgress = () => {
  searchVar().inProgress = true;
  searchVar({ ...searchVar() });
};
