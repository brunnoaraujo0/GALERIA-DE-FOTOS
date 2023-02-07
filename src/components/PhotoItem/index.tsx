//COMPONENTE DE UMA IMAGEM

import * as C from './styles';

type Props = {
    url: string; //URL DA IMAGEM
    name: string; //NOME DA IMAGEM
    onDelete: (name: string) => void; //EVENTO DE CLICK
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={()=>onDelete(name)}>Excluir</button>
        </C.Container>
    );
}