import { useContext } from "react"
import AppContext from "/src/components/AppContext"

const Dashboard = (props) => {
  const { dataList, totalIncoming, totalOutgoing } = useContext(AppContext)
  let total = totalIncoming + totalOutgoing
  return (
    <table className="w-full">
      <thead className="text-left text-xl">
        <tr>
          <th className="w-1/2 p-1 border-2 text-center p-5">Recettes</th>
          <th className="w-1/2 p-1 border-2 text-center p-5">Dépenses</th>
        </tr>
      </thead>
      <tbody>
        <>
          {dataList.map(({ amount, description }, id) => (
            <tr
              key={id}
              className={`${
                id % 2 === 0 ? "bg-slate-100" : "bg-white"
              } w-full text-right text-base`}
            >
              {amount > 0 ? (
                <>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-sm text-green-500 mr-3">
                      {amount} €
                    </p>
                    <p className="italic text-sm break-all mr-3">
                      {description}
                    </p>
                  </td>
                  <td className="w-1/2 p-1 border-x-2"></td>
                </>
              ) : (
                <>
                  <td className="w-1/2 p-1 border-x-2"></td>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-sm text-red-500 mr-3">
                      {amount} €
                    </p>
                    <p className="italic text-sm break-all mr-3">
                      {description}
                    </p>
                  </td>
                </>
              )}
            </tr>
          ))}
        </>
        <tr className="w-full text-xl">
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between p-5">
              <p className="font-bold">Total :</p>
              <p className="font-bold text-green-500">{totalIncoming} €</p>
            </div>
          </td>
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between p-5">
              <p className="font-bold">Total :</p>
              <p className="font-bold text-red-500">{totalOutgoing} €</p>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full border-2">
        <tr>
          <td colSpan="2" className="w-full p-1 border-2">
            {total >= 0 ? (
              <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl">
                <p className="font-bold">Solde</p>
                <p className="text-green-600 font-bold">{total}€</p>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl bg-slate-300">
                <p className="font-bold">Solde</p>
                <p className="text-red-600 font-bold">{total}€</p>
              </div>
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Dashboard
