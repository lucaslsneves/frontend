import './styles.css'
export default function Form({children , onSubmit = () => console.log('submit') }) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}