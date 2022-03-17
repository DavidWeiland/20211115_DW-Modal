
![shields](https://img.shields.io/badge/version-v1.1.0-blue)
![shields](https://img.shields.io/badge/make_with-React_in_create--react--app-red)
![shields](https://img.shields.io/badge/author-David_Weiland-green)

# DW-REACT-MODAL
## Composant React personnel

This component must work in react app and it was bootstrapped with  [Create React App](https://github.com/facebook/create-react-app).

## Install module
In your own react project :

install with npm :
```
npm install --save dw-react-modal
```
or, with yarn :
```
yarn add dw-react-modal
```

Here the link to [dw-react-modal](https://www.npmjs.com/package/dw-react-modal) published on npmjs.

## How to use dw-react-modal component :

1. First, import Modal from "dw-react-modal/dist/dw-react-modal" 

2. In the function component, before the render, you must add the following elements :
- a state hook with useState
- a close function

3. In the render, add where you want the module

For example:
```
export default function YourApp() {
  const [ modal, setModal ] = useState(false)
  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <Modal
      state={modal}
      config={{}}
      close={closeModal}
    >
      {/* here, html elements in the modal */}
    </Modal>
  )
}
```

## Props
#### required props
`state={modal}` : this is the open or close status of the modal (refers to state hook)

`close={closeModal}` (refers to close function)

#### Optional extras
`config={{}}` : to configure style :

- alignItems
- backgroundColor
- borderRadius
- color
- fontSize
- fontWeight
- height
- justifyContent
- width

example :
```
config = {
  {
    backgroundColor : "#FFF",
    color:"#333333"
  }
}
```


## Supports
Homepage of the module : [https://github.com/DavidWeiland/DW-Modal](https://github.com/DavidWeiland/DW-Modal)

Please report bugs in : [https://github.com/DavidWeiland/DW-Modal.git/issues](https://github.com/DavidWeiland/DW-Modal.git/issues)
