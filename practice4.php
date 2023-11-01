<html>


<body>


<?php

$size = $_POST["n"];

echo "<table border=1><tr><td></td>";

for ($i = 1; $i <= $size; $i++) {
	echo "<th>" . $i . "</th>";
}
echo "</tr>";

for ($i = 1; $i <= $size; $i++) {
	echo "<tr><th>" . $i . "</th>";
	for ($j = 1; $j <= $size; $j++) {
		echo "<td>" . $i * $j . "</td>";
	}
	echo "</tr>";
}

echo "</table>";
?>

</body>

</html>
