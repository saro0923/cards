const url = "https://api.k12hunar.com/api/v1/mentors/public";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("mentor-list");

    data.forEach((mentor) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = mentor.profileImageUrl;
      img.alt = mentor.name;

      const name = document.createElement("p");
      name.textContent = mentor.name;
      

      card.appendChild(img);
      card.appendChild(name);
      list.appendChild(card);
    });
  });