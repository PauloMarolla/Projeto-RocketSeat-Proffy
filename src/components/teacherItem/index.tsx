import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://instagram.fcpq2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88236627_2600258686750090_6937182398555619328_n.jpg?_nc_ht=instagram.fcpq2-1.fna.fbcdn.net&_nc_ohc=IdY4TBQp7eQAX8cO5eT&oh=44054d8b8cc7f9c1a728d02a338f3c88&oe=5F51CF7B"
          alt="Paulo Marolla"
        />
        <div>
          <strong>Paulo Marolla</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Meu método de ensino se baseia em conteúdo teórico e prático.
        <br />
        <br />
        Com a finalidade do aluno desenvolver todo seu potencial. Todo material
        é desenvolvido pensando nas dificuldades e aprimoramentos em que o
        estudante está passando. Vamos lá aprender?!?!!! Vou te ensinar
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
