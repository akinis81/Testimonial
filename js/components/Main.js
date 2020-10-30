import {testimonials} from '../data/data.js';

class Main {
    constructor(testimonials){
        this.testimonials = testimonials;
        this.list = '';
        
        this.init();
    }

    init(){
        this.generateHtml();

    }

    generateHtml(){
        this.list = document.querySelector('.list');
        let headerHtml = '';
        for (const iterator of this.testimonials) {
            headerHtml += `  <div class="single">
                                <p class="name">${iterator.name}</p>
                                <p class="company">${iterator.company}</p>
                                <p class="paragraph">${iterator.paragraph}</p>
                            </div>`;
        }
        // console.log(headerHtml);
        this.list.insertAdjacentHTML('afterbegin',headerHtml)


    }
}

new Main(testimonials);