import Head from 'next/head'
import Footer from '../Items/Footer'

const GuestLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
            <Head>
                <title>Pinteg - B2B</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased min-h-full">
                {children}
            </div>
            
            <Footer />
        </div>
    )
}

export default GuestLayout
