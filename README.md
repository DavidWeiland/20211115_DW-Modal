
![shields](https://img.shields.io/badge/version-v1.1.0-blue)
![shields](https://img.shields.io/badge/make_with-React_in_create--react--app-red)
![shields](https://img.shields.io/badge/author-David_Weiland-green)

# DW-REACT-MODAL
## Composant React personnel

This component must work in react app and it was bootstrapped with  [Create React App](https://github.com/facebook/create-react-app).


## How to use dw-react-modal component :

#### First, you must add the following elements :
- state hook with useState
```
const [modal, setModal]= useState(false)
```

- close function :
```
const closeModal = () => {setModal(!modal)}
```


#### Last, in your render, add where you want the following code :

```
<Modal state={modal} config={{}} close={closeModal}>
  here, html elements in the modal
</Modal>
```
## Props
#### required props
`state={modal}` : is the open or close status of the modal (refers to state hook)

`close={closeModal}` (refers to close function)

#### Optional extras
`config={{}}` : change the object to configure style (ex : {backgroundColor : "#FFF", color:"#333333"}). It's possible to change : backgroundColor, borderRadius, width, height, justifyContent, alignItems, color, fontWeight, fontSize.


## Supports
Homepage of the module : [https://github.com/DavidWeiland/DW-Modal](https://github.com/DavidWeiland/DW-Modal)

Please report bugs in : [https://github.com/DavidWeiland/DW-Modal.git/issues](https://github.com/DavidWeiland/DW-Modal.git/issues)
