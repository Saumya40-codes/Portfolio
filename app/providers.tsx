'use client'

import React from 'react'
import { GoogleAnalytics } from "nextjs-google-analytics";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
        <GoogleAnalytics
            gaMeasurementId={process.env.MEASUREMENT_ID}
            trackPageViews
        />
        {children}
        </>
    )
}