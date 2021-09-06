import { makeVar } from "@apollo/client"

export const searchVar = makeVar({
  inProgress: false,
  value: "",
  isOpenOnMobile: false
})

export const updateSearchValue = term => {
  searchVar().value = term

  searchVar({ ...searchVar() })
}

export const stopSearchProgress = () => {
  searchVar().inProgress = false
  searchVar({ ...searchVar() })
}

export const startSearchProgress = () => {
  searchVar().inProgress = true
  searchVar({ ...searchVar() })
}

export const openSearchOnMobile = () => {
  searchVar().isOpenOnMobile = true
  searchVar({ ...searchVar() })
}

export const closeSearchOnMobile = () => {
  searchVar().isOpenOnMobile = false
  searchVar({ ...searchVar() })
}
