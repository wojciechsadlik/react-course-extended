interface IBlogEntryPost {
    title: string;
    body: string;
    author: string;
}

interface IBlogEntryGet extends IBlogEntryPost {
    date: Date;
    id: number;
}

export {IBlogEntryPost, IBlogEntryGet};