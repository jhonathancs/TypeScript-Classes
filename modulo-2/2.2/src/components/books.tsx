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
    return(
        <li>
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