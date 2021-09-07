
import * as basicLightbox from 'basiclightbox'
import { func } from 'joi';
import './node_modules/basiclightbox/dist/basicLightbox.min.css'


console.log ("basiclightbox")

const instance = basicLightbox.create(
    `<div class="modal">
    
    <h1>Dynamic Content</h1>
    	<p>You can set the content of the lightbox with JS.</p>
     </div>
    `
)
//
//instance.show()

const lightBoxBtnRef = document.querySelector('#lightBoxBtn');

//lightBoxBtnRef.addEventListener ('click', instance.show())

//lightBoxBtnRef.addEventListener ('click', console.log('Вызов instance.show())') )

lightBoxBtnRef.addEventListener ('click',  showLightBox )

function showLightBox(e) {
    
    e.preventDefault()
    console.log('Сработала функция  showLightBox')
    instance.show()
 }

