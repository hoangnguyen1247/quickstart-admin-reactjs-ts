module.exports = {
    apps: [
        {
            name: "quickstart_fe_dev",
            script: "npm run start:deploy",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            }
        },
        {
            name: "quickstart_fe",
            script: "npm run start:deploy",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            }
        },
    ],
    deploy: {
        development: {
            "user":  "develop",
            "host" : "dev.quickstart.com",
            "port": "22",
            "ref" : "origin/develop",
            "repo" : "git@github.com:hoangnguyen1247/quickstart-fe.git",
            "path" : "/usr/src/quickstart-dev/quickstart-fe",
            "post-deploy" : "npm install && npm run clean:build && npm run build:dev && pm2 startOrRestart ecosystem.config.js --only quickstart_fe_dev --env development",
            "env": {
                "NODE_ENV": "development",
            },
        },
        production: {
            "user":  "develop",
            "host" : "www.quickstart.com",
            "port": "22",
            "ref" : "origin/master",
            "repo" : "git@github.com:hoangnguyen1247/quickstart-fe.git",
            "path" : "/usr/src/quickstart/quickstart-fe",
            "post-deploy" : "npm install && npm install --only=dev && npm run clean:build && npm run build && pm2 startOrRestart ecosystem.config.js --only quickstart_fe --env production",
            "env": {
                "NODE_ENV": "production",
            },
        },
    },
}
