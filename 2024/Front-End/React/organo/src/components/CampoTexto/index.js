import './styles.css'

export default function CampoTexto({label, placeholder}) {
    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    )
}