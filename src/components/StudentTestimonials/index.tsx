import { Container, TestimonialsContainer, TestimonialCard } from './styles';

export function StudentTestimonials() {
  return (
    <Container id="testimonials">
      <h1>Depoimento de alunos</h1>
      <TestimonialsContainer>
        <TestimonialCard>
          <p>“Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11
            meses que comecei a aprender com a Rocketseat. Tenho orgulho de
            dizer que recebo no mínimo 3 contatos para entrevistas pelo
            LinkedIn por semana, e sou um profissional procurado.”
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
          <p>“Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11
            meses que comecei a aprender com a Rocketseat. Tenho orgulho de
            dizer que recebo no mínimo 3 contatos para entrevistas pelo
            LinkedIn por semana, e sou um profissional procurado.”
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
          <p>“Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11
            meses que comecei a aprender com a Rocketseat. Tenho orgulho de
            dizer que recebo no mínimo 3 contatos para entrevistas pelo
            LinkedIn por semana, e sou um profissional procurado.”
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
          <p>“Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11
            meses que comecei a aprender com a Rocketseat. Tenho orgulho de
            dizer que recebo no mínimo 3 contatos para entrevistas pelo
            LinkedIn por semana, e sou um profissional procurado.”
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
