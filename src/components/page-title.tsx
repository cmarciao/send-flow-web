import { Helmet } from "react-helmet-async";

type TitleProps = {
    title: string;
    description: string;
}

export function Title({ title, description }: TitleProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}