import { GoogleAnalytics } from "nextjs-google-analytics";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
        <GoogleAnalytics trackPageViews />
        {children}
        </>
    );
}