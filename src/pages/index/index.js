import '../../modules/common.css'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/url'

new Vue({
  el:'#app',
  data:{
    lists:null
  },
  created(){
    axios.get(url.urlLists,{
      pageNum: 1,
      pageSize: 6
    }).then(res=>{
      //加载
      this.lists=res.data.lists
    })
  }
})