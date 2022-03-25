import './styles.css'

export default function QuestionList({currentQuestion = 1,questions = []}) {
  return (
    <div className="wrapper-question-list">
      <h1 style={{fontSize:'22px' , marginBottom: '21px',textAlign:'center'}}>Enquete do Boy   ✌️</h1>
      <p style={{color:'#7d7d7d'}}>{currentQuestion} de {questions.length}</p>
      <form className="question-form">
        
      </form>
    </div>
  )
}