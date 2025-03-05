const planetData = [
    { body: "Sun", radius_km: "695,000", radius_re: "109.2", mass_kg: "1,989,100,000", mass_me: "333,000", density: "1.409", gravity_ms2: "274.0", gravity_ge: "27.94" },
    { body: "Jupiter", radius_km: "69,911", radius_re: "10.97", mass_kg: "1,898,187", mass_me: "317.83", density: "1.3262", gravity_ms2: "24.79", gravity_ge: "2.528" },
    { body: "Saturn", radius_km: "58,232", radius_re: "9.14", mass_kg: "568,317", mass_me: "95.162", density: "0.6871", gravity_ms2: "10.44", gravity_ge: "1.065" },
    { body: "Uranus", radius_km: "25,362", radius_re: "3.981", mass_kg: "86,813", mass_me: "14.536", density: "1.270", gravity_ms2: "8.69", gravity_ge: "0.886"},
    { body: "Neptune", radius_km: "24,622", radius_re: "3.865", mass_kg: "102,413", mass_me: "17.147", density: "1.638", gravity_ms2: "11.15", gravity_ge: "1.137"},
    { body: "Earth", radius_km: "6,371", radius_re: "1", mass_kg: "5,972.4", mass_me: "1", density: "5.5136", gravity_ms2: "9.81", gravity_ge: "1"},
    { body: "Venus", radius_km: "6,051.8", radius_re: "0.9499", mass_kg: "4,867.5", mass_me: "0.815", density: "5.243", gravity_ms2: "8.87", gravity_ge: "0.905"},
    { body: "Mars", radius_km: "3,389.5", radius_re: "0.532", mass_kg: "641.71", mass_me: "0.107", density: "3.9341", gravity_ms2: "3.71", gravity_ge: "0.379"},
    { body: "Ganymede", radius_km: "2,634.1", radius_re: "0.4135", mass_kg: "148.2", mass_me: "0.0248", density: "1.936", gravity_ms2: "1.428", gravity_ge: "0.146"},
    { body: "Titan", radius_km: "2,574.73", radius_re: "0.4037", mass_kg: "134.5", mass_me: "0.0225", density: "1.880", gravity_ms2: "1.354", gravity_ge: "0.138"},
    { body: "Mercury", radius_km: "2,439.7", radius_re: "0.3829", mass_kg: "330.11", mass_me: "0.0553", density: "5.4291", gravity_ms2: "3.7", gravity_ge: "0.377"},
    { body: "Callisto", radius_km: "2,410.3", radius_re: "0.3783", mass_kg: "107.6", mass_me: "0.018", density: "1.834", gravity_ms2: "1.23603", gravity_ge: "0.126"},
    { body: "Io", radius_km: "1,821.6", radius_re: "0.2859", mass_kg: "89.32", mass_me: "0.015", density: "3.528", gravity_ms2: "1.797", gravity_ge: "0.183"},
    { body: "Luna", radius_km: "1,737.4", radius_re: "0.2727", mass_kg: "73.46", mass_me: "0.0123", density: "3.344", gravity_ms2: "1.625", gravity_ge: "0.166"},
    { body: "Europa", radius_km: "1,560.8", radius_re: "0.2450", mass_kg: "48", mass_me: "0.008035", density: "3.013", gravity_ms2: "1.316", gravity_ge: "0.134"},
    { body: "Triton", radius_km: "1,353.4", radius_re: "0.2124", mass_kg: "21.39", mass_me: "0.003599", density: "2.061", gravity_ms2: "0.782", gravity_ge: "0.0797"},
    { body: "Pluto", radius_km: "1,188.3", radius_re: "0.187", mass_kg: "13.03", mass_me: "0.0022", density: "1.854", gravity_ms2: "0.620", gravity_ge: "0.063"},
    { body: "Eris", radius_km: "1,163", radius_re: "0.1825", mass_kg: "16.6", mass_me: "0.0028", density: "2.52", gravity_ms2: "0.824", gravity_ge: "0.083"},
    { body: "Haumea", radius_km: "798", radius_re: "0.12", mass_kg: "4.01", mass_me: "0.00066", density: "2.018", gravity_ms2: "0.401", gravity_ge: "0.0409"},
    { body: "Titania", radius_km: "788.9", radius_re: "0.1237", mass_kg: "3.4", mass_me: "0.00059", density: "1.711", gravity_ms2: "0.378", gravity_ge: "0.0385"},
    { body: "Rhea", radius_km: "763.8", radius_re: "0.1199", mass_kg: "2.307", mass_me: "0.00039", density: "1.236", gravity_ms2: "0.26", gravity_ge: "0.027"},
    { body: "Oberon", radius_km: "761.4", radius_re: "0.1195", mass_kg: "3.08", mass_me: "0.0005", density: "1.63", gravity_ms2: "0.347", gravity_ge: "0.035"},
    { body: "Iapetus", radius_km: "735.6", radius_re: "0.1153", mass_kg: "1.806", mass_me: "0.00033", density: "1.088", gravity_ms2: "0.223", gravity_ge: "0.0227"},
    { body: "Makemake", radius_km: "715", radius_re: "0.112", mass_kg: "3.1", mass_me: "0.00053", density: "2.1", gravity_ms2: "0.57", gravity_ge: "0.0581"},
    { body: "Gonggong", radius_km: "615", radius_re: "0.0983", mass_kg: "1.75", mass_me: "0.00029", density: "1.72", gravity_ms2: "0.3", gravity_ge: "0.0306"},
    { body: "Charon", radius_km: "606", radius_re: "0.0951", mass_kg: "1.586", mass_me: "0.00025", density: "1.7", gravity_ms2: "0.288", gravity_ge: "0.0294"},
    { body: "Umbriel", radius_km: "584.7", radius_re: "0.0918", mass_kg: "1.28", mass_me: "0.0002", density: "1.39", gravity_ms2: "0.234", gravity_ge: "0.024"},
    { body: "Ariel", radius_km: "578.9", radius_re: "0.0909", mass_kg: "1.25", mass_me: "0.000226", density: "1.66", gravity_ms2: "0.269", gravity_ge: "0.027"},
    { body: "Dione", radius_km: "561.7", radius_re: "0.0881", mass_kg: "1.095", mass_me: "0.000183", density: "1.478", gravity_ms2: "0.232", gravity_ge: "0.0237"},
    { body: "Quaoar", radius_km: "543", radius_re: "0.0879", mass_kg: "1.2", mass_me: "0.0002", density: "2", gravity_ms2: "0.3", gravity_ge: "0.0306"},
    { body: "Tethys", radius_km: "533", radius_re: "0.0834", mass_kg: "0.617", mass_me: "0.000103", density: "0.984", gravity_ms2: "0.145", gravity_ge: "0.015"},
    { body: "Ceres", radius_km: "469.7", radius_re: "0.0742", mass_kg: "0.938", mass_me: "0.000157", density: "2.17", gravity_ms2: "0.28", gravity_ge: "0.029"},
    { body: "Orcus", radius_km: "455", radius_re: "0.0719", mass_kg: "0.548", mass_me: "0.000092", density: "1.4", gravity_ms2: "0.2", gravity_ge: "0.0204"},
    { body: "Sedna", radius_km: "453", radius_re: "0.0711", mass_kg: "", mass_me: "", density: "", gravity_ms2: "", gravity_ge: ""},
    { body: "Salacia", radius_km: "423", radius_re: "0.0664", mass_kg: "0.492", mass_me: "0.000082", density: "1.5", gravity_ms2: "0.165", gravity_ge: "0.0168"}
    // Add more planets here...
];

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#planetTable tbody");
  
    // Function to generate table rows
    function generateTableRows(data) {
      return data
        .map(
          (planet) => `
        <tr>
          <td>${planet.body}</td>
          <td class="radius">${planet.radius_km}</td>
          <td class="mass">${planet.mass_kg}</td>
          <td>${planet.density}</td>
          <td class="gravity">${planet.gravity_ms2}</td>
        </tr>
      `
        )
        .join("");
    }
  
    // Insert rows into the table
    tableBody.innerHTML = generateTableRows(planetData);
  
    // Unit conversion logic
    const units = {
      radius: { labels: ["Radius (km)", "Radius (R🜨)"], keys: ["radius_km", "radius_re"] },
      mass: { labels: ["Mass (10^21kg)", "Mass (M🜨)"], keys: ["mass_kg", "mass_me"] },
      gravity: { labels: ["Gravity (m/s²)", "Gravity (🜨)"], keys: ["gravity_ms2", "gravity_ge"] },
    };
  
    function updateColumn(columnClass, labelIndex, dataKey) {
      const cells = document.querySelectorAll(`.${columnClass}`);
      cells.forEach((cell, index) => {
        cell.textContent = planetData[index][dataKey];
      });
    }
  
    // Add event listeners for unit buttons
    document.getElementById("radiusUnits").addEventListener("click", () => {
      const radiusUnits = units.radius;
      const currentIndex = radiusUnits.labels.indexOf(document.getElementById("radiusUnits").textContent);
      const nextIndex = (currentIndex + 1) % radiusUnits.labels.length;
      document.getElementById("radiusUnits").textContent = radiusUnits.labels[nextIndex];
      updateColumn("radius", nextIndex, radiusUnits.keys[nextIndex]);
    });
  
    document.getElementById("massUnits").addEventListener("click", () => {
      const massUnits = units.mass;
      const currentIndex = massUnits.labels.indexOf(document.getElementById("massUnits").textContent);
      const nextIndex = (currentIndex + 1) % massUnits.labels.length;
      document.getElementById("massUnits").textContent = massUnits.labels[nextIndex];
      updateColumn("mass", nextIndex, massUnits.keys[nextIndex]);
    });
  
    document.getElementById("gravityUnits").addEventListener("click", () => {
      const gravityUnits = units.gravity;
      const currentIndex = gravityUnits.labels.indexOf(document.getElementById("gravityUnits").textContent);
      const nextIndex = (currentIndex + 1) % gravityUnits.labels.length;
      document.getElementById("gravityUnits").textContent = gravityUnits.labels[nextIndex];
      updateColumn("gravity", nextIndex, gravityUnits.keys[nextIndex]);
    });
});

