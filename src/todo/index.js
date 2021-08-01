//클래스는 대문자로 시작한다
// 객체를 만드는 방법 중에 하나!
class Todo {
  //클래스가 만들어질 때 제일 먼저 동작하는 함수
  //값을 초기화하는 곳, 처음 만들어질 때 동작할 함수들을 정의
  constructor() {
    this.todos = [] //this === Todo 자기 자신 일단 빈배열이야
  }

  //프로토 타입
  addTodo(label) {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length + 1,
        //label: label,//key valuer 가 같으면 생략이 가능하다
        label,
        isDone: false,
      },
    ]
  }
  removeTodo(id) {
    this.todos = this.todos.filter(() => {
      return Todo.id !== id
    })
  }
  updateTodo(id) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo //기존의 todo 아이디와 전에 것이랑 다르다면 토글링해서 isdone 값을 뒤집어주고 아니면 todo 원래 값으로 고고
    })
  }
  isAllCompleted() {
    return this.todos.every((todo) => {
      return todo.isDone
    })
  }
  hasCompleted() {
    return this.todos.some((todo) => {
      return todo.isDone
    })
  }
}

//만들때는 new 키워드를 사용한다.
// var todo = new Todo()

export default Todo
