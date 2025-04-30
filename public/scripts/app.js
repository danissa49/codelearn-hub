document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Dark mode
  let darkmode = localStorage.getItem("dark-mode");
  const themeSwitcher = document.getElementById("theme-switch");

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "active");
  };
  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", null);
  };

  if (darkmode === "active") enableDarkMode();

  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", () => {
      darkmode = localStorage.getItem("dark-mode");
      if (darkmode !== "active") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  }
  // end dark mode

  // login.html button
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      if (username !== "admin") {
        // Get users from local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check for a match
        const matchedUsername = users.find(
          (user) => user.username === username
        );

        if (matchedUsername) {
          const matchedPassword = users.find(
            (user) => user.username === username && user.password === password
          );
          if (matchedPassword) {
            alert("Login successful!");
            // Redirect to dashboard
            localStorage.setItem("role", "user");
            localStorage.setItem("loggedInUser", username);
            window.location.href = "index.html";
          } else {
            alert("Wrong password.");
          }
        } else {
          alert("Invalid username, Sign Up!");
        }
      } else {
        if (password !== "admin") {
          return alert("Wrong password.");
        } else {
          // Redirect to admin.html if both username and password are correct
          alert("Login successful!");
          console.log("About to redirect to admin homepage.");
          localStorage.setItem("role", "admin");
          window.location.href = "admin-index.html";
        }
      }
    });
  }
  //end login button

  //signup.html button
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from refreshing the page

      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;

      // Get existing users or initialize an empty array
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if username already exists
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        return alert("Username already exists!");
      }

      // Add new user
      users.push({ username, password });

      // Save back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("User registered successfully!");
      signupForm.reset();
      window.location.href = "login.html";
    });
  }
  //end signup button

  //logout button
  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (!confirm("Are you sure you want to logout?")) return;

      localStorage.setItem("role", "");
      window.location.href = "login.html";
      alert("Logged out successfully!");
    });
  }
  //end logout button
  // hover effect on tutorial cards
  const cards = document.querySelectorAll(".tutorial-card");
  const buttons = document.querySelectorAll(".view-tutorial");
  // Handle hover over button
  if (buttons) {
    buttons.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        button.style.cursor = "pointer";
        if (cards[index]) {
          // When hovering over button, apply the gradient
          cards[index].style.background =
            "linear-gradient(to left top, #7bb6b3, #66aaa6, #509d9a, #38918e, #158582)";
          cards[index].classList.add("hovered");
        }
      });

      button.addEventListener("mouseleave", () => {
        if (cards[index]) {
          // Reset background when leaving the button, but still consider card hover state
          if (cards[index].matches(":hover")) {
            cards[index].style.background =
              "linear-gradient(to right bottom, #7bb6b3, #66aaa6, #509d9a, #38918e, #158582)";
          }
        }
      });
    });
  }

  if (cards) {
    // Handle hover over card
    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        // When hovering over the card, ensure the 'hovered' class is added
        card.classList.add("hovered");
        card.style.background =
          "linear-gradient(to right bottom, #7bb6b3, #66aaa6, #509d9a, #38918e, #158582)";
      });

      // Handle hover out from card
      card.addEventListener("mouseleave", () => {
        // Only remove the 'hovered' class and reset background when mouse is not over the button
        const button = buttons[index];
        if (!card.matches(":hover") && !button.matches(":hover")) {
          card.classList.remove("hovered");
          card.style.background = ""; // Reset background
        }
      });
    });
  }
  //end hover effect

  // Search bar functionality
  const tutorialSearchBar = document.getElementById("search-bar");
  if (tutorialSearchBar) {
    tutorialSearchBar.addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      const cards = document.querySelectorAll(".tutorial-list-card");

      cards.forEach((card) => {
        const content = card.textContent.toLowerCase(); // or target a specific element inside like card.querySelector("h3").textContent
        if (content.includes(filter)) {
          card.style.display = ""; // Show
        } else {
          card.style.display = "none"; // Hide
        }
      });
    });
  }
  //end search bar functionality

  //featured tutorials
  const functionTutorials = document.getElementById("function-button");
  if (functionTutorials) {
    functionTutorials.addEventListener("click", () => {
      const feature = "function";

      localStorage.setItem("filterKeyword", feature);
      window.location.href = "tutorials.html";
    });
  }
  const consoleTutorials = document.getElementById("console-button");
  if (consoleTutorials) {
    consoleTutorials.addEventListener("click", () => {
      const feature = "console";

      localStorage.setItem("filterKeyword", feature);
      window.location.href = "tutorials.html";
    });
  }
  const calculationTutorials = document.getElementById("calculation-button");
  if (calculationTutorials) {
    calculationTutorials.addEventListener("click", () => {
      const feature = "calculation";

      localStorage.setItem("filterKeyword", feature);
      window.location.href = "tutorials.html";
    });
  }
  //end featured tutorials

  // Add tutorial button functionality
  const tutorialButton = document.getElementById("add-tutorial-btn");

  if (tutorialButton) {
    tutorialButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent accidental form submission (optional if using a form)

      // Collect input values
      const tutorialTitle = document
        .getElementById("tutorial-title")
        .value.trim();
      const tutorialDescription = document
        .getElementById("tutorial-description")
        .value.trim();
      const tutorialContent = document
        .getElementById("tutorial-content")
        .value.trim();
      const activityTitle = document
        .getElementById("activity-title")
        .value.trim();
      const activityInstruction = document
        .getElementById("activity-instruction")
        .value.trim();
      const activityAnswer = document
        .getElementById("activity-answer")
        .value.trim();

      // Validate required fields
      if (!tutorialTitle || !tutorialDescription || !tutorialContent) {
        alert("Please fill in all the tutorial fields before saving.");
        return;
      }

      // Format the tutorial content nicely (optional)
      const formattedContent = `
      <h2>${tutorialTitle}</h2>
      <p>${tutorialDescription}</p>
      <div class="tutorial-body">
        <p>${tutorialContent.replace(/\n/g, "<br>")}</p>
      </div>
      <hr>
      <h3>Activity: ${activityTitle}</h3>
      <p><strong>Instructions:</strong> ${activityInstruction}</p>
    `;

      // Load existing tutorials
      const tutorials = JSON.parse(localStorage.getItem("tutorials") || "[]");

      // Create new tutorial object
      const newTutorial = {
        tutorial_title: tutorialTitle,
        tutorial_description: tutorialDescription,
        tutorial_content: formattedContent, // Save the formatted version
        activity_title: activityTitle,
        activity_instruction: activityInstruction,
        activity_answer: activityAnswer,
      };

      // Save to localStorage
      tutorials.push(newTutorial);
      localStorage.setItem("tutorials", JSON.stringify(tutorials));

      // Clear the input fields
      [
        "tutorial-title",
        "tutorial-description",
        "tutorial-content",
        "activity-title",
        "activity-instruction",
        "activity-answer",
      ].forEach((id) => (document.getElementById(id).value = ""));

      alert("Tutorial and Activity added successfully!");
    });
  }
  //end add tutorial button functionality

  //load bookmarks
  const bookmarkContainer = document.getElementById("bookmark-container");
  if (bookmarkContainer) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "{}");
    const tutorials = JSON.parse(localStorage.getItem("tutorials") || "[]");
    bookmarkContainer.innerHTML = "";

    const userBookmarks = bookmarks[loggedInUser] || [];

    tutorials.forEach((tutorial) => {
      if (userBookmarks.includes(tutorial.tutorial_title)) {
        const card = document.createElement("div");
        card.classList.add("tutorial-list-card");

        // Add title
        const title = document.createElement("h2");
        title.textContent = tutorial.tutorial_title;
        card.appendChild(title);

        // Add description
        const description = document.createElement("p");
        description.textContent = tutorial.tutorial_description;
        card.appendChild(description);

        const bookmarkCardButton = document.createElement("div");
        bookmarkCardButton.classList.add("button-group");
        card.appendChild(bookmarkCardButton);

        // Add "View Details" button
        const viewButton = document.createElement("button");
        viewButton.textContent = "View Details";
        viewButton.onclick = () => {
          openModal(tutorial);
        };
        card.appendChild(viewButton);

        bookmarkContainer.appendChild(card);
      }
    });
  }
  //end load bookmarks

  //code checking
  let correctAnswer = "";
  function openModal(tutorial) {
    // For tutorial_content, use innerHTML to preserve formatting
    document.getElementById("modal-tutorial_content").innerHTML =
      tutorial.tutorial_content;

    // Clear previous answer
    document.getElementById("user-code").value = "";
    document.getElementById("result").innerHTML = "";
    correctAnswer = tutorial.activity_answer;

    document.getElementById("tutorial-modal").style.display = "block";
  }
  //end code checking

  // Get the modal
  document.getElementById("close-modal").onclick = function () {
    document.getElementById("tutorial-modal").style.display = "none";
  };

  // Optional: click outside modal to close
  window.onclick = function (event) {
    const modal = document.getElementById("tutorial-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  //end modal close

  // Load tutorials from localStorage and display them
  const listContainer = document.getElementById("tutorials-container");
  if (!listContainer) {
    return;
  } else {
    listContainer.innerHTML = ""; // Clear previous tutorials
    const tutorials = JSON.parse(localStorage.getItem("tutorials") || "[]");
    const loggedInUser = localStorage.getItem("loggedInUser");

    tutorials.forEach((tutorial, index) => {
      // Create a div for each tutorial
      const tutorialCard = document.createElement("div");
      tutorialCard.classList.add("tutorial-list-card");

      // Add title
      const title = document.createElement("h2");
      title.textContent = tutorial.tutorial_title;
      tutorialCard.appendChild(title);

      // Add description
      const description = document.createElement("p");
      description.textContent = tutorial.tutorial_description;
      tutorialCard.appendChild(description);

      const tutorialCardButton = document.createElement("div");
      tutorialCardButton.classList.add("button-group");
      tutorialCard.appendChild(tutorialCardButton);

      const bookmarkButton = document.createElement("button");
      bookmarkButton.textContent = "Bookmark";
      bookmarkButton.onclick = () => {
        bookmarkTutorial(tutorial.tutorial_title);
      };
      tutorialCardButton.appendChild(bookmarkButton);

      // Add "View Details" button
      const viewButton = document.createElement("button");
      viewButton.textContent = "View Details";
      viewButton.onclick = () => {
        openModal(tutorial);
      };
      tutorialCardButton.appendChild(viewButton);

      // Add the card to the container
      listContainer.appendChild(tutorialCard);
    });

    //checking for filter
    const filter = localStorage.getItem("filterKeyword");
    if (filter) {
      const cards = document.querySelectorAll(".tutorial-list-card");

      cards.forEach((card) => {
        const content = card.textContent.toLowerCase();
        if (content.includes(filter.toLowerCase())) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });

      localStorage.removeItem("filterKeyword"); // clean up
    }
  }
  //end load tutorials

  function bookmarkTutorial(tutorialTitle) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "{}");

    if (!bookmarks[loggedInUser]) {
      bookmarks[loggedInUser] = [];
    }

    if (!bookmarks[loggedInUser].includes(tutorialTitle)) {
      bookmarks[loggedInUser].push(tutorialTitle);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      alert("Tutorial bookmarked!");
    } else {
      alert("Already bookmarked!");
    }
  }
  function similarity(str1, str2) {
    let longer = str1.length > str2.length ? str1 : str2;
    let shorter = str1.length > str2.length ? str2 : str1;
    let longerLength = longer.length;
    if (longerLength === 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  const similarityScore = similarity(userResult.trim(), expectedOutput);

  if (similarityScore >= 0.9) {
    // >90% similar --> "Almost Correct"
    resultDiv.innerHTML = `
    <span style="color:orange;">Almost Correct! 🟠</span><br><br>
    <strong>Expected:</strong> "${expectedOutput}"<br>
    <strong>Your Output:</strong> "${userResult}"<br><br>
    <strong>Console Output:</strong><br>${logOutput}`;
  } else {
    // If really wrong
    resultDiv.innerHTML = `
    <span style="color:red;">Incorrect ❌</span><br><br>
    <strong>Expected:</strong> "${expectedOutput}"<br>
    <strong>Your Output:</strong> "${userResult}"<br><br>
    <strong>Console Output:</strong><br>${logOutput}`;
  }
});
