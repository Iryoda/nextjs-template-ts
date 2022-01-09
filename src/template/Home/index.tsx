import axios from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

import Test from 'components/TestComponent';

import * as S from './styles';

const HomeTemplate = () => {
    const randomG1Pokemon = useMemo(() => Math.floor(Math.random() * 151), []);

    const pokemonService = async () => {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${randomG1Pokemon}`
        );
        return data;
    };

    const { data, isLoading } = useQuery('random-poke', pokemonService);

    return (
        <S.Container>
            <S.Title>
                Esse template foi criado pela equipe de Research 21.1 para
                projetos internos da Polijunior.
            </S.Title>
            <Test title="Esse componente é um teste" />

            {isLoading ? (
                <p>loading...</p>
            ) : (
                <img
                    src={data.sprites.front_default}
                    width={128}
                    height={128}
                    unselectable="on"
                    draggable={false}
                    alt="Imagem de pokemon"
                />
            )}
        </S.Container>
    );
};

export default HomeTemplate;
