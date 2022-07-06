const Score = (props) => {
  return(
    <>
      <h3>Score: {props.score.score}</h3>
      <h3>Date: {props.score.date}</h3>
    </>
  )
}

export default Score