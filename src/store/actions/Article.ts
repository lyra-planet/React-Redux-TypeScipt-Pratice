
import { ArticleItem } from "src/types/data"
import { RootThunkAction } from "src/types/store"
import request from "../../utils/request"

export const getArticle= (id:number):RootThunkAction=> {
    return async (dispatch)=>{
        const {data:{data:{results}}} = await request.get<{
            message:String
            data:{
                results:ArticleItem[]
            }
            }>(`/articles?channel_id=${id}&timestamp=${Date.now()}`)
        dispatch({
            type:'ARTICLE_SAVE',
            payload:results
        })
    }
}
