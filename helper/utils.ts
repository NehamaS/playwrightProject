import { Environments } from '../setup/enum'
export function getPassword(env: Environments): string | undefined {
    switch (env) {
        case Environments.DEV:
            return process.env.DEV_PASSWORD;
        case Environments.STAGING:
            return process.env.STAGING_PASSWORD;
        case Environments.MAIN:
            return process.env.MAIN_PASSWORD;
        default:
            return undefined;
    }
}
