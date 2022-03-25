import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'

import Container from '../components/container'
import QuestionList from '../components/question-list'

export default function Dashboard () {
 const [questions, setQuestions] = useState([])
 const [currentQuestion, setCurrentQuestion] = useState(0)
 const [answer, setAnwser] = useState(0)
 const history = useHistory();

 async function handleSubmit(e) {
    e.preventDefault()
    try {
     const { data, status } = await api.post('/answer' , { questionId: questions[currentQuestion].id , answer })
     if (status === 201) {
        setCurrentQuestion(currentQuestion + 1)
    }
    }catch(e) {
      const { data } = e.response;
      alert(data.rule)
    }
  }

 return (
    <Container>
        <QuestionList questions={questions} currentQuestion={currentQuestion} onSubmit={handleSubmit}/>
    </Container>
 )
}