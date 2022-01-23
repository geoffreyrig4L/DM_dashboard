import { useCallback, useContext } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import AppContext from "/src/components/AppContext"
import AddField from "/src/components/form/AddField"

const displayingErrorMessagesSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Le montant doit être un nombre")
    .test(
      "Amount equal to 0 ?",
      "Le montant ne doit pas être égal à 0",
      (amount) => amount != 0
    )
    .required("Le champ est requis"),
  description: Yup.string()
    .max(50, "La description ne doit pas dépasser 50 caractères")
    .required("Le champ est requis"),
})

const DashboardAddEntry = () => {
  const { addDatas } = useContext(AppContext)

  //s'applique quand on appuie sur le btn de validation
  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addDatas({
        amount: Number(values.amount),
        description: values.description,
      })
      resetForm()

      return true
    },
    [addDatas]  //modifier le nom des constantes 
  )

  return (
    <Formik
      initialValues={{
        amount: "0",
        description: "",
      }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <AddField
            id="amount"
            name="amount"
            placeholder="Entrez une valeur"
            errorType={errors.amount}
            touchedType={touched.amount}
          />
          <AddField
            type="textarea"
            id="description"
            name="description"
            placeholder="Entrez une description"
            imputStyle="h-32"
            errorType={errors.description}
            touchedType={touched.description}
          />
          <button
            className="w-full p-2 text-white bg-gray-700 hover:bg-gray-400 transition-all"
            type="submit"
          >
            Ajouter
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default DashboardAddEntry
