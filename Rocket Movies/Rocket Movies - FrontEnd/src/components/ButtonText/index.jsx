import { Container } from './styles';

export function ButtonText({ icon: Icon, text, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}