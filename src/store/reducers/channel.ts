import { ChannelItem } from "src/types/data"
import { ChannelAction } from "src/types/store"

interface IState{
    channels:ChannelItem[],
    active:number
}

const initValue:IState = {
    channels:   [],
    active:     0
}

export default function channel(state = initValue,actions:ChannelAction){
    switch(actions.type){
        case 'CHANNEL_SAVE':
        return{
            ...state,
            channels:actions.payload,
            active:actions.payload[0].id
        }
        case 'CHANNEL_ACTIVE':
        return{
            ...state,
            active:actions.id
        }
        default:{
            return state
        }
    }
    return state
}