import Article from "src/components/Article"
import { ArticleItem } from "src/types/data"
import {ArticleAction} from 'src/types/store'


interface IState{
    articles:ArticleItem[]
}

const initValue:IState = {
    articles:  []
}
export default function article(state=initValue,actions:ArticleAction){
    switch(actions.type){
        case 'ARTICLE_SAVE':
            return{
                ...state,
                articles:actions.payload
            }
        default:
            return state
    }
}