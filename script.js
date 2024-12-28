const snowContainer = document.getElementById("snow-container");

// Функція створення сніжинки
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❅"; // Можете замінити на інші символи, наприклад ❅ або ❆ abo ✿
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Швидкість падіння
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Розмір сніжинки
  snowflake.style.opacity = Math.random(); // Прозорість

  snowContainer.appendChild(snowflake);

  // Видалення сніжинки після завершення анімації
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Інтервал створення сніжинок
setInterval(createSnowflake, 100);


