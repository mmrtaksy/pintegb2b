const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-slate-800">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-10 bg-white dark:bg-slate-700 shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>

        <div className="w-full mt-6 _copyright text-center text-sm  text-slate-500">
            <span>© 2024 PintegB2B™ Tüm hakları saklıdır.</span>
        </div>
    </div>
)

export default AuthCard
