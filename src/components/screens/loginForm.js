import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

// eslint-disable-next-line react/prop-types
const LoginForm = ({ submit, props }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  })
  useEffect(() => {
    console.log(form.username.length)
  })

  return (
    <Formik>
      <FormStyled onSubmit={e => submit(e, form, props)}>
        <StyledInput
          placeholder='Entrer Email'
          name='username'
          onChange={e => setForm({ ...form, username: e.target.value })}
          type='text'
          onBlur={() =>
            form.username.length < 8
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Mail invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></StyledInput>
        {form.isError ? (
          <MessageError>
            <p>{form.isErrorMessage}</p>
          </MessageError>
        ) : null}
        <StyledInput
          name='password'
          placeholder='Entrer Password'
          onChange={e => setForm({ ...form, password: e.target.value })}
          type='password'
          onBlur={() =>
            form.password.length < 8
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Password Invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></StyledInput>
        <StyledInput type='submit'></StyledInput>
      </FormStyled>
    </Formik>
  )
}

const MessageError = styled.div``

const StyledInput = styled.input`
  outline: none;
  margin: 3px 0px;
  border-radius: 4px;
  border: none;
  height: 20px;
  padding: 0px 12px;
`

// const FormContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

const FormStyled = styled.form`
  padding: 12px;
  background-color: #004185;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 12px;
  border-radius: 8px;
`

LoginForm.propTypes = {}

export default LoginForm
