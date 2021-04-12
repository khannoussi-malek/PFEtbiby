// import React,{Component} from 'react';

// import './App.css';

// class App extends Component{
//   state = {
//     file: '',
//     error: '',
//     msg: ''
// }
// //input
// onFileChange = (event) => {
//   this.setState({
//     file: event.target.files[0]
//   });
// }

// //bouton upload

// uploadFile = (event) => {
//   event.preventDefault();
//   this.setState({error: '', msg: ''});
//   if(!this.state.file) {
//     this.setState({error: 'Please upload a file.'})
//     return;
//   }
//   if(this.state.file.size >= 2000000) {
//     this.setState({error: 'File size exceeds limit of 2MB.'})
//     return;
//   }
//   let data = new FormData();
//   data.append('file', this.state.file);
//   data.append('name', this.state.file.name);
//   fetch('http://localhost/files_react/', {
//     method: 'POST',
//     body: data
//   }).then(response => {
//     this.setState({error: '', msg: 'Sucessfully uploaded file'});
//   }).catch(err => {
//     this.setState({error: err});
//   });
// }

// render() {
//   return (
//     //fonction principale pour chercher le fichier dans l'ordinateur afin d'uploader

//     <FormControl>
//     <FormLabel htmlFor={id}>{label}</FormLabel>
//     <Input
//           id={id}
//           type={'file'}
//           value={value ?? ""}
//         />
//     </FormControl>
//   );
// }
// }

// export default App;