import { Header } from '../../components/Header';
import background from '../../assets/imgs/GitHub.png';
import { ItemList } from '../../components/ItemList';
import './styles.css';
function App() {
    return (
        <div className="App">
            <Header />
            <hr></hr>
            <div className="conteudo">
                <img src={background} className="background" alt="background "></img>
                <section className="info">
                    <div>
                        <input name="usuario" value="@username" />
                        <button type="submit">Buscar</button>
                    </div>
                    <div className="perfil">
                        <img
                            src="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"
                            alt="imagem perfil"
                            className="profile"
                        />
                        <div>
                            <h3>Victor Buarque</h3>
                            <span>@victorbuarque</span>
                            <p>Front-end developer | HTML | CSS | Javascript |</p>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4> Repositório </h4>
                        <ItemList title="teste" description="teste descricaçao"/>
                        <ItemList title="teste" description="teste descricaçao"/>
                        <ItemList title="teste" description="teste descricaçao"/>
                    </div>
                </section>
            </div>
            <div>
                <hr/>
                <Header />
            </div>
        </div>
    );
}

export default App;
