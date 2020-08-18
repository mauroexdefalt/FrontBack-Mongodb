import  React ,   {Component} from 'react'
import axios from 'axios'

import Pageheader from '../template/pageheader'
import Todoform from '../todo/todoform' 
import Todolist from '../todo/todolist' 

const URL = 'http://localhost:3003/api/todos'
             

export default class todo extends Component{
   
   
    constructor(props){
        super(props)
        this.state = { 
            description : '' ,
             list : []   }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state , description: e.target.value})
    }

    handleAdd(){
    const desc = this.state.description
    axios.post(URL , { desc }).then(resp => console.log('Funcionou!'))
    }
    render(){
        return(
        <div>
            <Pageheader  name='Tarefas' small='cadastro'/>
            <Todoform description={this.state.description} 
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}/>
             <Todolist desc={this.state.description} />
        </div>

        )
    }
}