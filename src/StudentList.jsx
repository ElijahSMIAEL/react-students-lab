import StudentCard from "./StudentCard"

const StudentList = (props) => {
  return(
    <>
      <h1>Student List Component</h1>
      {props.students.map(student => 
        <StudentCard
          student={student}
        />
      )}
    </>
  )
}

export default StudentList