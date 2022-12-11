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
            <input id="username" type="text" placeholder="Username" />
            <input id="email" type="text" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <input id="conf_password" type="password" placeholder="Confirme password" />
            <input type="checkbox" id="cgu_checkbox">
            <label for="cgu_checkbox">CGU</label>
            <input type="button" id="btn_register" value="Register"/>
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