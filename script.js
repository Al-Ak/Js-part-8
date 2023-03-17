const listEl = document.getElementById("list")

const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsData = await data.json()
    const deleTe = jsData.map(({ userId, body, ...rest }) => {
      return rest
    
    })
    const newArr = deleTe.map((el) => {
      return {
        ...el,
        className: "post",
        element: "div"
      }
    })
    const keys = newArr.map((el) => {
      return `<${el.element} class= "${el.className}">${el.title}</${el.element}>`
    })
    listEl.innerHTML = keys.join("")
  console.log(newArr);
  }
  
  getData()