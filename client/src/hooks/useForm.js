import { useState } from 'react'
// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, setValues] = useState(initialValue)

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
  }

  return [values, handleChanges, handleSubmit, showSuccessMessage]

}