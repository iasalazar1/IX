const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      siteNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

document.querySelectorAll(".image-slot").forEach((slot) => {
  const image = slot.querySelector("img");

  if (!image) {
    return;
  }

  const updateImageState = () => {
    slot.classList.toggle("image-slot--missing", !image.naturalWidth);
  };

  image.addEventListener("load", updateImageState);
  image.addEventListener("error", updateImageState);

  if (image.complete) {
    updateImageState();
  }
});

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const indicators = Array.from(carousel.querySelectorAll(".carousel-indicators button"));
  const count = carousel.querySelector(".carousel-count");
  const title = carousel.querySelector(".carousel-title");
  const titles = [
    "Escritorio a medida",
    "Cocina integral",
    "Mobiliario a medida",
    "Clóset a medida",
  ];
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    indicators.forEach((indicator, indicatorIndex) => {
      if (indicatorIndex === activeIndex) {
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.removeAttribute("aria-current");
      }
    });

    if (count) {
      count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }

    if (title) {
      title.textContent = titles[activeIndex];
    }
  };

  carousel.querySelector(".carousel-previous")?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
  });

  carousel.querySelector(".carousel-next")?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => showSlide(index));
  });
}

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (contactForm instanceof HTMLFormElement && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const project = String(formData.get("project")).trim();
    const subject = encodeURIComponent(`Nuevo proyecto de ${name}`);
    const body = encodeURIComponent(
      `Hola, soy ${name} (${email}).\n\nMe gustaría platicar sobre este proyecto:\n${project}`,
    );

    window.location.href = `mailto:contacto@ixdiseno.mx?subject=${subject}&body=${body}`;
    formNote.textContent =
      "Se abrió tu aplicación de correo. Revisa el mensaje y envíalo para compartir tu solicitud.";
  });
}
