import { observable, autorun } from "../mobx"

const obj = observable({
    name: "tom"
})

autorun(() => {
    console.log("observable:", obj.name)
})
