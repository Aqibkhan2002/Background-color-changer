let parent=document.querySelectorAll('.content')

// let colors=["red","blue","green","yellow","pink","black","purple","aqua","orange","brown","cyan","white"]



parent.forEach(elem=>
    {
      
        addEventListener("click",function(e){
     
        let btn=e.target
        let val=btn.innerHTML;
        document.querySelector('body').style.backgroundColor=val;
     })
})



// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default:"black",

 

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,     
            input: true,
        }
    }
});


pickr.on('change', (color, source, instance) => {

    let rgba=color.toRGBA().toString();
    document.querySelector('body').style.backgroundColor=rgba
})