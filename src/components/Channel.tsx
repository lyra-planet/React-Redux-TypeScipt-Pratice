import Item from 'antd/lib/list/Item'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive, getChannels } from '../store/actions/Channel'
import {RootState} from '../types/store'
export default function Channel() {
    const dispatch = useDispatch()
    const {channels,active} = useSelector((state:RootState)=>state.channel)
    const handleClickChannel = (id:number)=>{dispatch(changeActive(id))}
    
    useEffect(()=>{
        dispatch(getChannels())
    },[dispatch])
    return (
        <ul className='catagtory'>
           {
            channels.map((item)=>(
                <li className={item.id === active ? 'select': ''} key={item.id} onClick={()=>handleClickChannel(item.id)}>
                    {item.name}
                </li>
            ))
           }
        </ul>
    )
}