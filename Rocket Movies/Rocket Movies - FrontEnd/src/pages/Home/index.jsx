import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import { Container, Content } from './styles';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      
      <Header onChange={(e) => setSearch(e.target.value)} />
      <div>
        <h1>Meus filmes</h1>

        <Link to="/new">
          <Button className="desktop" icon={FiPlus} title="Adicionar filme" />
        </Link>
      </div>

      <main>

        <Content>
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              note={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

      </main>
      
    </Container>
  );
}
