const Boxes = Array.from(document.getElementsByClassName('box'));
console.log(Boxes);
Boxes.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        console.log("Drag start triggered")
        console.log(e)
        e.target.classList.add('hold');
        e.target.style.opacity = '0.8';
        e.dataTransfer.clearData()
        e.dataTransfer.setData('text/plain', e.target.id);
    })
    element.addEventListener('dragend', (e) => {
        e.target.classList.remove('hold');
        e.target.style.opacity = '1';
    })
});

const dropable = Array.from(document.getElementsByClassName('dropable'));
dropable.forEach(element => {
    element.addEventListener('dragover', (e)=>{
        e.preventDefault();
    })
    element.addEventListener('dragenter', (e)=>{
        if(e.target.classList.contains('dropable')){
            e.target.classList.add('dropable-item');
        }
    })
    element.addEventListener('dragleave', (e)=>{
        if(e.target.classList.contains('dropable')){
            e.target.classList.remove('dropable-item');
        }
    })
    element.addEventListener('drop', (e)=>{
        e.preventDefault();
        if(e.target.classList.contains('dropable')){
            let data = e.dataTransfer.getData('text');
            e.target.appendChild(document.getElementById(data))
            e.target.classList.remove('dropable-item');
        }
    })

})