
const bookOne = {
    imagem :"https://m.media-amazon.com/images/I/51Pw06uU8FL._SX346_BO1,204,203,200_.jpg",
    titulo :"O poder do hábito" ,
    autor :"Charles Duhigg",
    editora :"Objetiva"
}

const bookTwo = {
    imagem :"https://m.media-amazon.com/images/I/41suUFbw-eL._SX346_BO1,204,203,200_.jpg",
    titulo :"Mindset: A nova psicologia do sucesso" ,
    autor :"Carol S. Dweck",
    editora :"Objetiva"
}

export default function Booklist() {
    return(
        <>
        <Book imagem={bookOne.imagem} titulo={bookOne.titulo} autor={bookOne.autor} editora={bookOne.editora} idade={10}/>
        <Book imagem={bookTwo.imagem} titulo={bookTwo.titulo} autor={bookTwo.autor} editora={bookTwo.editora} idade={20}/>
        </>
    );
}

const Book = ( props ) => {
    return(
        <article className="book">
            <img src={props.imagem} alt={props.titulo}/>
            <h4>{props.titulo}</h4>
            <h6>{props.autor}</h6>
            <h6>{props.editora}</h6>
            <h2>{props.idade}</h2>
        </article>
    );
}