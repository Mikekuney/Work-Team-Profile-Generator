function generateData(manager, engineerHTML, internHtml) {
    return`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>${manager.name}'s Team</title>
    </head>
        
    <body class="has-background-primary-light">
    <!--hero-->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title has-text-centered">
                ${manager.name}'s Team
            </p>
            <p class="subtitle has-text-centered is-6">
                Organizational Chart
            </p>
        </div>
    </section>
    
    <!--start of team-->

    <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
            <div class="card">
                <div class="card-content">
                    <div class="media-content">
                        <p class=title is-centered has-background-primary-dark has-text-primary-light">${manager.name}
                        <br>
                        <span class="subtitle is-6 is-centered has-background-primary-dark has-text-primary-light">Manager</span>
                        <br>
                        <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11.94 3C9.75 3.03 8 4.81 8 7C7.94 8.64 7.81 10.47 7.03 11.59C9.71 13.22 12 13 12 13C12 13 14.29 13.22 16.97 11.59C16.12 10.22 15.94 8.54 16 7C16 4.79 14.21 3 12 3H11.94M8.86 13.32C6 13.93 4 15.35 4 17V21H12L9 17H6.5M12 21L13.78 13.81C13.78 13.81 13 14 12 14C11 14 10.22 13.81 10.22 13.81M12 21H20V17C20 15.35 18 13.93 15.14 13.32L17.5 17H15Z" />
                        </svg></span>
                        </p>
                    </div>
                    <div class="content has-background-primary-light has-text-primary-dark">
                        <p class="content">Employee Id: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-3"></div>
        ${engineerHTML}

        ${internHtml}
    </div>

    </body>
    </html>
    `;
}
module.exports = generateData;