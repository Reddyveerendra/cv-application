export let Skills = (props) => {
    return (
        <div className="Skills">
            <p className="sideHeading">SKILLS : </p>
            <hr />
            <div className="technical">
                <label>Technical Skills : </label>
                <input value={props.Technical} name="Technical" onChange={props.function} /><br />
            </div>
            <div className="soft">
                <label>Soft Skills : </label>
                <input value={props.Soft} name="Soft" onChange={props.function} /><br />
            </div>
            <div className="language">
                <label>Languages : </label>
                <input value={props.Language} name="Language" onChange={props.function} /><br />
            </div>
            <div className="other">
                <label>Other : </label>
                <input value={props.Other} name="Other" onChange={props.function} />
            </div>
        </div>
    )
}