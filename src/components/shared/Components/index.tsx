import "./index.scss";
interface Props {
    children?: React.ReactNode;
    title: string;
    maxWidth?: boolean;
}
export function Component({
    children,
    title,
    maxWidth = true,
    ...rest
}: Props) {
    return (
        <div className={`component ${maxWidth ? "maxWidth" : ""}`} {...rest}>
            <div className="component__title">
                <h5>{title}</h5>
            </div>
            <div className="component__content">
                <div
                    style={{
                        display: "flex",
                        gap: 10,
                        width: "100rem",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
