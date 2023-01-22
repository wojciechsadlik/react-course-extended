interface IBlogEntryPost {
    title: string,
    body: string,
    author: string
}

interface IBlogEntryGet extends IBlogEntryPost {
    id: number
}

export {IBlogEntryPost, IBlogEntryGet};