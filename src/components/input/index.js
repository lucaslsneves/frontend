import './styles.css'
export default function Input({ placeholder = "", label = "", type="text" , required=true,onChange = () => console.log('oi') }) {
  return (
    <div>
      <p>{label}</p>
      <input placeholder={placeholder} type={type} required={required} onChange={onChange}/>
    </div>
  )
}