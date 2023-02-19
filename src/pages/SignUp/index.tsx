import React, { useCallback, useState } from 'react'
import { api } from '../../api'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = useCallback(() => {
    setIsLoading(true)

    if (password === confirmation) {
      const user = api.user.create(email, password)
      console.log(user)
    } else {
      setError('Password and confirmation password should be same')
    }
  }, [email, password, confirmation])

  return (
        <div>
            <input name='login' value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            <input name='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
            <input name='confirmation' value={confirmation} onChange={(e) => { setConfirmation(e.target.value) }}/>

            <button type='button' onClick={handleSubmit}>
                Submit
            </button>
            <p>Error is: {error}</p>
            {isLoading && <p>Loading...</p>}
        </div>
  )
}
