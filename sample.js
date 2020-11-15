<!--HTML Code-->
<!-- Slideshow Container Div -->
<div class="container"> 
  
  <!-- Full-width images with caption text -->
  <div class="image-sliderfade fade"> 
    <img src="img1.jpg" style="width:100%"> 
    <div class="text">Image caption 1</div> 
  </div> 
  
  <div class="image-sliderfade fade"> 
    <img src="img2.jpg" style="width:100%"> 
    <div class="text">Image caption 2</div> 
  </div> 
  
  <div class="image-sliderfade fade"> 
    <img src="img3.jpg" style="width:100%"> 
    <div class="text">Image caption 3</div> 
  </div> 
  
  <div class="image-sliderfade fade"> 
    
    <div class="text">Image caption 4</div> 
  </div> 
  
</div> 
<br> 
  
<!-- The dots/circles -->
<div style="text-align:center"> 
  <span class="dot"></span>  
  <span class="dot"></span>  
  <span class="dot"></span>  
</div>


<script type="text/javascript">  
        var slide_index = 1;  
        displaySlides(slide_index);  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  
</script>   
