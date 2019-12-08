import $ from 'jquery'
import global from '@/global/global'

export const getTreeData = () => {
  var result = null
  $.ajax({
    url: global.LOVE_URL + '/test/mytest',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'text',
    async: false,
    success: function (data) {
      result = data
    },
    error: function (data) {
      console.error(data)
    }
  })
  return result
  // $.get(global.LOVE_URL + '/test/mytest', function (data) {
  //   result = data
  // })
  // console.log(result)
}
