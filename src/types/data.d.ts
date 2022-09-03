
export type ChannelItem = {id:number,name:string}

export type ArticleItem= {
    art_id: string;
    title: string;
    aut_id: string;
    comm_count: number;
    pubdate: string;
    aut_name: string;
    is_top: number;
    cover: {
        type: number;
        images: string[];
    };
}