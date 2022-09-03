import store from '../store'
import { ThunkAction } from 'redux-thunk'
import { ArticleItem, ChannelItem } from './data'


export type ChannelAction = 
    | 
    {
        type:'CHANNEL_SAVE',
        payload:ChannelItem[]
    }
    | 
    {
        type:'CHANNEL_ACTIVE',
        id:number
    }




export type RootState = ReturnType<typeof store.getState>



export type RootThunkAction = ThunkAction<void,RootState,unknown,RootAction>

export type ArticleAction={
    type:'ARTICLE_SAVE',
    payload: ArticleItem[]
}
export type RootAction = ChannelAction | ArticleAction