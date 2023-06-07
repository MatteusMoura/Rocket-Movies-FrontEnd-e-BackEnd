import { Container } from './styles';

import { Stars } from '../Stars';
import { Tag } from '../Tag';

export function Note({ note, ...rest }) {

  return (
    <Container {...rest}>
      <h1>{note.title}</h1>

      <Stars rating={note.rating} />

      <div className="description">
        <p>{note.description}</p>
      </div>

      <div className="tags">
        {note.tags &&
          note.tags.map((tag) => <Tag key={String(tag.id)} name={tag.name} />)}
      </div>
    </Container>
  );
}