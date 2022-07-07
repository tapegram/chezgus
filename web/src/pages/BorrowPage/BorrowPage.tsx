import { DateField, FieldError, Form, Label, Submit, SubmitHandler } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  arrive: Date
  departure: Date
}

const BorrowPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Borrow" description="Borrow page" />
      <Form onSubmit={onSubmit}>
        <Label name="arrive" errorClassName="error">Arrive</Label>
        <DateField
          name="arrive"
          className="rw-input"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="arrive" className="error" />

        <Label name="departure" errorClassName="error">Departure</Label>
        <DateField
          name="departure"
          className="rw-input"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="departure" className="error" />

        <Submit>Ask Gus!</Submit>
      </Form>
    </>
  )
}

export default BorrowPage
