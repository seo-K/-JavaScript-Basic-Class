// 주소의 변경을 감지하고, 주소에 맞는 페이지를 노출한다.

class Router {
  // App 으로부터 넘겨받은 페이지 정의
  constructor(routes) {
    // 최초에 한번 생성 될 때 이벤트를 바인딩한다.
    this.routes = routes
    this.bindEvent()

    // 첫 진입시 페이지를 그리기 위해 실행
    this.renderPage()
  }

  bindEvent() {
    // 이벤트를 추가는 바로 실행되지 않고, 후에 이벤트가 발생하면 실행된다.
    window.onhashchange = () => {
      // hash 값이 변경되었다는 것은 변경된 hash 값에 맞게
      // 페이지를 새로 그린다.
      this.renderPage()
    }
  }

  renderPage() {
    //앞에께 #이면 / 로 바꿀게 / 빈공백이라면 / 로 그냥 쓸게
    const path = window.location.hash.replace("#", "/") || "/"
    // console.log(window.location.hash)

    const PageComponent = this.routes[path]

    console.log("PageComponent", PageComponent)

    //정해진  path 에 맞는 페이지가 없을 때
    if (!PageComponent) {
      //error 페이지
      const ErrorPageComponent = this.routes["/error"]
      new ErrorPageComponent()

      //함수는 return을 만나면 종료된다.
      return
    }
    //페이지가 있을때
    new PageComponent()
    // console.log("path", path)
  }
}

export default Router
