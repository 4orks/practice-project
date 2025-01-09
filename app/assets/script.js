document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("radiusUnits");
    const labels = ["Radius (km)", "Radius (R🜨)"];
    const infoData = {
        "Radius (km)": ["695,000","69,911","58,232","25,362","24,622","6,371","6,051.8","3,389.5","2,634.1","2,574.73","2,439.4","2,410.3","1,821.6","1,737.4","1,560.8","1,353.4","1,188.3","1,163","798","788.9","763.8","761.4","735.6","715","615","606","584.7","578.9","561.7","543","533","469.7","455","453","423"],
        "Radius (R🜨)": ["109.2","10.97","9.14","3.981","3.865","1","0.9499","0.532","0.4135","0.4037","0.3829","0.3783","0.2859","0.2727","0.245","0.2124","0.187","0.1825","0.12","0.1237","0.1199","0.1195","0.1153","0.112","0.0983","0.0951","0.0918","0.0909","0.0881","0.0879","0.0834","0.0742","0.0719","0.0785","0.0664"]
    };
    let currentIndex = 0;
    
    button.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % labels.length;
        button.textContent = labels[currentIndex];

        const info = infoData[labels[currentIndex]];
        document.getElementById("sunRadius").textContent = info[0];
        document.getElementById("jupiterRadius").textContent = info[1];
        document.getElementById("saturnRadius").textContent = info[2];
        document.getElementById("uranusRadius").textContent = info[3];
        document.getElementById("neptuneRadius").textContent = info[4];
        document.getElementById("earthRadius").textContent = info[5];
        document.getElementById("venusRadius").textContent = info[6];
        document.getElementById("marsRadius").textContent = info[7];
        document.getElementById("ganymedeRadius").textContent = info[8];
        document.getElementById("titanRadius").textContent = info[9];
        document.getElementById("mercuryRadius").textContent = info[10];
        document.getElementById("callistoRadius").textContent = info[11];
        document.getElementById("ioRadius").textContent = info[12];
        document.getElementById("lunaRadius").textContent = info[13];
        document.getElementById("europaRadius").textContent = info[14];
        document.getElementById("tritonRadius").textContent = info[15];
        document.getElementById("plutoRadius").textContent = info[16];
        document.getElementById("erisRadius").textContent = info[17];
        document.getElementById("haumeaRadius").textContent = info[18];
        document.getElementById("titaniaRadius").textContent = info[19];
        document.getElementById("rheaRadius").textContent = info[20];
        document.getElementById("oberonRadius").textContent = info[21];
        document.getElementById("iapetusRadius").textContent = info[22];
        document.getElementById("makemakeRadius").textContent = info[23];
        document.getElementById("gonggongRadius").textContent = info[24];
        document.getElementById("charonRadius").textContent = info[25];
        document.getElementById("umbrielRadius").textContent = info[26];
        document.getElementById("arielRadius").textContent = info[27];
        document.getElementById("dioneRadius").textContent = info[28];
        document.getElementById("quaoarRadius").textContent = info[29];
        document.getElementById("tethysRadius").textContent = info[30];
        document.getElementById("ceresRadius").textContent = info[31];
        document.getElementById("orcusRadius").textContent = info[32];
        document.getElementById("sednaRadius").textContent = info[33];
        document.getElementById("salaciaRadius").textContent = info[34];
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("massUnits");
    const labels = ["Mass (10^21kg)", "Mass (M🜨)"];
    const infoData = {
        "Mass (10^21kg)": ["1,989,100,000","1,898,187","568,317","86,813","102,413","5,972.4","4,867.5","641.71","148.2","134.5","330.11","107.6","89.32","73.46","48","21.39","13.03","16.6","4.01","3.4","2.307","3.08","1.806","3.1","1.75","1.586","1.28","1.25","1.095","1.2","0.617","0.938","0.548","0.492"],
        "Mass (M🜨)": ["333,000","317.83","95.162","14.536","17.147","1","0.815","0.107","0.0248","0.0225","0.0553","0.018","0.015","0.0123","0.008035","0.003599","0.0022","0.0028","0.00066","0.00059","0.00039","0.0005","0.00033","0.00053","0.00029","0.00025","0.0002","0.000226","0.000183","0.0002","0.000103","0.000157","0.000092","0.000082"]
    };
    let currentIndex = 0;
    
    button.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % labels.length;
        button.textContent = labels[currentIndex];

        // Update table based on the button label
        const info = infoData[labels[currentIndex]];
        document.getElementById("sunMass").textContent = info[0];
        document.getElementById("jupiterMass").textContent = info[1];
        document.getElementById("saturnMass").textContent = info[2];
        document.getElementById("uranusMass").textContent = info[3];
        document.getElementById("neptuneMass").textContent = info[4];
        document.getElementById("earthMass").textContent = info[5];
        document.getElementById("venusMass").textContent = info[6];
        document.getElementById("marsMass").textContent = info[7];
        document.getElementById("ganymedeMass").textContent = info[8];
        document.getElementById("titanMass").textContent = info[9];
        document.getElementById("mercuryMass").textContent = info[10];
        document.getElementById("callistoMass").textContent = info[11];
        document.getElementById("ioMass").textContent = info[12];
        document.getElementById("lunaMass").textContent = info[13];
        document.getElementById("europaMass").textContent = info[14];
        document.getElementById("tritonMass").textContent = info[15];
        document.getElementById("plutoMass").textContent = info[16];
        document.getElementById("erisMass").textContent = info[17];
        document.getElementById("haumeaMass").textContent = info[18];
        document.getElementById("titaniaMass").textContent = info[19];
        document.getElementById("rheaMass").textContent = info[20];
        document.getElementById("oberonMass").textContent = info[21];
        document.getElementById("iapetusMass").textContent = info[22];
        document.getElementById("makemakeMass").textContent = info[23];
        document.getElementById("gonggongMass").textContent = info[24];
        document.getElementById("charonMass").textContent = info[25];
        document.getElementById("umbrielMass").textContent = info[26];
        document.getElementById("arielMass").textContent = info[27];
        document.getElementById("dioneMass").textContent = info[28];
        document.getElementById("quaoarMass").textContent = info[29];
        document.getElementById("tethysMass").textContent = info[30];
        document.getElementById("ceresMass").textContent = info[31];
        document.getElementById("orcusMass").textContent = info[32];
        document.getElementById("salaciaMass").textContent = info[33];
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("gravityUnits");
    const labels = ["Gravity (m/s^2)", "Gravity (🜨)"];
    const infoData = {
        "Gravity (m/s^2)": ["274","24.79","10.44","8.69","11.15","9.81","8.87","3.71","1.428","1.354","3.70","1.23603","1.797","1.625","1.316","0.782","0.62","0.824","0.401","0.378","0.26","0.347","0.223","0.57","0.3","0.288","0.234","0.269","0.232","0.3","0.145","0.28","0.2","0.165"],
        "Gravity (🜨)": ["27.94","2.528","1.065","0.886","1.137","1","0.905","0.379","0.146","0.138","0.377","0.126","0.183","0.166","0.134","0.0797","0.063","0.083","0.0409","0.0385","0.027","0.035","0.0227","0.0581","0.0306","0.0294","0.024","0.027","0.0237","0.0306","0.015","0.029","0.0204","0.0168"]
    };
    let currentIndex = 0;
    
    button.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % labels.length;
        button.textContent = labels[currentIndex];

        // Update table based on the button label
        const info = infoData[labels[currentIndex]];
        document.getElementById("sunGravity").textContent = info[0];
        document.getElementById("jupiterGravity").textContent = info[1];
        document.getElementById("saturnGravity").textContent = info[2];
        document.getElementById("uranusGravity").textContent = info[3];
        document.getElementById("neptuneGravity").textContent = info[4];
        document.getElementById("earthGravity").textContent = info[5];
        document.getElementById("venusGravity").textContent = info[6];
        document.getElementById("marsGravity").textContent = info[7];
        document.getElementById("ganymedeGravity").textContent = info[8];
        document.getElementById("titanGravity").textContent = info[9];
        document.getElementById("mercuryGravity").textContent = info[10];
        document.getElementById("callistoGravity").textContent = info[11];
        document.getElementById("ioGravity").textContent = info[12];
        document.getElementById("lunaGravity").textContent = info[13];
        document.getElementById("europaGravity").textContent = info[14];
        document.getElementById("tritonGravity").textContent = info[15];
        document.getElementById("plutoGravity").textContent = info[16];
        document.getElementById("erisGravity").textContent = info[17];
        document.getElementById("haumeaGravity").textContent = info[18];
        document.getElementById("titaniaGravity").textContent = info[19];
        document.getElementById("rheaGravity").textContent = info[20];
        document.getElementById("oberonGravity").textContent = info[21];
        document.getElementById("iapetusGravity").textContent = info[22];
        document.getElementById("makemakeGravity").textContent = info[23];
        document.getElementById("gonggongGravity").textContent = info[24];
        document.getElementById("charonGravity").textContent = info[25];
        document.getElementById("umbrielGravity").textContent = info[26];
        document.getElementById("arielGravity").textContent = info[27];
        document.getElementById("dioneGravity").textContent = info[28];
        document.getElementById("quaoarGravity").textContent = info[29];
        document.getElementById("tethysGravity").textContent = info[30];
        document.getElementById("ceresGravity").textContent = info[31];
        document.getElementById("orcusGravity").textContent = info[32];
        document.getElementById("salaciaGravity").textContent = info[33];
    });
});