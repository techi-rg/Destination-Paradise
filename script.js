// Package section rendering

const packages = [
  {
    name: "Beach Getaway",
    photo:
      "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg",
    description:
      "Enjoy a relaxing time at the sunny beaches of Bali. Inclusive of hotel stay and guided tours.",
  },
  {
    name: "Mountain Adventure",
    photo:
      "https://cdn.pixabay.com/photo/2016/11/14/03/26/cliff-1822484_640.jpg",
    description:
      "Explore the thrilling trails of the Himalayas.Package includes hiking, camping, and meals.",
  },
  {
    name: "City Life Experience",
    photo:
      "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg",
    description:
      "Discover the vibrant life of New York City. Comes with city tours and museum passes.",
  },
];

const container = document.getElementById("packages-container");

function renderPackages(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<p class ="text-center fs-5">NO PACKAGE FOUND!!</p>`;
    return;
  }

  data.forEach((pkg) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-4 package";
    col.innerHTML = `
        <div class="card h-100 text-center">
        <div class="card-body d-flex flex-column">
               <div class="image-container mb-3">
        <img src="${pkg.photo}" class="card-img-top" alt="${pkg.name}" />
        </div>
        <h5 class="package-name card-title">${pkg.name}</h5>
        <p class="package-description card-text"> ${pkg.description}</p>

        <button class="book-now-btn btn btn-module mt-auto">
            Book Now
        </button>
        </div>
        </div>`;

    container.appendChild(col);
  });
}

// Initial render (page load)
renderPackages(packages);

// Search Event
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filterPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(query),
  );

  renderPackages(filterPackages);
});

// Form Validation

const countryCodes = [
  { code: "", name: "" },
  { code: "+1", name: "USA" },
  { code: "+1", name: "Canada" },
  { code: "+52", name: "Mexico" },
  { code: "+852", name: "Hong Kong" },
  { code: "+44", name: "UK" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+66", name: "Thailand" },
  { code: "+84", name: "Vietnam" },
  { code: "+91", name: "India" },
  { code: "+27", name: "South Africa" },
  { code: "+61", name: "Australia" },
  { code: "+64", name: "New Zealand" },
  { code: "+971", name: "UAE" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+39", name: "Italy" },
  { code: "+30", name: "Greece" },
  { code: "+90", name: "Turkey" },
  { code: "+55", name: "Brazil" },
  { code: "+54", name: "Argentina" },
  { code: "+56", name: "Chile" },
];

const countrySelect = document.getElementById("countryCode");

countryCodes.forEach((c) => {
  const option = document.createElement("option");
  option.value = c.code;
  option.textContent = `${c.name} ${c.code}`;
  countrySelect.appendChild(option);
});

document.getElementById("birthday").addEventListener("change", function () {
  const birthday = new Date(this.value);
  const age = new Date().getFullYear() - birthday.getFullYear();

  if (age < 18) {
    this.setCustomValidity("You must be at least 18 years old");
  } else {
    this.setCustomValidity("");
  }
});

(() => {
  const form = document.querySelector("#bookingForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // show bootstrap validation styles
    form.classList.add("was-validated");

    // ❌ invalid form
    if (!form.checkValidity()) {
      successMessage.classList.add("d-none");
      return;
    }

    // ✅ valid form
    successMessage.classList.remove("d-none");

    form.reset();
    form.classList.remove("was-validated");
  });
})();
