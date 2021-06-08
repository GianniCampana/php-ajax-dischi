<?php

require_once __DIR__ . '/data/db.php';


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>DISCHI-PHP</title>
</head>
<body>

<header>

<div class="cont">
    <img src="assets/img/logo-small.svg" alt="img-logo">
</div>

</header>

<main>

    <div class="cont-songs">
        <?php foreach($database as $data) {?>

            <div class="song">
                <img src="<?php echo $data['poster'] ?>" alt="img-song">
                <h1><?php echo $data['title'] ?></h1>
                <h3><?php echo $data['author'] ?></h2>
                <h4><?php echo $data['year'] ?></h4>
                
            </div>

        <?php }?>

    </div>

</main>


    
</body>
</html>