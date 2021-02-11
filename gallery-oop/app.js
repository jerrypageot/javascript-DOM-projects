function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
}


function Gallery(element){
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  //target
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.iamgeName = getElement('.image-name')
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');

  //bind functions
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);

  this.container.addEventListener('click', function(e){
    if(e.target.classList.contains('img')){
      this.openModal(e.target, this.list)
    }
  }.bind(this));
};

Gallery.prototype.openModal = function(selectedImage,list){
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list.map(function(image){
    return `<img
     src="${image.src}" 
     title="${image.title}"
     data-id="${image.dataset.id}"
     class="${selectedImage.dataset.id === image.dataset.id?"modal-img selected":"modal-img"}"
     />`
  }).join('')
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
};

Gallery.prototype.setMainImage = function(selectedImage){
  this.modalImg.src = selectedImage.src;
  this.iamgeName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open');

  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
};

Gallery.prototype.nextImage = function(){};
Gallery.prototype.prevImage = function(){};


const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
