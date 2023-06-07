import { useEffect, useState } from 'react';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import { Container, Content } from './styles';

export function Details() {
  const [note, setNote] = useState({});

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const created = new Date(note.created_at);
  created.setTime(created.getTime() - 3 * 3600000);
  const day = created.getDate();
  const month = created.toLocaleString('default', { month: '2-digit' });
  const year = String(created.getFullYear()).slice(-2);
  const hours = String(created.getHours()).padStart(2, '0');
  const minutes = String(created.getMinutes()).padStart(2, '0');

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleRemoveNote() {
    const confirmation = confirm(`Deseja mesmo excluir ${note.title}`);
    if (confirmation) {
      await api.delete(`/notes/${id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${id}`);

      setNote(response.data);
    }

    fetchNote();
  }, []);
  return (
    <Container>
      <Header readOnly />

      <div>
        <Link to={-1}>
          <ButtonText icon={FiArrowLeft} text="Voltar" />
        </Link>

        <ButtonText text="Excluir Filme" onClick={handleRemoveNote} />
      </div>
      <main>
        <Content>
          <header>
            <div>
              <h1>{note.title}</h1>

              <Stars rating={note.rating} />
            </div>

            <div>
              <img src={avatarUrl} alt={`foto de perfil de ${user.name}`} />

              <span>Por {user.name}</span>

              <FiClock />

              <span>
                {day}/{month}/{year} às {hours}:{minutes}
              </span>
            </div>
          </header>
          <div>
            {note.tags &&
              note.tags.map((tag) => (
                <Tag name={tag.name} key={String(tag.id)} />
              ))}
          </div>

          <article>
            <p>{note.description}</p>
          </article>
        </Content>
      </main>
    </Container>
  );
}