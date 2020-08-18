import React from 'react'

export default props =>{
    return(
        <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'></div>
            <a className='navbar-brand' href='#'>
                <i className='fa fa-calendar-check-o'></i>TodoaApp
                </a>
       
        <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
                <li><a href='#/todos'>tarefas</a></li>
                <li><a href='#/aboute'>sobre</a></li>
                </ul>
        </div>
        </div>
        </nav>
    )
}