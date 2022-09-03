import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../../src/store/actions/Article'
import { RootState } from 'src/types/store'
export default function Article() {
    
    const dispatch = useDispatch()
    const {active} = useSelector((state:RootState)=>state.channel)
    const {articles} = useSelector((state:RootState)=>state.article)
    useEffect(()=>{
        dispatch(getArticle(active))
    },[dispatch,active])
    return (
        <div className='list'>
            {
                articles.map(article=>(
                    <div key={article.art_id} className='article_item'>
                        <h3 className='van-ellipsis'>{article.title}</h3>
                        <div className='img_box'>
                            <img src={article.cover.images?article.cover.images[0]:""} className='w100' alt='' />
                        </div>
                        <div className='info_box'>
                            <span>{article.aut_id}</span>
                            <span>{article.comm_count}评论</span>
                            <span>{article.pubdate}</span>
                        </div>
                    </div>
                ))
            }
           
        </div>
    )
}