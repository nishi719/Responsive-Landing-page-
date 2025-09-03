// Smooth scroll effect
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Count-up Animation for Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '');
    const speed = 50; // lower = faster
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.innerText = count + increment + '+';
      setTimeout(updateCount, speed);
    } else {
      counter.innerText = target + '+';
    }
  };
  updateCount();
});

// Learn More toggle
document.querySelectorAll(".learn-more").forEach(btn => {
  btn.addEventListener("click", function () {
    let extra = this.previousElementSibling;
    if (extra.style.display === "block") {
      extra.style.display = "none";
      this.textContent = "Learn More";
    } else {
      extra.style.display = "block";
      this.textContent = "Show Less";
    }
  });

});

// Swiper Initialization
document.addEventListener('DOMContentLoaded', function () {
  if (window.Swiper) {
    new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  }
});

// Contact Form Validation & Success Message
(function () {
  'use strict'
  const form = document.querySelector('#contactForm');
  const alertBox = document.querySelector('#successAlert');

  if (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Prevent real submit
        alertBox.classList.remove('d-none'); // Show success message
        alertBox.classList.add('show'); // Animate fade-in
        form.reset(); // Reset form

        // Auto-hide alert after 5 seconds
        setTimeout(() => {
          alertBox.classList.remove('show');
          alertBox.classList.add('d-none');
        }, 5000);
      }
      form.classList.add('was-validated');
    }, false);
  }
})();

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotClose = document.getElementById('chatbot-close');
const sendMessageBtn = document.getElementById('sendMessage');
const userMessageInput = document.getElementById('userMessage');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.addEventListener('click', () => {
  chatbotBox.classList.toggle('d-none');
});
chatbotClose.addEventListener('click', () => {
  chatbotBox.classList.add('d-none');
});

function botReply(message) {
  let reply = '';
  const msg = message.toLowerCase();
  if(msg.includes('hello') || msg.includes('hi')) reply = 'Hello! How can I assist you today?';
  else if(msg.includes('service')) reply = 'We offer Web Development, AI & Analytics, Cloud & Security services.';
  else if(msg.includes('contact')) reply = 'You can contact us via phone, email, WhatsApp, or our contact form!';
  else reply = "I'm here to help! Please ask your question.";
  return reply;
}

sendMessageBtn.addEventListener('click', () => {
  const msg = userMessageInput.value.trim();
  if(!msg) return;

  const userMsgDiv = document.createElement('div');
  userMsgDiv.classList.add('user-message');
  userMsgDiv.innerText = msg;
  chatbotMessages.appendChild(userMsgDiv);

  setTimeout(() => {
    const botMsgDiv = document.createElement('div');
    botMsgDiv.classList.add('bot-message');
    botMsgDiv.innerText = botReply(msg);
    chatbotMessages.appendChild(botMsgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 600);

  userMessageInput.value = '';
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});

userMessageInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendMessageBtn.click();
});

var heroCarousel = document.querySelector('#heroCarousel');
if(heroCarousel){
  var carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel'
  });
}
