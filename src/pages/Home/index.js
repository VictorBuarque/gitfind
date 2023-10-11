import React, { useState } from 'react';
import { Container, Background } from './styles';
import background from '../../assets/imgs/GitHub.png';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ItemRepo from '../../components/ItemRepo';
import Footer from '../../components/Footer';
import { api } from '../../services/api';

function App() {
    const [repos, setRepos] = useState([]);
    const [currentRepository, setCurrentRepository] = useState('');

    const handleSearchRepo = async () => {
        try {
            const { data } = await api.get(`repos/${currentRepository}`);

            if (data.id) {
                const isExist = repos.find((repo) => repo.id === data.id);

                if (!isExist) {
                    setRepos((prev) => [...prev, data]);
                    setCurrentRepository('');
                }
            } else {
                alert('Repositório não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar repositório:', error);
            alert('Erro ao buscar repositório');
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Background src={background} alt="git logo" />
                <Input
                    value={currentRepository}
                    onChange={(e) => setCurrentRepository(e.target.value)}
                />
                <Button onClick={handleSearchRepo} />
                {repos.map((repo) => (
                    <ItemRepo key={repo.id} repo={repo} />
                ))}
            </Container>
            <hr />
            <Footer />
        </>
    );
}

export default App;
