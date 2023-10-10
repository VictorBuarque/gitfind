import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo }) {
    // Verifica se repo é nulo ou indefinido e renderiza uma mensagem de erro
    if (!repo) {
        return <p>Repositório não encontrado</p>;
    }

    return (
        <ItemContainer>
            
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">
                Ver Repositório
            </a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;
