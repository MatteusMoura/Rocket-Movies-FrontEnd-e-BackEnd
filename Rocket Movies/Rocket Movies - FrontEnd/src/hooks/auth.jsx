import { createContext, useContext, useState, useEffect } from "react";
// createContext: context api do react
// useContext: para q eu posso usar o context do react

import { api } from '../services/api';

export const AuthContext = createContext({});
// exportar o meu contexto, createContext função para criar meu próprio contexto, dentro vou passar qual o valor default(padrão), um objeto vazio

function AuthProvider({ children }) {
    const [data , setData] = useState({});

    async function signIn({ email, password }){
        // desestrutura email e password para pode usar eles em qualquer ordem
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;
            // desestruturei para pegar apenas o token e o user da requisição

            localStorage.setItem("@rocket-movies:user", JSON.stringify(user))
            // guardando os dados no local store e convertendo em string, dps pega a string to object
            localStorage.setItem("@rocket-movies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}` 
            // todas as requisições vai ser em Bearer

            setData({ user, token})
        } catch ( error ) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@rocket-movies:token");
        localStorage.removeItem("@rocket-movies:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }){
        try {

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar
            }

            await api.put("/users", user);
        // fazer um put em /users, passando qual é o usuário
            localStorage.setItem("@rocket-movies:user", JSON.stringify(user))
        // atualizar as novas informações do meu usuário no meu Storage e state para refletir na tela
        // setItem serve tanto para colocar o conteúdo no Storage, se a chave já existir, vai SUBSTITUIR
            setData({ user , token: data.token})
            alert("Perfil atualizado!")
        } catch ( error ) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocket-movies:token");
        const user = localStorage.getItem("@rocket-movies:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
            // pegando os dados do usuário que estavam em formato de texto e voltei para objeto do tipo JSON
        }
    }, [])

    return(
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            updateProfile,
            user: data.user,
        }}
        >
            {children}
        </AuthContext.Provider>
        // children é todas as rotas da minha aplicação
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    // useContext para poder usar os contextos e authcontext que é o meu contexto
    // posso ter vários contextos, ent eu passo como paramêtro qual eu vou usar

    return context;
}

export { AuthProvider, useAuth }
// deixando tudo em apenas um lugar