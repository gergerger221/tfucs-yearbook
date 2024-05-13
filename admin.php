<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit;
}

// Connect to database (assuming a MySQL database)
$conn = mysqli_connect("localhost", "username", "password", "yearbook_db");

if (!$conn) {
    die("Connection failed: ". mysqli_connect_error());
}

// Page content
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>TFUCS Yearbook Admin Panel</title>
</head>
<body>
    <header>
        <h1>TFUCS Yearbook Admin Panel</h1>
    </header>
    <div class="container">
        <h2>Manage Registered Accounts</h2>
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            <?php
            $query = "SELECT * FROM users";
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>". $row["username"]. "</td>";
                echo "<td>". $row["email"]. "</td>";
                echo "<td>". $row["role"]. "</td>";
                echo "<td><a href='edit_account.php?id=". $row["id"]. "'>Edit</a> | <a href='delete_account.php?id=". $row["id"]. "'>Delete</a></td>";
                echo "</tr>";
            }
           ?>
        </table>

        <h2>Manage Students Information</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Grade Level</th>
                <th>Section</th>
                <th>Strand</th>
                <th>Actions</th>
            </tr>
            <?php
            $query = "SELECT * FROM students";
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>". $row["name"]. "</td>";
                echo "<td><img src='". $row["picture"]. "' alt='Student Picture'></td>";
                echo "<td>". $row["grade_level"]. "</td>";
                echo "<td>". $row["section"]. "</td>";
                echo "<td>". $row["strand"]. "</td>";
                echo "<td><a href='edit_student.php?id=". $row["id"]. "'>Edit</a> | <a href='delete_student.php?id=". $row["id"]. "'>Delete</a></td>";
                echo "</tr>";
            }
           ?>
        </table>
    </div>
</body>
</html>