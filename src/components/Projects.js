export let Projects = (props) => {
    return (
        <div className=" Projects">
            <p className="sideHeading">PROJECTS</p>
            <hr />
            <div>
                <input name="Project1Name" value={props.Project1Name} onChange={props.function} /><br />
                <input name="Project1Point1" value={props.Project1Point1} onChange={props.function} /><br />
                <input name="Project1Point2" value={props.Project1Point2} onChange={props.function} /><br />
            </div>
            <div>
                <input name="Project2Name" value={props.Project2Name} onChange={props.function} /><br />
                <input name="Project2Point1" value={props.Project2Point1} onChange={props.function} /><br />
                <input name="Project2Point2" value={props.Project2Point2} onChange={props.function} /><br />
            </div>
        </div>
    )
}