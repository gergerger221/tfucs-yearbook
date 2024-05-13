<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>TFUCS Yearbook</title>
</head>
<body>
    <header>
        <img src="logo.png" class="logo" />
        <h1>The First Uniting Christian School Yearbook</h1>
    </header>
    <div class="filter-controls">
        <select id="gradeSelect" onchange="updateFilters()">
            <option value="">Select Grade</option>
            <option value="Kinder">Kinder</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 12">Grade 12</option>
        </select>
        <select id="strandSelect" onchange="filterStudents()" style="display: none;">
            <option value="">Select Strand</option>
            <option value="ABM">ABM</option>
            <option value="HUMMS">HUMMS</option>
            <option value="STEM">STEM</option>
            <option value="TVL-HE">TVL-HE</option>
            <option value="TVL-ICT">TVL-ICT</option>
        </select>
        <select id="sectionSelect" onchange="filterStudents()">
            <option value="">Select Section</option>
            <option value="Section A">Section A</option>
            <option value="Section B">Section B</option>
            <option value="Section C">Section C</option>
        </select>
        <input type="text" id="searchInput" oninput="searchStudent()" placeholder="Search by name...">
        <button onclick="document.location='logout.php'" class="Btn">
            <div class="sign">
                <svg viewBox="0 0 512 512">
                    <path
                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                    </path>
                </svg>
            </div>
            <div class="text">Logout</div>
        </button>

    </div>
    <div id="studentGrid"></div>
    <div id="myModal" class="modal">
        <div class="modal-content">
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>