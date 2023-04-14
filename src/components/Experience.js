export let Experience = (props) => {
    return (
        <div>
            <p className="sideHeading">WORK EXPERIENCE</p>
            <hr />
            <div className="experience">
                <div>
                    <input value={props.Company} name="Company" onChange={props.function} /><br />
                    <input value={props.Role} name="Role" onChange={props.function} /><br />
                    <input name="CompanyPoint1" value={props.CompanyPoint1} onChange={props.function} /><br />
                    <input name="CompanyPoint2" value={props.CompanyPoint2} onChange={props.function} /><br />
                </div>
                <div className="duration">
                    <input name="CompanyDuration" value={props.CompanyDuration} onChange={props.function} />
                </div>
            </div>
        </div>
    )
}