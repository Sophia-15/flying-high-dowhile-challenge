import { Container, TestimonialsContainer, TestimonialCard } from './styles';

export function StudentTestimonials() {
  return (
    <Container id="testimonials">
      <h1>Depoimento de alunos</h1>
      <TestimonialsContainer>
        <TestimonialCard>
          <p>“A FlyingHigh me proporcionou oportunidades que eu não teria tido 
            se não fosse por eles. Hoje em dia trabalho com o ReactJS como 
            tecnologia principal mas tenho experiência tanto com o mobile quanto 
            com o back-end com NodeJS, com clientes nacionais e internacionais.”
          </p>

          <div className="studentInfo">
            <img src="https://github.com/sophia-15.png" alt="Foto do aluno" />
            <div>
              <span>Sophia Gallindo</span>
              <span>Front-End Developer</span>
            </div>
          </div>
        </TestimonialCard>

        <TestimonialCard>
          <p>“A FlyingHigh me proporcionou oportunidades que eu não teria tido 
            se não fosse por eles. Hoje em dia trabalho com o ReactJS como 
            tecnologia principal mas tenho experiência tanto com o mobile quanto 
            com o back-end com NodeJS, com clientes nacionais e internacionais.”
          </p>

          <div className="studentInfo">
            <img src="https://github.com/nikolas-as.png" alt="Foto do aluno" />
            <div>
              <span>Nikolas Santana</span>
              <span>Front-End Developer</span>
            </div>
          </div>
        </TestimonialCard>

        <TestimonialCard>
          <p>“A FlyingHigh me proporcionou oportunidades que eu não teria tido 
            se não fosse por eles. Hoje em dia trabalho com o ReactJS como 
            tecnologia principal mas tenho experiência tanto com o mobile quanto 
            com o back-end com NodeJS, com clientes nacionais e internacionais.”
          </p>

          <div className="studentInfo">
            <img src="https://github.com/nikolas-as.png" alt="Foto do aluno" />
            <div>
              <span>Nikolas Santana</span>
              <span>Front-End Developer</span>
            </div>
          </div>
        </TestimonialCard>

        <TestimonialCard>
          <p>“A FlyingHigh me proporcionou oportunidades que eu não teria tido 
            se não fosse por eles. Hoje em dia trabalho com o ReactJS como 
            tecnologia principal mas tenho experiência tanto com o mobile quanto 
            com o back-end com NodeJS, com clientes nacionais e internacionais.”
          </p>

          <div className="studentInfo">
            <img src="https://github.com/sophia-15.png" alt="Foto do aluno" />
            <div>
              <span>Sophia Gallindo</span>
              <span>Front-End Developer</span>
            </div>
          </div>
        </TestimonialCard>
      </TestimonialsContainer>
    </Container>
  );
}
