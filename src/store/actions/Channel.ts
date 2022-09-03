
import request from "../../utils/request"
import { ChannelAction, RootThunkAction } from "src/types/store" 
import { ChannelItem } from "src/types/data"

export const getChannels= ():RootThunkAction=> {
    return async (dispatch)=>{
        const {data:{data:{channels}}} = await request.get<{
            message:String
            data:{
                channels:ChannelItem[] 
            }
        }>('/channels')
        dispatch({
            type:'CHANNEL_SAVE',
            payload:channels
        })
    }
}

export const changeActive=(id:number):ChannelAction => ({
    type:'CHANNEL_ACTIVE',
    id,
})