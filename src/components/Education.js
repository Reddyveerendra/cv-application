export let Education = (props) => {
    return (
        <div className="education">
            <p className="sideHeading">EDUCATION</p>
            <hr />
            <div className="college">
                <div>
                    <input className="sideHeading2" name="College" value={props.College} onChange={props.function} /><br />
                    <input name="CollegePlace" value={props.CollegePlace} onChange={props.function} /><br />
                    <input name="Degree" value={props.Degree} onChange={props.function} /><br />
                    <input name="Branch" value={props.Branch} onChange={props.function} /><br />
                    <input name="GPA" value={props.GPA} onChange={props.function} /><br />
                </div>
                <div className="duration">
                    <input name="duration" value={props.duration} onChange={props.function} />
                </div>
            </div>
        </div>
    )
}