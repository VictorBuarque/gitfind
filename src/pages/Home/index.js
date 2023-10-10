import { useState } from 'react';
import { Container } from './styles';
import background from '../../assets/imgs/GitHub.png';
import Header from '../../components/Header';
import Input from '../../components/Input/';
import Button from '../../components/Button/';
import ItemRepo from '../../components/ItemRepo';
import Footer from '../../components/Footer';

function App() {
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [currentRepos, setCurrentRepos] = useState([]);

    const handleGetData = async () => {
        const userDataResponse = await fetch(`https://api.github.com/users/${user}`);
        const userData = await userDataResponse.json();

        if (userDataResponse.ok) {
            setCurrentUser(userData);

            const reposDataResponse = await fetch(`https://api.github.com/users/${user}/repos`);
            
            if (reposDataResponse.ok) {
                const reposData = await reposDataResponse.json();
                setCurrentRepos(reposData);
            } else {
                setCurrentRepos([]);
                alert('Repositórios não encontrados');
            }
        } else {
            setCurrentUser(null);
            setCurrentRepos([]);
            alert('Usuário não encontrado');
        }
    }

    return (
        <>
            <Header />
            <Container>
                <img src={background} className="background" alt="git logo" />
                <Input value={user} onChange={(e) => setUser(e.target.value)} />
                <Button onClick={handleGetData} />
                <img src={currentUser?.avatar_url} className="background" alt="profile foto" />
                {currentRepos.map((repo, index) => (
                    <ItemRepo key={index} repo={repo} />
                ))}
            </Container>
            <Footer />
        </>
    );
}

export default App;