function toggleMenu() {
  var sideMenu = document.getElementById("sideMenu");
  if (sideMenu.style.width === "250px") {
      sideMenu.style.width = "0";
  } else {
      sideMenu.style.width = "250px";
  }
}

// Orbital Simulation
document.addEventListener("DOMContentLoaded", function () {
  // Simulation settings
  const width = 800; // Width of the simulation container
  const height = 600; // Height of the simulation container
  let isPlaying = true; // Play/pause state
  let simulationSpeed = 1; // Speed multiplier
  let isReversed = true; // Reverse playback state
  let simulationTime = 0; // Track simulation time separately
  let lastUpdateTime = Date.now(); // Track the last update time
  const minVisualSize = 2; // Minimum visual size for objects (in pixels)

  // Set up SVG canvas
  const svg = d3.select("#simulationContainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  // Create a group for all planets and moons (affected by zoom and pan)
  const simulationGroup = svg.append("g");

  // Create a group for minimum size circles (NOT affected by zoom/pan transforms)
  const minSizeGroup = svg.append("g");

  // Example orbital data (simplified and scaled)
  const planets = [
      { name: "Sun", radius: 696340, orbitRadius: 0, color: "yellow", zIndex: 1000 },
      { name: "Mercury", radius: 2440, orbitRadius: 57900000, color: "gray", zIndex: 900 },
      { name: "Venus", radius: 6052, orbitRadius: 108200000, color: "orange", zIndex: 800 },
      { name: "Earth", radius: 6371, orbitRadius: 149600000, color: "blue", zIndex: 700 },
      { name: "Luna", radius: 1737, orbitRadius: 384400, color: "gray", parent: "Earth", zIndex: 600 },
      { name: "Mars", radius: 3389, orbitRadius: 228000000, color: "red", zIndex: 500 },
      { name: "Jupiter", radius: 69911, orbitRadius: 778500000, color: "orange", zIndex: 400 },
      { name: "Io", radius: 1822, orbitRadius: 422000, color: "yellow", parent: "Jupiter", zIndex: 300 },
      { name: "Europa", radius: 1561, orbitRadius: 671000, color: "gray", parent: "Jupiter", zIndex: 200 },
      { name: "Ganymede", radius: 2634, orbitRadius: 1070000, color: "gray", parent: "Jupiter", zIndex: 100 },
      { name: "Callisto", radius: 2410, orbitRadius: 1883000, color: "darkgray", parent: "Jupiter", zIndex: 50 },
      { name: "Saturn", radius: 58232, orbitRadius: 1432000000, color: "yellow", zIndex: 400 },
      { name: "Titan", radius: 2575, orbitRadius: 1221870, color: "orange", parent: "Saturn", zIndex: 300 },
      { name: "Uranus", radius: 25362, orbitRadius: 2867000000, color: "aqua", zIndex: 400 },
      { name: "Neptune", radius: 24622, orbitRadius: 4515000000, color: "blue", zIndex: 400 },
      { name: "Triton", radius: 1353, orbitRadius: 354759, color: "gray", parent: "Neptune", zIndex: 300, retrograde: true } // Triton has retrograde motion
  ];

  // Sort planets by zIndex (lowest first, so moons are added before planets)
  planets.sort((a, b) => a.zIndex - b.zIndex);

  // Scale down the sizes and distances for visualization
  const scaleFactor = 1 / 1000000; // Use the same scaling factor for sizes and distances

  // Create circles for each planet (minimum size)
  const minSizeElements = minSizeGroup.selectAll("circle.minSize")
      .data(planets)
      .enter()
      .append("circle")
      .attr("class", "minSize")
      .attr("r", minVisualSize) // Always 3 pixels wide
      .attr("fill", d => d.color);

  // Create circles for each planet (actual size)
  const planetElements = simulationGroup.selectAll("circle.planet")
      .data(planets)
      .enter()
      .append("circle")
      .attr("class", "planet")
      .attr("r", d => d.radius * scaleFactor) // Actual size
      .attr("fill", d => d.color);

  // Tooltip element
  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "1px solid black")
      .style("padding", "5px")
      .style("border-radius", "5px");

  // Add tooltip functionality
  planetElements.on("mouseover", function (event, d) {
      tooltip.style("visibility", "visible")
          .text(d.name)
          .style("left", (event.pageX + 5) + "px")
          .style("top", (event.pageY - 20) + "px");
  }).on("mouseout", function () {
      tooltip.style("visibility", "hidden");
  });

  minSizeElements.on("mouseover", function (event, d) {
      tooltip.style("visibility", "visible")
          .text(d.name)
          .style("left", (event.pageX + 5) + "px")
          .style("top", (event.pageY - 20) + "px");
  }).on("mouseout", function () {
      tooltip.style("visibility", "hidden");
  });

  // Zoom functionality
  let currentTransform = d3.zoomIdentity; // Track the current zoom/pan transform
  const zoom = d3.zoom()
      .scaleExtent([0.05, 500])
      .on("zoom", (event) => {
          currentTransform = event.transform; // Update the current transform
          simulationGroup.attr("transform", currentTransform); // Apply transform to simulation group
          updateMinSizePositions(); // Update minSize positions manually
      });

  svg.call(zoom);

  // Reset zoom functionality
  document.getElementById("resetZoom").addEventListener("click", () => {
      svg.transition()
          .duration(750) // Smooth transition
          .call(zoom.transform, d3.zoomIdentity); // Reset to original transform
  });

  // Track the currently centered object
  let centeredObject = null;

  // Click-to-center functionality
  function toggleCenteredObject(d) {
      if (centeredObject && centeredObject.name === d.name) {
          // If the clicked object is already centered, unfollow it
          centeredObject = null;
      } else {
          // Otherwise, center on the clicked object
          centeredObject = d;
      }
  }

  planetElements.on("click", function (event, d) {
      toggleCenteredObject(d);
  });

  minSizeElements.on("click", function (event, d) {
      toggleCenteredObject(d);
  });

  // Update planet positions
  function updatePositions() {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastUpdateTime) / 1000; // Time elapsed since last update (in seconds)
      lastUpdateTime = currentTime;

      if (isPlaying) {
          simulationTime += deltaTime * simulationSpeed * (isReversed ? -1 : 1); // Update simulation time
      }

      // Calculate positions for all objects
      planets.forEach((planet, index) => {
          if (planet.name === "Sun") {
              // Sun: Always stays at the center
              planet.cx = width / 2;
              planet.cy = height / 2;
          } else if (planet.parent) {
              // Moons: Calculate position relative to their parent planet
              const parentPlanet = planets.find(p => p.name === planet.parent);
              if (parentPlanet) {
                  const parentAngle = simulationTime * (2 * Math.PI) / (parentPlanet.orbitRadius * scaleFactor * 0.1);
                  const parentX = width / 2 + Math.cos(parentAngle) * parentPlanet.orbitRadius * scaleFactor;
                  const parentY = height / 2 + Math.sin(parentAngle) * parentPlanet.orbitRadius * scaleFactor;

                  // Adjust angle for retrograde moons
                  const moonAngle = simulationTime * (2 * Math.PI) / (planet.orbitRadius * scaleFactor * 0.1) * (planet.retrograde ? -1 : 1);
                  planet.cx = parentX + Math.cos(moonAngle) * planet.orbitRadius * scaleFactor;
                  planet.cy = parentY + Math.sin(moonAngle) * planet.orbitRadius * scaleFactor;
              }
          } else {
              // Planets: Calculate position relative to the Sun
              const angle = simulationTime * (2 * Math.PI) / (planet.orbitRadius * scaleFactor * 0.1);
              planet.cx = width / 2 + Math.cos(angle) * planet.orbitRadius * scaleFactor;
              planet.cy = height / 2 + Math.sin(angle) * planet.orbitRadius * scaleFactor;
          }

          // Update planet positions (in base coordinates)
          planetElements.filter((d, i) => i === index)
              .attr("cx", planet.cx)
              .attr("cy", planet.cy);
      });

      // Update minSize positions
      updateMinSizePositions();

      // If an object is centered, adjust the zoom transform to follow it
      if (centeredObject) {
          const centeredElement = planetElements.filter(d => d.name === centeredObject.name);
          const cx = +centeredElement.attr("cx");
          const cy = +centeredElement.attr("cy");

          // Calculate the new transform to center on the object
          const newTranslate = [
              width / 2 - cx * currentTransform.k,
              height / 2 - cy * currentTransform.k
          ];

          // Apply the new transform
          svg.call(zoom.transform, d3.zoomIdentity.translate(newTranslate[0], newTranslate[1]).scale(currentTransform.k));
      }
  }

  // Update minSize positions using current transform
  function updateMinSizePositions() {
      minSizeElements
          .attr("cx", d => d.cx * currentTransform.k + currentTransform.x)
          .attr("cy", d => d.cy * currentTransform.k + currentTransform.y);
  }

  // Animation loop
  function animate() {
      updatePositions();
      requestAnimationFrame(animate);
  }
  animate();

  // Playback controls
  document.getElementById("playPause").addEventListener("click", () => {
      isPlaying = !isPlaying;
      document.getElementById("playPause").textContent = isPlaying ? "Pause" : "Play";
      lastUpdateTime = Date.now(); // Reset the last update time when toggling play/pause
  });

  document.getElementById("speedUp").addEventListener("click", () => {
      simulationSpeed *= 2; // Double the speed
      console.log("Speed:", simulationSpeed); // Debugging
  });

  document.getElementById("slowDown").addEventListener("click", () => {
      simulationSpeed /= 2; // Halve the speed
      console.log("Speed:", simulationSpeed); // Debugging
  });

  document.getElementById("reverse").addEventListener("click", () => {
      isReversed = !isReversed; // Toggle reverse playback
      console.log("Reversed:", isReversed); // Debugging
  });
});