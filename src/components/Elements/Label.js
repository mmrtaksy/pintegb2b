const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium  text-gray-700 dark:text-gray-300`}
        {...props}>
        {children}
    </label>
)

export default Label
