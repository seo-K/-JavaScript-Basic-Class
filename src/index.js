import Router from "./router" //값을 받아서 그 값을 넣어주는겨

import MainPage from "./pages/main"
import SigninPage from "./pages/signin"
import MyPage from "./pages/my"
import ErrorPage from "./pages/error"

const ROUTES = {
  "/": MainPage, //메인
  "/signin": SigninPage, //로그인
  "/my": MyPage, //내 정보
  "/error": ErrorPage, //에러
}

class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
