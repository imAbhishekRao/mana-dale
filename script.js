(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const leadForm = document.querySelector(".lead-form");
  const callbackBtn = document.querySelector(".btn-callback");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (callbackBtn) {
    callbackBtn.addEventListener("click", () => {
      window.location.href = "tel:+918548052222";
    });
  }

  if (leadForm) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = leadForm.querySelector("#lead-name")?.value.trim();
      const phone = leadForm.querySelector("#lead-phone")?.value.trim();

      if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
      }

      const submitBtn = leadForm.querySelector(".btn-submit");
      const original = submitBtn.textContent;
      submitBtn.textContent = "Submitted!";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = original;
        submitBtn.disabled = false;
        leadForm.reset();
      }, 1800);
    });
  }

  /* Pricing section — open enquiry form */
  document.querySelectorAll(".pricing-section__breakup-btn").forEach((btn) => {
    btn.setAttribute("data-enquiry-form", "");
    if (!btn.getAttribute("data-enquiry-title")) {
      const unit = btn.getAttribute("data-unit") || "Price Breakup";
      btn.setAttribute("data-enquiry-title", `Price Breakup — ${unit}`);
    }
  });

  /* Mana Dale floor plans — images from manadale.mananewlaunch.in */
  const floorPlans = [
    {
      type: "3 BHK",
      area: "1590 Sq. Ft.",
      price: "₹ 1.63 Cr*",
      image: "assets/floor-plans/floorplan.webp",
      download: null
    },
    {
      type: "3 BHK",
      area: "1600 Sq. Ft.",
      price: "₹ 1.66 Cr*",
      image: "assets/floor-plans/floorplan.webp",
      download: null
    },
    {
      type: "3 BHK",
      area: "1786 Sq. Ft.",
      price: "₹ 1.85 Cr*",
      image: "assets/floor-plans/floorplan.webp",
      download: null
    },
    {
      type: "4 BHK",
      area: "2145 Sq. Ft.",
      price: "₹ 2.23 Cr*",
      image: "assets/floor-plans/floorplan.webp",
      download: null
    }
  ];

  const floorPlanGrid = document.getElementById("mana-dale-floor-plan-grid");
  if (floorPlanGrid) {
    const downloadIcon = `
      <span class="mana-dale-floor-plan-cta__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path fill="currentColor" d="M12 3v10.2l3.2-3.2 1.4 1.4L12 17.2 7.4 11.4l1.4-1.4L12 13.2V3zM5 19h14v2H5v-2z"/>
        </svg>
      </span>
    `;

    floorPlanGrid.innerHTML = floorPlans
      .map((plan, index) => {
        const label = `${plan.type} — ${plan.area}`;
        const imageBlock = plan.image
          ? `<div class="mana-dale-floor-plan-image">
              <img src="${plan.image}" alt="${plan.type} floor plan — ${plan.area}" width="640" height="480" loading="lazy" />
            </div>`
          : `<div class="mana-dale-floor-plan-image mana-dale-floor-plan-image--placeholder">
              <img
                src="assets/floor-plan-placeholder.svg"
                alt="PLACEHOLDER: Mana Dale ${label} floor-plan image not available in project assets"
                width="640"
                height="480"
                loading="lazy"
              />
            </div>`;

        const ctaAttrs = plan.download
          ? `href="${plan.download}" download data-enquiry-form data-enquiry-title="Download ${plan.type} Floor Plan"`
          : `type="button" data-enquiry-form data-enquiry-title="Download ${plan.type} Floor Plan" data-unit="${label}" aria-label="Download ${plan.type} Floor Plan"`;

        const ctaTag = plan.download ? "a" : "button";

        return `
          <article class="mana-dale-floor-plan-card" data-floor-plan-index="${index}">
            ${imageBlock}
            <table class="mana-dale-floor-plan-info">
              <colgroup>
                <col class="mana-dale-floor-plan-info__type" />
                <col class="mana-dale-floor-plan-info__area" />
                <col class="mana-dale-floor-plan-info__price" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Saleable area</th>
                  <th scope="col">Price(Onwards)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${plan.type}</td>
                  <td>${plan.area}</td>
                  <td>${plan.price}</td>
                </tr>
              </tbody>
            </table>
            <${ctaTag} class="mana-dale-floor-plan-cta" ${ctaAttrs}>
              ${downloadIcon}
              <span>Download ${plan.type} Floor Plan</span>
            </${ctaTag}>
          </article>
        `;
      })
      .join("");
  }

  /* Amenities from https://manadale.mananewlaunch.in/ — images local in assets/amenities */
  const amenities = [
    { name: "Leisure Deck", image: "assets/amenities/leisure-deck.jpg" },
    { name: "Clubhouse Waterbody", image: "assets/amenities/waterbody.jpg" },
    { name: "Outdoor Discussion Table", image: "assets/amenities/outdoor-table.jpg" },
    { name: "Outdoor Lounge", image: "assets/amenities/outdoor-lounge.jpg" },
    { name: "Reading Pod", image: "assets/amenities/reading-pod.jpg" },
    { name: "Waterbody With Aquatic Plants", image: "assets/amenities/aquatic-plants.jpg" },
    { name: "Multipurpose Lawn", image: "assets/amenities/lawn.jpg" },
    { name: "Living Wall", image: "assets/amenities/living-wall.jpg" },
    { name: "Outdoor Exercise Station", image: "assets/amenities/outdoor-exercise.jpg" },
    { name: "Outdoor Working Pod", image: "assets/amenities/outdoor-work.jpg" },
    { name: "Pathway Access", image: "assets/amenities/pathway.jpg" },
    { name: "Therapeutic Pathway", image: "assets/amenities/therapeutic-path.jpg" },
    { name: "Stepping Stone Access", image: "assets/amenities/stepping-stones.jpg" },
    { name: "Clubhouse Seating Ledge", image: "assets/amenities/seating-ledge.jpg" },
    { name: "Seating Ledge With Raised Planter", image: "assets/amenities/raised-planter.jpg" },
    { name: "Reading Pod With Elevated Deck", image: "assets/amenities/elevated-deck.jpg" },
    { name: "Seating Ledge With Back Rest", image: "assets/amenities/bench-seating.jpg" },
    { name: "Co-Working Space", image: "assets/amenities/coworking.jpg" },
    { name: "Creche & Outdoor Kids Play Area", image: "assets/amenities/kids-play2.jpg" },
    { name: "Super Market", image: "assets/amenities/supermarket.jpg" },
    { name: "Outdoor Dining Area", image: "assets/amenities/outdoor-dining.jpg" },
    { name: "Gents And Ladies - Spa And Saloon", image: "assets/amenities/spa.jpg" },
    { name: "Squash Court", image: "assets/amenities/squash.jpg" },
    { name: "Restaurant / Dining Hall", image: "assets/amenities/restaurant.jpg" },
    { name: "Gym", image: "assets/amenities/gym.jpg" },
    { name: "Billiards Room", image: "assets/amenities/billiards.jpg" },
    { name: "Chit Chat Lounge", image: "assets/amenities/lounge.jpg" },
    { name: "2 Nos Badminton Multipurpose Court", image: "assets/amenities/sports-court.jpg" },
    { name: "Table Tennis Room", image: "assets/amenities/table-tennis.jpg" },
    { name: "Rooftop Swimming Pool And Kids Pool", image: "assets/amenities/rooftop-pool.jpg" },
    { name: "Deluxe Rooms", image: "assets/amenities/deluxe-room.jpg" },
    { name: "Board Games", image: "assets/amenities/games-table.jpg" },
    { name: "Yoga", image: "assets/amenities/yoga.jpg" },
    { name: "Meditation Hall", image: "assets/amenities/meditation.jpg" },
    { name: "Rooftop Party Area", image: "assets/amenities/rooftop-party.jpg" },
    { name: "Multipurpose Party Hall - 300 Capacity", image: "assets/amenities/party-hall.jpg" },
    { name: "Amphitheatre", image: "assets/amenities/amphitheatre.jpg" }
  ];

  const amenitiesTrack = document.getElementById("mana-dale-amenities-track");
  const amenitiesSection = document.querySelector(".mana-dale-amenities");
  const amenitiesPrev = document.querySelector(".mana-dale-amenities-arrow--prev");
  const amenitiesNext = document.querySelector(".mana-dale-amenities-arrow--next");

  if (amenitiesTrack && amenitiesSection) {
    let amenitiesPageIndex = 0;
    let amenitiesPageCount = 1;
    let touchStartX = 0;

    const getPerPage = () => {
      const width = window.innerWidth;
      if (width <= 768) return 2;
      if (width <= 1024) return 4;
      return 6;
    };

    const renderAmenityCard = (item) => `
      <article class="mana-dale-amenity-card">
        <div class="mana-dale-amenity-image">
          <img src="${item.image}" alt="${item.name}" width="800" height="500" loading="lazy" />
          <div class="mana-dale-amenity-label">${item.name}</div>
        </div>
      </article>
    `;

    const updateAmenitiesUI = () => {
      amenitiesTrack.style.transform = `translateX(-${amenitiesPageIndex * 100}%)`;
      if (amenitiesPrev) amenitiesPrev.disabled = amenitiesPageIndex <= 0;
      if (amenitiesNext) amenitiesNext.disabled = amenitiesPageIndex >= amenitiesPageCount - 1;
    };

    const buildAmenitiesCarousel = () => {
      const perPage = getPerPage();
      const pages = [];
      for (let i = 0; i < amenities.length; i += perPage) {
        pages.push(amenities.slice(i, i + perPage));
      }
      amenitiesPageCount = Math.max(pages.length, 1);
      amenitiesPageIndex = Math.min(amenitiesPageIndex, amenitiesPageCount - 1);

      amenitiesTrack.innerHTML = pages
        .map(
          (page) => `
          <div class="mana-dale-amenities-page">
            ${page.map(renderAmenityCard).join("")}
          </div>
        `
        )
        .join("");

      updateAmenitiesUI();
    };

    const goAmenitiesPage = (nextIndex) => {
      amenitiesPageIndex = Math.max(0, Math.min(nextIndex, amenitiesPageCount - 1));
      updateAmenitiesUI();
    };

    amenitiesPrev?.addEventListener("click", () => goAmenitiesPage(amenitiesPageIndex - 1));
    amenitiesNext?.addEventListener("click", () => goAmenitiesPage(amenitiesPageIndex + 1));

    const viewport = amenitiesSection.querySelector(".mana-dale-amenities-viewport");
    if (viewport) {
      viewport.addEventListener(
        "touchstart",
        (event) => {
          touchStartX = event.changedTouches[0].screenX;
        },
        { passive: true }
      );
      viewport.addEventListener(
        "touchend",
        (event) => {
          const delta = event.changedTouches[0].screenX - touchStartX;
          if (Math.abs(delta) < 40) return;
          if (delta < 0) goAmenitiesPage(amenitiesPageIndex + 1);
          else goAmenitiesPage(amenitiesPageIndex - 1);
        },
        { passive: true }
      );
    }

    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildAmenitiesCarousel, 150);
    });

    buildAmenitiesCarousel();
  }

  /* Gallery images from https://manadale.mananewlaunch.in/assets/img/gallery*.webp */
  const galleryImages = [
    { src: "assets/gallery/gallery1.webp", alt: "Mana Dale — aerial view of towers and landscaped campus" },
    { src: "assets/gallery/gallery2.webp", alt: "Mana Dale — residential towers and open spaces" },
    { src: "assets/gallery/gallery3.webp", alt: "Mana Dale — evening view of the development" },
    { src: "assets/gallery/gallery4.webp", alt: "Mana Dale — landscaped tower base and greenery" },
    { src: "assets/gallery/gallery5.webp", alt: "Mana Dale — project exterior view" },
    { src: "assets/gallery/gallery6.webp", alt: "Mana Dale — community and landscape view" },
    { src: "assets/gallery/gallery7.webp", alt: "Mana Dale — private garden patio lifestyle" },
    { src: "assets/gallery/gallery8.webp", alt: "Mana Dale — outdoor living spaces" }
  ];

  const galleryGrid = document.getElementById("mana-dale-gallery-grid");
  const galleryLightbox = document.getElementById("mana-dale-gallery-lightbox");
  const galleryLightboxImg = galleryLightbox?.querySelector(".mana-dale-gallery-lightbox__img");
  const galleryClose = galleryLightbox?.querySelector(".mana-dale-gallery-lightbox__close");
  const galleryPrevBtn = galleryLightbox?.querySelector(".mana-dale-gallery-lightbox__nav--prev");
  const galleryNextBtn = galleryLightbox?.querySelector(".mana-dale-gallery-lightbox__nav--next");
  let galleryIndex = 0;

  const openGalleryLightbox = (index) => {
    if (!galleryLightbox || !galleryLightboxImg) return;
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    const item = galleryImages[galleryIndex];
    galleryLightboxImg.src = item.src;
    galleryLightboxImg.alt = item.alt;
    galleryLightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const closeGalleryLightbox = () => {
    if (!galleryLightbox) return;
    galleryLightbox.hidden = true;
    document.body.style.overflow = "";
  };

  if (galleryGrid) {
    galleryGrid.innerHTML = galleryImages
      .map(
        (item, index) => `
        <button type="button" class="mana-dale-gallery__item" data-gallery-index="${index}" aria-label="View ${item.alt}">
          <img src="${item.src}" alt="${item.alt}" width="573" height="410" loading="lazy" />
        </button>
      `
      )
      .join("");

    galleryGrid.querySelectorAll(".mana-dale-gallery__item").forEach((btn) => {
      btn.addEventListener("click", () => {
        openGalleryLightbox(Number(btn.getAttribute("data-gallery-index") || 0));
      });
    });
  }

  galleryClose?.addEventListener("click", closeGalleryLightbox);
  galleryPrevBtn?.addEventListener("click", () => openGalleryLightbox(galleryIndex - 1));
  galleryNextBtn?.addEventListener("click", () => openGalleryLightbox(galleryIndex + 1));

  galleryLightbox?.addEventListener("click", (event) => {
    if (event.target === galleryLightbox) closeGalleryLightbox();
  });

  /* Shared download enquiry modal — name + WhatsApp */
  const enquiryModal = document.getElementById("enquiry-modal");
  const enquiryForm = document.getElementById("enquiry-modal-form");
  const enquiryTitle = document.getElementById("enquiry-modal-title");
  const enquiryName = document.getElementById("enquiry-name");
  const enquiryWhatsapp = document.getElementById("enquiry-whatsapp");
  let enquiryContext = "Download Now";

  const openEnquiryModal = (title) => {
    if (!enquiryModal) return;
    enquiryContext = title || "Download Now";
    if (enquiryTitle) enquiryTitle.textContent = enquiryContext;
    enquiryForm?.reset();
    enquiryModal.hidden = false;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => enquiryName?.focus(), 50);
  };

  const closeEnquiryModal = () => {
    if (!enquiryModal) return;
    enquiryModal.hidden = true;
    document.body.style.overflow = "";
  };

  const bindEnquiryTriggers = (root = document) => {
    root.querySelectorAll("[data-enquiry-form]").forEach((el) => {
      if (el.dataset.enquiryBound === "1") return;
      el.dataset.enquiryBound = "1";
      el.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openEnquiryModal(el.getAttribute("data-enquiry-title") || el.textContent.trim() || "Download Now");
      });
    });
  };

  bindEnquiryTriggers();
  if (floorPlanGrid) bindEnquiryTriggers(floorPlanGrid);

  enquiryModal?.querySelectorAll("[data-enquiry-close]").forEach((el) => {
    el.addEventListener("click", closeEnquiryModal);
  });

  enquiryForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = enquiryName?.value.trim() || "";
    const whatsapp = (enquiryWhatsapp?.value || "").replace(/\D/g, "");

    if (!name) {
      enquiryName?.focus();
      return;
    }
    if (whatsapp.length < 10) {
      enquiryWhatsapp?.focus();
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm ${name}. My WhatsApp number is ${whatsapp}. I would like: ${enquiryContext} for Mana Dale (Kodathi, Off Sarjapur Road).`
    );
    window.open(`https://wa.me/918548052222?text=${message}`, "_blank", "noopener");
    closeEnquiryModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (galleryLightbox && !galleryLightbox.hidden) closeGalleryLightbox();
      if (enquiryModal && !enquiryModal.hidden) closeEnquiryModal();
      return;
    }
    if (!galleryLightbox || galleryLightbox.hidden) return;
    if (event.key === "ArrowLeft") openGalleryLightbox(galleryIndex - 1);
    if (event.key === "ArrowRight") openGalleryLightbox(galleryIndex + 1);
  });

  /* Virtual tour — source opens enquiry; focus lead form (no public tour URL) */
  document.querySelectorAll("[data-virtual-tour]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = document.querySelector("#lead-name");
      document.querySelector(".lead-sidebar")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      name?.focus({ preventScroll: true });
    });
  });
})();
