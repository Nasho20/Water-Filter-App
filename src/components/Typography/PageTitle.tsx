interface Props {
    title: any;
    size: number
}
/**
 * Shared component to return the page title.
 * @param Type title: the title of the page
 * @returns Page title component .
 */
export default function PageTitle ({title, size}: Props) {
    return(
        <span className={`fw-600 fs-${size}`}>{title}</span>
    )
}