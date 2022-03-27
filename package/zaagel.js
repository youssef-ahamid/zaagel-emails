class Zaagel {
    constructor(apiURL, site = {}, configuration = {}) {
        this.config = configuration
        this.siteData = site
        this.api = apiURL
    }

    configure(site = {}, configuration = {}) {
        this.siteData = site
        this.config = configuration
    }
    
    mail(to, subject, template, body, replyTo) {
        fetch(`${this.api}/mail`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                subject,
                to,
                template,
                data: {
                    ...body,
                    ...this.siteData,
                },
                config: this.config,
                replyTo: replyTo || this.siteData.siteEmail,
            })
        }).then(res => {
            return res
        });
    }
}

const zaagel = new Zaagel('http://localhost:8080')
export default zaagel
