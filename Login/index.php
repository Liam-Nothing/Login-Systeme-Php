<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../css/styles.css">

    <title>Login page - Login sytem</title>
</head>
<body>
    <header>

    </header>
    <main>
        <section>
            <input type="text" id="username" placeholder="Username"/>
            <input type="password" id="password" placeholder="Password"/>
            <input type="button" id="btn_login" value="Sing in"/>
        </section>
        <section id="alert_section" class="hide">
            <p id="alert_content">None</p>
        </section>
        <section id="loading_section">
            <p>Loading...</p>
        </section>
    </main>
    <footer>

    </footer>
    <script src="../js/scripts_api.js"></script>
    <script src="js/scripts.js"></script>
</body>
</html>