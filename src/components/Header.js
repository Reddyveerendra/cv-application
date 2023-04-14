export const Header = (props) => {
    return (
        <div className="header">
            <div className="name">
                <input name="FirstName" value={props.FirstName} onChange={props.function} />
                <input name="SecondName" value={props.SecondName} onChange={props.function} />
            </div>
            <div className="other">
                <input name="Mail" value={props.Mail} onChange={props.function} />
                <hr />
                <input name="PhoneNumber" value={props.PhoneNumber} onChange={props.function} />
                <hr />
                <input name="Place" value={props.Place} onChange={props.function} />
            </div>
        </div>
    )
}