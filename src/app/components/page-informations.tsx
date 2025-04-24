import { Helmet } from "react-helmet-async";

interface TitleProps {
    title: string;
    description: string;
}

export function PageInformations(props: TitleProps) {
    const { title, description } = props;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}
