import { useState } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/imgs/GitHub.png';
import { ItemList } from '../../components/ItemList';
import './styles.css';
import { Footer } from '../../components/Footer';
function App() {
    //Use State do input
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [currentRepos, setCurrentRepos] = useState(null);

    const handleGetData = async () => {
        //Coletando dados do usuário via api
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json()

        //Se der certo
        if (newUser.name){
            //Coletando foto, nome e bio da api e setando
            const {avatar_url, name, bio, login} = newUser;
            setCurrentUser({avatar_url, name, bio, login});

            //Coletando as publicações do repositório
            const reposData = await fetch (`https://api.github.com/users/${user}/repos`);
            const newRepos = await reposData.json();
            //Se der certo
            if(newRepos.length){
                setCurrentRepos(newRepos);
            }

        }
    }

    return (
        <div className="App">
            <Header />
            <hr></hr>
            <div className="conteudo">
                <img src={background} className="background" alt="background "></img>
                <section className="info">
                    <div>
                        <input 
                        name="usuario" 
                        value={user} 
                        onChange={event=>setUser(event.target.value)} 
                        placeholder='@username'/>
                        <button onClick={handleGetData}>Buscar</button>
                    </div>
                    {currentUser?.name ? (
                        <>
                            <div className="perfil">
                                <img
                                    src={currentUser.avatar_url}
                                    alt="imagem perfil"
                                    className="profile"
                                />
                                <div>
                                    <h3>{currentUser.name}</h3>
                                    <span>@{currentUser.login}</span>
                                    <p>{currentUser.bio}</p>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ) : null }
                    {currentRepos?.length ? (
                        <>
                            <div>
                                <h4> Repositórios </h4>
                                <hr></hr>
                                {currentRepos.map((repo) => 
                                <ItemList title={repo.name} description={repo.description} />
                                )}
                            </div>
                        </>
                    ):null}
                </section>
            </div>
            <div>
                <hr/>
                <Footer />
            </div>
        </div>
    );
}

export default App;
