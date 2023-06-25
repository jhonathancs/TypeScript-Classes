import '../styles/book.css'

type BookProps = {
livros:{
    title: string,
    pages:number,
    isRead: boolean,
    isFavorite: boolean
}
}

function Book({ livros }: BookProps) {
    const {title, pages, isRead, isFavorite} = livros
    const favoriteClass = isFavorite ? 'favorite-book' : '';
    
    return(
        <li className={`book-item ${favoriteClass}`}>
            <span>{isRead ? '🆗' : "⏳"}</span>
            {' '}
            <span>
                {`${title} (${pages} paginas)`}
            </span>
            {' '}
            {isFavorite && <span>❤️</span>}
            {/* <span>{livros.isFavorite ? '❤️' : ''}</span> */}
        </li>
    )
}

export default Book;