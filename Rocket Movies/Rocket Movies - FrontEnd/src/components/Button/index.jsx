import { Container } from './styles'

export function Button({title , loading = false , ...rest }){
    return(
    <Container 
    type='button'
        disabled={loading}
        {...rest}
    >
        {loading ? 'Carregando...' : title}
    </Container>
    )
}
// disabled={loading}, se o disabled for verdadeiro, vai desabilitar o botão
// rest operation '...rest' no final coloca ele, significa que qualquer outra propriedade que você não tenha colocado explicitamente, vai enserir no componente