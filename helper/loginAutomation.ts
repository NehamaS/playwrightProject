    import { Page } from 'playwright';
    interface FillEmailAndPassword {
        websitePage: Page
        email: string,
        password: string | undefined
    }

    export const fillEmailAndPassword = async ({ websitePage, email, password }: FillEmailAndPassword) => {
        websitePage.getByPlaceholder("Email").fill(email)
        websitePage.getByPlaceholder("password").fill(password || "")
    };