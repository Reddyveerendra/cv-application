export let LiveResume = (props) => {
    return (
        <div className="LiveResume">
            <div className="header">
                <div className="name">
                    <p>{props.FirstName}</p>
                    <p>{props.SecondName}</p>
                </div>
                <div className="other">
                    <p>{props.Mail}</p>
                    <hr />
                    <p>{props.PhoneNumber}</p>
                    <hr />
                    <p>{props.Place}</p>
                </div>
            </div>
            <div className="education">
                <p className="sideHeading">EDUCATION</p>
                <hr />
                <div className="college">
                    <div>
                        <p className="sideHeading2">{props.College}</p>
                        <p>{props.CollegePlace}</p>
                        <p>{props.Degree}</p>
                        <p style={{ marginLeft: '1%' }}>{props.Branch}</p>
                        <p style={{ marginLeft: '1%' }}>GPA: {props.GPA}</p>
                    </div>
                    <div className="duration">
                        <p>{props.duration}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="sideHeading">WORK EXPERIENCE</p>
                <hr />
                <div className="experience">
                    <div>
                        <p>{props.Company}</p>
                        <p>{props.Role}</p>
                        <ul>
                            <li>{props.CompanyPoint1}</li>
                            <li>{props.CompanyPoint2}</li>
                        </ul>

                    </div>
                    <div className="duration">
                        <p>{props.CompanyDuration}</p>
                    </div>
                </div>
            </div>
            <div className=" Projects">
                <p className="sideHeading">PROJECTS</p>
                <hr />
                <div>
                    <p className="sideHeading2">{props.Project1Name}</p>
                    <ul>
                        <li>{props.Project1Point1}</li>
                        <li>{props.Project1Point2}</li>
                    </ul>
                </div>
                <div>
                    <p className="sideHeading2">{props.Project2Name}</p>
                    <ul>
                        <li>{props.Project2Point1} </li>
                        <li>{props.Project2Point2}</li>
                    </ul>
                </div>
            </div>
            <div className="Skills">
                <p className="sideHeading">SKILLS : </p>
                <hr />
                <div className="technical">
                    <p>Technical Skills : {props.Technical}</p>
                </div>
                <div className="soft">
                    <p>Soft Skills : {props.Soft}</p>
                </div>
                <div className="language">
                    <p>Languages : {props.Language}</p>
                </div>
                <div className="other">
                    <p>Other : {props.Other}</p>
                </div>
            </div>
        </div>
    )
}