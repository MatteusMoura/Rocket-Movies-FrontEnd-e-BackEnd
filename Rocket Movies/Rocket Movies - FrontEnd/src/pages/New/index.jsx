import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New(){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }


    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
        // no filter, vai vim todas as tags, menos a deletada
    }

    async function handleNewNote(){
        if(!title){
            return alert("Digite o titulo do filme")
        }
        if(!rating){
            return alert("Digite a nota do filme")
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags,
        });

        navigate(-1)
        alert("Nota criada com sucesso!")
    }

    function handleClearForm(){
        setTitle('');
        setRating('');
        setDescription('');
        setTags([]);
        setNewTag('');
    }
  
    return(
        <Container>
            <Header />

            <main>

                <Form>
                    
                    <header>
                        <Link to={-1}>
                        <ButtonText 
                            text='Voltar' 
                            icon={FiArrowLeft}
                        />
                        </Link>

                        <h1>Novo filme</h1>
                    </header>
                
                    <div>
                        <Input 
                            placeholder='Título' 
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            type='number'
                            placeholder='Sua nota (de 0 a 5)'
                            in='0'
                            max='5' 
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        {       
                            tags.map((tag, index) => (
                        <MovieItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag) }
                        />
                            ))
                        }

                        <MovieItem 
                            isNew 
                            placeholder='Novo marcador'
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag} 
                        />
                    </Section>

                    <div className='buttons'>
                        <Button 
                            title='Excluir filme'
                            onClick={handleClearForm}
                            />
                        <Button 
                            title='Salvar alterações'
                            onClick={handleNewNote}
                        />
                    </div>

                </Form>
            </main>
        </Container>
    )
}
