import { createContext, useCallback, useState, useEffect } from "react"

const AppContext = createContext({})

const save = (dataList) => {
  localStorage.setItem("dataList", JSON.stringify(dataList))
}

export const AppContextProvider = (props) => {
  const [dataList, setdataList] = useState([])
  const [totalIncoming, setTotalIncoming] = useState(0)
  const [totalOutgoing, setTotalOutgoing] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const incoming = dataList.reduce((total, current) => {
      if (current.amount > 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)

    setTotalIncoming(incoming)
  }, [dataList])

  useEffect(() => {
    const outgoing = dataList.reduce((total, current) => {
      if (current.amount < 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)

    setTotalOutgoing(outgoing)
  }, [dataList])

  const adddataList = useCallback(
    (data) => setdataList((currentdataList) => [...currentdataList, data]),
    []
  )

  const resetdataList = useCallback(
    () => localStorage.clear() + setdataList([]),
    []
  )

  useEffect(() => {
    const localStoragedataList = localStorage.getItem("dataList")

    if (!localStoragedataList) {
      setLoaded(true)

      return
    }

    const dataList = JSON.parse(localStoragedataList)

    setdataList(dataList)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    save(dataList)
  }, [loaded, dataList])

  return (
    <AppContext.Provider
      {...props}
      value={{
        dataList,
        adddataList,
        resetdataList,
        totalIncoming,
        totalOutgoing,
      }}
    />
  )
}

export default AppContext
