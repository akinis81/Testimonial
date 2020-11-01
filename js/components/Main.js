import {testimonials} from '../data/data.js';

class Main {
    constructor(testimonials){
        this.testimonials = testimonials;
        this.list = '';
        this.init();
 
    }

    init(){
        this.generateHtml();
        this.addEvent();
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
        this.list.insertAdjacentHTML('afterbegin',headerHtml)
        
        let pointsHtml ='<span class="dot active" data-dot="0"></span>';
        for (let i = 0; i < this.testimonials.length-1; i++) {
            pointsHtml +=`<span class="dot" data-dot="${i+1}"></span>`;
        }
        document.querySelector('.points').insertAdjacentHTML('afterbegin',pointsHtml);

                    /**
         * Set styles
         */
        this.list.style.width = 100*this.testimonials.length +'%';        
        const singleClass = document.querySelectorAll('.single');
        for (let j = 0; j < singleClass.length; j++) {
            singleClass[j].style.width = 100/singleClass.length +'%';  
        }
    }

    addEvent(){
    

        const dot = document.querySelectorAll('.dot');
        for (const iterator of dot) {
            iterator.addEventListener('click', () => {
                /**
                 * creating active .dot
                 */
                const activeDot = document.querySelector('.points .active')
                activeDot.classList.remove('active')
                iterator.classList.add('active')
                /**
                 * testimonials transform to left
                 */
                let degreelist = 100 / (this.testimonials.length) * iterator.dataset.dot; 
                this.list.style.transform = `translateX(-${degreelist}%)`;     

        });
    }
}
}
new Main(testimonials);