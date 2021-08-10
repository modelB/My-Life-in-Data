// let newEl = document.querySelector('body').appendChild(document.createElement('div'));
// newEl.innerHTML = 'Fuck';'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
//import server from '../server/server';
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(()=>document.querySelector('#graph').addEventListener('click', (event) => {
        console.log(
        "clientX: " + event.clientX +
    " - clientY: " + event.clientY
        )
        const div = document.createElement('div');
        const count = document.querySelector('#lifenoteslist').childElementCount+1;
        div.innerHTML = `<i class="far fa-star"></i>${count}`;
        
        document.body.appendChild(div);
        div.style.position = 'absolute';
        div.style.top = `${event.clientY}px`;
        div.style.left = `${event.clientX}px`;
        div.style.zIndex = 99;
        document.querySelector('#eventNote').focus()
    }))

    document.querySelector('#eventNoteButton').addEventListener('click', ()=> {
        const listItem = document.createElement('li');
        listItem.innerText = document.querySelector('#eventNote').value;
        document.querySelector('#eventNote').value = '';
        document.querySelector('#lifenoteslist').appendChild(listItem);
    })
});
ReactDOM.render(<App />, document.getElementById('app'));