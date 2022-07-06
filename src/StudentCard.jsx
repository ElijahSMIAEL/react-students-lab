import Score from "./Score"

const StudentCard = (props) => {
  return(
    <div className="student-card">
      <h2>{props.student.name}</h2>
      <h4>{props.student.bio}</h4>

      {props.student.scores.map(score => 
      <Score score={score} />
        )}

    </div>
  )
}

export default StudentCard