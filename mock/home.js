// 使用 Mock
import Mock from'mockjs'

export const Announcements = Mock.mock('/home/announcements','get',{
        'list|5-9':[{
            'id|+1': 1,
            'name':'@cname',
            'title': '@ctitle',
            'content': '@cparagraph',
            'time': '@datetime',
            'imgUrl': '@image',
            "like": '@integer(0,1000)',
            'collect': '@integer(0,1000)',
            'read': '@integer(0,1000)'
        }]
    })
export const p= Mock.mock('/home/public','get',{
    'list|8-9':[{
        "id": '@id',
        "title": '@ctitle',
    }]
})
