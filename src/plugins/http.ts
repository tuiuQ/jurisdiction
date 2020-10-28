import axios from 'axios'
const MyHttpServer: any = {}


MyHttpServer.install = (Vue: any) => {

  axios.defaults.baseURL = "http://localhost:8888/api/private/v1/"

  Vue.prototype.$http = axios
}

export default MyHttpServer