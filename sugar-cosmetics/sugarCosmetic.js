
document.getElementById("loginBtn").addEventListener("click", function() {
    
    window.location.href = "login.html";
});

    document.addEventListener("DOMContentLoaded", function() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slider_Img');

        function nextSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        function prevSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    });

    const heartIconss = document.querySelectorAll('.fa-regular.fa-heart');

        heartIconss.forEach(icon => {
            icon.addEventListener('click', function() {
                this.classList.toggle('heart-red');
            });
        });
    
       
        function navigateToLips() {
            window.location.href = "lipsDiv.html";
        }

        function navigateToEyes(){
            window.location.href = "eyeDiv.html";
        }

        function navigateToFace(){
            window.location.href = "faceDiv.html";
        }

        function navigateToNail(){
            window.location.href = "nailDiv.html";
        }

        function navigateToSkincare(){
            window.location.href = "skinCareDiv.html";
        }

       function wishListPage(){
        window.location.href = "wishListPage.html";
       }


       // video 

       function playVideo() {
        var container = document.querySelector('.MATL');
        container.innerHTML = '<div class="videoContainer"><iframe width="1200" height="450" src="https://www.youtube.com/embed/3RP5xSyuSNw?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
    }

      


       