enum Environments {
    dev_environment = 'dev',
    prod_environment = 'prod',
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        }
        return 3000;
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return 'rest_prod';
        } else if (this.environment === Environments.dev_environment) {
            return 'rest_dev';
        }
        return 'rest_local'
    }
}

export default new Environment(Environments.dev_environment);
